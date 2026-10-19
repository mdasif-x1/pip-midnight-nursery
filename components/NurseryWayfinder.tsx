"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useSound } from "@/lib/SoundContext";
import styles from "./NurseryWayfinder.module.css";

interface Landmark {
  id: string;
  name: string;
  code: string;
  icon: string;
}

const LANDMARKS: Landmark[] = [
  { id: "dream-gate", name: "Dream Gate", code: "Station I · 00:00", icon: "✦" },
  { id: "meet-pip", name: "Field Journal", code: "Station II · 01:15", icon: "📖" },
  { id: "inventions", name: "Workshop", code: "Station III · 02:30", icon: "⚙" },
  { id: "origin-story", name: "Storybook", code: "Station IV · 03:45", icon: "☾" },
  { id: "dream-room", name: "Dream Room", code: "Station V · 04:30", icon: "✧" },
  { id: "dream-guestbook", name: "Guestbook", code: "Station VI · 05:00", icon: "✉" },
];

export default function NurseryWayfinder() {
  const { playTick } = useSound();
  const [activeLandmark, setActiveLandmark] = useState<string>("dream-gate");
  const isVoyagingRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Listen for coordinated cloud-voyage landmark steps
    const handleVoyageStep = (e: Event) => {
      const customEvent = e as CustomEvent<{ landmarkId?: string }>;
      if (customEvent.detail?.landmarkId) {
        isVoyagingRef.current = true;
        setActiveLandmark(customEvent.detail.landmarkId);
      }
    };

    const handleVoyageComplete = () => {
      // Re-enable normal scroll observer after landing sequence settles
      setTimeout(() => {
        isVoyagingRef.current = false;
      }, 600);
    };

    window.addEventListener("pip-voyage-step", handleVoyageStep);
    window.addEventListener("pip-voyage-land", handleVoyageComplete);
    window.addEventListener("pip-hero-return", handleVoyageComplete);

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (isVoyagingRef.current) return; // Prevent premature override during active flight

          // Find the visible section with highest intersection ratio
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length > 0 && visible[0].target.id) {
            setActiveLandmark(visible[0].target.id);
          }
        },
        {
          rootMargin: "-20% 0px -40% 0px",
          threshold: [0.1, 0.3, 0.6],
        }
      );

      LANDMARKS.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el) observer?.observe(el);
      });
    }

    return () => {
      window.removeEventListener("pip-voyage-step", handleVoyageStep);
      window.removeEventListener("pip-voyage-land", handleVoyageComplete);
      window.removeEventListener("pip-hero-return", handleVoyageComplete);
      observer?.disconnect();
    };
  }, []);

  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      playTick();

      const el = document.getElementById(id);
      if (!el) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      setActiveLandmark(id);
    },
    [playTick]
  );

  return (
    <nav className={styles.wayfinderTrack} aria-label="Sector 7 Nursery Flight Route">
      {/* Delicate Starlight Guide Line */}
      <div className={styles.constellationLine} aria-hidden="true" />

      <ul className={styles.nodesList}>
        {LANDMARKS.map((lm) => {
          const isActive = activeLandmark === lm.id;
          return (
            <li key={lm.id} className={styles.nodeItem}>
              {/* Optional Active Wicker Flight Glider Marker */}
              {isActive && (
                <span className={styles.gliderMarker} aria-hidden="true" title="Pip's Flight Glider">
                  🧺
                </span>
              )}

              <a
                href={`#${lm.id}`}
                className={`${styles.nodeBtn} ${isActive ? styles.nodeActive : ""}`}
                onClick={(e) => handleNavigate(e, lm.id)}
                aria-label={`${lm.name} (${lm.code})`}
                aria-current={isActive ? "location" : undefined}
              >
                <span className={styles.nodeGlyph} aria-hidden="true">
                  {lm.icon}
                </span>

                {/* Accessible Hover Tooltip */}
                <span className={styles.nodeTooltip} aria-hidden="true">
                  <span className={styles.tooltipCoord}>{lm.code}</span>
                  <span>· {lm.name}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

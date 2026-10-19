"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useSound } from "@/lib/SoundContext";
import styles from "./PipCloudVoyage.module.css";

interface TrailSparkle {
  id: number;
  x: number;
  y: number;
  glyph: string;
}

export default function PipCloudVoyage() {
  const { playChimePlink } = useSound();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [speech, setSpeech] = useState<string>("All aboard the dream cloud! ☁️✦");
  const [vesselStyle, setVesselStyle] = useState<React.CSSProperties>({});
  const [trail, setTrail] = useState<TrailSparkle[]>([]);
  const [showLandingBurst, setShowLandingBurst] = useState<boolean>(false);

  const isVoyagingRef = useRef<boolean>(false);
  const rafIdRef = useRef<number | null>(null);
  const sparkIdRef = useRef<number>(0);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  // Ref-tracked burst guard so the RAF loop doesn't depend on React state
  const landingBurstFiredRef = useRef<boolean>(false);
  // Stable ref for playChimePlink so the event listener effect doesn't re-run
  // when SoundContext re-renders (e.g. on mute toggle) and kill an active voyage
  const playChimeRef = useRef(playChimePlink);
  useEffect(() => { playChimeRef.current = playChimePlink; }, [playChimePlink]);

  const cleanup = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
    isVoyagingRef.current = false;
    setIsActive(false);
    setShowLandingBurst(false);
    setTrail([]);

    // Inform hero Pip that flight is complete
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("pip-hero-return"));
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleVoyageStart = () => {
      if (isVoyagingRef.current) return; // Prevent duplicate concurrent flights

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        // Direct non-animated navigation under reduced motion
        const target = document.getElementById("dream-room");
        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        } else {
          window.location.hash = "dream-room";
        }
        return;
      }

      isVoyagingRef.current = true;
      landingBurstFiredRef.current = false;
      setIsActive(true);
      setShowLandingBurst(false);
      setSpeech("All aboard the dream cloud! ☁️✦");

      // Play sweet departure chime chord (C5 -> E5 -> A5)
      playChimeRef.current(523.25);
      const t1 = setTimeout(() => playChimeRef.current(659.25), 140);
      const t2 = setTimeout(() => playChimeRef.current(880.0), 300);
      timeoutsRef.current.push(t1, t2);

      // Tell hero Pip to depart and cloud divider to swell into cloud cover
      window.dispatchEvent(new CustomEvent("pip-hero-depart"));
      window.dispatchEvent(new CustomEvent("pip-gateway-launch", { detail: { targetId: "dream-room" } }));

      // Locate starting coordinates of Pip in the hero section
      const heroPip = document.getElementById("hero-pip-character");
      const heroRect = heroPip
        ? heroPip.getBoundingClientRect()
        : { left: window.innerWidth * 0.5 - 110, top: 180, width: 220, height: 268 };

      const startX = heroRect.left + heroRect.width / 2;
      const startY = heroRect.top + heroRect.height / 2;

      // Locate target Dream Room coordinates
      const dreamRoomEl = document.getElementById("dream-room");
      const initialScrollY = window.scrollY;
      const targetScrollY = dreamRoomEl
        ? dreamRoomEl.getBoundingClientRect().top + window.scrollY - 80
        : initialScrollY + 2400;

      const duration = 2200; // 2.2 seconds flight time
      const startTime = performance.now();
      let lastSparkTime = 0;
      let lastStationStep = "";

      const animateVoyage = (currentTime: number) => {
        const elapsed = Math.max(0, currentTime - startTime);
        const progress = Math.min(1, elapsed / duration);

        // 1. Take-off phase (0% - 18%): Pip gently lifts and cloud swells underneath
        if (progress < 0.18) {
          const t = progress / 0.18;
          const easeOut = Math.sin((t * Math.PI) / 2);
          const currentX = startX;
          const currentY = startY - easeOut * 42;
          const bankAngle = Math.sin(t * Math.PI) * -3;

          setVesselStyle({
            transform: `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) rotate(${bankAngle}deg) scale(${0.85 + 0.15 * easeOut})`,
            opacity: 1,
          });
        }
        // 2. Cloud-sailing flight phase (18% - 82%): Pip sails through nursery sky with curved trajectory & harmonic bobbing
        else if (progress < 0.82) {
          const t = (progress - 0.18) / 0.64;
          // Curved S-path horizontally through the scene
          const midTargetX = window.innerWidth * (0.5 + 0.12 * Math.sin(t * Math.PI * 1.5));
          const currentX = startX + (midTargetX - startX) * t;

          // Cruise altitude in the upper-mid sky corridor with gentle bobbing
          const cruiseY = window.innerHeight * 0.26;
          const bobbing = Math.sin(t * Math.PI * 4.5) * 12;
          const currentY = cruiseY + bobbing;

          // Gentle banking into flight curve
          const bankAngle = Math.cos(t * Math.PI * 4) * 3.5;

          setVesselStyle({
            transform: `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) rotate(${bankAngle.toFixed(2)}deg) scale(1)`,
            opacity: 1,
          });

          // Smoothly pan camera downward to escort Pip's journey through the world
          const scrollEase = 0.5 - 0.5 * Math.cos(t * Math.PI);
          const currentScroll = initialScrollY + (targetScrollY - initialScrollY) * scrollEase;
          window.scrollTo(0, currentScroll);

          // Emit stardust particles along flight path every 80ms
          if (currentTime - lastSparkTime > 80) {
            lastSparkTime = currentTime;
            const glyphs = ["✦", "✧", "⋆", "✨"];
            const randomGlyph = glyphs[Math.floor(Math.random() * glyphs.length)];
            sparkIdRef.current += 1;
            const newSpark: TrailSparkle = {
              id: sparkIdRef.current,
              x: currentX + (Math.random() * 20 - 10),
              y: currentY + 30 + Math.random() * 10,
              glyph: randomGlyph,
            };
            setTrail((prev) => [...prev.slice(-8), newSpark]);
          }

          // Coordinate Wayfinder active landmark along Pip's path
          let currentStation = "dream-gate";
          if (t > 0.12 && t <= 0.38) {
            currentStation = "meet-pip";
            if (lastStationStep !== currentStation) {
              setSpeech("Gliding past the Field Journal... 📖");
            }
          } else if (t > 0.38 && t <= 0.68) {
            currentStation = "inventions";
            if (lastStationStep !== currentStation) {
              setSpeech("Passing over the Invention Workshop... ⚙");
            }
          } else if (t > 0.68 && t <= 0.88) {
            currentStation = "origin-story";
            if (lastStationStep !== currentStation) {
              setSpeech("Soaring over the Storybook gables... ☾");
            }
          } else if (t > 0.88) {
            currentStation = "dream-room";
            if (lastStationStep !== currentStation) {
              setSpeech("Approaching the Dream Room! ✧");
            }
          }

          if (currentStation !== lastStationStep) {
            lastStationStep = currentStation;
            window.dispatchEvent(
              new CustomEvent("pip-voyage-step", { detail: { landmarkId: currentStation } })
            );
          }
        }
        // 3. Destination approach & touchdown landing (82% - 100%)
        else {
          const t = (progress - 0.82) / 0.18;
          const easeOutCubic = 1 - Math.pow(1 - t, 3);

          // Land smoothly at top entrance of the Dream Room diorama
          const landingTargetX = window.innerWidth * 0.5;
          const landingTargetY = window.innerHeight * 0.42;

          const fromX = window.innerWidth * 0.5;
          const fromY = window.innerHeight * 0.26;

          const currentX = fromX + (landingTargetX - fromX) * easeOutCubic;
          const currentY = fromY + (landingTargetY - fromY) * easeOutCubic;
          const settleScale = 1 - 0.1 * easeOutCubic;

          setVesselStyle({
            transform: `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${settleScale.toFixed(3)})`,
            opacity: progress > 0.96 ? (1 - progress) / 0.04 : 1,
          });

          // Ensure camera is locked firmly onto the Dream Room
          window.scrollTo(0, targetScrollY);

          // Trigger landing stardust and Dream Room welcoming pulse at 90%
          if (progress > 0.9 && !landingBurstFiredRef.current) {
            landingBurstFiredRef.current = true;
            setShowLandingBurst(true);
            setSpeech("We've arrived! Welcome to the Dream Room... ✦");
            playChimeRef.current(880);
            window.dispatchEvent(new CustomEvent("pip-voyage-land"));
            window.dispatchEvent(
              new CustomEvent("pip-voyage-step", { detail: { landmarkId: "dream-room" } })
            );
          }
        }

        if (progress < 1) {
          rafIdRef.current = requestAnimationFrame(animateVoyage);
        } else {
          // Flight sequence successfully completed!
          const endTimer = setTimeout(() => {
            window.location.hash = "dream-room";
            cleanup();
          }, 350);
          timeoutsRef.current.push(endTimer);
        }
      };

      rafIdRef.current = requestAnimationFrame(animateVoyage);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVoyagingRef.current) {
        cleanup();
        const target = document.getElementById("dream-room");
        if (target) {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        }
      }
    };

    window.addEventListener("pip-cloud-voyage-start", handleVoyageStart);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pip-cloud-voyage-start", handleVoyageStart);
      window.removeEventListener("keydown", handleKeyDown);
      cleanup();
    };
  // Only depends on cleanup (stable via useCallback([])) — playChimePlink
  // is accessed via ref to prevent SoundContext re-renders from killing the voyage
  }, [cleanup]);

  if (!isActive) return null;

  return (
    <div className={styles.voyageOverlay} aria-hidden="true">
      {/* Parallax Background Sky Clouds */}
      <div className={`${styles.parallaxCloud} ${styles.cloudLayerFar}`} />
      <div className={`${styles.parallaxCloud} ${styles.cloudLayerMid}`} />
      <div className={`${styles.parallaxCloud} ${styles.cloudLayerNear}`} />

      {/* Floating Golden Stardust Wake */}
      <div className={styles.stardustTrail}>
        {trail.map((spark) => (
          <span
            key={spark.id}
            className={styles.trailSpark}
            style={{
              left: `${spark.x}px`,
              top: `${spark.y}px`,
            }}
          >
            {spark.glyph}
          </span>
        ))}
      </div>

      {/* Pip Cloud-Sailing Vessel Container */}
      <div className={styles.vesselWrapper} style={vesselStyle}>
        <div className={styles.vesselInner}>
          {/* In-Flight Bedtime Speech Bubble */}
          <div className={styles.voyageSpeechBubble}>
            <span className={styles.speechStar}>✦</span>
            <p className={styles.speechText}>{speech}</p>
            <div className={styles.speechTail} />
          </div>

          {/* Pip Character Illustration */}
          <div className={styles.pipCharacterWrap}>
            <Image
              src="/assets/pip_avatar_cloud.png"
              alt="Pip sailing on a fluffy dream cloud"
              width={220}
              height={268}
              priority
              className={styles.pipImage}
            />
          </div>

          {/* Underside Depth Shadow */}
          <div className={styles.cloudShadowPuff} />

          {/* Billowing Multi-Lobed Cloud Vessel Underneath Pip */}
          <div className={styles.cloudCradle}>
            <svg
              className={styles.cloudSvg}
              viewBox="0 0 290 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Core Cumulus Gradient */}
                <linearGradient id="cloudGrad" x1="145" y1="0" x2="145" y2="110" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="55%" stopColor="#F5EEFA" />
                  <stop offset="100%" stopColor="#E2D4EC" />
                </linearGradient>

                {/* Starlight Rim Glow Gradient */}
                <linearGradient id="starlightRim" x1="0" y1="0" x2="290" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(255, 236, 179, 0.4)" />
                  <stop offset="50%" stopColor="rgba(255, 245, 210, 0.95)" />
                  <stop offset="100%" stopColor="rgba(255, 236, 179, 0.4)" />
                </linearGradient>
              </defs>

              {/* Main Fluffy Cumulus Base Lobes */}
              <path
                d="M 28 85 C 10 85 0 65 14 50 C 12 32 30 18 48 24 C 62 8 92 6 108 20 C 126 4 164 4 182 20 C 198 6 228 8 242 24 C 260 18 278 32 276 50 C 290 65 280 85 262 85 C 248 104 200 108 145 106 C 90 108 42 104 28 85 Z"
                fill="url(#cloudGrad)"
                stroke="url(#starlightRim)"
                strokeWidth="2.5"
              />

              {/* Front Overlapping Billowing Puffs for Tactile Depth */}
              <ellipse cx="75" cy="74" rx="42" ry="24" fill="#FFFFFF" fillOpacity="0.88" />
              <ellipse cx="145" cy="78" rx="55" ry="26" fill="#FFFFFF" fillOpacity="0.95" />
              <ellipse cx="215" cy="74" rx="42" ry="24" fill="#FFFFFF" fillOpacity="0.88" />

              {/* Gold Starlight Dust Accents on Cloud Crests */}
              <circle cx="95" cy="28" r="2" fill="#E5C378" />
              <circle cx="145" cy="16" r="2.5" fill="#FFEBB3" />
              <circle cx="195" cy="28" r="2" fill="#E5C378" />
              <circle cx="50" cy="52" r="1.5" fill="#FFEBB3" />
              <circle cx="240" cy="52" r="1.5" fill="#FFEBB3" />
            </svg>
          </div>

          {/* Landing Touchdown Starlight Burst */}
          {showLandingBurst && (
            <div className={styles.landingBurst}>
              <span className={styles.burstRay} style={{ "--dx": "0px", "--dy": "-34px" } as React.CSSProperties}>✦</span>
              <span className={styles.burstRay} style={{ "--dx": "38px", "--dy": "-20px" } as React.CSSProperties}>✧</span>
              <span className={styles.burstRay} style={{ "--dx": "-38px", "--dy": "-20px" } as React.CSSProperties}>⋆</span>
              <span className={styles.burstRay} style={{ "--dx": "28px", "--dy": "18px" } as React.CSSProperties}>✦</span>
              <span className={styles.burstRay} style={{ "--dx": "-28px", "--dy": "18px" } as React.CSSProperties}>✧</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

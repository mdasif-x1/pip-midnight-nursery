"use client";

import { useCallback } from "react";
import { useSound } from "@/lib/SoundContext";
import styles from "./HeroGatewayActions.module.css";

interface GatewayAction {
  id: string;
  href: string;
  className: string;
  text: string;
  icon?: string;
  arrow?: string;
}

const ACTIONS: GatewayAction[] = [
  {
    id: "inventions",
    href: "#inventions",
    className: "btn btn-primary",
    text: "Explore Pip's Inventions",
    arrow: "→",
  },
  {
    id: "dream-room",
    href: "#dream-room",
    className: "btn btn-secondary",
    text: "Enter Dream Room",
    icon: "✦",
  },
  {
    id: "meet-pip",
    href: "#meet-pip",
    className: "btn btn-ghost",
    text: "Field Journal 📖",
  },
];

export default function HeroGatewayActions() {
  const { playTick } = useSound();

  const handleGatewayLaunch = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      // Respect user opening in new tab or with modifier keys
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      playTick();

      if (prefersReducedMotion) {
        // Direct instant navigation under reduced motion
        return;
      }

      e.preventDefault();

      // If target is dream-room, launch the full cinematic Pip Cloud-Sailing Voyage!
      if (targetId === "dream-room") {
        if (typeof window !== "undefined") {
          window.dispatchEvent(
            new CustomEvent("pip-cloud-voyage-start", {
              detail: { targetId: "dream-room" },
            })
          );
        }
        return;
      }

      // Otherwise, dispatch standard gateway launch event to animate Pip and environmental clouds
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("pip-gateway-launch", {
            detail: { targetId },
          })
        );
      }

      // Smooth, brief cinematic descent into target landmark (420ms)
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.location.hash = targetId;
        }
      }, 420);
    },
    [playTick]
  );

  return (
    <div className={styles.heroActionsRow} aria-label="Hero Exploration Actions">
      {ACTIONS.map((act) => (
        <a
          key={act.id}
          href={act.href}
          className={`${act.className} ${styles.gatewayBtn}`}
          onClick={(e) => handleGatewayLaunch(e, act.id)}
        >
          {act.icon && <span aria-hidden="true">{act.icon} </span>}
          <span>{act.text}</span>
          {act.arrow && <span aria-hidden="true"> {act.arrow}</span>}
          <span className={styles.btnGlint} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

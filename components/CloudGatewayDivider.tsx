"use client";

import { useState, useEffect } from "react";
import styles from "./CloudGatewayDivider.module.css";

export default function CloudGatewayDivider() {
  const [isDiving, setIsDiving] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timer: NodeJS.Timeout | null = null;
    const handleGatewayLaunch = () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      if (timer) clearTimeout(timer);
      setIsDiving(true);
      timer = setTimeout(() => {
        setIsDiving(false);
      }, 1350);
    };

    window.addEventListener("pip-gateway-launch", handleGatewayLaunch);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("pip-gateway-launch", handleGatewayLaunch);
    };
  }, []);

  return (
    <div
      className={`${styles.cloudDividerWrap} cloud-transition-divider ${
        isDiving ? styles.cloudDiving : ""
      }`}
      aria-hidden="true"
    >
      <svg
        className={`${styles.cloudSvg} cloud-transition-svg`}
        viewBox="0 0 1440 70"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back Misty Lavender/Blue Cloud Layer */}
        <path
          d="M 0 70 L 0 38 Q 140 12 280 34 T 580 18 T 900 36 T 1200 16 T 1440 32 L 1440 70 Z"
          fill="rgba(233, 217, 232, 0.55)"
        />
        {/* Front Warm Parchment Cloud Crests Flowing into Meet Pip */}
        <path
          d="M 0 70 L 0 46 C 160 18 320 54 480 28 C 640 8 800 48 960 24 C 1120 8 1280 44 1440 22 L 1440 70 Z"
          fill="var(--parchment-warm)"
        />

        {/* Central Gateway Portal Pass Notch (Starlight Flight Route Corridor) */}
        <path
          d="M 685 70 Q 720 32 755 70 Z"
          fill="rgba(215, 169, 91, 0.22)"
        />
        <path
          d="M 685 70 Q 720 32 755 70"
          stroke="var(--gold-starlight, #E5C378)"
          strokeWidth="1.8"
          strokeDasharray="3 5"
          opacity="0.9"
        />
        <circle cx="720" cy="44" r="3.5" fill="#FFEAA7" filter="drop-shadow(0 0 6px #E5C378)" />
        <circle cx="704" cy="56" r="2" fill="#E5C378" opacity="0.8" />
        <circle cx="736" cy="56" r="2" fill="#E5C378" opacity="0.8" />
        <text
          x="720"
          y="26"
          textAnchor="middle"
          className={styles.portalLabel}
          opacity="0.92"
        >
          ✦ SECTOR 7 GATEWAY PASS ✦
        </text>
      </svg>
    </div>
  );
}

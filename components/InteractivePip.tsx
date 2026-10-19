"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useSound } from "@/lib/SoundContext";
import { HeroDepartureDock } from "@/components/DreamCorridor";
import styles from "./InteractivePip.module.css";

const BEDTIME_WHISPERS = [
  "Almost asleep... thank you for visiting! ✦",
  "Tuning starlight lullabies for you... ☾",
  "Rest heavy eyes, little dreamer... ✧",
  "The stars are on duty tonight! ⋆",
  "Warm amber hearthlight never fades... ✦",
];

export default function InteractivePip() {
  const { playChimePlink } = useSound();
  const [isReacting, setIsReacting] = useState<boolean>(false);
  const [isGliding, setIsGliding] = useState<boolean>(false);
  const [isDeparted, setIsDeparted] = useState<boolean>(false);
  const [whisper, setWhisper] = useState<string>(BEDTIME_WHISPERS[0]);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const whisperIndexRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Listen for Gateway Passage flight launch event from Hero actions
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleGatewayLaunch = (e: Event) => {
      const customEvent = e as CustomEvent<{ targetId?: string }>;
      const targetId = customEvent.detail?.targetId;

      setIsGliding(true);
      playChimePlink(880);

      if (targetId === "inventions") {
        setWhisper("Gliding to the inventions workshop... ✦");
      } else if (targetId === "dream-room") {
        setWhisper("Setting course for the Dream Room... ☾");
      } else {
        setWhisper("Turning to the Field Journal... 📖");
      }
      setIsReacting(true);

      setTimeout(() => {
        setIsGliding(false);
      }, 1350);

      setTimeout(() => {
        setIsReacting(false);
      }, 3500);
    };

    const handleHeroDepart = () => {
      setIsDeparted(true);
    };

    const handleHeroReturn = () => {
      setIsDeparted(false);
    };

    window.addEventListener("pip-gateway-launch", handleGatewayLaunch);
    window.addEventListener("pip-hero-depart", handleHeroDepart);
    window.addEventListener("pip-hero-return", handleHeroReturn);
    return () => {
      window.removeEventListener("pip-gateway-launch", handleGatewayLaunch);
      window.removeEventListener("pip-hero-depart", handleHeroDepart);
      window.removeEventListener("pip-hero-return", handleHeroReturn);
    };
  }, [playChimePlink]);

  // Subtle interactive 3D pointer-tilt (disabled on touch & reduced motion)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window === "undefined") return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width - 0.5) * 2; // -1 to 1
    const yPct = (y / rect.height - 0.5) * 2; // -1 to 1

    const pitch = -yPct * 4.5; // -4.5 to 4.5 deg
    const yaw = xPct * 5.0; // -5.0 to 5.0 deg

    setTiltStyle({
      transform: `rotateX(${pitch.toFixed(2)}deg) rotateY(${yaw.toFixed(2)}deg)`,
      transition: "transform 0.08s ease-out",
    });

    setGlareStyle({
      opacity: 0.65,
      background: `radial-gradient(circle at ${(xPct * 40 + 50).toFixed(0)}% ${(yPct * 40 + 50).toFixed(0)}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
    });
    setGlareStyle({
      opacity: 0,
      transition: "opacity 0.4s ease",
    });
  }, []);

  const handlePipInteraction = useCallback(() => {
    if (isReacting || isGliding) return; // Prevent rapid-click animation glitching

    setIsReacting(true);

    // Rotate through gentle in-character bedtime whispers
    whisperIndexRef.current = (whisperIndexRef.current + 1) % BEDTIME_WHISPERS.length;
    setWhisper(BEDTIME_WHISPERS[whisperIndexRef.current]);

    // Play sweet starlight chime note (A5 = 880Hz)
    playChimePlink(880);

    timeoutRef.current = setTimeout(() => {
      setIsReacting(false);
    }, 3800);
  }, [isReacting, isGliding, playChimePlink]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePipInteraction();
    }
  };

  return (
    <div className={`character-hero-diorama ${styles.dioramaPerspective}`}>
      {/* Ambient Starlight Glow Halo */}
      <div className="character-ambient-halo" aria-hidden="true" />

      {/* 3D Tilt Wrapper */}
      <div
        className={styles.tiltFrame}
        style={tiltStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Soft Specular Glare */}
        <div className={styles.glareOverlay} style={glareStyle} aria-hidden="true" />

        {/* Interactive Pip Container */}
        <div
          role="button"
          tabIndex={0}
          id="hero-pip-character"
          onClick={handlePipInteraction}
          onKeyDown={handleKeyDown}
          className={`character-interactive-trigger ${isReacting ? "pip-reacting" : ""} ${
            isDeparted ? styles.pipDeparted : ""
          }`}
          aria-label="Say hello to Pip the Skull Baby. Click to see his sleepy bedtime reaction."
          title="Click Pip to say hello!"
        >
          {/* In-Character Bedtime Speech Bubble */}
          {isReacting && (
            <div className="pip-speech-bubble" role="status" aria-live="polite">
              <span className="bubble-star" aria-hidden="true">✦</span>
              <p className="bubble-text">{whisper}</p>
              <div className="bubble-tail" aria-hidden="true" />
            </div>
          )}

          {/* Stardust Burst Particles when Clicked */}
          {isReacting && !isGliding && (
            <div className="pip-stardust-burst" aria-hidden="true">
              <span className="burst-star star-tl">✧</span>
              <span className="burst-star star-tr">✦</span>
              <span className="burst-star star-bl">⋆</span>
              <span className="burst-star star-br">✦</span>
            </div>
          )}

          {/* Starlight Flight Stream Trail during Gateway Launch */}
          {isGliding && (
            <div className={styles.flightTrail} aria-hidden="true">
              <span className={styles.trailSpark}>✦</span>
              <span className={styles.trailSpark} style={{ animationDelay: "0.15s" }}>✧</span>
              <span className={styles.trailSpark} style={{ animationDelay: "0.3s" }}>⋆</span>
            </div>
          )}

          {/* Floating Pip Avatar on Cloud */}
          <div
            className={`character-float ${isReacting ? "float-wiggling" : ""} ${
              isGliding ? styles.pipGliding : ""
            }`}
          >
            <Image
              src="/assets/pip_avatar_cloud.png"
              alt="Pip the friendly Skull Baby floating comfortably on a fluffy dream cloud, wearing a starry nightcap and pink bow, waving hello"
              width={448}
              height={545}
              priority
              className="character-image"
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 448px"
            />
          </div>

          {/* Subtle Interactive Hint Pill */}
          <div className="pip-tap-hint" aria-hidden="true">
            <span className="hint-glyph">✦</span>
            <span className="hint-text">Tap Pip to say hello</span>
          </div>
        </div>
      </div>

      {/* Sector 7 Flight Corridor Departure Dock */}
      <HeroDepartureDock />
    </div>
  );
}

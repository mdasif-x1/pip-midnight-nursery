"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useSound } from "@/lib/SoundContext";

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
  const [whisper, setWhisper] = useState<string>(BEDTIME_WHISPERS[0]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const whisperIndexRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handlePipInteraction = useCallback(() => {
    if (isReacting) return; // Prevent rapid-click animation glitching

    setIsReacting(true);

    // Rotate through gentle in-character bedtime whispers
    whisperIndexRef.current = (whisperIndexRef.current + 1) % BEDTIME_WHISPERS.length;
    setWhisper(BEDTIME_WHISPERS[whisperIndexRef.current]);

    // Play sweet starlight chime note (A5 = 880Hz)
    playChimePlink(880);

    timeoutRef.current = setTimeout(() => {
      setIsReacting(false);
    }, 3800);
  }, [isReacting, playChimePlink]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handlePipInteraction();
    }
  };

  return (
    <div className="character-hero-diorama">
      {/* Ambient Starlight Glow Halo */}
      <div className="character-ambient-halo" aria-hidden="true" />

      {/* Interactive Pip Container */}
      <div
        role="button"
        tabIndex={0}
        onClick={handlePipInteraction}
        onKeyDown={handleKeyDown}
        className={`character-interactive-trigger ${isReacting ? "pip-reacting" : ""}`}
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
        {isReacting && (
          <div className="pip-stardust-burst" aria-hidden="true">
            <span className="burst-star star-tl">✧</span>
            <span className="burst-star star-tr">✦</span>
            <span className="burst-star star-bl">⋆</span>
            <span className="burst-star star-br">✦</span>
          </div>
        )}

        {/* Floating Pip Avatar on Cloud */}
        <div className={`character-float ${isReacting ? "float-wiggling" : ""}`}>
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
  );
}

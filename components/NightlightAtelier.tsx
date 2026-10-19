"use client";

import { useState } from "react";
import Image from "next/image";
import { useSound } from "@/lib/SoundContext";
import visualStyles from "@/styles/dream-visuals.module.css";

type MoodKey = "amber" | "rose" | "moonlit";

interface Mood {
  key: MoodKey;
  label: string;
  tagline: string;
  glowClass: string;
  badgeText: string;
  surroundingsNote: string;
  lightPoolColor: string;
  starColor: string;
  alcoveStroke: string;
}

const MOODS: Mood[] = [
  {
    key: "amber",
    label: "Warm Amber",
    tagline: "Golden candlelight evoking hearth embers and cozy flannel sheets.",
    glowClass: "mood-stage-amber",
    badgeText: "Hearth Amber · 2200K",
    surroundingsNote: "Illumination: Soft amber star-oil flame warming the chamber.",
    lightPoolColor: "rgba(215, 169, 91, 0.3)",
    starColor: "#D7A95B",
    alcoveStroke: "rgba(215, 169, 91, 0.5)",
  },
  {
    key: "rose",
    label: "Sleepy Rose",
    tagline: "A gentle twilight blush soothing tired thoughts into quiet lullabies.",
    glowClass: "mood-stage-rose",
    badgeText: "Velvet Blush · Twilight",
    surroundingsNote: "Illumination: Spun rose-petal dusk light for gentle dreaming.",
    lightPoolColor: "rgba(221, 166, 176, 0.3)",
    starColor: "#DDA6B0",
    alcoveStroke: "rgba(221, 166, 176, 0.5)",
  },
  {
    key: "moonlit",
    label: "Moonlit Blue",
    tagline: "Cool midnight starlight wrapping the nursery in peaceful silence.",
    glowClass: "mood-stage-moonlit",
    badgeText: "Lunar Belfry · 6500K",
    surroundingsNote: "Illumination: Filtered cloud-moon radiance for deep, deep sleep.",
    lightPoolColor: "rgba(155, 187, 212, 0.3)",
    starColor: "#9BBBD4",
    alcoveStroke: "rgba(155, 187, 212, 0.5)",
  },
];

export default function NightlightAtelier() {
  const { playTick } = useSound();
  const [selectedMood, setSelectedMood] = useState<MoodKey>("amber");
  const [glowIntensity, setGlowIntensity] = useState<"soft" | "medium" | "luminous">("medium");

  const current = MOODS.find((m) => m.key === selectedMood) || MOODS[0];

  const intensityMultiplier = glowIntensity === "soft" ? 0.6 : glowIntensity === "luminous" ? 1.4 : 1.0;

  const handleChipKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = (index + 1) % MOODS.length;
      playTick();
      setSelectedMood(MOODS[nextIdx].key);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIdx = (index - 1 + MOODS.length) % MOODS.length;
      playTick();
      setSelectedMood(MOODS[prevIdx].key);
    }
  };

  return (
    <div
      className={`workshop-bay-atelier ${current.glowClass} glow-level-${glowIntensity} ${visualStyles.exhibitCard} ${visualStyles.atelierAmbientContainer}`}
      style={{
        boxShadow: `0 14px 40px ${current.lightPoolColor.replace('0.3', (0.14 * intensityMultiplier).toFixed(2))}, 0 2px 8px rgba(56, 43, 42, 0.06)`,
        borderColor: current.alcoveStroke,
      }}
    >
      {/* 1, 2, 3: Small exhibit badge, elegant title, and clear description */}
      <div className={visualStyles.exhibitHeader}>
        <span className={visualStyles.exhibitBadge}>✦ Exhibit 02 · Bedtime Luminescence</span>
        <h3 className={visualStyles.exhibitTitle}>Nightlight Atelier</h3>
        <p className={visualStyles.exhibitDescription}>
          A crescent dream lantern tuned to cast calming bedtime radiance, adjustable from gentle candle embers to soft dusk blush or peaceful lunar starlight.
        </p>
      </div>

      {/* 4: The existing artwork, framed as the main artifact */}
      <div className={`lighting-chamber-stage ${current.glowClass}-chamber`}>
        {/* Reactive Ambient Light Pool */}
        <div
          className="chamber-light-pool"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${current.lightPoolColor} 0%, transparent ${Math.round(72 * intensityMultiplier)}%)`,
            opacity: intensityMultiplier,
          }}
          aria-hidden="true"
        />

        {/* Architectural Alcove & Celestial Backdrop */}
        <div className="chamber-celestial-backdrop" aria-hidden="true">
          <svg
            className="chamber-svg"
            viewBox="0 0 500 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Bounded Night Window Alcove Interior (Contained night sky only) */}
            <path
              d="M 30 320 L 30 140 C 30 50 150 20 250 20 C 350 20 470 50 470 140 L 470 320 Z"
              fill="rgba(37, 24, 39, 0.45)"
            />

            {/* Illustrated Arched Alcove Framing */}
            <path
              d="M 30 320 L 30 140 C 30 50 150 20 250 20 C 350 20 470 50 470 140 L 470 320"
              stroke={current.alcoveStroke}
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Distant Crescent Moon Line-art */}
            <path
              d="M 90 60 A 24 24 0 0 0 114 84 A 20 20 0 0 1 90 60 Z"
              fill={current.starColor}
              opacity="0.85"
            />

            {/* Delicate Constellation Stars */}
            <text x="80" y="110" fill={current.starColor} fontSize="12" opacity="0.85">✦</text>
            <text x="140" y="45" fill={current.starColor} fontSize="10" opacity="0.65">✧</text>
            <text x="360" y="55" fill={current.starColor} fontSize="14" opacity="0.85">✦</text>
            <text x="415" y="105" fill={current.starColor} fontSize="10" opacity="0.7">✧</text>
            <text x="390" y="160" fill={current.starColor} fontSize="8" opacity="0.55">✦</text>
            <text x="110" y="170" fill={current.starColor} fontSize="9" opacity="0.55">✧</text>

            {/* Windowsill Shelf Line */}
            <line
              x1="20"
              y1="310"
              x2="480"
              y2="310"
              stroke="rgba(119, 56, 77, 0.3)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Official Centerpiece Lantern Artwork */}
        <div className="chamber-artwork-wrapper">
          <Image
            src="/assets/pip_dream_lantern.png"
            alt="Luminous crescent moon lantern giving off gentle ambient bedtime light"
            width={480}
            height={428}
            className="chamber-artwork"
            priority={false}
          />
        </div>

        {/* Windowsill Base Plank */}
        <div className="chamber-windowsill-plank">
          <span className="windowsill-grain">Nursery Bedchamber Sill · Sector 7</span>
        </div>
      </div>

      {/* 5: Interactive controls, grouped into one coherent control area */}
      <div className={visualStyles.exhibitControlsGroup}>
        <span className={visualStyles.controlsSectionLabel}>Select Chamber Atmosphere:</span>
        <div
          className={visualStyles.exhibitMoodGrid}
          role="radiogroup"
          aria-label="Nightlight Atmosphere Moods"
        >
          {MOODS.map((m, idx) => {
            const isSelected = m.key === selectedMood;
            return (
              <button
                key={m.key}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`${visualStyles.moodButton} ${
                  isSelected ? visualStyles.moodButtonActive : ""
                }`}
                onClick={() => {
                  playTick();
                  setSelectedMood(m.key);
                }}
                onKeyDown={(e) => handleChipKeyDown(e, idx)}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: m.starColor,
                    boxShadow: isSelected ? `0 0 8px ${m.starColor}` : "none",
                  }}
                  aria-hidden="true"
                />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>

        {/* Lantern Dimmer Level Switch */}
        <div className={visualStyles.dimmerSwitchRow}>
          <span className={visualStyles.controlsSectionLabel} style={{ margin: 0 }}>Dimmer:</span>
          <div className={visualStyles.dimmerButtons} role="group" aria-label="Lantern Dimmer Level">
            {(["soft", "medium", "luminous"] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                className={`${visualStyles.dimmerButton} ${glowIntensity === lvl ? visualStyles.dimmerButtonActive : ""}`}
                onClick={() => {
                  playTick();
                  setGlowIntensity(lvl);
                }}
                aria-pressed={glowIntensity === lvl}
              >
                <span>{lvl === "soft" ? "Soft (40%)" : lvl === "medium" ? "Bedtime (75%)" : "Luminous (100%)"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Mood Quote / Tagline */}
        <p className={visualStyles.selectedMelodyQuote}>
          &ldquo;{current.tagline}&rdquo;
        </p>

        {/* Active Chamber Status Feedback */}
        <div className={visualStyles.activeFeedbackNote}>
          <strong>Active Chamber:</strong> {current.label} ({current.badgeText}) · {glowIntensity === "soft" ? "Soft Glow (40%)" : glowIntensity === "medium" ? "Bedtime Radiant (75%)" : "Full Starlight (100%)"}
        </div>
      </div>

      {/* 6: Compact, understated technical specimen note at the bottom */}
      <div className={visualStyles.specimenFooter}>
        <strong>Specimen Note:</strong> Handcrafted brass lantern (<code>pip_dream_lantern.png</code>) · 2200K–6500K Ambient Engine · 3 Responsive dimmer levels · Reduced-motion safe
      </div>
    </div>
  );
}

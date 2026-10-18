"use client";

import { useState } from "react";
import Image from "next/image";

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
    lightPoolColor: "rgba(233, 159, 79, 0.22)",
    starColor: "#ddb686ff",
    alcoveStroke: "rgba(121, 103, 86, 0.4)",
  },
  {
    key: "rose",
    label: "Sleepy Rose",
    tagline: "A gentle twilight blush soothing tired thoughts into quiet lullabies.",
    glowClass: "mood-stage-rose",
    badgeText: "Velvet Blush · Twilight",
    surroundingsNote: "Illumination: Spun rose-petal dusk light for gentle dreaming.",
    lightPoolColor: "rgba(217, 167, 166, 0.22)",
    starColor: "#D9A7A6",
    alcoveStroke: "rgba(217, 167, 166, 0.4)",
  },
  {
    key: "moonlit",
    label: "Moonlit Blue",
    tagline: "Cool midnight starlight wrapping the nursery in peaceful silence.",
    glowClass: "mood-stage-moonlit",
    badgeText: "Lunar Belfry · 6500K",
    surroundingsNote: "Illumination: Filtered cloud-moon radiance for deep, deep sleep.",
    lightPoolColor: "rgba(126, 143, 168, 0.22)",
    starColor: "#C4D0E5",
    alcoveStroke: "rgba(126, 143, 168, 0.4)",
  },
];

export default function NightlightAtelier() {
  const [selectedMood, setSelectedMood] = useState<MoodKey>("amber");

  const current = MOODS.find((m) => m.key === selectedMood) || MOODS[0];

  return (
    <div className={`workshop-bay-atelier ${current.glowClass}`}>
      {/* Miniature Lighting Chamber Stage */}
      <div className="bay-visual-stage">
        <div className={`lighting-chamber-stage ${current.glowClass}-chamber`}>
          {/* Reactive Ambient Light Pool */}
          <div
            className="chamber-light-pool"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${current.lightPoolColor} 0%, transparent 72%)`,
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
              {/* Illustrated Arched Alcove Framing */}
              <path
                d="M 30 320 L 30 140 C 30 50 150 20 250 20 C 350 20 470 50 470 140 L 470 320"
                stroke={current.alcoveStroke}
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Distant Crescent Moon Line-art */}
              <path
                d="M 90 60 A 24 24 0 0 0 114 84 A 20 20 0 0 1 90 60 Z"
                fill={current.starColor}
                opacity="0.6"
              />

              {/* Delicate Constellation Stars */}
              <text x="80" y="110" fill={current.starColor} fontSize="12" opacity="0.75">✦</text>
              <text x="140" y="45" fill={current.starColor} fontSize="10" opacity="0.55">✧</text>
              <text x="360" y="55" fill={current.starColor} fontSize="14" opacity="0.75">✦</text>
              <text x="415" y="105" fill={current.starColor} fontSize="10" opacity="0.6">✧</text>
              <text x="390" y="160" fill={current.starColor} fontSize="8" opacity="0.45">✦</text>
              <text x="110" y="170" fill={current.starColor} fontSize="9" opacity="0.45">✧</text>

              {/* Windowsill Shelf Line */}
              <line
                x1="20"
                y1="310"
                x2="480"
                y2="310"
                stroke="rgba(181, 138, 82, 0.45)"
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

        {/* Dedicated Caption Row Below Frame */}
        <div className="bay-stage-caption-row">
          <p className="bay-asset-caption">
            Project B · Official Asset: pip_dream_lantern.png
          </p>
          <div className="lantern-atmosphere-plaque">
            <span className="plaque-dot" style={{ backgroundColor: current.starColor }} />
            <span>{current.badgeText}</span>
          </div>
        </div>
      </div>

      <div className="bay-controls-dossier">
        <div className="bay-header-row">
          <span className="bay-ticket-tag">Project B · Ambient Atmosphere</span>
          <h3 className="bay-title">Nightlight Atelier</h3>
        </div>

        <p className="bay-description">
          An ambient lighting workshop featuring the dream lantern. Choose cozy nightlight
          moods to transform the workbench illumination from warm amber starlight to sleepy rose or cool indigo.
        </p>

        {/* Mood Selection Controls */}
        <div className="mood-selector-group">
          <span className="selector-label">Select Room Lighting Mood:</span>
          <div
            className="mood-chips"
            role="radiogroup"
            aria-label="Nightlight Atmosphere Moods"
          >
            {MOODS.map((m) => {
              const isSelected = m.key === selectedMood;
              return (
                <button
                  key={m.key}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  className={`mood-chip mood-chip-${m.key} ${
                    isSelected ? "mood-chip-active" : ""
                  }`}
                  onClick={() => setSelectedMood(m.key)}
                >
                  <span className="chip-bullet">{isSelected ? "✦" : "·"}</span>
                  <span>{m.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mood-description-box">
            <p className="mood-tagline">&ldquo;{current.tagline}&rdquo;</p>
            <p className="mood-surroundings-note">{current.surroundingsNote}</p>
          </div>
        </div>

        <div className="atelier-status-footer">
          <span className="status-label">Active Chamber Atmosphere:</span>
          <strong className="status-value">{current.label} Luminescence</strong>
        </div>
      </div>
    </div>
  );
}

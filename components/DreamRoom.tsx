"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useSound } from "@/lib/SoundContext";
import styles from "./DreamRoom.module.css";

interface RoomHotspot {
  id: string;
  name: string;
  icon: string;
  title: string;
  description: string;
  lore: string;
}

const HOTSPOTS: RoomHotspot[] = [
  {
    id: "window",
    name: "Moonlit Window",
    icon: "☾",
    title: "The Belfry Observatory Window",
    description: "A wide arched window overlooking the chimney gables and cloud docks of Sector 7.",
    lore: "Pip checks the window every half hour. If a shooting star falls nearby, Pip grabs the wicker delivery basket immediately.",
  },
  {
    id: "lantern",
    name: "Star-Oil Lamp",
    icon: "🕯️",
    title: "Bedtime Hearth Lamp",
    description: "A cozy brass lantern fueled by slow-burning amber star-oil that never produces smoke.",
    lore: "The warm flame keeps the nursery at a snug 68 degrees—ideal for dream cotton fluffing.",
  },
  {
    id: "cloudbed",
    name: "Cloud Hammock",
    icon: "☁️",
    title: "Fluffed Cotton Bed",
    description: "A suspended hammock spun from genuine cumulus fluff, fluffed fresh every evening at dusk.",
    lore: "Pip claims that sleeping on cloud cotton prevents morning bed-head on the nightcap.",
  },
  {
    id: "workbench",
    name: "Dream Drafting Desk",
    icon: "📐",
    title: "Pip's Drafting Table",
    description: "Covered in grid paper, brass calipers, winding keys, and tiny vials of starlight nectar.",
    lore: "Current blueprint on desk: 'Project D: Autonomous Star-Dust Sprinkler for Restless Kittens'.",
  },
];

export default function DreamRoom() {
  const { isMuted, playTick } = useSound();
  const [selectedHotspot, setSelectedHotspot] = useState<string>("window");
  const [windowSkyMode, setWindowSkyMode] = useState<"stars" | "meteors" | "clouds">("stars");
  const [easterEggFound, setEasterEggFound] = useState<boolean>(false);
  const [showingEasterEgg, setShowingEasterEgg] = useState<boolean>(false);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [hasArrived, setHasArrived] = useState<boolean>(false);

  const frameRef = useRef<HTMLDivElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const activeHotspot = HOTSPOTS.find((h) => h.id === selectedHotspot) || HOTSPOTS[0];

  // Listen for Pip's arrival from cloud voyage
  useEffect(() => {
    if (typeof window === "undefined") return;

    let pulseTimer: NodeJS.Timeout | null = null;
    const handleVoyageLand = () => {
      setHasArrived(true);
      if (pulseTimer) clearTimeout(pulseTimer);
      pulseTimer = setTimeout(() => {
        setHasArrived(false);
      }, 2400);
    };

    window.addEventListener("pip-voyage-land", handleVoyageLand);
    return () => {
      if (pulseTimer) clearTimeout(pulseTimer);
      window.removeEventListener("pip-voyage-land", handleVoyageLand);
    };
  }, []);

  // Cleanup audio context on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Subtle interactive 3D perspective tilt on desktop (disabled on touch & reduced motion)
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

    const pitch = -yPct * 3.5; // -3.5 to 3.5 deg
    const yaw = xPct * 4; // -4 to 4 deg

    setTiltStyle({
      transform: `rotateX(${pitch.toFixed(2)}deg) rotateY(${yaw.toFixed(2)}deg)`,
      transition: "transform 0.1s ease-out",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
    });
  }, []);

  const handleSelectHotspot = (id: string) => {
    playTick();
    setSelectedHotspot(id);
    setShowingEasterEgg(false);
  };

  // Play a special chime when the secret Easter egg is unlocked
  const handleEasterEggClick = async () => {
    setEasterEggFound(true);
    setShowingEasterEgg(true);

    if (!isMuted) {
      try {
        let ctx = audioCtxRef.current;
        if (!ctx || ctx.state === "closed") {
          const AudioCtxClass =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          ctx = new AudioCtxClass();
          audioCtxRef.current = ctx;
        }

        if (ctx.state === "suspended") {
          await ctx.resume();
        }

        const master = ctx.createGain();
        master.gain.setValueAtTime(isMuted ? 0 : 0.35, ctx.currentTime);
        master.connect(ctx.destination);

        const now = ctx.currentTime + 0.05;
        const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C5, E5, G5, C6, E6
        notes.forEach((freq, i) => {
          if (!ctx) return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          const noteStart = now + i * 0.14;

          osc.frequency.setValueAtTime(freq, noteStart);
          gain.gain.setValueAtTime(0.0001, noteStart);
          gain.gain.linearRampToValueAtTime(0.3, noteStart + 0.02);
          gain.gain.linearRampToValueAtTime(0.0001, noteStart + 0.6);

          osc.connect(gain);
          gain.connect(master);

          osc.start(noteStart);
          osc.stop(noteStart + 0.65);
        });
      } catch {
        // audio context unavailable
      }
    }
  };

  const cycleWindowSky = () => {
    playTick();
    setWindowSkyMode((prev) => {
      if (prev === "stars") return "meteors";
      if (prev === "meteors") return "clouds";
      return "stars";
    });
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    const total = HOTSPOTS.length + (easterEggFound ? 1 : 0);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = (index + 1) % total;
      if (nextIdx < HOTSPOTS.length) {
        handleSelectHotspot(HOTSPOTS[nextIdx].id);
      } else {
        playTick();
        setShowingEasterEgg(true);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = (index - 1 + total) % total;
      if (prevIdx < HOTSPOTS.length) {
        handleSelectHotspot(HOTSPOTS[prevIdx].id);
      } else {
        playTick();
        setShowingEasterEgg(true);
      }
    }
  };

  return (
    <div className={`dream-room-exhibit ${styles.dioramaContainer}`}>
      {/* Pop-Up Miniature Nursery Shadowbox */}
      <div className="room-stage-container">
        <div
          ref={frameRef}
          className={`${styles.shadowboxFrame} ${hasArrived ? styles.arrivalPulse : ""}`}
          style={tiltStyle}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.shadowboxInner}>
            {/* Environmental Sky Ambient Wash Layer (Tied to Window Sky state) */}
            <div
              className={`${styles.ambientWashLayer} ${
                windowSkyMode === "stars"
                  ? styles.skyModeStars
                  : windowSkyMode === "meteors"
                  ? styles.skyModeMeteors
                  : styles.skyModeClouds
              }`}
              aria-hidden="true"
            />

            {/* Warm Lantern Light Spill (Active when lantern or workbench is inspected) */}
            {(selectedHotspot === "lantern" || selectedHotspot === "workbench") && (
              <div className={styles.lanternSpillLight} aria-hidden="true" />
            )}

            {/* Dimensional Shadowbox Edge Vignette */}
            <div className={styles.roomVignette} aria-hidden="true" />

            {/* Layered Pop-Up Diorama SVG */}
            <svg
              className={`${styles.interactiveSvg} room-interactive-svg`}
              viewBox="0 0 700 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Interactive Dream Room Diorama: Click objects to inspect or find hidden secrets"
            >
              <defs>
                {/* Wallpaper Stripes Pattern */}
                <pattern id="wallpaper-stripes" width="40" height="400" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="20" height="400" fill="#EFE2DC" />
                  <rect x="20" y="0" width="20" height="400" fill="#F4EBE6" />
                  <line x1="20" y1="0" x2="20" y2="400" stroke="rgba(221, 166, 176, 0.22)" strokeWidth="1" />
                </pattern>

                {/* Ambient Wall Wash Gradient */}
                <linearGradient id="wall-gradient" x1="0" y1="0" x2="0" y2="320" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F9F2EE" />
                  <stop offset="60%" stopColor="#F3E9E3" />
                  <stop offset="100%" stopColor="#EADED7" />
                </linearGradient>

                {/* Timber Floorboard Perspective Gradient */}
                <linearGradient id="floor-gradient" x1="0" y1="320" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#DECABB" />
                  <stop offset="100%" stopColor="#C9B39F" />
                </linearGradient>

                {/* Lantern Glow Filter */}
                <radialGradient id="lamp-glow-pool" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.9" />
                  <stop offset="35%" stopColor="#D7A95B" stopOpacity="0.65" />
                  <stop offset="70%" stopColor="#D7A95B" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#D7A95B" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Rear Wall Surface with Storybook Wallpaper Stripes */}
              <rect width="700" height="320" fill="url(#wall-gradient)" />
              <rect width="700" height="320" fill="url(#wallpaper-stripes)" />

              {/* Overhead Walnut Ceiling Timbers & Ambient Cast Shadows */}
              <path d="M 0 0 L 700 0 L 620 45 L 80 45 Z" fill="#5A3E31" stroke="#382B2A" strokeWidth="1.5" />
              <path d="M 0 45 L 700 45 L 700 52 L 0 52 Z" fill="rgba(56, 43, 42, 0.12)" />
              <line x1="200" y1="0" x2="190" y2="45" stroke="rgba(215, 169, 91, 0.4)" strokeWidth="1.5" />
              <line x1="350" y1="0" x2="350" y2="45" stroke="rgba(215, 169, 91, 0.4)" strokeWidth="1.5" />
              <line x1="500" y1="0" x2="510" y2="45" stroke="rgba(215, 169, 91, 0.4)" strokeWidth="1.5" />

              {/* Warm Honey Timber Flooring with Perspective Depth */}
              <polygon points="0,320 700,320 700,400 0,400" fill="url(#floor-gradient)" stroke="#382B2A" strokeWidth="1.5" />
              {/* Floorboard Seams & Grain */}
              <line x1="0" y1="345" x2="700" y2="345" stroke="rgba(89, 64, 50, 0.24)" strokeWidth="1.5" />
              <line x1="0" y1="375" x2="700" y2="375" stroke="rgba(89, 64, 50, 0.24)" strokeWidth="1.5" />
              <line x1="220" y1="320" x2="190" y2="400" stroke="rgba(89, 64, 50, 0.2)" strokeWidth="1" />
              <line x1="480" y1="320" x2="520" y2="400" stroke="rgba(89, 64, 50, 0.2)" strokeWidth="1" />
              <line x1="360" y1="345" x2="340" y2="375" stroke="rgba(89, 64, 50, 0.2)" strokeWidth="1" />

              {/* Brass Floorboard Nail Accents */}
              <circle cx="195" cy="342" r="1.5" fill="#D7A95B" opacity="0.75" />
              <circle cx="475" cy="342" r="1.5" fill="#D7A95B" opacity="0.75" />
              <circle cx="185" cy="372" r="1.5" fill="#D7A95B" opacity="0.75" />
              <circle cx="515" cy="372" r="1.5" fill="#D7A95B" opacity="0.75" />

              {/* =================================================================
                  OBJECT 1: THE MOONLIT NURSERY WINDOW (INTERACTIVE HOTSPOT)
                  ================================================================= */}
              <g
                className={`room-hotspot-group ${styles.hotspotBadge} ${
                  selectedHotspot === "window" && !showingEasterEgg ? `${styles.hotspotSelected} hotspot-selected` : ""
                }`}
                onClick={() => handleSelectHotspot("window")}
                tabIndex={0}
                role="button"
                aria-label="Inspect Moonlit Observatory Window"
                aria-pressed={selectedHotspot === "window" && !showingEasterEgg}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (e.key === " ") e.preventDefault();
                    handleSelectHotspot("window");
                  }
                }}
              >
                {/* Window Outer Arch Molding with Inset Shadow */}
                <rect x="244" y="54" width="212" height="202" rx="106 106 8 8" fill="#422D23" stroke="#251827" strokeWidth="2.5" />
                <rect x="250" y="60" width="200" height="190" rx="100 100 4 4" fill="#140B1A" stroke="#D7A95B" strokeWidth="2" />

                {/* Celestial Sky Views */}
                {windowSkyMode === "stars" && (
                  <g className={styles.windowMoon}>
                    <circle cx="295" cy="115" r="17" fill="#FFF8F1" />
                    <circle cx="303" cy="112" r="15" fill="#140B1A" />
                    <text x="360" y="100" fill="#D7A95B" fontSize="12">✦</text>
                    <text x="390" y="140" fill="#DDA6B0" fontSize="10">✧</text>
                    <text x="290" y="170" fill="#D7A95B" fontSize="11">✦</text>
                    <text x="350" y="180" fill="#FFF8F1" fontSize="9">✧</text>
                    <text x="415" y="105" fill="#F2C879" fontSize="8">⋆</text>
                  </g>
                )}
                {windowSkyMode === "meteors" && (
                  <g>
                    <line x1="380" y1="80" x2="305" y2="155" stroke="#D7A95B" strokeWidth="2.5" strokeDasharray="8 4" />
                    <circle cx="305" cy="155" r="3.5" fill="#FFF8F1" />
                    <line x1="415" y1="115" x2="355" y2="175" stroke="#DDA6B0" strokeWidth="2" strokeDasharray="6 3" />
                    <circle cx="355" cy="175" r="3" fill="#FFF8F1" />
                    <circle cx="285" cy="110" r="12" fill="#F2C879" opacity="0.85" />
                  </g>
                )}
                {windowSkyMode === "clouds" && (
                  <g>
                    <circle cx="305" cy="140" r="30" fill="rgba(233, 217, 232, 0.5)" />
                    <circle cx="350" cy="125" r="36" fill="rgba(255, 248, 241, 0.65)" />
                    <circle cx="395" cy="145" r="28" fill="rgba(221, 166, 176, 0.45)" />
                    <circle cx="330" cy="98" r="10" fill="#D7A95B" opacity="0.9" />
                  </g>
                )}

                {/* Window Mullions & Lintel in Starlight Gold & Walnut */}
                <line x1="350" y1="60" x2="350" y2="250" stroke="#D7A95B" strokeWidth="2.5" />
                <line x1="250" y1="150" x2="450" y2="150" stroke="#D7A95B" strokeWidth="2.5" />
                <rect x="235" y="248" width="230" height="14" rx="3" fill="#543C31" stroke="#382B2A" strokeWidth="1.5" />

                {/* Tactile Hotspot Star Badge */}
                <circle cx="350" cy="150" r="14" fill="#FFF8F1" stroke="#77384D" strokeWidth="2.5" />
                <circle cx="350" cy="150" r="10" fill="#77384D" />
                <text x="350" y="154" fill="#FFF8F1" fontSize="11" textAnchor="middle" fontWeight="bold">✦</text>

                {/* Persistent Readable Hotspot Label */}
                <g className={styles.hotspotLabelPill}>
                  <rect x="296" y="172" width="108" height="20" rx="10" className={styles.hotspotLabelRect} />
                  <text x="350" y="186" textAnchor="middle" className={styles.hotspotLabelText}>☾ Moonlit Window</text>
                </g>
              </g>

              {/* =================================================================
                  OBJECT 2: STAR-OIL LAMP / NIGHTSTAND (INTERACTIVE HOTSPOT)
                  ================================================================= */}
              <g
                className={`room-hotspot-group ${styles.hotspotBadge} ${
                  selectedHotspot === "lantern" && !showingEasterEgg ? `${styles.hotspotSelected} hotspot-selected` : ""
                }`}
                onClick={() => handleSelectHotspot("lantern")}
                tabIndex={0}
                role="button"
                aria-label="Inspect Star-Oil Lantern"
                aria-pressed={selectedHotspot === "lantern" && !showingEasterEgg}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (e.key === " ") e.preventDefault();
                    handleSelectHotspot("lantern");
                  }
                }}
              >
                {/* Nightstand Table in Warm Walnut */}
                <rect x="520" y="260" width="70" height="75" rx="4" fill="#5A3E31" stroke="#382B2A" strokeWidth="1.5" />
                <rect x="515" y="255" width="80" height="8" rx="2" fill="#6E4D3E" stroke="#382B2A" strokeWidth="1" />
                <circle cx="555" cy="295" r="2.5" fill="#D7A95B" />

                {/* Ambient Hearthlight Glow Behind Lamp */}
                <circle cx="555" cy="237" r="42" fill="url(#lamp-glow-pool)" />

                {/* Brass Star-Oil Lantern Housing */}
                <rect x="540" y="220" width="30" height="35" rx="3" fill="#382B2A" stroke="#D7A95B" strokeWidth="2" />
                <path d="M 548 220 L 548 208 Q 555 202 562 208 L 562 220" stroke="#D7A95B" strokeWidth="2" fill="none" />

                {/* Animated Hearth Flame */}
                <g className={styles.lanternFlame}>
                  <circle cx="555" cy="237" r="10" fill="#D7A95B" />
                  <circle cx="555" cy="237" r="5" fill="#FFF9EE" />
                </g>

                {/* Tactile Hotspot Star Badge */}
                <circle cx="555" cy="237" r="13" fill="#FFF8F1" stroke="#77384D" strokeWidth="2.5" />
                <circle cx="555" cy="237" r="9" fill="#77384D" />
                <text x="555" y="241" fill="#FFF8F1" fontSize="10" textAnchor="middle" fontWeight="bold">✦</text>

                {/* Persistent Readable Hotspot Label */}
                <g className={styles.hotspotLabelPill}>
                  <rect x="502" y="258" width="106" height="20" rx="10" className={styles.hotspotLabelRect} />
                  <text x="555" y="272" textAnchor="middle" className={styles.hotspotLabelText}>🕯️ Star-Oil Lamp</text>
                </g>
              </g>

              {/* =================================================================
                  OBJECT 3: SUSPENDED CLOUD HAMMOCK / CRADLE + PIP CAMEO
                  ================================================================= */}
              <g
                className={`room-hotspot-group ${styles.hotspotBadge} ${styles.cradleGroup} ${
                  selectedHotspot === "cloudbed" && !showingEasterEgg ? `${styles.hotspotSelected} hotspot-selected` : ""
                }`}
                onClick={() => handleSelectHotspot("cloudbed")}
                tabIndex={0}
                role="button"
                aria-label="Inspect Cloud Cradle Hammock"
                aria-pressed={selectedHotspot === "cloudbed" && !showingEasterEgg}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (e.key === " ") e.preventDefault();
                    handleSelectHotspot("cloudbed");
                  }
                }}
              >
                {/* Braided Golden Suspension Ropes from Ceiling Beams */}
                <line x1="80" y1="45" x2="108" y2="210" stroke="#D7A95B" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="220" y1="45" x2="192" y2="210" stroke="#D7A95B" strokeWidth="2" strokeDasharray="3 3" />

                {/* Soft Fluffy Cloud Cradle Pod in Nursery Paper */}
                <path
                  d="M 80 230 C 80 188 120 178 150 184 C 180 178 220 188 220 230 C 220 262 180 272 150 270 C 120 272 80 262 80 230 Z"
                  fill="#FFF8F1"
                  stroke="#DDA6B0"
                  strokeWidth="2.5"
                />
                {/* Cozy Sleepy Rose Cotton Fluff Bedding */}
                <ellipse cx="130" cy="225" rx="25" ry="15" fill="#DDA6B0" opacity="0.85" />
                <text x="175" y="235" fill="#D7A95B" fontSize="12">✦</text>

                {/* Official Pip Miniature Sleeping Cameo inside Nursery Cradle */}
                <image
                  href="/assets/pip_avatar_cloud.png"
                  x="98"
                  y="180"
                  width="104"
                  height="126"
                  style={{ pointerEvents: "none", opacity: 0.95 }}
                />

                {/* Tactile Hotspot Star Badge */}
                <circle cx="150" cy="225" r="13" fill="#FFF8F1" stroke="#77384D" strokeWidth="2.5" />
                <circle cx="150" cy="225" r="9" fill="#77384D" />
                <text x="150" y="229" fill="#FFF8F1" fontSize="10" textAnchor="middle" fontWeight="bold">✦</text>

                {/* Persistent Readable Hotspot Label */}
                <g className={styles.hotspotLabelPill}>
                  <rect x="96" y="246" width="108" height="20" rx="10" className={styles.hotspotLabelRect} />
                  <text x="150" y="260" textAnchor="middle" className={styles.hotspotLabelText}>☁️ Cloud Hammock</text>
                </g>
              </g>

              {/* =================================================================
                  OBJECT 4: DRAFTING WORKBENCH TABLE
                  ================================================================= */}
              <g
                className={`room-hotspot-group ${styles.hotspotBadge} ${
                  selectedHotspot === "workbench" && !showingEasterEgg ? `${styles.hotspotSelected} hotspot-selected` : ""
                }`}
                onClick={() => handleSelectHotspot("workbench")}
                tabIndex={0}
                role="button"
                aria-label="Inspect Dream Drafting Workbench"
                aria-pressed={selectedHotspot === "workbench" && !showingEasterEgg}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (e.key === " ") e.preventDefault();
                    handleSelectHotspot("workbench");
                  }
                }}
              >
                {/* Drafting Desk Surface in Warm Pine */}
                <polygon points="50,290 230,290 250,335 30,335" fill="#BA9776" stroke="#382B2A" strokeWidth="1.5" />
                {/* Desk Legs with Shadow Base */}
                <rect x="40" y="335" width="10" height="40" fill="#5A3E31" stroke="#382B2A" strokeWidth="1" />
                <rect x="235" y="335" width="10" height="40" fill="#5A3E31" stroke="#382B2A" strokeWidth="1" />

                {/* Light Parchment Blueprint Paper Sheet */}
                <polygon points="70,298 160,298 175,325 85,325" fill="#FAF4EB" stroke="#77384D" strokeWidth="1.2" />
                <line x1="85" y1="306" x2="150" y2="306" stroke="rgba(119, 56, 77, 0.45)" strokeWidth="1" />
                <line x1="90" y1="314" x2="155" y2="314" stroke="rgba(119, 56, 77, 0.45)" strokeWidth="1" />

                {/* Golden Winding Key & Calipers on Desk */}
                <circle cx="195" cy="312" r="5" stroke="#D7A95B" strokeWidth="1.5" fill="none" />
                <line x1="195" y1="317" x2="195" y2="328" stroke="#D7A95B" strokeWidth="2" />

                {/* Tactile Hotspot Star Badge */}
                <circle cx="130" cy="312" r="13" fill="#FFF8F1" stroke="#77384D" strokeWidth="2.5" />
                <circle cx="130" cy="312" r="9" fill="#77384D" />
                <text x="130" y="316" fill="#FFF8F1" fontSize="10" textAnchor="middle" fontWeight="bold">✦</text>

                {/* Persistent Readable Hotspot Label */}
                <g className={styles.hotspotLabelPill}>
                  <rect x="76" y="334" width="108" height="20" rx="10" className={styles.hotspotLabelRect} />
                  <text x="130" y="348" textAnchor="middle" className={styles.hotspotLabelText}>📐 Drafting Desk</text>
                </g>
              </g>

              {/* =================================================================
                  OBJECT 5: HIDDEN EASTER EGG (LOOSE BRASS FLOOR TILE)
                  ================================================================= */}
              <g
                className={`room-easter-egg-tile ${styles.easterEggTile} ${
                  easterEggFound ? "egg-tile-discovered" : "egg-tile-hidden"
                }`}
                onClick={handleEasterEggClick}
                tabIndex={0}
                role="button"
                aria-label={
                  easterEggFound
                    ? "Secret Starlight Stash (Discovered - Click to inspect)"
                    : "A curiously loose wooden floorboard with a tiny brass star"
                }
                aria-pressed={showingEasterEgg}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    if (e.key === " ") e.preventDefault();
                    handleEasterEggClick();
                  }
                }}
              >
                <rect
                  x="330"
                  y="352"
                  width="48"
                  height="22"
                  rx="3"
                  fill={easterEggFound ? "#D7A95B" : "#BFAF9D"}
                  stroke="#77384D"
                  strokeWidth={easterEggFound ? "2" : "1.2"}
                  strokeDasharray={easterEggFound ? "none" : "2 2"}
                />
                <text
                  x="354"
                  y="367"
                  fill={easterEggFound ? "#382B2A" : "#77384D"}
                  fontSize="12"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  ✦
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Room Instruction Bar */}
        <div className="room-toolbar-strip">
          <span className="room-tip">
            ✦ Click the glowing star markers <strong>✦</strong> to inspect nursery gadgets · Keep an eye out for curious details!
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={cycleWindowSky}
            aria-label="Cycle Night Window Sky Atmosphere"
          >
            <span>Window Sky: {windowSkyMode.toUpperCase()} ↺</span>
          </button>
        </div>
      </div>

      {/* Inspection Dossier Card */}
      <div className="room-inspection-dossier" aria-live="polite">
        {showingEasterEgg ? (
          <div
            id="room-easter-egg-panel"
            role="tabpanel"
            aria-labelledby="hotspot-tab-secret"
            className={`easter-egg-banner-card certificate-card ${styles.secretCharterBanner}`}
          >
            <div className="certificate-border-ornament" aria-hidden="true">
              <span>✦</span>
              <span className="ornament-line" />
              <span>☾ · DIPLOMA OF THE BELFRY · ☽</span>
              <span className="ornament-line" />
              <span>✦</span>
            </div>

            <div className="egg-badge-header">
              <span className="egg-star-icon">✦</span>
              <strong className="egg-title">Honorary Junior Dream Engineer (Easter Egg Discovered!)</strong>
              <span className="egg-star-icon">✦</span>
            </div>

            <p className="egg-message">
              &ldquo;You found my secret floorboard! Under this loose timber rests the very first spark
              that spun into the Midnight Nursery. When a dream gets tough, I hold this jar up to my eye sockets.
              By order of Cloud Sector 7, you are hereby granted full nursery exploration clearance!&rdquo;
            </p>

            <div className="certificate-credentials-grid">
              <div className="credential-item">
                <span className="cred-label">Nursery Rank:</span>
                <strong className="cred-val">Honorary Engineer · Level 7</strong>
              </div>
              <div className="credential-item">
                <span className="cred-label">Secret Badge:</span>
                <strong className="cred-val">#001 Star Stash</strong>
              </div>
              <div className="credential-item">
                <span className="cred-label">Canon Guardrail:</span>
                <strong className="cred-val">100% Gentle · 0% Scary</strong>
              </div>
            </div>

            <div className="certificate-seal-row">
              <div className="certificate-wax-seal" aria-hidden="true">
                <span>✦</span>
                <span className="seal-text">NURSERY SEAL</span>
              </div>
              <span className="certificate-signer">Signed: <em>Pip (with a tiny bone pen)</em></span>
            </div>

            <button
              type="button"
              className="btn btn-secondary btn-sm"
              style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
              onClick={() => setShowingEasterEgg(false)}
            >
              <span>← Return to Prop Inspection</span>
            </button>
          </div>
        ) : (
          <div
            id={`room-hotspot-panel-${activeHotspot.id}`}
            role="tabpanel"
            aria-labelledby={`hotspot-tab-${activeHotspot.id}`}
            className="inspection-content-box"
          >
            {easterEggFound && (
              <div className={styles.secretJarBadgeContrast}>
                <span>✦ Secret Star Jar Unlocked (Floorboard active)</span>
              </div>
            )}
            <div className="inspection-header">
              <span className="inspection-tag">Nursery Prop #{activeHotspot.id.toUpperCase()}</span>
              <h4 className="inspection-title">
                {activeHotspot.icon} {activeHotspot.title}
              </h4>
            </div>
            <p className="inspection-desc">{activeHotspot.description}</p>
            <div className="inspection-lore-pill">
              <strong>Pip&apos;s Field Note:</strong> {activeHotspot.lore}
            </div>
          </div>
        )}

        {/* Hotspot Quick-Tabs for Keyboard Navigation */}
        <div className="hotspot-tabs-row" role="tablist" aria-label="Nursery Hotspots">
          {HOTSPOTS.map((h, idx) => {
            const isSelected = h.id === selectedHotspot && !showingEasterEgg;
            return (
              <button
                key={h.id}
                id={`hotspot-tab-${h.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`room-hotspot-panel-${h.id}`}
                className={`hotspot-tab-pill ${isSelected ? "hotspot-tab-active" : ""}`}
                onClick={() => handleSelectHotspot(h.id)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
              >
                <span>{h.icon}</span>
                <span>{h.name}</span>
              </button>
            );
          })}
          {easterEggFound && (
            <button
              id="hotspot-tab-secret"
              type="button"
              role="tab"
              aria-selected={showingEasterEgg}
              aria-controls="room-easter-egg-panel"
              className={`hotspot-tab-pill ${showingEasterEgg ? "hotspot-tab-active" : ""}`}
              onClick={() => setShowingEasterEgg(true)}
              onKeyDown={(e) => handleTabKeyDown(e, HOTSPOTS.length)}
            >
              <span>✦</span>
              <span>Secret Star Jar</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

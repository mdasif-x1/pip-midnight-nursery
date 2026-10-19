"use client";

import { useState, useRef, useEffect } from "react";
import { useSound } from "@/lib/SoundContext";

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

  const audioCtxRef = useRef<AudioContext | null>(null);

  const activeHotspot = HOTSPOTS.find((h) => h.id === selectedHotspot) || HOTSPOTS[0];

  // Cleanup audio context on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
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
    <div className="dream-room-exhibit">
      {/* Diorama Framing */}
      <div className="room-stage-container">
        <div className="room-diorama-frame">
          <svg
            className="room-interactive-svg"
            viewBox="0 0 700 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Interactive Dream Room Diorama: Click objects to inspect or find hidden secrets"
          >
            {/* Soft Warm Pastel Nursery Room Wall */}
            <rect width="700" height="400" fill="#F4EBE6" />

            {/* Subtle Vertical Storybook Wallpaper Stripes */}
            <defs>
              <pattern id="wallpaper-stripes" width="40" height="400" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="20" height="400" fill="#EFE2DC" />
                <rect x="20" y="0" width="20" height="400" fill="#F4EBE6" />
                <line x1="20" y1="0" x2="20" y2="400" stroke="rgba(221, 166, 176, 0.18)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="700" height="320" fill="url(#wallpaper-stripes)" />

            {/* Warm Chestnut Ceiling Timbers */}
            <path d="M 0 0 L 700 0 L 620 45 L 80 45 Z" fill="#6A4D3E" stroke="#382B2A" strokeWidth="1.5" />
            <line x1="200" y1="0" x2="190" y2="45" stroke="rgba(215, 169, 91, 0.4)" strokeWidth="1.5" />
            <line x1="350" y1="0" x2="350" y2="45" stroke="rgba(215, 169, 91, 0.4)" strokeWidth="1.5" />
            <line x1="500" y1="0" x2="510" y2="45" stroke="rgba(215, 169, 91, 0.4)" strokeWidth="1.5" />

            {/* Warm Honey Timber Flooring */}
            <polygon points="0,320 700,320 700,400 0,400" fill="#D6C2AB" stroke="#382B2A" strokeWidth="1.5" />
            <line x1="0" y1="345" x2="700" y2="345" stroke="rgba(89, 64, 50, 0.22)" strokeWidth="1" />
            <line x1="0" y1="375" x2="700" y2="375" stroke="rgba(89, 64, 50, 0.22)" strokeWidth="1" />
            <line x1="220" y1="320" x2="190" y2="400" stroke="rgba(89, 64, 50, 0.18)" strokeWidth="1" />
            <line x1="480" y1="320" x2="520" y2="400" stroke="rgba(89, 64, 50, 0.18)" strokeWidth="1" />

            {/* =================================================================
                OBJECT 1: THE MOONLIT NURSERY WINDOW (INTERACTIVE HOTSPOT)
                ================================================================= */}
            <g
              className={`room-hotspot-group ${selectedHotspot === "window" && !showingEasterEgg ? "hotspot-selected" : ""}`}
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
              {/* Window Frame Casing in Warm Walnut */}
              <rect x="246" y="56" width="208" height="198" rx="104 104 6 6" fill="#543C31" stroke="#382B2A" strokeWidth="2" />
              <rect x="250" y="60" width="200" height="190" rx="100 100 4 4" fill="#1C1224" stroke="#D7A95B" strokeWidth="2" />

              {/* Sky Background based on windowSkyMode (Contained in window) */}
              {windowSkyMode === "stars" && (
                <>
                  <circle cx="295" cy="115" r="16" fill="#FFF8F1" />
                  <circle cx="302" cy="112" r="14" fill="#1C1224" />
                  <text x="360" y="100" fill="#D7A95B" fontSize="12">✦</text>
                  <text x="390" y="140" fill="#DDA6B0" fontSize="10">✧</text>
                  <text x="290" y="170" fill="#D7A95B" fontSize="11">✦</text>
                  <text x="350" y="180" fill="#FFF8F1" fontSize="9">✧</text>
                </>
              )}
              {windowSkyMode === "meteors" && (
                <>
                  <line x1="380" y1="80" x2="310" y2="150" stroke="#D7A95B" strokeWidth="2.5" strokeDasharray="8 4" />
                  <circle cx="308" cy="152" r="3.5" fill="#FFF8F1" />
                  <line x1="410" y1="120" x2="360" y2="170" stroke="#DDA6B0" strokeWidth="2" strokeDasharray="6 3" />
                  <circle cx="358" cy="172" r="3" fill="#FFF8F1" />
                </>
              )}
              {windowSkyMode === "clouds" && (
                <>
                  <circle cx="310" cy="140" r="28" fill="rgba(233, 217, 232, 0.45)" />
                  <circle cx="350" cy="130" r="34" fill="rgba(255, 248, 241, 0.55)" />
                  <circle cx="390" cy="145" r="26" fill="rgba(221, 166, 176, 0.4)" />
                </>
              )}

              {/* Window Crossbars in Gold/Timber */}
              <line x1="350" y1="60" x2="350" y2="250" stroke="#D7A95B" strokeWidth="2.5" />
              <line x1="250" y1="150" x2="450" y2="150" stroke="#D7A95B" strokeWidth="2.5" />
              <rect x="235" y="248" width="230" height="14" rx="2" fill="#543C31" stroke="#382B2A" strokeWidth="1.5" />

              {/* Organic Glowing Star Hotspot Badge */}
              <circle cx="350" cy="150" r="14" fill="#FFF8F1" stroke="#77384D" strokeWidth="2" />
              <circle cx="350" cy="150" r="10" fill="#77384D" />
              <text x="350" y="154" fill="#FFF8F1" fontSize="11" textAnchor="middle" fontWeight="bold">✦</text>
            </g>

            {/* =================================================================
                OBJECT 2: STAR-OIL LAMP / NIGHTSTAND (INTERACTIVE HOTSPOT)
                ================================================================= */}
            <g
              className={`room-hotspot-group ${selectedHotspot === "lantern" && !showingEasterEgg ? "hotspot-selected" : ""}`}
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
              {/* Stand Table in Warm Chestnut */}
              <rect x="520" y="260" width="70" height="75" rx="3" fill="#6A4D3E" stroke="#382B2A" strokeWidth="1.5" />
              <rect x="515" y="255" width="80" height="8" rx="2" fill="#7D5C4B" stroke="#382B2A" strokeWidth="1" />

              {/* Brass Lantern on Table */}
              <rect x="540" y="220" width="30" height="35" rx="3" fill="#382B2A" stroke="#D7A95B" strokeWidth="2" />
              <circle cx="555" cy="237" r="10" fill="#D7A95B" />
              <circle cx="555" cy="237" r="20" fill="rgba(215, 169, 91, 0.4)" filter="blur(6px)" />
              <path d="M 548 220 L 548 210 Q 555 205 562 210 L 562 220" stroke="#D7A95B" strokeWidth="2" fill="none" />

              {/* Organic Glowing Star Hotspot Badge */}
              <circle cx="555" cy="237" r="12" fill="#FFF8F1" stroke="#77384D" strokeWidth="2" />
              <circle cx="555" cy="237" r="8" fill="#77384D" />
              <text x="555" y="241" fill="#FFF8F1" fontSize="10" textAnchor="middle" fontWeight="bold">✦</text>
            </g>

            {/* =================================================================
                OBJECT 3: SUSPENDED CLOUD HAMMOCK / CRADLE
                ================================================================= */}
            <g
              className={`room-hotspot-group ${selectedHotspot === "cloudbed" && !showingEasterEgg ? "hotspot-selected" : ""}`}
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
              {/* Braided Golden Suspension Ropes */}
              <line x1="80" y1="45" x2="110" y2="210" stroke="#D7A95B" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="220" y1="45" x2="190" y2="210" stroke="#D7A95B" strokeWidth="2" strokeDasharray="3 3" />

              {/* Cloud Bed Cotton Pod in Soft Whimsical Cream */}
              <path
                d="M 80 230 C 80 190 120 180 150 185 C 180 180 220 190 220 230 C 220 260 180 270 150 268 C 120 270 80 260 80 230 Z"
                fill="#FFF8F1"
                stroke="#DDA6B0"
                strokeWidth="2"
              />
              {/* Inner Sleepy Rose Fluff Pillow */}
              <ellipse cx="130" cy="225" rx="25" ry="15" fill="#DDA6B0" opacity="0.8" />
              <text x="175" y="235" fill="#D7A95B" fontSize="12">✦</text>

              {/* Organic Glowing Star Hotspot Badge */}
              <circle cx="150" cy="225" r="12" fill="#FFF8F1" stroke="#77384D" strokeWidth="2" />
              <circle cx="150" cy="225" r="8" fill="#77384D" />
              <text x="150" y="229" fill="#FFF8F1" fontSize="10" textAnchor="middle" fontWeight="bold">✦</text>
            </g>

            {/* =================================================================
                OBJECT 4: DRAFTING WORKBENCH TABLE
                ================================================================= */}
            <g
              className={`room-hotspot-group ${selectedHotspot === "workbench" && !showingEasterEgg ? "hotspot-selected" : ""}`}
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
              {/* Desk Surface in Warm Pine */}
              <polygon points="50,290 230,290 250,335 30,335" fill="#C5A482" stroke="#382B2A" strokeWidth="1.5" />
              {/* Desk Legs */}
              <rect x="40" y="335" width="10" height="40" fill="#6A4D3E" stroke="#382B2A" strokeWidth="1" />
              <rect x="235" y="335" width="10" height="40" fill="#6A4D3E" stroke="#382B2A" strokeWidth="1" />

              {/* Light Parchment Blueprint Paper Sheet */}
              <polygon points="70,298 160,298 175,325 85,325" fill="#FAF4EB" stroke="#77384D" strokeWidth="1.2" />
              <line x1="85" y1="306" x2="150" y2="306" stroke="rgba(119, 56, 77, 0.4)" strokeWidth="1" />
              <line x1="90" y1="314" x2="155" y2="314" stroke="rgba(119, 56, 77, 0.4)" strokeWidth="1" />

              {/* Brass Calipers / Golden Key */}
              <circle cx="195" cy="312" r="5" stroke="#D7A95B" strokeWidth="1.5" fill="none" />
              <line x1="195" y1="317" x2="195" y2="328" stroke="#D7A95B" strokeWidth="2" />

              {/* Organic Glowing Star Hotspot Badge */}
              <circle cx="130" cy="312" r="12" fill="#FFF8F1" stroke="#77384D" strokeWidth="2" />
              <circle cx="130" cy="312" r="8" fill="#77384D" />
              <text x="130" y="316" fill="#FFF8F1" fontSize="10" textAnchor="middle" fontWeight="bold">✦</text>
            </g>

            {/* =================================================================
                OBJECT 5: HIDDEN EASTER EGG (LOOSE BRASS FLOOR TILE)
                ================================================================= */}
            <g
              className={`room-easter-egg-tile ${easterEggFound ? "egg-tile-discovered" : "egg-tile-hidden"}`}
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
                rx="2"
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
            className="easter-egg-banner-card certificate-card"
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
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "var(--radius-xs)",
                  backgroundColor: "rgba(181, 138, 82, 0.15)",
                  border: "1px dashed var(--antique-gold)",
                  fontSize: "0.725rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--antique-gold-light)",
                  marginBottom: "0.25rem",
                }}
              >
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

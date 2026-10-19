"use client";

import { useState } from "react";
import { useSound } from "@/lib/SoundContext";

interface Waypoint {
  id: string;
  name: string;
  coordinates: string;
  cargo: string;
  dispatchNote: string;
}

const WAYPOINTS: Waypoint[] = [
  {
    id: "cloud7",
    name: "Cloud Sector 7 (Dock)",
    coordinates: "Coords: FL-07 · Alt 4,200ft",
    cargo: "Batch #404: 12 Fluffed Cloud Puffs + Amber Nightlight",
    dispatchNote:
      "Pip fluffs each cloud bundle twice before strapping them to the wicker flight basket. All chimes tuned.",
  },
  {
    id: "rooftop",
    name: "Rooftop Window #12",
    coordinates: "Coords: BL-12 · Chimney Gables",
    cargo: "Bread-Scented Dream + Lavender Star",
    dispatchNote:
      "Delivered quietly onto the windowsill for the baker's sleepy kits. Left a warm amber feather as proof of delivery.",
  },
  {
    id: "moongarden",
    name: "Moon Garden Tower",
    coordinates: "Coords: MG-01 · Lunar Belfry",
    cargo: "Silver Moss Dream + Starlight Chime",
    dispatchNote:
      "Tucked under the sleeping moon owl's wing. The garden is quiet; crickets humming at 40 BPM.",
  },
];

export default function DreamDelivery() {
  const { playTick } = useSound();
  const [selectedId, setSelectedId] = useState<string>("cloud7");

  const active = WAYPOINTS.find((w) => w.id === selectedId) || WAYPOINTS[0];

  const activeCoords =
    selectedId === "cloud7"
      ? { x: 50, y: 140 }
      : selectedId === "rooftop"
      ? { x: 250, y: 80 }
      : { x: 360, y: 60 };

  const handleSelectWaypoint = (id: string) => {
    playTick();
    setSelectedId(id);
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = (index + 1) % WAYPOINTS.length;
      handleSelectWaypoint(WAYPOINTS[nextIdx].id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = (index - 1 + WAYPOINTS.length) % WAYPOINTS.length;
      handleSelectWaypoint(WAYPOINTS[prevIdx].id);
    }
  };

  return (
    <div className="workshop-bay-delivery">
      <div className="delivery-map-panel">
        <div className="map-blueprint-frame">
          <svg
            className="blueprint-svg"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="region"
            aria-label="Interactive Dream Delivery Route Map: Fairy-tale village rooftops and flight path"
          >
            <defs>
              <linearGradient id="fairytale-sky" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22182B" />
                <stop offset="60%" stopColor="#372A45" />
                <stop offset="100%" stopColor="#53425F" />
              </linearGradient>
            </defs>

            {/* Bounded Fairytale Twilight Night Sky */}
            <rect width="400" height="200" fill="url(#fairytale-sky)" />

            {/* Delicate Constellations & Distant Stars */}
            <text x="35" y="30" fill="#D7A95B" fontSize="9" opacity="0.75">✦</text>
            <text x="110" y="45" fill="#E9D9E8" fontSize="8" opacity="0.6">✧</text>
            <text x="180" y="25" fill="#D7A95B" fontSize="11" opacity="0.8">✦</text>
            <text x="290" y="35" fill="#DDA6B0" fontSize="9" opacity="0.7">✧</text>
            <text x="375" y="22" fill="#D7A95B" fontSize="10" opacity="0.85">✦</text>
            <text x="330" y="55" fill="#E9D9E8" fontSize="8" opacity="0.5">✧</text>

            {/* Distant Layered Clouds */}
            <path
              d="M 10 110 C 30 95 60 95 80 110 C 100 90 140 90 160 110 C 180 95 210 95 230 110 L 230 140 L 10 140 Z"
              fill="rgba(233, 217, 232, 0.15)"
            />
            <path
              d="M 210 90 C 230 75 260 75 280 90 C 300 70 340 70 360 90 C 380 75 400 80 410 95 L 410 130 L 210 130 Z"
              fill="rgba(198, 217, 232, 0.18)"
            />

            {/* Village Back Layer: Distant Gables */}
            <path
              d="M 0 200 L 0 170 L 30 152 L 60 170 L 95 145 L 130 170 L 180 138 L 225 170 L 270 142 L 315 170 L 365 135 L 400 160 L 400 200 Z"
              fill="#261E2E"
            />

            {/* Village Front Layer: Pastel Rooftops in Mist Blue and Dusky Plum */}
            <path
              d="M 0 200 L 0 182 L 35 160 L 70 182 L 120 150 L 165 182 L 210 154 L 250 175 L 290 148 L 340 180 L 390 150 L 400 158 L 400 200 Z"
              fill="#42344D"
            />

            {/* Whimsical Chimneys & Sleepy Smoke Curls */}
            <rect x="138" y="152" width="10" height="24" fill="#5F3B4A" />
            <rect x="265" y="156" width="9" height="22" fill="#5F3B4A" />
            <rect x="355" y="142" width="10" height="20" fill="#5F3B4A" />
            <path d="M 143 152 Q 135 135 145 125 T 153 108" stroke="rgba(233, 217, 232, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
            <path d="M 269 156 Q 277 140 271 130 T 277 114" stroke="rgba(233, 217, 232, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />

            {/* Cozy Glowing Attic Windows */}
            <rect x="25" y="172" width="8" height="10" rx="1" fill="#F2C879" opacity="0.85" />
            <rect x="180" y="165" width="8" height="10" rx="1" fill="#F2C879" opacity="0.75" />
            <rect x="305" y="160" width="8" height="10" rx="1" fill="#F2C879" opacity="0.85" />

            {/* Flight Route Dotted Golden Path */}
            <path
              d="M 50 140 C 110 50, 180 170, 250 80 S 330 150, 360 60"
              stroke="#D7A95B"
              strokeWidth="2.5"
              strokeDasharray="5 5"
            />

            {/* Active Flight Basket Glider Indicator */}
            <g
              className="basket-flight-glider"
              style={{
                transform: `translate(${activeCoords.x}px, ${activeCoords.y}px)`,
                transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              aria-hidden="true"
            >
              <circle r="16" fill="rgba(215, 169, 91, 0.3)" filter="blur(4px)" />
              <circle r="11" fill="#FFF8F1" stroke="#77384D" strokeWidth="2" />
              <text y="4" fill="#77384D" fontSize="10" textAnchor="middle" fontWeight="bold">🧺</text>
            </g>

            {/* Waypoint 1: Cloud Sector 7 */}
            <g
              className={`waypoint-node ${
                selectedId === "cloud7" ? "waypoint-active" : ""
              }`}
              onClick={() => handleSelectWaypoint("cloud7")}
              tabIndex={0}
              role="button"
              aria-label="Waypoint 1: Cloud Sector 7 Dock"
              aria-pressed={selectedId === "cloud7"}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  if (e.key === " ") e.preventDefault();
                  handleSelectWaypoint("cloud7");
                }
              }}
            >
              <circle
                cx="50"
                cy="140"
                r={selectedId === "cloud7" ? "11" : "8"}
                fill="#77384D"
                stroke="#FFF8F1"
                strokeWidth="2"
              />
              <text x="50" y="166" fill="#FFF8F1" fontSize="10" textAnchor="middle" fontWeight="bold">
                Sector 7
              </text>
            </g>

            {/* Waypoint 2: Rooftop Window 12 */}
            <g
              className={`waypoint-node ${
                selectedId === "rooftop" ? "waypoint-active" : ""
              }`}
              onClick={() => handleSelectWaypoint("rooftop")}
              tabIndex={0}
              role="button"
              aria-label="Waypoint 2: Rooftop Window 12"
              aria-pressed={selectedId === "rooftop"}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  if (e.key === " ") e.preventDefault();
                  handleSelectWaypoint("rooftop");
                }
              }}
            >
              <circle
                cx="250"
                cy="80"
                r={selectedId === "rooftop" ? "11" : "8"}
                fill="#DDA6B0"
                stroke="#382B2A"
                strokeWidth="2"
              />
              <text x="250" y="60" fill="#FFF8F1" fontSize="10" textAnchor="middle" fontWeight="bold">
                Rooftop #12
              </text>
            </g>

            {/* Waypoint 3: Moon Garden */}
            <g
              className={`waypoint-node ${
                selectedId === "moongarden" ? "waypoint-active" : ""
              }`}
              onClick={() => handleSelectWaypoint("moongarden")}
              tabIndex={0}
              role="button"
              aria-label="Waypoint 3: Moon Garden Tower"
              aria-pressed={selectedId === "moongarden"}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  if (e.key === " ") e.preventDefault();
                  handleSelectWaypoint("moongarden");
                }
              }}
            >
              <circle
                cx="360"
                cy="60"
                r={selectedId === "moongarden" ? "11" : "8"}
                fill="#D7A95B"
                stroke="#FFF8F1"
                strokeWidth="2"
              />
              <text x="360" y="42" fill="#FFF8F1" fontSize="10" textAnchor="middle" fontWeight="bold">
                Moon Garden
              </text>
            </g>
          </svg>
        </div>
        <div className="bay-stage-caption-row">
          <p className="bay-asset-caption">
            Project C · Click waypoint nodes on map or selector buttons below
          </p>
          <div className="delivery-odometer-tag" aria-label="Official Nursery Ledger">
            <span className="odometer-label">Official Nursery Ledger:</span>
            <strong className="odometer-val">1,204 Parcels Cleared (Sector 7 Registry)</strong>
          </div>
        </div>
      </div>

      <div className="delivery-dossier-panel">
        <div className="bay-header-row">
          <span className="bay-ticket-tag">Project C · Midnight Airmail</span>
          <h3 className="bay-title">Dream Delivery Docket</h3>
        </div>

        <p className="bay-description">
          Some dreams need a little help getting home. Pip packs custom slumber parcels into the
          wicker flight basket and glides across the sleepy chimney tops of Sector 7.
        </p>

        {/* Waypoint Selector Buttons */}
        <div className="waypoint-tabs" role="tablist" aria-label="Route Waypoints">
          {WAYPOINTS.map((w, idx) => {
            const isSelected = w.id === selectedId;
            return (
              <button
                key={w.id}
                id={`waypoint-tab-${w.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`waypoint-panel-${w.id}`}
                className={`waypoint-tab-btn ${
                  isSelected ? "waypoint-tab-active" : ""
                }`}
                onClick={() => handleSelectWaypoint(w.id)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
              >
                <span>{isSelected ? "✦" : "·"}</span>
                <span>{w.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Waypoint Dispatch Information */}
        <div
          id={`waypoint-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`waypoint-tab-${active.id}`}
          className="dispatch-docket-card"
        >
          <div className="docket-header-line">
            <span className="docket-coords">{active.coordinates}</span>
            <span className="docket-status">Status: Route Cleared</span>
          </div>

          <div className="docket-cargo-line">
            <span className="docket-label">Cargo Manifest:</span>
            <span className="docket-val">{active.cargo}</span>
          </div>

          <p className="docket-note">
            <strong>Pip&apos;s Flight Note:</strong> &ldquo;{active.dispatchNote}&rdquo;
          </p>

          <div className="docket-footer-strip">
            <span className="docket-stamp">✦ MIDNIGHT AIRMAIL · VERIFIED ✦</span>
            <span className="docket-signature">Courier: Pip (Junior Dream Engineer)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

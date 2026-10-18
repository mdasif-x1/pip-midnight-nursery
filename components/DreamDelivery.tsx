"use client";

import { useState } from "react";

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
  const [selectedId, setSelectedId] = useState<string>("cloud7");

  const active = WAYPOINTS.find((w) => w.id === selectedId) || WAYPOINTS[0];

  return (
    <div className="workshop-bay-delivery">
      <div className="delivery-map-panel">
        <div className="map-blueprint-frame">
          <svg
            className="blueprint-svg"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Interactive Dream Delivery Route Blueprint"
          >
            {/* Grid Coordinates Background */}
            <defs>
              <pattern
                id="blueprint-grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(246, 235, 221, 0.06)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="400" height="200" fill="url(#blueprint-grid)" />

            {/* Flight Route Path */}
            <path
              d="M 50 140 C 110 50, 180 170, 250 80 S 330 150, 360 60"
              stroke="#B58A52"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Waypoint 1: Cloud Sector 7 */}
            <g
              className={`waypoint-node ${
                selectedId === "cloud7" ? "waypoint-active" : ""
              }`}
              onClick={() => setSelectedId("cloud7")}
              tabIndex={0}
              role="button"
              aria-label="Waypoint 1: Cloud Sector 7"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedId("cloud7");
              }}
            >
              <circle
                cx="50"
                cy="140"
                r={selectedId === "cloud7" ? "10" : "7"}
                fill="#984B60"
                stroke="#F6EBDD"
                strokeWidth="1.5"
              />
              <text x="50" y="165" fill="#F6EBDD" fontSize="10" textAnchor="middle">
                Sector 7
              </text>
            </g>

            {/* Waypoint 2: Rooftop Window 12 */}
            <g
              className={`waypoint-node ${
                selectedId === "rooftop" ? "waypoint-active" : ""
              }`}
              onClick={() => setSelectedId("rooftop")}
              tabIndex={0}
              role="button"
              aria-label="Waypoint 2: Rooftop Window 12"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedId("rooftop");
              }}
            >
              <circle
                cx="250"
                cy="80"
                r={selectedId === "rooftop" ? "10" : "7"}
                fill="#D9A7A6"
                stroke="#382B2A"
                strokeWidth="1.5"
              />
              <text x="250" y="60" fill="#F6EBDD" fontSize="10" textAnchor="middle">
                Rooftop #12
              </text>
            </g>

            {/* Waypoint 3: Moon Garden */}
            <g
              className={`waypoint-node ${
                selectedId === "moongarden" ? "waypoint-active" : ""
              }`}
              onClick={() => setSelectedId("moongarden")}
              tabIndex={0}
              role="button"
              aria-label="Waypoint 3: Moon Garden Tower"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedId("moongarden");
              }}
            >
              <circle
                cx="360"
                cy="60"
                r={selectedId === "moongarden" ? "10" : "7"}
                fill="#B58A52"
                stroke="#F6EBDD"
                strokeWidth="1.5"
              />
              <text x="360" y="42" fill="#F6EBDD" fontSize="10" textAnchor="middle">
                Moon Garden
              </text>
            </g>
          </svg>
        </div>
        <p className="bay-asset-caption">
          Project C · Click waypoint nodes on map or selector buttons below
        </p>
      </div>

      <div className="delivery-dossier-panel">
        <div className="bay-header-row">
          <span className="bay-ticket-tag">Project C · Flight Route</span>
          <h3 className="bay-title">Dream Delivery Docket</h3>
        </div>

        {/* Waypoint Selector Buttons */}
        <div className="waypoint-tabs" role="tablist" aria-label="Route Waypoints">
          {WAYPOINTS.map((w) => {
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
                onClick={() => setSelectedId(w.id)}
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
        </div>
      </div>
    </div>
  );
}

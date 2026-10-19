"use client";

import styles from "./DreamCorridor.module.css";

interface StationBeaconProps {
  code: string;
  name: string;
  icon?: string;
  className?: string;
}

export function StationBeacon({ code, name, icon = "✦", className = "" }: StationBeaconProps) {
  return (
    <div className={`${styles.stationBeacon} ${className}`} aria-label={`${name} (${code})`}>
      <span className={styles.beaconStar} aria-hidden="true">{icon}</span>
      <span className={styles.beaconCoord}>{code}</span>
      <span>· {name}</span>
    </div>
  );
}

/**
 * HeroDepartureDock:
 * Positioned directly underneath Pip's diorama in the Dream Gate, establishing
 * that Pip is poised at the departure runway of the Sector 7 flight corridor.
 */
export function HeroDepartureDock() {
  return (
    <div className={styles.heroRunwayDock} aria-hidden="true">
      <div className={styles.runwayMotesLine}>
        <span>✦</span>
        <span>·</span>
        <span>·</span>
        <span>↓</span>
        <span>·</span>
        <span>·</span>
        <span>✦</span>
      </div>
      <div className={styles.runwayPill}>
        <span>✦ Sector 7 Runway · Flight Path Active</span>
      </div>
    </div>
  );
}

/**
 * CentralFlightSpine:
 * The persistent organic starlight path flowing down the central spine of the world.
 */
export function CentralFlightSpine() {
  return (
    <div className={styles.corridorTrack} aria-hidden="true">
      {/* Blurred Luminous Dream Mist Bed */}
      <div className={styles.mistRibbon} />

      {/* Meandering Starlight Constellation Guide */}
      <svg
        className={styles.pathSvg}
        viewBox="0 0 60 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 30 0 Q 42 250 20 500 T 36 750 T 30 1000"
          className={styles.constellationStroke}
        />
        {/* Subtle Starlight Waypoint Nodes */}
        <circle cx="30" cy="50" r="3.5" className={styles.starlightNode} />
        <circle cx="26" cy="280" r="2.5" className={styles.starlightNode} />
        <circle cx="20" cy="500" r="3" className={styles.starlightNode} />
        <circle cx="34" cy="740" r="2.5" className={styles.starlightNode} />
        <circle cx="30" cy="960" r="3.5" className={styles.starlightNode} />
      </svg>
    </div>
  );
}

/**
 * ThresholdReceiver:
 * Placed at the entrance of lower sections (e.g. Field Journal) where the path
 * physically emerges from the cloud cover above.
 */
export function ThresholdReceiver({
  stationCode = "Station II · 01:15",
  stationName = "Field Journal",
}: {
  stationCode?: string;
  stationName?: string;
}) {
  return (
    <div className={styles.thresholdSeam} aria-hidden="true">
      <div className={styles.thresholdLine} />
      <StationBeacon code={stationCode} name={stationName} icon="📖" />
    </div>
  );
}

/**
 * WorkshopFlightCorridor:
 * Central Starlight Flight Corridor running down between Nightlight Atelier (left)
 * and Lullaby Lab (right), maintaining the persistent Sector 7 starlight route.
 */
export function WorkshopFlightCorridor() {
  return (
    <div className={styles.workshopCenterCorridor} aria-hidden="true">
      <div className={styles.workshopCorridorPill}>
        <span className={styles.beaconStar}>✦</span>
        <span className={styles.workshopCorridorCoord}>Station III · 02:30</span>
        <span>· Corridor Axis</span>
      </div>
      <div className={styles.corridorDescentLine}>
        <svg
          className={styles.workshopPathSvg}
          viewBox="0 0 40 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 20 0 L 20 400"
            className={styles.constellationStroke}
          />
          <circle cx="20" cy="50" r="3.5" className={styles.starlightNode} />
          <circle cx="20" cy="150" r="2.5" className={styles.starlightNode} />
          <circle cx="20" cy="250" r="3" className={styles.starlightNode} />
          <circle cx="20" cy="350" r="3.5" className={styles.starlightNode} />
        </svg>
      </div>
      <div className={styles.corridorDescentMotes}>
        <span>·</span>
        <span>↓</span>
        <span>·</span>
      </div>
    </div>
  );
}

/**
 * DeliveryDockingReceiver:
 * Positioned right above Dream Delivery, visually docking the central corridor
 * into the Sector 7 flight route map.
 */
export function DeliveryDockingReceiver() {
  return (
    <div className={styles.deliveryDockingSeam} aria-hidden="true">
      <div className={styles.dockingRing}>
        <span>✦</span>
      </div>
      <div className={styles.dockingTextPill}>
        <span>✦ Flight Corridor Docking Bay · Sector 7 Blueprint</span>
      </div>
    </div>
  );
}

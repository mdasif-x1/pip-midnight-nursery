"use client";

import { useSound } from "@/lib/SoundContext";

export default function SoundToggle() {
  const { isMuted, toggleMute } = useSound();

  return (
    <button
      type="button"
      onClick={toggleMute}
      className={`header-sound-btn ${isMuted ? "sound-btn-muted" : "sound-btn-active"}`}
      aria-label={isMuted ? "Enable nursery lullaby chimes" : "Mute nursery lullaby chimes"}
      aria-pressed={!isMuted}
      title={isMuted ? "Chimes: Quiet (Click to enable sound)" : "Chimes: Resonant (Click for quiet mode)"}
    >
      <span className="sound-icon-indicator" aria-hidden="true">
        {isMuted ? "☾" : "♬"}
      </span>
      <span className="sound-text-label">
        <span className="sound-text-prefix">Chimes: </span>
        <span className="sound-text-state">{isMuted ? "Quiet" : "On"}</span>
      </span>
      <span
        className={`sound-status-dot ${isMuted ? "dot-muted" : "dot-live"}`}
        aria-hidden="true"
      />
    </button>
  );
}

"use client";

import { useSound } from "@/lib/SoundContext";

export default function SoundToggle() {
  const { isMuted, toggleMute } = useSound();

  return (
    <button
      type="button"
      onClick={toggleMute}
      className={`header-sound-btn ${isMuted ? "sound-btn-muted" : "sound-btn-active"}`}
      aria-label={isMuted ? "Unmute nursery sound effects" : "Mute nursery sound effects"}
      aria-pressed={!isMuted}
      title={isMuted ? "Sound: Muted (Click to enable)" : "Sound: Enabled (Click to mute)"}
    >
      <span className="sound-icon-indicator" aria-hidden="true">
        {isMuted ? "🔇" : "🔔"}
      </span>
      <span className="sound-text-label">
        <span className="sound-text-prefix">Sound: </span>
        <span className="sound-text-state">{isMuted ? "Off" : "On"}</span>
      </span>
      <span
        className={`sound-status-dot ${isMuted ? "dot-muted" : "dot-live"}`}
        aria-hidden="true"
      />
    </button>
  );
}

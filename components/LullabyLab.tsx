"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { useSound } from "@/lib/SoundContext";

interface MelodyNote {
  note: string;
  freq: number;
  duration: number;
}

interface Melody {
  id: string;
  name: string;
  tagline: string;
  description: string;
  notes: MelodyNote[];
}

const MELODIES: Melody[] = [
  {
    id: "starlight",
    name: "Starlight Chime",
    tagline: "Dreamy Flow",
    description: "A gentle descending celestial lullaby for resting heavy eyes.",
    notes: [
      { note: "E5", freq: 659.25, duration: 0.4 },
      { note: "G5", freq: 783.99, duration: 0.4 },
      { note: "A5", freq: 880.0, duration: 0.4 },
      { note: "C6", freq: 1046.5, duration: 0.6 },
      { note: "A5", freq: 880.0, duration: 0.4 },
      { note: "G5", freq: 783.99, duration: 0.4 },
      { note: "E5", freq: 659.25, duration: 0.5 },
      { note: "D5", freq: 587.33, duration: 0.4 },
      { note: "E5", freq: 659.25, duration: 0.4 },
      { note: "G5", freq: 783.99, duration: 0.4 },
      { note: "D5", freq: 587.33, duration: 0.5 },
      { note: "C5", freq: 523.25, duration: 0.7 },
    ],
  },
  {
    id: "slumber",
    name: "Velvet Slumber",
    tagline: "Starry Night",
    description: "Slow, reassuring cradle chimes evoking warm flannel blankets.",
    notes: [
      { note: "G5", freq: 783.99, duration: 0.45 },
      { note: "E5", freq: 659.25, duration: 0.45 },
      { note: "D5", freq: 587.33, duration: 0.45 },
      { note: "C5", freq: 523.25, duration: 0.6 },
      { note: "D5", freq: 587.33, duration: 0.45 },
      { note: "E5", freq: 659.25, duration: 0.45 },
      { note: "G5", freq: 783.99, duration: 0.5 },
      { note: "A5", freq: 880.0, duration: 0.5 },
      { note: "G5", freq: 783.99, duration: 0.45 },
      { note: "E5", freq: 659.25, duration: 0.45 },
      { note: "C5", freq: 523.25, duration: 0.7 },
    ],
  },
  {
    id: "waltz",
    name: "Cloud Waltz",
    tagline: "Cloud Drift",
    description: "A whimsical music-box chime played when floating across rooftops.",
    notes: [
      { note: "C5", freq: 523.25, duration: 0.4 },
      { note: "E5", freq: 659.25, duration: 0.4 },
      { note: "G5", freq: 783.99, duration: 0.5 },
      { note: "C6", freq: 1046.5, duration: 0.5 },
      { note: "A5", freq: 880.0, duration: 0.4 },
      { note: "G5", freq: 783.99, duration: 0.4 },
      { note: "E5", freq: 659.25, duration: 0.4 },
      { note: "D5", freq: 587.33, duration: 0.4 },
      { note: "C5", freq: 523.25, duration: 0.4 },
      { note: "D5", freq: 587.33, duration: 0.4 },
      { note: "C5", freq: 523.25, duration: 0.7 },
    ],
  },
];

export default function LullabyLab() {
  const { isMuted, playTick } = useSound();
  const [selectedMelodyId, setSelectedMelodyId] = useState<string>("starlight");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [activeFreq, setActiveFreq] = useState<number | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Reactively respond to global mute changes during playback
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        if (ctx.state !== "closed") {
          masterGainRef.current.gain.cancelScheduledValues(ctx.currentTime);
          masterGainRef.current.gain.setValueAtTime(
            isMuted ? 0 : 1,
            ctx.currentTime
          );
        }
      } catch {
        // ignore
      }
    }
  }, [isMuted]);

  const stopLullaby = useCallback(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    masterGainRef.current = null;
    setIsPlaying(false);
    setActiveNote(null);
    setActiveFreq(null);
  }, []);

  useEffect(() => {
    return () => {
      stopLullaby();
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [stopLullaby]);

  const playMusicBoxChime = (
    ctx: AudioContext,
    masterGain: GainNode,
    freq: number,
    startTime: number,
    duration: number
  ) => {
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, startTime);

    osc2.type = "sine";
    osc2.frequency.setValueAtTime(freq * 2.76, startTime);

    // Smooth bell-like envelope with positive start to prevent Web Audio zero-start silence
    gain1.gain.setValueAtTime(0.0001, startTime);
    gain1.gain.linearRampToValueAtTime(0.35, startTime + 0.02);
    gain1.gain.linearRampToValueAtTime(0.0001, startTime + duration * 2.2);

    gain2.gain.setValueAtTime(0.0001, startTime);
    gain2.gain.linearRampToValueAtTime(0.12, startTime + 0.015);
    gain2.gain.linearRampToValueAtTime(0.0001, startTime + duration * 0.8);

    osc1.connect(gain1);
    gain1.connect(masterGain);

    osc2.connect(gain2);
    gain2.connect(masterGain);

    osc1.start(startTime);
    osc2.start(startTime);

    osc1.stop(startTime + duration * 2.3);
    osc2.stop(startTime + duration * 1.0);
  };

  const handleTogglePlay = async () => {
    playTick();
    if (isPlaying) {
      stopLullaby();
      return;
    }

    try {
      let ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "closed") {
        const AudioCtxClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        ctx = new AudioCtxClass();
        audioCtxRef.current = ctx;
      }

      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      // Ensure master gain is freshly connected and reflects current isMuted state
      const master = ctx.createGain();
      master.gain.setValueAtTime(isMuted ? 0 : 1, ctx.currentTime);
      master.connect(ctx.destination);
      masterGainRef.current = master;

      setIsPlaying(true);

      const currentMelody =
        MELODIES.find((m) => m.id === selectedMelodyId) || MELODIES[0];
      // Give 100ms buffer so audio hardware clock is fully active before first note
      let currentTime = ctx.currentTime + 0.1;
      let delayMs = 100;

      currentMelody.notes.forEach((n, idx) => {
        playMusicBoxChime(ctx, master, n.freq, currentTime, n.duration);

        const noteTimer = setTimeout(() => {
          setActiveNote(n.note);
          setActiveFreq(Math.round(n.freq));
        }, delayMs);
        timeoutsRef.current.push(noteTimer);

        currentTime += n.duration;
        delayMs += n.duration * 1000;

        if (idx === currentMelody.notes.length - 1) {
          const endTimer = setTimeout(() => {
            setIsPlaying(false);
            setActiveNote(null);
            setActiveFreq(null);
          }, delayMs + 500);
          timeoutsRef.current.push(endTimer);
        }
      });
    } catch {
      setIsPlaying(false);
      setActiveNote(null);
      setActiveFreq(null);
    }
  };

  const currentMelody =
    MELODIES.find((m) => m.id === selectedMelodyId) || MELODIES[0];

  const handleMelodyKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = (index + 1) % MELODIES.length;
      playTick();
      if (isPlaying) stopLullaby();
      setSelectedMelodyId(MELODIES[nextIdx].id);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIdx = (index - 1 + MELODIES.length) % MELODIES.length;
      playTick();
      if (isPlaying) stopLullaby();
      setSelectedMelodyId(MELODIES[prevIdx].id);
    }
  };

  return (
    <div className="workshop-bay-lab">
      {/* Illustrated Music Workbench Stage */}
      <div className="bay-visual-stage">
        <div className="workbench-stage-frame">
          {/* Subtle warm light pool behind music box */}
          <div className="workbench-light-pool" aria-hidden="true" />

          {/* Background Sheet Music / Staff Linework */}
          <div className="workbench-staff-backdrop" aria-hidden="true">
            <svg
              className="staff-svg"
              viewBox="0 0 500 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Musical Staff 5 lines */}
              <line x1="20" y1="30" x2="480" y2="30" stroke="rgba(119, 56, 77, 0.14)" strokeWidth="1" />
              <line x1="20" y1="45" x2="480" y2="45" stroke="rgba(119, 56, 77, 0.14)" strokeWidth="1" />
              <line x1="20" y1="60" x2="480" y2="60" stroke="rgba(119, 56, 77, 0.14)" strokeWidth="1" />
              <line x1="20" y1="75" x2="480" y2="75" stroke="rgba(119, 56, 77, 0.14)" strokeWidth="1" />
              <line x1="20" y1="90" x2="480" y2="90" stroke="rgba(119, 56, 77, 0.14)" strokeWidth="1" />

              {/* Decorative Clef & Notes */}
              <text x="35" y="80" fill="rgba(119, 56, 77, 0.32)" fontSize="48" fontFamily="Georgia, serif">𝄞</text>
              <text x="110" y="58" fill="rgba(221, 166, 176, 0.6)" fontSize="20" fontFamily="Georgia, serif">♩</text>
              <text x="170" y="44" fill="rgba(215, 169, 91, 0.55)" fontSize="20" fontFamily="Georgia, serif">♪</text>
              <text x="370" y="58" fill="rgba(221, 166, 176, 0.6)" fontSize="20" fontFamily="Georgia, serif">♫</text>
              <text x="430" y="44" fill="rgba(215, 169, 91, 0.55)" fontSize="20" fontFamily="Georgia, serif">♬</text>
            </svg>
          </div>

          {/* Top Workbench Tuning Bar */}
          <div className="workbench-top-bar">
            <span className="workbench-tuning-mark">✦ Key: C Pentatonic</span>
            <div className={`chime-state-pill ${isPlaying ? "chime-state-active" : ""}`} aria-live="polite">
              <span className="chime-dot" />
              <span>{isPlaying ? `Chiming: ${activeNote} (${activeFreq} Hz)` : "Idle · Ready"}</span>
            </div>
          </div>

          {/* Official Centerpiece Artwork */}
          <div className="workbench-artwork-wrapper">
            <Image
              src="/assets/pip_lullaby_box.png"
              alt="Handcrafted wooden music box with golden winding key and floating star chimes"
              width={480}
              height={433}
              className={`workbench-artwork ${isPlaying ? "artwork-playing" : ""}`}
              priority={false}
            />

            {/* Floating Musical Notes when Playing */}
            {isPlaying && (
              <div className="music-box-floating-notes" aria-hidden="true">
                <span className="floating-note note-1">{activeNote || "♩"}</span>
                <span className="floating-note note-2">✦</span>
                <span className="floating-note note-3">♪</span>
                <span className="floating-note note-4">✧</span>
              </div>
            )}
          </div>

          {/* Mechanical Winding Status Pill */}
          <div className={`music-box-crank-indicator ${isPlaying ? "crank-active" : ""}`} aria-hidden="true">
            <span className="crank-key">⚙</span>
            <span className="crank-label">{isPlaying ? "Brass Spring Unwinding..." : "Spring Wound · Ready"}</span>
          </div>

          {/* Bottom Oscillating Soundwave Ribbon */}
          <div className="workbench-bottom-ribbon" aria-hidden="true">
            <svg
              className={`soundwave-svg ${isPlaying ? "soundwave-playing" : ""}`}
              viewBox="0 0 400 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10 16 Q 40 16 70 16 T 130 16 T 190 16 T 250 16 T 310 16 T 370 16 T 390 16"
                className="wave-base-line"
                stroke="rgba(119, 56, 77, 0.2)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {isPlaying && (
                <path
                  d="M 10 16 Q 40 4 70 28 T 130 6 T 190 26 T 250 8 T 310 24 T 370 10 T 390 16"
                  className="wave-active-line"
                  stroke="var(--berry-dusky)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </div>
        </div>

        {/* Dedicated Caption Row Below Frame */}
        <div className="bay-stage-caption-row">
          <p className="bay-asset-caption">
            Project A · Official Asset: pip_lullaby_box.png
          </p>
          <span className="bay-spec-label">Web Audio Pentatonic Synth · Non-Autoplay</span>
        </div>
      </div>

      <div className="bay-controls-dossier">
        <div className="bay-header-row">
          <span className="bay-ticket-tag">Project A · Audio Synthesis</span>
          <h3 className="bay-title">Lullaby Lab</h3>
        </div>

        <p className="bay-description">
          A little music for the almost-asleep. Powered by the native Web Audio API, Pip&apos;s music-box
          hand-cranks restorative sleep melodies and gentle pentatonic lullabies on demand.
        </p>

        {/* Melody Selector Chips */}
        <div className="melody-selector-group">
          <span className="selector-label">Choose Melody:</span>
          <div className="melody-chips" role="radiogroup" aria-label="Lullaby Melodies">
            {MELODIES.map((m, idx) => {
              const isSelected = m.id === selectedMelodyId;
              return (
                <button
                  key={m.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  className={`melody-chip ${isSelected ? "melody-chip-active" : ""}`}
                  onClick={() => {
                    playTick();
                    if (isPlaying) stopLullaby();
                    setSelectedMelodyId(m.id);
                  }}
                  onKeyDown={(e) => handleMelodyKeyDown(e, idx)}
                >
                  <span className="melody-chip-num">
                    Cylinder {["I", "II", "III"][idx] || idx + 1} · {["120 BPM", "92 BPM", "108 BPM"][idx] || "Pentatonic"}
                  </span>
                  <strong className="melody-chip-name">{m.name}</strong>
                  <span className="melody-chip-tagline">{m.tagline}</span>
                </button>
              );
            })}
          </div>
          <p className="melody-note-summary">{currentMelody.description}</p>
        </div>

        {/* Main Action Play / Stop Control */}
        <div className="bay-action-row">
          <button
            type="button"
            className={`btn ${isPlaying ? "btn-secondary" : "btn-primary"}`}
            onClick={handleTogglePlay}
            aria-label={isPlaying ? "Stop Music Box" : `Crank and play ${currentMelody.name}`}
          >
            <span aria-hidden="true">{isPlaying ? "■" : "▶"}</span>
            <span>{isPlaying ? "Stop Music Box" : `Crank & Play ${currentMelody.name} ✦`}</span>
          </button>

          <span className="playback-status-note">
            {isMuted
              ? "Chimes Muted via Header Sound Switch"
              : isPlaying
              ? "Chamber resonant..."
              : "Ready to crank (No autoplay)"}
          </span>
        </div>
      </div>
    </div>
  );
}

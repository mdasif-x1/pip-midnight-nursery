"use client";

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  setMuted: (muted: boolean) => void;
  playTick: () => void;
  playChimePlink: (freq?: number) => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: false,
  toggleMute: () => {},
  setMuted: () => {},
  playTick: () => {},
  playChimePlink: () => {},
});

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastSoundTimeRef = useRef<number>(0);

  // Initialize from localStorage if present
  useEffect(() => {
    try {
      const stored = localStorage.getItem("pip_nursery_sound_muted");
      if (stored !== null) {
        setIsMuted(stored === "true");
      }
    } catch {
      // localStorage unavailable (SSR/private mode)
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const getAudioContext = useCallback((): AudioContext | null => {
    if (typeof window === "undefined") return null;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return null;
      if (!audioCtxRef.current || audioCtxRef.current.state === "closed") {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume().catch(() => {});
      }
      return audioCtxRef.current;
    } catch {
      return null;
    }
  }, []);

  // Soft, restrained 22ms wooden music-box UI tick for deliberate interactions
  const playTick = useCallback(() => {
    if (isMuted) return;
    const now = performance.now();
    if (now - lastSoundTimeRef.current < 50) return; // throttle rapid bursts
    lastSoundTimeRef.current = now;

    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const startTime = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Delicate high-frequency music-box tine tap
      osc.type = "sine";
      osc.frequency.setValueAtTime(1174.66, startTime); // D6
      osc.frequency.exponentialRampToValueAtTime(587.33, startTime + 0.022); // D5

      gain.gain.setValueAtTime(0.045, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.022);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.025);
    } catch {
      // audio error safely caught
    }
  }, [isMuted, getAudioContext]);

  // Gentle starlight chime note for special interactions
  const playChimePlink = useCallback((freq = 880) => {
    if (isMuted) return;
    const now = performance.now();
    if (now - lastSoundTimeRef.current < 80) return;
    lastSoundTimeRef.current = now;

    const ctx = getAudioContext();
    if (!ctx) return;

    try {
      const startTime = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.07, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.36);
    } catch {
      // audio error safely caught
    }
  }, [isMuted, getAudioContext]);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("pip_nursery_sound_muted", String(next));
      } catch {
        // ignore
      }

      // If user is unmuting, play a gentle ascending 2-note chime to confirm
      if (!next) {
        setTimeout(() => {
          const ctx = getAudioContext();
          if (!ctx) return;
          try {
            const t = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(659.25, t); // E5
            osc.frequency.setValueAtTime(783.99, t + 0.12); // G5
            gain.gain.setValueAtTime(0.05, t);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(t);
            osc.stop(t + 0.33);
          } catch {
            // ignore
          }
        }, 15);
      }

      return next;
    });
  };

  const setMuted = (muted: boolean) => {
    setIsMuted(muted);
    try {
      localStorage.setItem("pip_nursery_sound_muted", String(muted));
    } catch {
      // ignore
    }
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, setMuted, playTick, playChimePlink }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  setMuted: (muted: boolean) => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: false,
  toggleMute: () => {},
  setMuted: () => {},
});

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = useState<boolean>(false);

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

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("pip_nursery_sound_muted", String(next));
      } catch {
        // ignore
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
    <SoundContext.Provider value={{ isMuted, toggleMute, setMuted }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}

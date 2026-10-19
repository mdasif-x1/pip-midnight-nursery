"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroStardust.module.css";

interface StardustMote {
  x: number;
  y: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  speedY: number;
  driftX: number;
  phase: number;
  color: string;
}

const PALETTE = [
  "255, 249, 238", // Starlight cream
  "242, 200, 121", // Starlight gold light
  "215, 169, 91",  // Starlight gold
  "233, 217, 232", // Gentle lavender
  "221, 166, 176", // Sleepy rose
];

export default function HeroStardust() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Accessibility check: Do not animate if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const count = isTouch ? 12 : 24; // Restrained density

    const motes: StardustMote[] = [];

    for (let i = 0; i < count; i++) {
      motes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.5 + 0.1,
        targetAlpha: Math.random() * 0.7 + 0.2,
        speedY: Math.random() * 0.25 + 0.12,
        driftX: (Math.random() - 0.5) * 0.15,
        phase: Math.random() * Math.PI * 2,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || 600;
    };

    window.addEventListener("resize", handleResize);

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < motes.length; i++) {
        const m = motes[i];
        m.phase += dt * 0.8;
        m.y -= m.speedY * (dt * 60);
        m.x += Math.sin(m.phase) * 0.35 + m.driftX;

        // Wrap around top/bottom/sides smoothly
        if (m.y < -10) {
          m.y = height + 10;
          m.x = Math.random() * width;
        }
        if (m.x < -10) m.x = width + 10;
        if (m.x > width + 10) m.x = -10;

        // Gentle alpha shimmer
        const shimmer = m.alpha * (0.8 + 0.2 * Math.sin(m.phase * 2));

        // Draw soft stardust circle
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${m.color}, ${shimmer.toFixed(2)})`;
        ctx.fill();

        // Very faint outer starlight glow on slightly larger motes
        if (m.size > 1.6) {
          ctx.beginPath();
          ctx.arc(m.x, m.y, m.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${m.color}, ${(shimmer * 0.25).toFixed(2)})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.stardustCanvas} aria-hidden="true" />;
}

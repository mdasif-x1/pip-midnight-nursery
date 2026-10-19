"use client";

import { useEffect, useRef } from "react";

interface Sparkle {
  x: number;
  y: number;
  char: string;
  color: string;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number;
}

const SPARKLE_CHARS = ["✦", "✧", "⋆", "·"];
const SPARKLE_COLORS = ["#FFD166", "#FFE89E", "#D9A1AC", "#FFF3DF", "#D5AE72"];

export default function SparkleTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced-motion preferences
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const sparkles: Sparkle[] = [];
    let lastTime = 0;
    let animId: number;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const now = performance.now();
      if (now - lastTime < 45) return; // throttle generation for max smoothness
      lastTime = now;

      let clientX = 0;
      let clientY = 0;
      if ("touches" in e) {
        if (!e.touches[0]) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Add 1-2 small starlight sparks
      for (let i = 0; i < 2; i++) {
        sparkles.push({
          x: clientX + (Math.random() - 0.5) * 14,
          y: clientY + (Math.random() - 0.5) * 14,
          char: SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)],
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          size: Math.floor(Math.random() * 6) + 9,
          opacity: 0.9,
          vx: (Math.random() - 0.5) * 0.8,
          vy: Math.random() * 0.8 - 0.2, // gentle drift downward like dream dust
          life: 0,
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.life += 1;
        s.x += s.vx;
        s.y += s.vy;
        s.opacity -= 0.025;

        if (s.opacity <= 0 || s.life > 40) {
          sparkles.splice(i, 1);
          continue;
        }

        ctx.font = `${s.size}px Georgia, serif`;
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0, s.opacity);
        ctx.fillText(s.char, s.x, s.y);
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="sparkle-trail-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}

"use client";
import { useEffect, useRef } from "react";

const RAMP = "  .·:;+*x%#@";

/**
 * Animated ASCII field: layered sine "terrain" in green→purple that ripples
 * away from the cursor. Static frame under reduced motion; pauses off-screen.
 */
export default function AsciiField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now();
    let w = 0, h = 0, cols = 0, rows = 0, cell = 14, raf = 0, visible = true;
    const mouse = { x: -9999, y: -9999, k: 0 };
    const ripples: { x: number; y: number; t: number }[] = [];

    const resize = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      cell = w < 640 ? 11 : 14;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${cell}px "JetBrains Mono Variable", ui-monospace, monospace`;
      ctx.textBaseline = "top";
      cols = Math.ceil(w / (cell * 0.62)); rows = Math.ceil(h / cell);
    };

    const draw = (now: number) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, w, h);
      const cw = cell * 0.62;
      mouse.k += ((mouse.x > -999 ? 1 : 0) - mouse.k) * 0.06;
      for (let j = 0; j < rows; j++) {
        const y = j * cell;
        for (let i = 0; i < cols; i++) {
          const x = i * cw;
          const u = i / cols, v = j / rows;
          // domain-warped sines: slow, organic "terrain"
          const px = u * 6 + Math.sin(v * 3 + t * 0.21) * 0.9;
          const py = v * 4 + Math.cos(u * 2.6 - t * 0.17) * 0.9;
          let n = (Math.sin(px + t * 0.12) + Math.sin(py * 1.3 + px * 0.5) + Math.sin((px - py) * 0.8 + t * 0.3)) / 3;
          // cursor lens
          const dx = x - mouse.x, dy = y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          n += mouse.k * Math.max(0, 1 - d / 220) * 0.9 * Math.cos(d / 18 - t * 4);
          // click ripples
          for (const r of ripples) {
            const age = t - r.t;
            const rd = Math.hypot(x - r.x, y - r.y) - age * 420;
            n += Math.max(0, 1 - Math.abs(rd) / 40) * Math.max(0, 1 - age / 1.6) * 1.2;
          }
          const val = (n + 1) / 2;
          // fade toward the left/top so foreground text stays readable
          const fade = Math.min(1, 0.18 + u * 1.1) * (0.6 + v * 0.4);
          const a = Math.max(0, Math.min(1, (val - 0.12) * 2.3)) * fade;
          if (a < 0.08) continue;
          const ch = RAMP[Math.min(RAMP.length - 1, Math.floor(a * RAMP.length))];
          // green (#3ee08f) → purple (#a78bfa) across the field
          const m = Math.max(0, Math.min(1, u * 1.1 - 0.15 + (val - 0.5) * 0.7));
          const rC = Math.round(62 + (167 - 62) * m), gC = Math.round(224 + (139 - 224) * m), bC = Math.round(143 + (250 - 143) * m);
          ctx.fillStyle = `rgba(${rC},${gC},${bC},${0.12 + a * 0.55})`;
          ctx.fillText(ch, x, y);
        }
      }
      while (ripples.length && t - ripples[0].t > 1.6) ripples.shift();
    };

    const loop = (now: number) => {
      if (visible) draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onDown = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, t: (performance.now() - t0) / 1000 });
    };

    resize();
    const ro = new ResizeObserver(() => { resize(); if (reduce) draw(t0 + 4000); });
    ro.observe(cv);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(cv);
    document.fonts?.ready.then(() => { resize(); if (reduce) draw(t0 + 4000); });

    const host = cv.parentElement!;
    if (reduce) {
      draw(t0 + 4000);
    } else {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
      host.addEventListener("pointerdown", onDown);
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}

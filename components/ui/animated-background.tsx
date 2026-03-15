"use client";

/*
 * AnimatedBackground
 * Fixed layer that renders behind all page content.
 * Consists of:
 *   1. Slowly drifting colour orbs (pure CSS keyframes)
 *   2. A subtle dot-grid overlay
 *   3. A faint vignette at the edges
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="animated-bg-root pointer-events-none select-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Orb 1 — top-left, brand purple */}
      <div className="orb orb-1" />
      {/* Orb 2 — top-right, accent pink */}
      <div className="orb orb-2" />
      {/* Orb 3 — bottom-center, sky */}
      <div className="orb orb-3" />
      {/* Orb 4 — mid-left, violet */}
      <div className="orb orb-4" />
      {/* Orb 5 — bottom-right, deep brand */}
      <div className="orb orb-5" />

      {/* Dot-grid overlay */}
      <div className="bg-dot-overlay" />

      {/* Edge vignette */}
      <div className="bg-vignette" />
    </div>
  );
}

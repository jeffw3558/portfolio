// ============================================================================
// particle-settings.ts — tweakable settings for the particle background.
// `defaultParticleSettings` is the out-of-the-box look; visitors can adjust
// values live from the on-page settings panel (persisted to localStorage).
// Like portfolio-data.ts, this file stays free of React — pure data and a
// builder that maps settings onto tsparticles options.
// ============================================================================

import type { ISourceOptions } from "@tsparticles/engine";

export type HoverMode = "none" | "grab" | "repulse" | "bubble";

export interface ParticleSettings {
  count: number;
  color: string;
  opacity: number;
  sizeMin: number;
  sizeMax: number;
  speed: number;
  linksEnabled: boolean;
  linkColor: string;
  linkDistance: number;
  linkOpacity: number;
  hoverMode: HoverMode;
}

export const defaultParticleSettings: ParticleSettings = {
  count: 180,
  color: "#fb0909",
  opacity: 0.7,
  sizeMin: 4,
  sizeMax: 3.5,
  speed: 1.8,
  linksEnabled: true,
  linkColor: "#fb0909",
  linkDistance: 150,
  linkOpacity: 0.12,
  hoverMode: "repulse",
};

export function buildParticleOptions(s: ParticleSettings): ISourceOptions {
  return {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    detectRetina: true,
    // In tsparticles v4, resize is a top-level option (no longer under
    // interactivity.events); it keeps the canvas buffer synced to the viewport.
    resize: { enable: true, delay: 0.5 },
    particles: {
      number: { value: s.count, density: { enable: true } },
      color: { value: s.color },
      shape: { type: "circle" },
      opacity: { value: s.opacity },
      size: { value: { min: s.sizeMin, max: Math.max(s.sizeMin, s.sizeMax) } },
      links: {
        enable: s.linksEnabled,
        color: s.linkColor,
        distance: s.linkDistance,
        opacity: s.linkOpacity,
        width: 1,
      },
      move: {
        enable: true,
        speed: s.speed,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: s.hoverMode !== "none",
          mode: s.hoverMode === "none" ? "grab" : s.hoverMode,
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: { opacity: Math.min(1, s.linkOpacity + 0.15) },
        },
        repulse: { distance: 100, duration: 0.4 },
        bubble: { distance: 150, size: Math.max(s.sizeMin, s.sizeMax) * 3, duration: 2 },
      },
    },
  };
}

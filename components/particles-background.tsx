"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

// Must be a stable module-level function — ParticlesProvider throws if the
// init callback identity changes across renders.
const initEngine = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

// Subtle, slow-moving connected dots so the background never competes with
// the content in front of it.
const options: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  detectRetina: true,
  // In tsparticles v4, resize is a top-level option (no longer under
  // interactivity.events); it keeps the canvas buffer synced to the viewport.
  resize: { enable: true, delay: 0.5 },
  particles: {
    number: { value: 60, density: { enable: true } },
    color: { value: "#818cf8" },
    shape: { type: "circle" },
    opacity: { value: 0.35 },
    size: { value: { min: 1, max: 2.5 } },
    links: {
      enable: true,
      color: "#818cf8",
      distance: 150,
      opacity: 0.12,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: false,
      straight: false,
      outModes: { default: "out" },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.25 } },
    },
  },
};

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <ParticlesProvider init={initEngine}>
        <Particles id="tsparticles" options={options} className="h-full w-full" />
      </ParticlesProvider>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import {
  buildParticleOptions,
  defaultParticleSettings,
  type ParticleSettings,
} from "@/lib/particle-settings";
import ParticleControls from "@/components/particle-controls";

// Must be a stable module-level function — ParticlesProvider throws if the
// init callback identity changes across renders.
const initEngine = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

const STORAGE_KEY = "portfolio-particle-settings";

// Changing the options prop tears down and rebuilds the particles container,
// so settings are debounced: the panel UI updates instantly while the canvas
// only rebuilds once the user pauses.
function useDebounced<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timeout);
  }, [value, delayMs]);
  return debounced;
}

export default function ParticlesBackground() {
  const [settings, setSettings] = useState<ParticleSettings>(
    defaultParticleSettings,
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSettings({ ...defaultParticleSettings, ...JSON.parse(stored) });
      }
    } catch {
      // Corrupt stored settings — fall back to defaults.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Storage unavailable (private mode etc.) — settings just won't persist.
    }
  }, [settings, hydrated]);

  const debouncedSettings = useDebounced(settings, 300);
  const options = useMemo(
    () => buildParticleOptions(debouncedSettings),
    [debouncedSettings],
  );

  return (
    <>
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <ParticlesProvider init={initEngine}>
          <Particles
            id="tsparticles"
            options={options}
            className="h-full w-full"
          />
        </ParticlesProvider>
      </div>
      <ParticleControls settings={settings} onChange={setSettings} />
    </>
  );
}

"use client";

import { useState } from "react";
import { RotateCcw, SlidersHorizontal, X } from "lucide-react";
import {
  defaultParticleSettings,
  type HoverMode,
  type ParticleSettings,
} from "@/lib/particle-settings";

interface ParticleControlsProps {
  settings: ParticleSettings;
  onChange: (settings: ParticleSettings) => void;
}

const hoverModes: { value: HoverMode; label: string }[] = [
  { value: "none", label: "None" },
  { value: "grab", label: "Grab" },
  { value: "repulse", label: "Repulse" },
  { value: "bubble", label: "Bubble" },
];

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  const id = `particle-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <label htmlFor={id} className="text-xs text-zinc-400">
          {label}
        </label>
        <span className="font-mono text-xs text-zinc-500">{value}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-indigo-500"
      />
    </div>
  );
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const id = `particle-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="text-xs text-zinc-400">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-zinc-500">{value}</span>
        <input
          id={id}
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-6 w-8 cursor-pointer rounded border border-white/10 bg-transparent"
        />
      </div>
    </div>
  );
}

export default function ParticleControls({
  settings,
  onChange,
}: ParticleControlsProps) {
  const [open, setOpen] = useState(false);

  const set = <K extends keyof ParticleSettings>(
    key: K,
    value: ParticleSettings[K],
  ) => onChange({ ...settings, [key]: value });

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="absolute bottom-14 right-0 w-72 rounded-2xl border border-white/10 bg-[#0a0a0f]/90 p-5 shadow-2xl shadow-black/50 backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">
              Particle Settings
            </h3>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => onChange(defaultParticleSettings)}
                aria-label="Reset to defaults"
                title="Reset to defaults"
                className="rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <RotateCcw size={14} />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close settings"
                className="rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          <div className="max-h-[60vh] space-y-4 overflow-y-auto pr-1">
            <Slider
              label="Count"
              value={settings.count}
              min={10}
              max={200}
              step={5}
              onChange={(v) => set("count", v)}
            />
            <Slider
              label="Opacity"
              value={settings.opacity}
              min={0.05}
              max={1}
              step={0.05}
              onChange={(v) => set("opacity", v)}
            />
            <Slider
              label="Min Size"
              value={settings.sizeMin}
              min={0.5}
              max={10}
              step={0.5}
              onChange={(v) => set("sizeMin", v)}
            />
            <Slider
              label="Max Size"
              value={settings.sizeMax}
              min={0.5}
              max={10}
              step={0.5}
              onChange={(v) => set("sizeMax", v)}
            />
            <Slider
              label="Speed"
              value={settings.speed}
              min={0}
              max={3}
              step={0.1}
              onChange={(v) => set("speed", v)}
            />
            <ColorField
              label="Particle Color"
              value={settings.color}
              onChange={(v) => set("color", v)}
            />

            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="particle-links-enabled"
                  className="text-xs text-zinc-400"
                >
                  Connecting Links
                </label>
                <input
                  id="particle-links-enabled"
                  type="checkbox"
                  checked={settings.linksEnabled}
                  onChange={(e) => set("linksEnabled", e.target.checked)}
                  className="h-4 w-4 accent-indigo-500"
                />
              </div>
              {settings.linksEnabled && (
                <div className="mt-4 space-y-4">
                  <Slider
                    label="Link Distance"
                    value={settings.linkDistance}
                    min={50}
                    max={300}
                    step={10}
                    onChange={(v) => set("linkDistance", v)}
                  />
                  <Slider
                    label="Link Opacity"
                    value={settings.linkOpacity}
                    min={0.02}
                    max={1}
                    step={0.02}
                    onChange={(v) => set("linkOpacity", v)}
                  />
                  <ColorField
                    label="Link Color"
                    value={settings.linkColor}
                    onChange={(v) => set("linkColor", v)}
                  />
                </div>
              )}
            </div>

            <div className="border-t border-white/10 pt-4">
              <label
                htmlFor="particle-hover-mode"
                className="mb-1.5 block text-xs text-zinc-400"
              >
                Hover Effect
              </label>
              <select
                id="particle-hover-mode"
                value={settings.hoverMode}
                onChange={(e) => set("hoverMode", e.target.value as HoverMode)}
                className="w-full rounded-lg border border-white/10 bg-[#14141c] px-3 py-1.5 text-sm text-zinc-200 outline-none transition-colors focus:border-indigo-400/60"
              >
                {hoverModes.map((mode) => (
                  <option key={mode.value} value={mode.value}>
                    {mode.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Particle settings"
        aria-expanded={open}
        title="Particle settings"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0f]/80 text-zinc-400 shadow-lg shadow-black/40 backdrop-blur-md transition-colors hover:border-indigo-400/60 hover:text-white"
      >
        <SlidersHorizontal size={18} />
      </button>
    </div>
  );
}

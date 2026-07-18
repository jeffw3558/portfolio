"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/components/section";
import { portfolioData } from "@/lib/portfolio-data";

export default function Interests() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) {
      return;
    }
    // 1px tolerance for fractional scroll positions.
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) {
      return;
    }
    const card = el.querySelector("article");
    const step = card ? card.getBoundingClientRect().width + 16 : 300;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <Section id="interests" title="Interests">
      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={updateArrows}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-1"
        >
          {portfolioData.interests.map((interest) => (
            <article
              key={interest.label}
              className="flex w-72 shrink-0 snap-start flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-indigo-400/40"
            >
              <span
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/15 text-3xl"
              >
                {interest.emoji}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {interest.label}
                </h3>
                {interest.note && (
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                    {interest.note}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollLeft}
          aria-label="Previous interests"
          className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0f]/85 text-zinc-300 shadow-lg shadow-black/40 backdrop-blur-md transition-all hover:border-indigo-400/60 hover:text-white disabled:pointer-events-none disabled:opacity-0 sm:-left-5"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollRight}
          aria-label="More interests"
          className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0f]/85 text-zinc-300 shadow-lg shadow-black/40 backdrop-blur-md transition-all hover:border-indigo-400/60 hover:text-white disabled:pointer-events-none disabled:opacity-0 sm:-right-5"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </Section>
  );
}

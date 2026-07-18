import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/page-header";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  const jobs = portfolioData.experience;

  return (
    <>
      <PageHeader title="Experience" />
      <ol>
        {jobs.map((job, i) => (
          <li key={`${job.company}-${job.period}`}>
            {/* Connector between cards */}
            {i > 0 && (
              <div aria-hidden="true" className="ml-10 h-8 w-px bg-stone-800" />
            )}
            <div className="rounded-xl border border-stone-800/60 bg-stone-900/40 p-7 transition-colors hover:border-stone-700">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="text-lg font-semibold text-stone-100">
                  {job.role}
                  <span className="font-normal text-stone-400">
                    {" "}
                    ·{" "}
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-baseline gap-1 text-stone-300 underline decoration-stone-600 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        {job.company}
                        <ExternalLink size={12} className="self-center" />
                      </a>
                    ) : (
                      job.company
                    )}
                  </span>
                </h2>
                <p className="text-sm text-stone-500">
                  {job.period}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-stone-400 marker:text-accent/60">
                {job.highlights.map((highlight, j) => (
                  <li key={j}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

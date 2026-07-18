import { Briefcase } from "lucide-react";
import Section from "@/components/section";
import { portfolioData } from "@/lib/portfolio-data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-10 border-l border-white/10 pl-8">
        {portfolioData.experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-indigo-400/40 bg-[#0a0a0f] text-indigo-400">
              <Briefcase size={12} />
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-white">
                {job.role}
                <span className="text-zinc-400"> · {job.company}</span>
              </h3>
              <p className="text-sm text-zinc-500">
                {job.period}
                {job.location ? ` · ${job.location}` : ""}
              </p>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-400 marker:text-indigo-400/60">
              {job.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

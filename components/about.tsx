import { GraduationCap } from "lucide-react";
import Section from "@/components/section";
import { portfolioData } from "@/lib/portfolio-data";

export default function About() {
  const { bio, education } = portfolioData.about;

  return (
    <Section id="about" title="About & Education">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="space-y-4 md:col-span-3">
          {bio.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-zinc-400">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="space-y-4 md:col-span-2">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-lg bg-indigo-500/15 p-2 text-indigo-400">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{edu.school}</h3>
                  <p className="text-sm text-zinc-500">{edu.period}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-zinc-300">{edu.degree}</p>
              {edu.details && (
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

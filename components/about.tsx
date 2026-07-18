import Image from "next/image";
import { GraduationCap, User } from "lucide-react";
import Section from "@/components/section";
import { portfolioData } from "@/lib/portfolio-data";

export default function About() {
  const { photo, bio, education } = portfolioData.about;

  return (
    <Section id="about" title="About & Education">
      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:mx-0">
            {photo ? (
              <Image
                src={photo}
                alt={`Portrait of ${portfolioData.name}`}
                fill
                sizes="(max-width: 768px) 20rem, 24rem"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20">
                <span className="rounded-full bg-white/5 p-5 text-zinc-500">
                  <User size={48} />
                </span>
                <p className="px-6 text-center text-xs text-zinc-500">
                  Your photo here — add it to /public and set{" "}
                  <code className="text-zinc-400">about.photo</code> in
                  portfolio-data.ts
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4 md:col-span-3">
          {bio.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-zinc-400">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
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
    </Section>
  );
}

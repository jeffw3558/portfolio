import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import PageHeader from "@/components/page-header";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Education",
};

export default function EducationPage() {
  const { schools, coursework, clubs } = portfolioData.education;

  return (
    <>
      <PageHeader title="Education" />

      <section>
        {schools.map((edu) => (
          <div
            key={edu.school}
            className="rounded-xl border border-stone-800/60 bg-stone-900/40 p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
              <div className="flex items-center gap-4">
                <span className="rounded-md bg-accent/10 p-2.5 text-accent">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-stone-100">
                    {edu.school}
                  </h2>
                  <p className="mt-0.5 text-stone-400">{edu.degree}</p>
                </div>
              </div>
              <p className="text-sm text-stone-500">{edu.period}</p>
            </div>
            {edu.details && (
              <p className="mt-4 text-sm leading-relaxed text-stone-500">
                {edu.details}
              </p>
            )}
          </div>
        ))}
      </section>

      <section className="mt-14">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-stone-300">
          Relevant Coursework
        </h2>
        <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {coursework.map((course) => (
            <li
              key={`${course.code}-${course.name}`}
              className="flex items-baseline gap-3 border-b border-stone-800/60 pb-3 text-sm"
            >
              <span className="w-20 shrink-0 font-mono text-accent">
                {course.code}
              </span>
              <span className="text-stone-400">{course.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-stone-300">
          Clubs & Involvement
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {clubs.map((club) => (
            <div
              key={club.name}
              className="rounded-xl border border-stone-800/60 bg-stone-900/40 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium text-stone-100">{club.name}</h3>
                {club.period && (
                  <p className="text-xs text-stone-500">{club.period}</p>
                )}
              </div>
              {club.role && (
                <p className="mt-1 text-sm text-accent">{club.role}</p>
              )}
              {club.description && (
                <p className="mt-2.5 text-sm leading-relaxed text-stone-500">
                  {club.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/page-header";
import { portfolioData } from "@/lib/portfolio-data";
import { socialIcons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const GithubIcon = socialIcons.github;

  return (
    <>
      <PageHeader title="Projects" />
      <div className="grid gap-5 sm:grid-cols-2">
        {portfolioData.projects.map((project, i) => (
          <article
            key={project.name}
            className="group flex flex-col rounded-lg border border-stone-800 bg-stone-900/60 p-7 transition-colors hover:border-accent/50"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="font-mono text-xs text-stone-600">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="flex shrink-0 items-center gap-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    className="rounded-md p-1.5 text-stone-500 transition-colors hover:text-accent"
                  >
                    <GithubIcon size={17} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} live demo`}
                    className="rounded-md p-1.5 text-stone-500 transition-colors hover:text-accent"
                  >
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>
            <h2 className="mt-3 text-lg font-semibold text-stone-100 transition-colors group-hover:text-accent">
              {project.name}
            </h2>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-stone-400">
              {project.description}
            </p>
            <p className="mt-5 text-xs tracking-wide text-stone-500">
              {project.tech.join("  ·  ")}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}

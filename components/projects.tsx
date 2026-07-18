import { ExternalLink, Folder } from "lucide-react";
import Section from "@/components/section";
import { portfolioData } from "@/lib/portfolio-data";
import { socialIcons } from "@/components/icons";

// Thumbnail gradients cycled per card until real screenshots are added.
const thumbnailGradients = [
  "from-indigo-500/40 via-purple-500/30 to-cyan-500/40",
  "from-cyan-500/40 via-sky-500/30 to-indigo-500/40",
  "from-purple-500/40 via-indigo-500/30 to-sky-500/40",
  "from-sky-500/40 via-cyan-500/30 to-purple-500/40",
];

export default function Projects() {
  const GithubIcon = socialIcons.github;

  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {portfolioData.projects.map((project, i) => (
          <article
            key={project.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/10"
          >
            <div
              className={`flex h-40 items-center justify-center bg-gradient-to-br ${thumbnailGradients[i % thumbnailGradients.length]}`}
            >
              <Folder
                size={40}
                className="text-white/60 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <div className="flex shrink-0 items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live demo`}
                      className="rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

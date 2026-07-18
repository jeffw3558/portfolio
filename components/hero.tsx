import { ArrowDown, FileText, Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { socialIcons } from "@/components/icons";

export default function Hero() {
  const { name, tagline, location, resumeUrl, socials } = portfolioData;

  return (
    <section id="top" className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-5xl px-6 pt-16">
        <p className="mb-4 flex items-center gap-2 text-sm text-zinc-400">
          <MapPin size={14} className="text-indigo-400" />
          {location}
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          {name.split(" ")[0]}{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
            {name.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105"
          >
            <FileText size={16} />
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur transition-colors hover:border-indigo-400/60 hover:text-white"
          >
            <Mail size={16} />
            Contact Me
          </a>
          <div className="ml-1 flex items-center gap-3">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="mt-20 inline-flex animate-bounce rounded-full p-2 text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}

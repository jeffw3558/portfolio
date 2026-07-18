import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, MapPin, User } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { socialIcons } from "@/components/icons";

export default function Home() {
  const { name, tagline, location, resumeUrl, about, socials } = portfolioData;

  return (
    <>
      <section className="grid items-start gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            <MapPin size={13} />
            {location}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-stone-100 sm:text-6xl">
            {name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-300">
            {tagline}
          </p>
          <div className="mt-6 space-y-4">
            {about.bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-stone-400">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-stone-950 transition-colors hover:bg-[#da7a7a]"
            >
              <FileText size={15} />
              View Resume
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-stone-700 px-5 py-2.5 text-sm font-medium text-stone-300 transition-colors hover:border-accent hover:text-stone-100"
            >
              Get in touch
              <ArrowRight size={15} />
            </Link>
            <div className="ml-1 flex items-center gap-1">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-md p-2 text-stone-500 transition-colors hover:text-accent"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-stone-800 bg-stone-900/80 md:mx-0">
            {about.photo ? (
              <Image
                src={about.photo}
                alt={`Portrait of ${name}`}
                fill
                sizes="(max-width: 768px) 24rem, 26rem"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3">
                <span className="rounded-full bg-stone-800/70 p-5 text-stone-600">
                  <User size={44} />
                </span>
                <p className="px-8 text-center text-xs leading-relaxed text-stone-600">
                  Your photo here — add it to /public and set{" "}
                  <code className="text-stone-500">about.photo</code> in
                  portfolio-data.ts
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

    </>
  );
}

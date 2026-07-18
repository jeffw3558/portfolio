import { portfolioData } from "@/lib/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {portfolioData.name}
        </p>
        <p>Built with Next.js, Tailwind CSS &amp; tsParticles</p>
      </div>
    </footer>
  );
}

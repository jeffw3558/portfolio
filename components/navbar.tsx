import { portfolioData } from "@/lib/portfolio-data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0f]/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-sm font-bold tracking-widest text-white transition-colors hover:text-indigo-300"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {portfolioData.initials}
          </span>
        </a>
        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={portfolioData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-zinc-200 transition-colors hover:border-indigo-400/60 hover:text-white"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

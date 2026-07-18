"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/lib/portfolio-data";

const navLinks = [
  { label: "About", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Projects", href: "/projects" },
  { label: "Interests", href: "/interests" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-800/80 bg-[#0c0a09]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="shrink-0 text-[15px] font-semibold tracking-tight text-stone-100 transition-colors hover:text-accent"
        >
          {portfolioData.name}
        </Link>
        <nav className="no-scrollbar -mx-2 flex items-center gap-1 overflow-x-auto px-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "text-accent"
                    : "text-stone-400 hover:text-stone-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <a
          href={portfolioData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-md border border-stone-700 px-3.5 py-1.5 text-sm text-stone-300 transition-colors hover:border-accent hover:text-stone-100 sm:block"
        >
          Resume
        </a>
      </div>
    </header>
  );
}

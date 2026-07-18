import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
}

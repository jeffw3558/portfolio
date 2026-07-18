"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import Section from "@/components/section";
import { portfolioData } from "@/lib/portfolio-data";
import { socialIcons } from "@/components/icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // No backend: submitting composes a draft in the visitor's email client.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="leading-relaxed text-zinc-400">
            I&apos;m always open to chatting about new opportunities,
            interesting projects, or just saying hi. Send a message here and
            it will open a draft in your email client, or reach out directly:
          </p>
          <a
            href={`mailto:${portfolioData.email}`}
            className="mt-4 inline-block font-medium text-indigo-300 transition-colors hover:text-indigo-200"
          >
            {portfolioData.email}
          </a>
          <div className="mt-8 flex items-center gap-3">
            {portfolioData.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-white/10 bg-white/5 p-3 text-zinc-400 backdrop-blur transition-colors hover:border-indigo-400/40 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-sm font-medium text-zinc-300"
            >
              Your name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ada Lovelace"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-zinc-600 backdrop-blur outline-none transition-colors focus:border-indigo-400/60"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="mb-1.5 block text-sm font-medium text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi! I'd love to talk about..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-zinc-600 backdrop-blur outline-none transition-colors focus:border-indigo-400/60"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </div>
    </Section>
  );
}

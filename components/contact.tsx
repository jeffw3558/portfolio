"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { socialIcons } from "@/components/icons";

export default function ContactForm() {
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
    <div className="grid gap-12 md:grid-cols-2">
      <div>
        <p className="leading-relaxed text-stone-400">
          Send a message here and it will open a draft in your email client,
          or reach out directly:
        </p>
        <a
          href={`mailto:${portfolioData.email}`}
          className="mt-4 inline-block font-medium text-accent transition-colors hover:text-[#da7a7a]"
        >
          {portfolioData.email}
        </a>
        <div className="mt-8 flex items-center gap-2">
          {portfolioData.socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-md border border-stone-800 bg-stone-900/60 p-3 text-stone-400 transition-colors hover:border-accent hover:text-stone-100"
              >
                <Icon size={19} />
              </a>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-stone-300"
          >
            Your name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Harry Potter"
            className="w-full rounded-md border border-stone-800 bg-stone-900/60 px-4 py-2.5 text-stone-100 placeholder-stone-600 outline-none transition-colors focus:border-accent"
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-stone-300"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Dear Mr. Potter, ..."
            className="w-full resize-none rounded-md border border-stone-800 bg-stone-900/60 px-4 py-2.5 text-stone-100 placeholder-stone-600 outline-none transition-colors focus:border-accent"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-stone-950 transition-colors hover:bg-[#da7a7a]"
        >
          <Send size={15} />
          Send Message
        </button>
      </form>
    </div>
  );
}

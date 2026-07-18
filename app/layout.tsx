import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { portfolioData } from "@/lib/portfolio-data";
import ParticlesBackground from "@/components/particles-background";

export const metadata: Metadata = {
  title: `${portfolioData.name} | Software Engineer`,
  description: portfolioData.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-[#0a0a0f] font-sans text-zinc-100 antialiased`}
      >
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}

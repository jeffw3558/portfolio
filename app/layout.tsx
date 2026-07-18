import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { portfolioData } from "@/lib/portfolio-data";
import ParticlesBackground from "@/components/particles-background";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: portfolioData.name,
    template: `%s — ${portfolioData.name}`,
  },
  description: portfolioData.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-[#0c0a09] font-sans text-stone-200 antialiased">
        <ParticlesBackground />
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 pb-24 pt-28 sm:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

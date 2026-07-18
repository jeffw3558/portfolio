// ============================================================================
// portfolio-data.ts — the single source of truth for all site content.
// Edit the values below to update the portfolio; no React code changes needed.
//
// NOTE: keep this file free of JSX/React components — it is imported by
// Server Components and must stay serializable. Icons are referenced by
// string name (see `SocialIconName` / `SkillIconName`) and resolved to
// components inside the UI layer (components/icons.tsx).
// ============================================================================

export type SocialIconName = "github" | "linkedin" | "mail";
export type SkillIconName = "code" | "layers" | "wrench";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export interface SkillCategory {
  title: string;
  icon: SkillIconName;
  skills: string[];
}

export interface Interest {
  /** Any emoji — keeps interests flexible without needing icon names. */
  emoji: string;
  label: string;
  /** Optional one-liner shown under the label. */
  note?: string;
}

export interface PortfolioData {
  name: string;
  initials: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  about: {
    /** Path to a portrait in /public (e.g. "/profile.jpg"), or null to show a placeholder. */
    photo: string | null;
    bio: string[];
    education: Education[];
  };
  experience: ExperienceItem[];
  projects: Project[];
  skillCategories: SkillCategory[];
  interests: Interest[];
  socials: SocialLink[];
}

export const portfolioData: PortfolioData = {
  // ---- Identity ------------------------------------------------------------
  name: "Jeffrey Wang",
  initials: "JW",
  tagline:
    "Data Science & Economics at UC Berkeley.",
  location: "Berkeley, CA",
  email: "jeffw3558@berkeley.edu",
  // Drop your resume PDF into /public as resume.pdf (or change this path).
  resumeUrl: "/resume.pdf",

  // ---- About & Education ---------------------------------------------------
  about: {
    // Drop your portrait into /public (e.g. public/profile.jpg) and change
    // this to "/profile.jpg". Leave as null to show the placeholder card.
    photo: null,
    bio: [
      "I'm a data science & economics student at UC Berkeley interested in Software Engineering.",
      "Outside of code, I enjoy skatboarding, hiking, coaching, and all sorts of outdoor activities. I'm currently looking for Fall 2026 internships and 2027 new-grad roles.",
    ],
    education: [
      {
        school: "University of California, Berkeley",
        degree: "B.A. in Data Science & Economics",
        period: "2023 — 2027",
        details:
          "Relevant coursework: Structure and Interpretation of Computer Programs, Data Structures & Algorithms, Intro to Machine Learning, Principles of Data Science, Introduction to Artificial Intelligence, Discrete Math & Probability Theory, Concepts of Probability, Linear Algebra, Multivariable Calculus, ",
      },
    ],
  },

  // ---- Experience (most recent first) --------------------------------------
  experience: [
    {
      company: "CME Group",
      role: "Artificial Intelligence Research Intern",
      period: "Aug 2026 — May 2026",
      location: "Chicago, IL",
      highlights: [
        "Designed and presented a 'Fantasy Futures' product concept for ESPN and CME Group by scraping market data and designing a educational UX to engage Gen Z/Millenial Users.",
        "Conducted quantitative and qualitative research on fantasy and sports-betting partners (ESPN Fantasy, ESPN BET, FanDuel, Dream11), building revenue models, risk assessments, and partnership playbooks to inform CME’s retail strategy.",
      ],
    },
    {
      company: "Broctagon Fintech Group",
      role: "Software Development Intern",
      period: "May 2025 - July 2025",
      location: "Singapore",
      highlights: [
        "Built a Python-based testing framework for evaluating Amazon Bedrock LLMs (Claude) across financial NLP tasks; implemented dynamic prompt generation, structured output parsing, and automated failure logging",
        "Wrote modular call functions to transmit real-time data to Bedrock models, integrating robust error handling, retry logic, and streaming response support to ensure low-latency performance within a FastAPI backend",
        "Compared Bedrock LLMs through custom benchmarks and prompt tuning, evaluating performance metrics (accuracy, cost, stability) to guide model selection for regulatory and client-facing use cases.",
      ],
    },
    {
      company: "Propulsion AI - Berkeley SkyDeck",
      role: "Backend Developer",
      period: "May 2024 — Aug 2024",
      location: "Berkeley, CA",
      highlights: [
        "Integrated GROBID and LLMs within a FastAPI framework to enhance PDF processing, providing highly structured text that improved the LLM’s overall accuracy and response quality.",
        "Wrote a Python call function to send real-time data to language models (LLMs). Implemented dynamic request construction, robust error handling, and response parsing to ensure efficient, real-time data processing and integration into the application.",
      ],
    },
  ],

  // ---- Projects ------------------------------------------------------------
  projects: [
    {
      name: "Project One",
      description:
        "A short one-or-two sentence description of what this project does and why it's interesting. [Edit me]",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      github: "https://github.com/yourusername/project-one",
      demo: "https://project-one.example.com",
    },
    {
      name: "Project Two",
      description:
        "Another project — maybe a CLI tool, a game, or a class project you're proud of.",
      tech: ["Python", "FastAPI", "Docker"],
      github: "https://github.com/yourusername/project-two",
    },
    {
      name: "Project Three",
      description:
        "Projects without a live demo just show the GitHub link; without a repo link they show demo only.",
      tech: ["Go", "gRPC", "Redis"],
      github: "https://github.com/yourusername/project-three",
      demo: "https://project-three.example.com",
    },
    {
      name: "Project Four",
      description:
        "Add or remove entries in lib/portfolio-data.ts and the grid updates automatically.",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/yourusername/project-four",
    },
  ],

  // ---- Skills --------------------------------------------------------------
  skillCategories: [
    {
      title: "Languages",
      icon: "code",
      skills: ["TypeScript", "Python", "Java", "HTML/CSS", "SQL", "JavaScript"],
    },
    {
      title: "Frameworks",
      icon: "layers",
      skills: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"],
    },
    {
      title: "Tools",
      icon: "wrench",
      skills: ["Git", "Docker", "MongoDB", "AWS", "Node.js", "Pandas"],
    },
  ],

  // ---- Interests -----------------------------------------------------------
  interests: [
    {
      emoji: "⛳",
      label: "Golf",
      note: "Weekend rounds and range sessions. [Edit me]",
    },
    {
      emoji: "🥋",
      label: "Brazilian Jiu-Jitsu",
      note: "Training since 2023 — de la riva :)",
    },
    {
      emoji: "🛹",
      label: "Skateboarding; Heelflips for life",
    },
    {
      emoji: "📈",
      label: "Investing",
      note: "Markets, long-term value, and the occasional deep dive.",
    },
  ],

  // ---- Socials -------------------------------------------------------------
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/yourusername",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yourusername",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:jeffw3558@berkeley.edu",
      icon: "mail",
    },
  ],
};

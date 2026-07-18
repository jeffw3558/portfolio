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
  socials: SocialLink[];
}

export const portfolioData: PortfolioData = {
  // ---- Identity ------------------------------------------------------------
  name: "Your Name",
  initials: "YN",
  tagline:
    "Software engineer who enjoys building fast, reliable systems and clean user experiences.",
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
      "I'm a software engineer passionate about building products end to end — from designing resilient backend services to polishing frontend details. [Replace this with a short paragraph about who you are and what you love working on.]",
      "Outside of code, I enjoy [hobbies/interests]. I'm currently looking for [internships / new-grad roles / collaborations].",
    ],
    education: [
      {
        school: "University of California, Berkeley",
        degree: "B.S. in Electrical Engineering & Computer Science",
        period: "2023 — 2027",
        details:
          "Relevant coursework: Data Structures, Algorithms, Operating Systems, Machine Learning. [Edit me]",
      },
    ],
  },

  // ---- Experience (most recent first) --------------------------------------
  experience: [
    {
      company: "Acme Corp",
      role: "Software Engineering Intern",
      period: "May 2026 — Aug 2026",
      location: "San Francisco, CA",
      highlights: [
        "Built a real-time data pipeline processing X events/day, cutting latency by Y%. [Edit me]",
        "Shipped a customer-facing dashboard used by N teams.",
      ],
    },
    {
      company: "Campus Research Lab",
      role: "Undergraduate Researcher",
      period: "Sep 2025 — May 2026",
      location: "Berkeley, CA",
      highlights: [
        "Worked on [research topic] under Prof. [Name].",
        "Co-authored a workshop paper / built tooling used by the lab.",
      ],
    },
    {
      company: "Student Organization",
      role: "Backend Developer",
      period: "Jan 2025 — Present",
      highlights: [
        "Maintained services powering a site with X monthly visitors.",
        "Mentored new members on Git workflows and code review.",
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
      skills: ["TypeScript", "Python", "Java", "Go", "SQL", "C"],
    },
    {
      title: "Frameworks",
      icon: "layers",
      skills: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS"],
    },
    {
      title: "Tools",
      icon: "wrench",
      skills: ["Git", "Docker", "PostgreSQL", "AWS", "Linux", "CI/CD"],
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

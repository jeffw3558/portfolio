import Section from "@/components/section";
import { portfolioData } from "@/lib/portfolio-data";
import { skillIcons } from "@/components/icons";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {portfolioData.skillCategories.map((category) => {
          const Icon = skillIcons[category.icon];
          return (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-lg bg-indigo-500/15 p-2 text-indigo-400">
                  <Icon size={20} />
                </span>
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

import { Smartphone, Server, Database, Wrench, type LucideIcon } from "lucide-react";
import { useLang } from "../i18n";
import { UI, SKILLS, type SkillGroup } from "../data";
import { Section } from "./Section";
import { Tags } from "./Tags";

const ICONS: Record<SkillGroup["key"], LucideIcon> = {
  mobile: Smartphone,
  backend: Server,
  database: Database,
  tools: Wrench,
};

// top accent bar gradient per card
const BARS: Record<SkillGroup["key"], string> = {
  mobile: "from-pink to-purple",
  backend: "from-cyan to-blue",
  database: "from-lime to-cyan",
  tools: "from-orange to-pink",
};

export function Skills() {
  const { tr } = useLang();

  return (
    <Section id="skills" index="02" title={UI.skillsTitle}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SKILLS.map((group) => {
          const Icon = ICONS[group.key];
          return (
            <article
              key={group.key}
              className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/5 px-6 py-6 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${BARS[group.key]}`}
              />
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl grad-cool text-white">
                  <Icon size={20} strokeWidth={2.2} />
                </span>
                <h3 className="text-lg">{tr(group.title)}</h3>
              </div>
              <Tags items={group.tags} />
            </article>
          );
        })}
      </div>
    </Section>
  );
}

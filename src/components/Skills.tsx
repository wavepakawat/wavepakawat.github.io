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

export function Skills() {
  const { tr } = useLang();

  return (
    <Section id="skills" index="02" title={UI.skillsTitle}>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {SKILLS.map((group) => {
          const Icon = ICONS[group.key];
          return (
            <article key={group.key} className="bg-bg p-6">
              <div className="mb-4 flex items-center gap-2.5 text-accent">
                <Icon size={19} strokeWidth={2.2} />
                <h3 className="text-base font-semibold text-ink">{tr(group.title)}</h3>
              </div>
              <Tags items={group.tags} />
            </article>
          );
        })}
      </div>
    </Section>
  );
}

import {
  Smartphone,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useLang } from "../i18n";
import { UI, SKILLS, type SkillGroup } from "../data";
import { MaskText } from "./MaskText";
import { Reveal } from "./Reveal";
import { Tags } from "./Tags";

const ICONS: Record<SkillGroup["key"], LucideIcon> = {
  mobile: Smartphone,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export function About() {
  const { tr } = useLang();

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-36">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        ( {tr(UI.about.title)} )
      </span>

      <MaskText
        as="h2"
        text={tr(UI.about.lead)}
        className="text-giant mt-8 block max-w-5xl font-semibold [&_.text-accent]:text-accent"
      />

      <div className="mt-20 grid gap-12 md:grid-cols-[1fr_1.1fr]">
        {/* facts */}
        <Reveal className="flex flex-col gap-8">
          {UI.about.facts.map((f) => (
            <div key={f.num} className="flex items-baseline gap-5 border-t border-line pt-5">
              <span className="font-display text-5xl font-bold text-accent">{f.num}</span>
              <span className="text-muted">{tr(f.label)}</span>
            </div>
          ))}
        </Reveal>

        {/* capabilities */}
        <div className="flex flex-col">
          {SKILLS.map((group, i) => {
            const Icon = ICONS[group.key];
            return (
              <Reveal key={group.key} delay={i * 0.05} className="border-t border-line py-6 last:border-b">
                <div className="mb-3 flex items-center gap-2.5 text-accent">
                  <Icon size={18} strokeWidth={2.2} />
                  <h3 className="text-base font-semibold text-ink">{tr(group.title)}</h3>
                </div>
                <Tags items={group.tags} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

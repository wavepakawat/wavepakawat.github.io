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
  const techCount = SKILLS.reduce((n, g) => n + g.tags.length, 0);

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-36">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        ( {tr(UI.about.title)} )
      </span>

      {/* intro — short display headline beside readable prose */}
      <div className="mt-8 grid items-start gap-x-16 gap-y-6 lg:grid-cols-[1.15fr_1fr]">
        <MaskText
          as="h2"
          text={tr(UI.about.headline)}
          className="block max-w-2xl text-balance font-display text-3xl font-semibold sm:text-4xl lg:text-[2.9rem] lg:leading-[1.05]"
        />
        <Reveal>
          <p className="max-w-[52ch] text-pretty text-lg leading-[1.7] text-muted sm:text-xl">
            {tr(UI.about.body)}
          </p>
        </Reveal>
      </div>

      {/* facts — slim supporting band */}
      <Reveal className="mt-16 grid gap-8 border-y border-line py-8 sm:grid-cols-3 sm:gap-6">
        {UI.about.facts.map((f) => (
          <div key={f.num} className="flex items-baseline gap-4">
            <span className="font-display text-4xl font-bold text-accent sm:text-5xl">{f.num}</span>
            <span className="text-sm text-muted">{tr(f.label)}</span>
          </div>
        ))}
      </Reveal>

      {/* skills — the featured grid */}
      <div className="mt-20">
        <div className="flex items-end justify-between gap-4 border-b border-line pb-5">
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">
            {tr(UI.skillsTitle)}
          </h3>
          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {techCount} technologies
          </span>
        </div>

        <div className="grid gap-x-12 gap-y-10 pt-10 sm:grid-cols-2">
          {SKILLS.map((group, i) => {
            const Icon = ICONS[group.key];
            return (
              <Reveal key={group.key} delay={i * 0.05} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h4 className="text-lg font-semibold text-ink">{tr(group.title)}</h4>
                </div>
                <Tags items={group.tags} size="md" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

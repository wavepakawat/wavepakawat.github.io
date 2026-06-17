import { Fuel, MapPin, BarChart3, Building2, ArrowUpRight, type LucideIcon } from "lucide-react";
import { useLang } from "../i18n";
import { UI, PROJECTS, type Project } from "../data";
import { Section } from "./Section";
import { Tags } from "./Tags";

const ICONS: Record<Project["icon"], LucideIcon> = {
  fuel: Fuel,
  pin: MapPin,
  chart: BarChart3,
  building: Building2,
};

export function Projects() {
  const { tr } = useLang();

  return (
    <Section id="projects" index="04" title={UI.projectsTitle}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PROJECTS.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <article
              key={i}
              className="group flex flex-col rounded-xl border border-border bg-bg p-6 transition-colors hover:border-accent"
            >
              <div className="mb-4 flex items-center justify-between text-accent">
                <Icon size={22} strokeWidth={2} />
                <ArrowUpRight
                  size={18}
                  className="text-faint transition-colors group-hover:text-accent"
                />
              </div>
              <h3 className="text-lg font-semibold">{tr(p.title)}</h3>
              <p className="mb-5 mt-2 flex-1 text-[0.95rem] text-muted">{tr(p.desc)}</p>
              <Tags items={p.tags} />
            </article>
          );
        })}
      </div>
    </Section>
  );
}

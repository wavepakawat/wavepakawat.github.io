import { Fuel, MapPin, BarChart3, Building2, type LucideIcon } from "lucide-react";
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
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROJECTS.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <article
              key={i}
              style={{ borderTopColor: p.accent }}
              className="rounded-[20px] border border-white/10 border-t-4 bg-white/5 px-6 py-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.4)]"
            >
              <span className="mb-3 inline-block" style={{ color: p.accent }}>
                <Icon size={26} strokeWidth={2} />
              </span>
              <h3 className="mb-2 text-[1.25rem]">{tr(p.title)}</h3>
              <p className="mb-4 text-[0.95rem] text-muted">{tr(p.desc)}</p>
              <Tags items={p.tags} />
            </article>
          );
        })}
      </div>
    </Section>
  );
}

import { Fuel, MapPin, BarChart3, Building2, Check, type LucideIcon } from "lucide-react";
import { useLang } from "../i18n";
import { UI, PROJECTS, type Project } from "../data";
import { Reveal } from "./Reveal";
import { Tags } from "./Tags";

const ICONS: Record<Project["icon"], LucideIcon> = {
  fuel: Fuel,
  pin: MapPin,
  chart: BarChart3,
  building: Building2,
};

export function Work() {
  const { tr } = useLang();

  return (
    <section id="work" className="scroll-mt-24 px-5 pb-16 pt-24 sm:px-8">
      <div className="flex items-end justify-between pb-12">
        <h2 className="text-giant font-bold">{tr(UI.projectsTitle)}</h2>
        <span className="hidden font-mono text-xs uppercase tracking-[0.16em] text-muted md:block">
          [ 0{PROJECTS.length} ]
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => {
          const Icon = ICONS[p.icon];
          const num = String(i + 1).padStart(2, "0");
          return (
            <Reveal key={i} delay={(i % 2) * 0.08} className="h-full">
              <article className="flex h-full flex-col gap-7 rounded-2xl border border-line bg-bg2 p-8 transition-colors hover:border-accent">
                {/* header */}
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-line text-accent">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-sm text-muted">
                    {num} <span className="text-faint">/ 0{PROJECTS.length}</span>
                  </span>
                </div>

                {/* identity */}
                <div>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
                    {tr(p.type)}
                  </span>
                  <h3 className="mt-3 text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[0.98]">
                    {tr(p.title)}
                  </h3>
                  <p className="mt-4 max-w-xl text-muted">{tr(p.desc)}</p>
                </div>

                {/* what I built — fills the card with real substance */}
                <div>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-faint">
                    {tr(UI.workBuilt)}
                  </span>
                  <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
                    {p.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[0.95rem]">
                        <Check size={16} strokeWidth={2.4} className="mt-1 shrink-0 text-accent" />
                        <span>{tr(h)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* footer: metadata + stack */}
                <div className="mt-auto flex flex-col gap-5 border-t border-line pt-6">
                  <dl className="grid grid-cols-2 gap-6 font-mono text-sm">
                    <div>
                      <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-faint">Platform</dt>
                      <dd className="mt-0.5 text-ink">{p.platform}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-faint">Year</dt>
                      <dd className="mt-0.5 text-ink">{p.year}</dd>
                    </div>
                  </dl>
                  <Tags items={p.tags} />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

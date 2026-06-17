import { useLang } from "../i18n";
import { UI, EXPERIENCE } from "../data";
import { Section } from "./Section";

export function Experience() {
  const { tr } = useLang();

  return (
    <Section id="experience" index="03" title={UI.experienceTitle}>
      <div className="flex flex-col">
        {EXPERIENCE.map((job, i) => (
          <article
            key={i}
            className="grid gap-x-8 gap-y-3 border-t border-border py-8 sm:grid-cols-[140px_1fr]"
          >
            <div className="font-mono text-sm text-muted">{tr(job.period)}</div>
            <div>
              <h3 className="text-lg font-semibold">{tr(job.role)}</h3>
              <p className="mt-0.5 text-sm font-medium text-accent">{tr(job.company)}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {job.points.map((p, j) => (
                  <li key={j} className="relative pl-5 text-[0.96rem] text-muted">
                    <span className="absolute left-0 top-0 text-accent">—</span>
                    {tr(p)}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

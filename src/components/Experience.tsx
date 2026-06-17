import { useLang } from "../i18n";
import { UI, EXPERIENCE } from "../data";
import { Section } from "./Section";

export function Experience() {
  const { tr } = useLang();

  return (
    <Section id="experience" index="03" title={UI.experienceTitle}>
      <div className="relative pl-7">
        {/* gradient spine */}
        <span className="absolute bottom-1.5 left-[5px] top-1.5 w-0.5 bg-gradient-to-b from-purple via-pink to-orange" />
        {EXPERIENCE.map((job, i) => (
          <article key={i} className="relative mb-6">
            <span className="absolute -left-7 top-6 h-3 w-3 rounded-full bg-cyan shadow-[0_0_0_4px_rgba(34,211,238,0.18)]" />
            <div className="group rounded-[20px] border border-white/10 bg-white/5 px-6 py-5 transition-all duration-300 hover:translate-x-1 hover:border-purple">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[1.18rem]">{tr(job.role)}</h3>
                <span className="font-mono text-[0.82rem] text-cyan">{tr(job.period)}</span>
              </div>
              <p className="mb-3.5 mt-0.5 font-semibold text-pink">{tr(job.company)}</p>
              <ul className="grid gap-2.5">
                {job.points.map((p, j) => (
                  <li key={j} className="relative pl-5 text-[0.96rem] text-muted">
                    <span className="absolute left-0 text-orange">▹</span>
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

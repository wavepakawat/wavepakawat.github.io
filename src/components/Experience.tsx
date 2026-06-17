import { useLang } from "../i18n";
import { UI, EXPERIENCE } from "../data";
import { MaskText } from "./MaskText";
import { Reveal } from "./Reveal";

export function Experience() {
  const { tr } = useLang();

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-36">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        ( {tr(UI.experienceTitle)} )
      </span>
      <MaskText
        as="h2"
        text={tr(UI.experienceTitle)}
        className="text-giant mt-6 block font-bold"
      />

      <div className="mt-16 flex flex-col">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={i}>
            <article className="group grid gap-x-10 gap-y-4 border-t border-line py-10 transition-colors last:border-b hover:bg-bg2 sm:grid-cols-[160px_1fr] sm:px-2">
              <div className="font-mono text-sm text-muted">{tr(job.period)}</div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-bold sm:text-3xl">{tr(job.role)}</h3>
                  <span className="font-mono text-sm text-accent">{tr(job.company)}</span>
                </div>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {job.points.map((p, j) => (
                    <li key={j} className="relative max-w-2xl pl-6 text-muted">
                      <span className="absolute left-0 top-0 text-accent">→</span>
                      {tr(p)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

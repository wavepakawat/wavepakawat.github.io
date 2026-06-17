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

      <div className="relative mt-16">
        {/* timeline rail */}
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-3 bottom-3 w-px bg-line"
        />
        <div className="flex flex-col gap-14">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={i}>
              <article className="group relative pl-10">
                {/* node */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 grid h-3.5 w-3.5 place-items-center rounded-full border border-line bg-bg transition-colors group-hover:border-accent"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {tr(job.period)}
                </div>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-bold sm:text-3xl">{tr(job.role)}</h3>
                  <span className="font-mono text-sm text-muted">{tr(job.company)}</span>
                </div>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {job.points.map((p, j) => (
                    <li key={j} className="relative max-w-2xl pl-6 text-muted">
                      <span className="absolute left-0 top-0 text-accent">→</span>
                      {tr(p)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

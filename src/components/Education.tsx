import { GraduationCap } from "lucide-react";
import { useLang } from "../i18n";
import { UI, EDUCATION } from "../data";
import { Reveal } from "./Reveal";

export function Education() {
  const { tr } = useLang();

  return (
    <section id="education" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-24 sm:px-8 sm:pb-36">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        ( {tr(UI.educationTitle)} )
      </span>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {EDUCATION.map((e, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <article className="flex h-full items-start gap-4 rounded-2xl border border-line bg-bg2 p-7">
              <span className="mt-1 text-accent">
                <GraduationCap size={22} strokeWidth={1.8} />
              </span>
              <div>
                <span className="font-mono text-xs text-muted">{e.period}</span>
                <h3 className="mt-1 text-xl font-bold">{tr(e.degree)}</h3>
                <p className="mt-1 text-muted">{tr(e.school)}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { GraduationCap } from "lucide-react";
import { useLang } from "../i18n";
import { UI, EDUCATION } from "../data";
import { Section } from "./Section";

export function Education() {
  const { tr } = useLang();

  return (
    <Section id="education" index="05" title={UI.educationTitle}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {EDUCATION.map((e, i) => (
          <article
            key={i}
            className="rounded-[20px] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan"
          >
            <span className="mb-3 inline-grid h-10 w-10 place-items-center rounded-xl grad-cool text-white">
              <GraduationCap size={22} strokeWidth={2} />
            </span>
            <span className="block font-mono text-[0.82rem] text-cyan">{e.period}</span>
            <h3 className="mb-1 mt-1.5 text-[1.2rem]">{tr(e.degree)}</h3>
            <p className="text-muted">{tr(e.school)}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

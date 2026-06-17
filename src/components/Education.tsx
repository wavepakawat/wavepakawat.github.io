import { GraduationCap } from "lucide-react";
import { useLang } from "../i18n";
import { UI, EDUCATION } from "../data";
import { Section } from "./Section";

export function Education() {
  const { tr } = useLang();

  return (
    <Section id="education" index="05" title={UI.educationTitle}>
      <div className="flex flex-col">
        {EDUCATION.map((e, i) => (
          <article
            key={i}
            className="grid gap-x-8 gap-y-2 border-t border-border py-8 sm:grid-cols-[140px_1fr]"
          >
            <div className="font-mono text-sm text-muted">{e.period}</div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-accent">
                <GraduationCap size={20} strokeWidth={2} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{tr(e.degree)}</h3>
                <p className="mt-0.5 text-muted">{tr(e.school)}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

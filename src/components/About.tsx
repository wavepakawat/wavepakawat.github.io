import { useLang } from "../i18n";
import { UI } from "../data";
import { Section } from "./Section";

export function About() {
  const { tr } = useLang();

  return (
    <Section id="about" index="01" title={UI.about.title}>
      <p className="max-w-2xl text-xl leading-relaxed">{tr(UI.about.lead)}</p>
      <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
        {UI.about.facts.map((f) => (
          <div key={f.num}>
            <span className="block font-display text-3xl font-extrabold text-accent sm:text-4xl">
              {f.num}
            </span>
            <span className="mt-1 block text-sm text-muted">{tr(f.label)}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

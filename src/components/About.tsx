import { useLang } from "../i18n";
import { UI } from "../data";
import { Section } from "./Section";

export function About() {
  const { tr } = useLang();

  return (
    <Section id="about" index="01" title={UI.about.title}>
      <p className="max-w-[60ch] text-[clamp(1.15rem,2.6vw,1.5rem)]">{tr(UI.about.lead)}</p>
      <div className="mt-10 flex flex-wrap gap-5">
        {UI.about.facts.map((f) => (
          <div
            key={f.num}
            className="flex-1 basis-40 rounded-[20px] border border-white/10 bg-white/5 px-6 py-5"
          >
            <span className="block grad-cool bg-clip-text font-display text-[2.2rem] font-extrabold text-transparent">
              {f.num}
            </span>
            <span className="text-sm text-muted">{tr(f.label)}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

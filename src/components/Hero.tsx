import { ArrowRight, Download, ArrowDown } from "lucide-react";
import { useLang } from "../i18n";
import { PROFILE, UI, HERO_STACK } from "../data";
import { useReveal, revealCls } from "../useReveal";

export function Hero() {
  const { tr } = useLang();
  const [ref, inView] = useReveal<HTMLDivElement>();

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8"
    >
      <div ref={ref} className={revealCls(inView)}>
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
          <img
            src="/assets/profile.png"
            alt="Portrait of Pakawat Maleephet"
            width={120}
            height={120}
            className="h-24 w-24 shrink-0 rounded-full border border-border object-cover sm:h-32 sm:w-32"
          />
          <div>
            <p className="mb-2 font-mono text-sm text-accent">{tr(UI.hero.eyebrow)}</p>
            <h1 className="text-[clamp(2.4rem,7vw,4rem)] font-extrabold leading-[1.05]">
              Pakawat Maleephet
            </h1>
            <p className="mt-2 text-[clamp(1.05rem,3vw,1.5rem)] font-medium text-muted">
              {tr(PROFILE.role)}
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-lg text-muted">{tr(UI.hero.tagline)}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-[0.95rem] font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            {tr(UI.hero.cta)}
            <ArrowRight size={18} />
          </a>
          <a
            href={PROFILE.resume}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-[0.95rem] font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={18} />
            {tr(UI.hero.resume)}
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.8rem] text-faint">
          {HERO_STACK.map((s, i) => (
            <li key={s} className="flex items-center gap-4">
              {i > 0 && <span className="text-border">/</span>}
              {s}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-5 hidden text-faint transition-colors hover:text-accent sm:left-8 sm:block"
      >
        <ArrowDown size={20} className="animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}

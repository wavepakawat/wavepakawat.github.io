import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { useLang } from "../i18n";
import { PROFILE, UI, HERO_STACK } from "../data";
import { useReveal, revealCls } from "../useReveal";

export function Hero() {
  const { tr } = useLang();
  const [textRef, textIn] = useReveal<HTMLDivElement>();
  const [avatarRef, avatarIn] = useReveal<HTMLDivElement>();

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-5 pb-12 pt-24 sm:px-8"
    >
      <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
        <div ref={textRef} className={`order-2 text-center md:order-1 md:text-left ${revealCls(textIn)}`}>
          <p className="font-display font-semibold tracking-wide text-cyan">{tr(UI.hero.eyebrow)}</p>
          <h1 className="my-1.5 bg-gradient-to-br from-white to-[#d9cffd] bg-clip-text text-[clamp(2.8rem,9vw,5.4rem)] font-extrabold text-transparent">
            Pakawat
            <br />
            Maleephet
          </h1>
          <p className="grad-main bg-clip-text font-display text-[clamp(1.1rem,3.5vw,1.9rem)] font-bold text-transparent">
            {tr(PROFILE.role)}
          </p>
          <p className="mx-auto mb-7 mt-4 max-w-[42ch] text-muted md:mx-0">{tr(UI.hero.tagline)}</p>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full grad-main px-6 py-3 font-display text-[0.95rem] font-semibold text-white shadow-[0_10px_30px_rgba(255,94,174,0.35)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {tr(UI.hero.cta)}
              <ArrowRight size={18} />
            </a>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-display text-[0.95rem] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-purple hover:bg-white/5"
            >
              <Download size={18} />
              {tr(UI.hero.resume)}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-2 font-mono text-[0.78rem] text-faint md:justify-start">
            {HERO_STACK.map((s) => (
              <li key={s} className="rounded-full border border-white/10 px-3 py-1">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div ref={avatarRef} className={`order-1 flex justify-center md:order-2 ${revealCls(avatarIn)}`}>
          <div className="relative aspect-square w-[clamp(220px,34vw,340px)] animate-ringspin rounded-full grad-main p-1.5 shadow-[0_20px_60px_rgba(139,92,246,0.45)] motion-reduce:animate-none">
            <img
              src="/assets/profile.png"
              alt="Portrait of Pakawat Maleephet"
              width={320}
              height={320}
              className="h-full w-full rounded-full bg-bgsoft object-cover"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-scrolldot text-cyan motion-reduce:animate-none sm:block"
      >
        <ChevronDown size={22} />
      </a>
    </section>
  );
}

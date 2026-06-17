import { ArrowDown } from "lucide-react";
import { useLang } from "../i18n";
import { PROFILE, UI } from "../data";
import { MaskText } from "./MaskText";

export function Hero({ play }: { play: boolean }) {
  const { tr } = useLang();

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-5 pb-8 pt-28 text-white sm:px-8"
    >
      {/* full-bleed portrait */}
      <img
        src={`${import.meta.env.BASE_URL}assets/profile_full_background.jpg`}
        alt=""
        aria-hidden="true"
        className="hero-img pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover [object-position:68%_35%]"
      />
      {/* legibility scrim: overall tint + gradients seating the type */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/25 bg-gradient-to-t from-black/75 via-black/15 to-black/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-transparent to-transparent"
      />

      {/* telemetry row */}
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/75">
        <span>{tr(PROFILE.role)}</span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {tr(UI.hero.available)}
        </span>
        <span>Bangkok, TH · 2026</span>
      </div>

      {/* name — the signature */}
      <div className="-mt-4">
        <MaskText
          as="h1"
          text="Pakawat"
          play={play}
          delay={0.1}
          className="text-mega block font-bold"
        />
        <MaskText
          as="h1"
          text="Maleephet"
          play={play}
          delay={0.22}
          className="text-mega block font-bold text-accent"
        />
      </div>

      {/* tagline + scroll cue */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-md text-lg text-white/80">{tr(UI.hero.tagline)}</p>
        <a
          href="#about"
          className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-white"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition-colors group-hover:border-accent group-hover:text-accent">
            <ArrowDown size={16} className="animate-bounce motion-reduce:animate-none" />
          </span>
          {tr(UI.hero.scroll)}
        </a>
      </div>
    </section>
  );
}

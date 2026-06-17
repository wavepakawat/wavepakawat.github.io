import { useEffect, useRef, useState } from "react";
import { Fuel, MapPin, BarChart3, Building2, type LucideIcon } from "lucide-react";
import { useLang } from "../i18n";
import { UI, PROJECTS, type Project } from "../data";
import { gsap, prefersReduced } from "../lib/motion";
import { Tags } from "./Tags";

const ICONS: Record<Project["icon"], LucideIcon> = {
  fuel: Fuel,
  pin: MapPin,
  chart: BarChart3,
  building: Building2,
};

export function Work() {
  const { tr } = useLang();
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [horizontal, setHorizontal] = useState(false);

  useEffect(() => {
    const can = window.matchMedia("(min-width: 768px)").matches && !prefersReduced();
    setHorizontal(can);
    if (!can) return;

    const sec = section.current;
    const trk = track.current;
    if (!sec || !trk) return;

    const amount = () => trk.scrollWidth - window.innerWidth + 64;
    const ctx = gsap.context(() => {
      gsap.to(trk, {
        x: () => -amount(),
        ease: "none",
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => "+=" + amount(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sec);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={section}
      className={`relative scroll-mt-24 ${horizontal ? "h-svh overflow-hidden" : ""}`}
    >
      <div
        className={`flex items-end justify-between px-5 pb-8 pt-24 sm:px-8 ${
          horizontal ? "md:absolute md:left-0 md:top-0 md:z-10 md:pb-0" : ""
        }`}
      >
        <h2 className="text-giant font-bold">{tr(UI.projectsTitle)}</h2>
        <span className="hidden font-mono text-xs uppercase tracking-[0.16em] text-muted md:block">
          [ 0{PROJECTS.length} ] — keep scrolling
        </span>
      </div>

      <div
        ref={track}
        className={
          horizontal
            ? "flex h-full w-max flex-row flex-nowrap items-center gap-8 px-8 pt-24"
            : "flex flex-col gap-6 px-5 pb-16 sm:px-8"
        }
      >
        {PROJECTS.map((p, i) => {
          const Icon = ICONS[p.icon];
          const num = String(i + 1).padStart(2, "0");
          return (
            <article
              key={i}
              className={`group relative flex shrink-0 flex-col overflow-hidden rounded-2xl border border-line bg-bg2 p-7 transition-colors hover:border-accent ${
                horizontal ? "h-[64vh] w-[78vw] lg:w-[46vw]" : "w-full"
              }`}
            >
              {/* ghost index — fills the space a screenshot would, on purpose */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[12rem] font-bold leading-none text-line/60 sm:text-[16rem]"
              >
                {num}
              </span>

              {/* top: icon + category */}
              <div className="relative flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-line text-accent">
                  <Icon size={24} strokeWidth={1.8} />
                </span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  {tr(p.type)}
                </span>
              </div>

              {/* bottom: title + description + metadata + stack */}
              <div className="relative mt-auto pt-12">
                <h3 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[0.98]">
                  {tr(p.title)}
                </h3>
                <p className="mb-6 mt-4 max-w-md text-muted">{tr(p.desc)}</p>

                <dl className="mb-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-5 font-mono text-sm">
                  <div>
                    <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-faint">Platform</dt>
                    <dd className="mt-0.5 text-ink">{p.platform}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-faint">Year</dt>
                    <dd className="mt-0.5 text-ink">{p.year}</dd>
                  </div>
                </dl>

                <Tags items={p.tags} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

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
          return (
            <article
              key={i}
              data-cursor
              className={`flex shrink-0 flex-col justify-between rounded-2xl border border-line bg-bg2 p-7 transition-colors hover:border-accent ${
                horizontal ? "h-[64vh] w-[78vw] lg:w-[44vw]" : "w-full"
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")} / 0{PROJECTS.length}
                </span>
                <span className="text-accent">
                  <Icon size={28} strokeWidth={1.8} />
                </span>
              </div>
              <div className="mt-10">
                <h3 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[0.98]">
                  {tr(p.title)}
                </h3>
                <p className="mb-6 mt-4 max-w-md text-muted">{tr(p.desc)}</p>
                <Tags items={p.tags} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

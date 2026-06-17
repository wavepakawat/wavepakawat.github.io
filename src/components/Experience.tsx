import { useEffect, useRef } from "react";
import { useLang } from "../i18n";
import { UI, EXPERIENCE } from "../data";
import { MaskText } from "./MaskText";
import { gsap, ScrollTrigger, prefersReduced } from "../lib/motion";

export function Experience() {
  const { tr } = useLang();
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    if (prefersReduced()) {
      el.querySelectorAll(".exp-item").forEach((it) => it.classList.add("is-on"));
      return;
    }

    const ctx = gsap.context(() => {
      // Accent rail fills as the section scrolls through the viewport, and
      // holds — it only ever grows, never retracts on scroll-up.
      if (progress.current) {
        const bar = progress.current;
        gsap.set(bar, { transformOrigin: "top center", scaleY: 0 });
        let max = 0;
        ScrollTrigger.create({
          trigger: el,
          start: "top 62%",
          end: "bottom 78%",
          onUpdate: (self) => {
            if (self.progress > max) {
              max = self.progress;
              gsap.set(bar, { scaleY: max });
            }
          },
        });
      }

      // Each entry reveals and lights its node as it reaches the viewport.
      gsap.utils.toArray<HTMLElement>(".exp-item").forEach((item) => {
        const content = item.querySelector(".exp-content");
        const halo = item.querySelector(".exp-halo");
        gsap.set(content, { opacity: 0, y: 26 });
        ScrollTrigger.create({
          trigger: item,
          start: "top 80%",
          once: true,
          onEnter: () => {
            item.classList.add("is-on");
            gsap.to(content, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
            gsap.fromTo(
              halo,
              { scale: 0.4, opacity: 0.55 },
              { scale: 2.2, opacity: 0, duration: 0.95, ease: "power2.out" },
            );
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 sm:px-8 sm:py-36"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        ( {tr(UI.experienceTitle)} )
      </span>
      <MaskText
        as="h2"
        text={tr(UI.experienceTitle)}
        className="text-giant mt-6 block font-bold"
      />

      <div ref={root} className="relative mt-16">
        {/* faint base rail */}
        <span
          aria-hidden="true"
          className="absolute left-[15px] top-2 bottom-2 w-0.5 rounded bg-line"
        />
        {/* accent progress rail (scroll-linked) */}
        <span
          ref={progress}
          aria-hidden="true"
          className="absolute left-[15px] top-2 bottom-2 w-0.5 rounded bg-accent"
        />

        <div className="flex flex-col gap-14">
          {EXPERIENCE.map((job, i) => (
            <article key={i} className="exp-item group relative pl-12">
              {/* node */}
              <span
                aria-hidden="true"
                className="absolute left-4 top-1 -translate-x-1/2"
              >
                <span className="exp-halo absolute inset-0 rounded-full bg-accent" />
                <span className="relative grid h-4 w-4 place-items-center rounded-full border-2 border-line bg-bg transition-colors duration-500 [.is-on_&]:border-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-line transition-colors duration-500 [.is-on_&]:bg-accent" />
                </span>
              </span>

              <div className="exp-content">
                <div className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {tr(job.period)}
                </div>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-2xl font-bold sm:text-3xl">{tr(job.role)}</h3>
                  <span className="font-mono text-sm text-muted">{tr(job.company)}</span>
                </div>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {job.points.map((p, j) => (
                    <li key={j} className="relative max-w-2xl pl-6 text-muted">
                      <span className="absolute left-0 top-0 text-accent">→</span>
                      {tr(p)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReduced } from "../lib/motion";

/**
 * Intro counter (00 → 100) then a curtain wipe.
 * - onReady fires immediately so the app warms up (Lenis, ScrollTrigger)
 *   behind the still-covered loader, keeping that work off the curtain frame.
 * - onReveal fires as the curtain lifts, timing the hero reveal to the wipe.
 */
export function Loader({
  onReady,
  onReveal,
}: {
  onReady: () => void;
  onReveal: () => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (prefersReduced()) {
      onReady();
      onReveal();
      const el = root.current;
      if (el) el.style.display = "none";
      return;
    }

    // Warm the app now, while the loader still fully covers the screen,
    // so Lenis/ScrollTrigger setup never competes with the curtain wipe.
    onReady();

    const obj = { v: 0 };
    const tl = gsap.timeline();

    tl.to(obj, {
      v: 100,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => setCount(Math.round(obj.v)),
    });
    tl.to(".loader__bar", { scaleX: 1, duration: 1.2, ease: "power2.out" }, 0);
    tl.to(
      root.current,
      {
        yPercent: -100,
        duration: 0.75,
        ease: "power4.inOut",
        onStart: onReveal,
        onComplete: () => {
          const el = root.current;
          if (el) el.style.display = "none";
        },
      },
      ">+0.05",
    );

    return () => {
      tl.kill();
    };
  }, [onReady, onReveal]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[90] flex flex-col justify-end bg-bg px-5 pb-10 sm:px-8"
    >
      <div className="loader__meta flex items-end justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Pakawat Maleephet — Portfolio
        </span>
        <span className="font-display text-[18vw] font-bold leading-none text-ink sm:text-[12vw]">
          {String(count).padStart(3, "0")}
        </span>
      </div>
      <div className="mt-6 h-px w-full bg-line">
        <div className="loader__bar h-full origin-left scale-x-0 bg-accent" />
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReduced } from "../lib/motion";

/** Intro counter (00 → 100) then a curtain wipe. Calls onDone when finished. */
export function Loader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (prefersReduced()) {
      onDone();
      const el = root.current;
      if (el) el.style.display = "none";
      return;
    }

    const obj = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        const el = root.current;
        if (el) el.style.display = "none";
      },
    });

    tl.to(obj, {
      v: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => setCount(Math.round(obj.v)),
    });
    tl.to(".loader__bar", { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0);
    tl.to(".loader__meta", { opacity: 0, duration: 0.3 }, ">-0.1");
    tl.to(root.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
      onStart: onDone,
    });

    return () => {
      tl.kill();
    };
  }, [onDone]);

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

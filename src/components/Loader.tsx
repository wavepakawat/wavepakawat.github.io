import { useEffect, useRef, useState } from "react";
import { gsap, prefersReduced } from "../lib/motion";

const HERO_SRC = `${import.meta.env.BASE_URL}assets/profile_hero.webp`;

// Module-level guard: the intro plays exactly once, even though React
// StrictMode mounts effects twice in development.
let hasPlayed = false;

/** Decode an image up front so it can't pop in after the curtain lifts. */
function preload(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    const done = () => resolve();
    img.onload = () => (img.decode ? img.decode().then(done, done) : done());
    img.onerror = done;
    img.src = src;
  });
}

/**
 * Single intro: count 00 → 100 while the app warms behind the cover, then a
 * curtain wipe that lifts only once the hero image and fonts are ready — so
 * the reveal is one continuous motion with no second "loading" stage.
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
    const hide = () => {
      const el = root.current;
      if (el) el.style.display = "none";
    };

    // Second StrictMode mount (or already finished): the first run owns the
    // intro — just make sure the app is unblocked and the cover is gone.
    if (hasPlayed) {
      onReady();
      onReveal();
      hide();
      return;
    }
    hasPlayed = true;

    if (prefersReduced()) {
      onReady();
      onReveal();
      hide();
      return;
    }

    // Warm Lenis/ScrollTrigger now, while the cover is still up.
    onReady();

    const obj = { v: 0 };
    gsap.to(obj, {
      v: 100,
      duration: 1.1,
      ease: "power2.out",
      onUpdate: () => setCount(Math.round(obj.v)),
    });
    gsap.to(".loader__bar", { scaleX: 1, duration: 1.1, ease: "power2.out" });

    // Lift the curtain once the count has visibly finished AND the hero is
    // truly ready — but never hang waiting on a slow font/network.
    const assets = Promise.race([
      Promise.all([
        preload(HERO_SRC),
        document.fonts ? document.fonts.ready : Promise.resolve(),
      ]),
      new Promise((r) => setTimeout(r, 2500)),
    ]);
    const minShown = new Promise((r) => setTimeout(r, 1150));

    Promise.all([assets, minShown]).then(() => {
      onReveal();
      gsap.to(root.current, {
        yPercent: -100,
        duration: 0.75,
        ease: "power4.inOut",
        onComplete: hide,
      });
    });
    // Intentionally no cleanup: the intro is fire-once and plays to completion.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

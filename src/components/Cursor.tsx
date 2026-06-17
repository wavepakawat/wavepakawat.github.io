import { useEffect, useRef } from "react";
import { gsap, prefersReduced, hasFinePointer } from "../lib/motion";

/**
 * Magnetic custom cursor: a small dot with an easing ring that grows over
 * interactive elements. Only on fine-pointer, motion-allowed devices.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasFinePointer() || prefersReduced()) return;
    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    const xTo = gsap.quickTo(r, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(r, "y", { duration: 0.5, ease: "power3" });
    const dxTo = gsap.quickTo(d, "x", { duration: 0.12, ease: "power3" });
    const dyTo = gsap.quickTo(d, "y", { duration: 0.12, ease: "power3" });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dxTo(e.clientX);
      dyTo(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [data-cursor]");
      gsap.to(r, {
        scale: interactive ? 2.2 : 1,
        opacity: interactive ? 1 : 0.6,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    gsap.set([d, r], { xPercent: -50, yPercent: -50 });
    gsap.to([d, r], { opacity: 1, duration: 0.4 });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-accent opacity-0 max-[768px]:hidden"
        aria-hidden="true"
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent opacity-0 max-[768px]:hidden"
        aria-hidden="true"
      />
    </>
  );
}

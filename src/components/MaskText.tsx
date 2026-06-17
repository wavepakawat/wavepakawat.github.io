import { useEffect, useRef, type ElementType } from "react";
import { gsap, ScrollTrigger, prefersReduced } from "../lib/motion";

interface Props {
  text: string;
  as?: ElementType;
  className?: string;
  /** Controlled trigger. If omitted, plays when scrolled into view. */
  play?: boolean;
  delay?: number;
  stagger?: number;
}

/**
 * Splits text into words and reveals each from behind a mask (translateY).
 * Used for headlines — the page's kinetic-type signature.
 */
export function MaskText({
  text,
  as = "span",
  className = "",
  play,
  delay = 0,
  stagger = 0.06,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");
  const controlled = play !== undefined;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inners = el.querySelectorAll<HTMLElement>("[data-w]");

    if (prefersReduced()) {
      gsap.set(inners, { yPercent: 0 });
      return;
    }

    gsap.set(inners, { yPercent: 115 });
    const anim = () =>
      gsap.to(inners, {
        yPercent: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger,
        delay,
      });

    if (controlled) {
      if (play) anim();
      return;
    }

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: anim,
    });
    return () => st.kill();
  }, [play, controlled, delay, stagger]);

  // dynamic tag; `any` keeps the ref prop assignable across element types
  const Comp: any = as;

  return (
    <Comp ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden align-bottom">
            <span data-w className="inline-block will-change-transform">
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Comp>
  );
}

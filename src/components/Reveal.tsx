import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, prefersReduced } from "../lib/motion";

interface Props {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}

/** Fade + rise a block into view on scroll. */
export function Reveal({ children, className = "", y = 26, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return;

    gsap.set(el, { opacity: 0, y });
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () =>
        gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay }),
    });
    return () => st.kill();
  }, [y, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

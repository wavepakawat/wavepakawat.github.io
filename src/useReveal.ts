import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Scroll-reveal hook. Returns a ref to attach and a boolean that flips to
 * true once the element enters the viewport (once). Pair with Tailwind
 * transition + opacity/translate classes in the consumer.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView];
}

/** Tailwind classes for the reveal transition. */
export const revealCls = (inView: boolean) =>
  `transition-all duration-700 ease-out motion-reduce:transition-none ${
    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
  }`;

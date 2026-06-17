import type { ReactNode } from "react";
import { useLang, type L } from "../i18n";
import { useReveal, revealCls } from "../useReveal";

interface Props {
  id: string;
  index: string;
  title: L;
  children: ReactNode;
  center?: boolean;
}

/** Standard content section with a numbered, gradient header and scroll-reveal. */
export function Section({ id, index, title, children, center }: Props) {
  const { tr } = useLang();
  const [ref, inView] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className={`mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24 ${revealCls(inView)}`}
    >
      <div className={`mb-10 flex items-baseline gap-4 ${center ? "justify-center" : ""}`}>
        <span className="font-mono text-sm text-cyan/80">{index}</span>
        <h2 className="text-3xl font-extrabold sm:text-[2.6rem]">{tr(title)}</h2>
      </div>
      {children}
    </section>
  );
}

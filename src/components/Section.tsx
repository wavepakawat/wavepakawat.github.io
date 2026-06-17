import type { ReactNode } from "react";
import { useLang, type L } from "../i18n";
import { useReveal, revealCls } from "../useReveal";

interface Props {
  id: string;
  index: string;
  title: L;
  children: ReactNode;
}

/** Editorial section: numbered eyebrow + title with a thin rule, then content. */
export function Section({ id, index, title, children }: Props) {
  const { tr } = useLang();
  const [ref, inView] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className={`mx-auto max-w-4xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 ${revealCls(inView)}`}
    >
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-sm font-medium text-accent">{index}</span>
        <h2 className="text-2xl font-bold sm:text-3xl">{tr(title)}</h2>
        <span className="h-px flex-1 bg-border" />
      </div>
      {children}
    </section>
  );
}

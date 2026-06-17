import { HERO_STACK } from "../data";

/** Infinite horizontal marquee of the core stack. */
export function Marquee() {
  const items = [...HERO_STACK, "React.js", "Tailwind", "Docker"];
  // rendered twice inside one track; the -50% animation makes the loop seamless
  const loop = [...items, ...items];

  return (
    <div className="select-none overflow-hidden border-y border-line py-6">
      <div className="marquee-track items-center">
        {loop.map((s, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 text-giant font-semibold">{s}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

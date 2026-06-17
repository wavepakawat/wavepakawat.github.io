import { TECH } from "../lib/techIcons";

/** Pill list of tech tags, with real brand icons where available. */
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => {
        const tech = TECH[t];
        return (
          <li
            key={t}
            className="flex items-center gap-1.5 rounded-full border border-line bg-bg2 px-3 py-1 font-mono text-[0.74rem] text-muted"
          >
            {tech && (
              <tech.Icon
                size={14}
                color={tech.color}
                className={tech.color ? "" : "text-ink"}
              />
            )}
            {t}
          </li>
        );
      })}
    </ul>
  );
}

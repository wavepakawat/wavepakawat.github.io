import { TECH } from "../lib/techIcons";

const SIZES = {
  sm: { li: "gap-1.5 px-3 py-1 text-[0.74rem]", icon: 14 },
  md: { li: "gap-2 px-3.5 py-1.5 text-[0.82rem]", icon: 16 },
} as const;

/** Pill list of tech tags, with real brand icons where available. */
export function Tags({
  items,
  size = "sm",
}: {
  items: string[];
  size?: keyof typeof SIZES;
}) {
  const s = SIZES[size];
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => {
        const tech = TECH[t];
        return (
          <li
            key={t}
            className={`flex items-center rounded-full border border-line bg-bg2 font-mono text-muted ${s.li}`}
          >
            {tech?.src ? (
              <img
                src={`${import.meta.env.BASE_URL}${tech.src}`}
                alt=""
                aria-hidden="true"
                width={s.icon}
                height={s.icon}
                loading="lazy"
                decoding="async"
                className={`shrink-0 ${tech.invert ? "dark:invert" : ""}`}
              />
            ) : tech?.Icon ? (
              <tech.Icon
                size={s.icon}
                color={tech.color}
                className={tech.color ? "" : "text-ink"}
              />
            ) : null}
            {t}
          </li>
        );
      })}
    </ul>
  );
}

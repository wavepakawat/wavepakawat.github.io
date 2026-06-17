import { TECH } from "../lib/techIcons";

/** Infinite horizontal marquee of the core stack, with brand logos. */
export function Marquee() {
  const items = [
    "React Native",
    "Golang",
    "C# .NET Core",
    "Next.js",
    "SQL Server",
    "React.js",
    "Tailwind CSS",
    "Docker",
    "MongoDB",
    "Figma",
  ];
  // rendered twice inside one track; the -50% animation makes the loop seamless
  const loop = [...items, ...items];

  return (
    <div className="select-none overflow-hidden border-y border-line py-6">
      <div className="marquee-track items-center">
        {loop.map((s, i) => {
          const tech = TECH[s];
          return (
            <span key={i} className="flex items-center">
              <span className="flex items-center gap-4 px-7 text-giant font-semibold">
                {tech && (
                  <tech.Icon
                    size="0.78em"
                    color={tech.color}
                    className={tech.color ? "" : "text-ink"}
                  />
                )}
                {s}
              </span>
              <span className="text-accent">✦</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

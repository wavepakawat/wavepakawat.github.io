/** Pill list of tech tags. */
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[0.78rem] text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Pill list of tech tags. */
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-line bg-bg2 px-3 py-1 font-mono text-[0.74rem] text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

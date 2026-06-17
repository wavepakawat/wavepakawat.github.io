/** Pill list of tech tags. */
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[0.76rem] text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

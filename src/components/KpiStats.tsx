export default function KpiStats({
  items,
}: {
  items: { value: string; label: string; note?: string; accent?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((k) => (
        <div
          key={k.label}
          className="relative overflow-hidden rounded-xl border border-line bg-card p-4"
        >
          <span
            className="absolute left-0 top-0 h-full w-[3px]"
            style={{ background: k.accent ?? "var(--accent)" }}
          />
          <div className="font-display text-2xl font-semibold tracking-tight">{k.value}</div>
          <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-text-sec">
            {k.label}
          </div>
          {k.note && <div className="mt-1.5 text-xs text-text-sec">{k.note}</div>}
        </div>
      ))}
    </div>
  );
}

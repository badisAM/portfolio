export default function MetricBars({
  metrics,
}: {
  metrics: { label: string; value: number }[];
}) {
  return (
    <div className="space-y-3">
      {metrics.map((m) => (
        <div key={m.label} className="flex items-center gap-3">
          <span className="w-20 shrink-0 font-mono text-xs text-text-sec">{m.label}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-line/60">
            <div className="h-full rounded-full bg-accent" style={{ width: `${m.value}%` }} />
          </div>
          <span className="w-14 shrink-0 text-right font-mono text-xs text-accent">
            {m.value}%
          </span>
        </div>
      ))}
    </div>
  );
}
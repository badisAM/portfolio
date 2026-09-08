export default function BarCompare() {
  const rows = [
    { label: "Avant", value: "120 min", width: "100%", color: "bg-line" },
    { label: "Après", value: "2 min", width: "4%", color: "bg-accent" },
  ];
  return (
    <div className="space-y-2.5">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-3">
          <span className="w-12 shrink-0 text-xs text-text-sec">{r.label}</span>
          <div className="h-2 flex-1 rounded-full bg-line/60 overflow-hidden">
            <div className={`h-full rounded-full ${r.color}`} style={{ width: r.width }} />
          </div>
          <span className="w-14 shrink-0 text-right text-xs text-text-sec">{r.value}</span>
        </div>
      ))}
      <p className="pt-1 text-xs text-text-sec">Temps de génération du rapport, par jour.</p>
    </div>
  );
}

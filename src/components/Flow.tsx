const steps = [
  { label: "Requête JIRA/Xray" },
  { label: "Pré-filtrage BM25" },
  { label: "Embeddings" },
  { label: "8 agents de vérification", accent: true },
  { label: "Preuves citées" },
  { label: "Rapport : 1000+ cas audités", highlight: true },
];

export default function Flow() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-2.5">
          <div
            className={`rounded-lg border px-3.5 py-2.5 text-xs font-medium ${
              s.accent
                ? "border-accent text-accent"
                : s.highlight
                ? "border-[#4fa8a0] text-[#4fa8a0]"
                : "border-line text-text-sec"
            }`}
          >
            {s.label}
          </div>
          {i < steps.length - 1 && <span className="text-text-sec">→</span>}
        </div>
      ))}
    </div>
  );
}

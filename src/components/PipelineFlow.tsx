import Image from "next/image";

const STEPS: { logo: string | null; name: string; role: string }[] = [
  { logo: "/images/projects/PowerBI/odoo.png",         name: "Odoo",       role: "ERP source" },
  { logo: "/images/projects/PowerBI/talend.png",       name: "Talend",     role: "ETL" },
  { logo: "/images/projects/PowerBI/ssms.png",         name: "SQL Server", role: "Entrepôt" },
  { logo: "/images/projects/PowerBI/powerbi_logo.png", name: "Power BI",   role: "Rapports" },
  { logo: null,                                        name: "Portail web", role: "Diffusion" },
];

export default function PipelineFlow() {
  return (
    <div className="flex flex-wrap items-stretch gap-2">
      {STEPS.map((s, i) => (
        <div key={s.name} className="flex items-center gap-2">
          <div className="flex w-[124px] flex-col items-center gap-2 rounded-xl border border-line bg-card px-3 py-4 text-center">
            <div className="flex h-10 items-center justify-center">
              {s.logo ? (
                <Image
                  src={s.logo}
                  alt={s.name}
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              ) : (
                <span className="text-2xl text-accent">◧</span>
              )}
            </div>
            <div className="text-[13px] font-semibold leading-tight">{s.name}</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-text-sec">
              {s.role}
            </div>
          </div>
          {i < STEPS.length - 1 && (
            <span className="text-accent/60" aria-hidden>
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

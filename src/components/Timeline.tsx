import { timeline } from "@/data/projects";

export default function Timeline() {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-line" />
      {timeline.map((item, i) => (
        <div key={i} className="relative pb-9 last:pb-0">
          <div className="absolute -left-8 top-1 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg-alt" />
          <div className="font-display text-xs font-semibold text-accent">{item.year}</div>
          <div className="mt-1 text-base font-semibold">{item.title}</div>
          <div className="text-sm text-text-sec">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}

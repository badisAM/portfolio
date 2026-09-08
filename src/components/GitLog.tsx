import { timeline } from "@/data/projects";

// deterministic short hashes, purely decorative
const hashes = ["a17f4d2", "c49b9e1", "e31d8aa", "7b52f0c", "1f9c3aa"];

export default function GitLog() {
  return (
    <div className="font-mono text-[13px] leading-relaxed">
      {timeline.map((item, i) => (
        <div key={i} className="flex gap-4 pb-6 last:pb-0">
          <div className="flex flex-col items-center">
            <span className="text-accent">●</span>
            {i < timeline.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-line" />}
          </div>
          <div>
            <div className="text-[#4fa8a0]">
              commit {hashes[i]} <span className="text-text-sec">({item.year})</span>
            </div>
            <div className="mt-1 text-sm font-semibold text-text">{item.title}</div>
            <div className="text-xs text-text-sec">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

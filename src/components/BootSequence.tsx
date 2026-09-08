"use client";

import { useEffect, useState } from "react";

const lines = [
  "[ OK ] Starting kernel ammar-bedis-6.1...",
  "[ OK ] Loading ai_stack.ko pytorch tensorflow langchain...",
  "[ OK ] Mounting /dev/portfolio on /home/ammar...",
  "[ OK ] Ready.",
];

export default function BootSequence() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= lines.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 380);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="font-mono text-[12.5px] leading-relaxed text-[#4fa8a0]">
      {lines.slice(0, visible).map((l, i) => (
        <div key={i}>{l}</div>
      ))}
    </div>
  );
}

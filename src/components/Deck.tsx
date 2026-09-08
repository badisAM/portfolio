"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

export default function Deck({
  items,
  width = 350,
  height = 260,
  spread = 150,
  hint = "DRAG · ← → · CLICK A CARD",
}: {
  items: ReactNode[];
  width?: number;
  height?: number;
  spread?: number;
  hint?: string;
}) {
  const [active, setActive] = useState(0);
  const total = items.length;
  const go = (d: number) => setActive((i) => (i + d + total) % total);

  return (
    <div className="select-none">
      <div className="relative w-full overflow-hidden" style={{ height: height + 60 }}>
        {items.map((node, i) => {
          let offset = i - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;
          if (Math.abs(offset) > 3) return null;
          const isActive = offset === 0;

          return (
            <motion.div
              key={i}
              onClick={() => !isActive && setActive(i)}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                else if (info.offset.x > 60) go(-1);
              }}
              animate={{
                x: offset * spread,
                scale: 1 - Math.abs(offset) * 0.09,
                opacity: isActive ? 1 : 0.38,
                filter: isActive ? "blur(0px)" : "blur(2px)",
                zIndex: 10 - Math.abs(offset),
              }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              style={{ left: "50%", marginLeft: -width / 2, width, height }}
              className={`absolute top-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border ${
                isActive
                  ? "cursor-grab border-accent/40 bg-card shadow-2xl shadow-black/50 active:cursor-grabbing"
                  : "cursor-pointer border-line bg-bg-alt"
              }`}
            >
              {node}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-5">
        <button
          onClick={() => go(-1)}
          aria-label="Précédent"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-text-sec transition-colors hover:border-accent hover:text-accent"
        >
          ‹
        </button>
        <div className="flex items-center gap-2.5">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Élément ${i + 1}`}
              className={`rounded-full transition-all ${
                i === active
                  ? "h-2 w-2 bg-accent shadow-[0_0_10px_rgba(74,222,128,.8)]"
                  : "h-1.5 w-1.5 bg-line hover:bg-text-sec"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Suivant"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-text-sec transition-colors hover:border-accent hover:text-accent"
        >
          ›
        </button>
      </div>

      <p className="mt-3 text-center font-mono text-[11px] tracking-wider text-text-sec">{hint}</p>
    </div>
  );
}

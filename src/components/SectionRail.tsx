"use client";

import { SECTIONS, useActiveSection } from "./useActiveSection";

export default function SectionRail() {
  const active = useActiveSection();

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
      {SECTIONS.map((s) => {
        const on = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center justify-end gap-3"
            aria-label={s.label}
          >
            <span
              className={`font-mono text-[11px] transition-all duration-300 ${
                on ? "text-accent opacity-100" : "text-text-sec opacity-0 group-hover:opacity-100"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                on
                  ? "h-2.5 w-2.5 bg-accent shadow-[0_0_12px_rgba(74,222,128,.8)]"
                  : "h-1.5 w-1.5 bg-line group-hover:bg-text-sec"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}

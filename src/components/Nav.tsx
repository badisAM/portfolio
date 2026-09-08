"use client";

import Link from "next/link";
import { SECTIONS, useActiveSection } from "./useActiveSection";
import Avatar from "./Avatar";

export default function Nav() {
  const active = useActiveSection();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line-soft bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="#hero" className="flex items-center gap-2.5">
          <Avatar size={32} />
          <span className="font-mono text-[13px] text-text-sec">
            ammar<span className="text-accent">@</span>portfolio:~$
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.slice(1).map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              className={`rounded-md px-3 py-1.5 font-mono text-[13px] transition-colors ${
                active === s.id
                  ? "bg-accent/10 text-accent"
                  : "text-text-sec hover:text-text"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>

        <a
          href="/#contact"
          className="rounded-md border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-[13px] font-medium text-accent transition-colors hover:bg-accent/20"
        >
          $ hire --me
        </a>
      </nav>
    </header>
  );
}

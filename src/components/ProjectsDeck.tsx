"use client";

import { useState } from "react";
import Link from "next/link";
import Deck from "./Deck";
import { projects } from "@/data/projects";

const filters = [
  { key: "all", label: "Tous" },
  { key: "ai", label: "IA Agentique / ML" },
  { key: "data", label: "Data & MLOps" },
  { key: "web", label: "Full-Stack" },
] as const;

export default function ProjectsDeck() {
  const [active, setActive] = useState<(typeof filters)[number]["key"]>("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

  const cards = visible.map((p) => (
    <Link key={p.slug} href={`/projects/${p.slug}`} className="flex h-full flex-col">
      <div
        className={`relative flex h-[150px] items-center justify-center overflow-hidden border-b border-line p-4 ${
          p.thumbPlate ? "bg-white" : "bg-bg-alt"
        }`}
      >
        {p.thumb ? (
          <>
            {/* logo clair sur fond sombre : halo doux. Logo sombre : plaque blanche (thumbPlate). */}
            {!p.thumbPlate && (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,.13), rgba(74,222,128,.06) 45%, transparent 72%)",
                }}
              />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.thumb} alt={p.title} className="relative max-h-full max-w-full object-contain" />
          </>
        ) : (
          <span className="font-mono text-xs text-text-sec">{p.tags[0]}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-[15px] font-semibold leading-snug">{p.title}</h3>
        <p className="line-clamp-3 text-[13px] text-text-sec">{p.summary}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {p.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full border border-line px-2 py-0.5 text-[10.5px] text-text-sec">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === f.key
                ? "border-accent bg-accent text-[#062012]"
                : "border-line text-text-sec hover:text-text"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <Deck
        key={active}
        items={cards}
        width={340}
        height={330}
        spread={150}
        hint="DRAG · ← → · CLICK A PROJECT"
      />
    </div>
  );
}
"use client";

import Deck from "./Deck";

export type Cert = {
  title: string;
  issuer: string;
  date: string;
  logo?: string;
  fallback: string;
};

export default function CertDeck({ certs }: { certs: Cert[] }) {
  const cards = certs.map((c, i) => (
    <div key={c.title} className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] uppercase leading-relaxed tracking-wider text-accent">
          {c.issuer}
        </span>
        <span className="shrink-0 font-mono text-[11px] text-text-sec">{c.date}</span>
      </div>
      <div className="mt-auto">
        {c.logo && (
          <div className="mb-4 flex h-11 w-11 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.logo} alt="" className="max-h-full max-w-full object-contain" />
          </div>
        )}
        <h3 className="font-display text-[19px] font-semibold leading-snug">{c.title}</h3>
        <div className="mt-4 border-t border-line pt-3 font-mono text-[11px] tracking-wider text-text-sec">
          VERIFIED · {i + 1}/{certs.length}
        </div>
      </div>
    </div>
  ));

  return <Deck items={cards} width={350} height={260} />;
}

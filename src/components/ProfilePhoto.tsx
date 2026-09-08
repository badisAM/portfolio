"use client";

import { useState } from "react";

export default function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      {/* halo derrière le cadre */}
      <div className="glow absolute -inset-8 -z-10" />

      {/* coins d'angle façon viseur */}
      <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-accent/70" />
      <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-accent/70" />
      <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-accent/70" />
      <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-accent/70" />

      <div className="overflow-hidden rounded-2xl border border-line bg-card">
        <div className="flex items-center gap-2 border-b border-line bg-[#0f1218] px-3.5 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
          <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
          <span className="ml-2 font-mono text-[11px] text-text-sec">bedis_ammar.webp</span>
        </div>

        {failed ? (
          <div className="flex aspect-[4/5] items-center justify-center font-mono text-sm text-text-sec">
            image introuvable
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/images/personal/bedis_ammar.webp"
            alt="Ammar Bedis"
            onError={() => setFailed(true)}
            className="aspect-[4/5] w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

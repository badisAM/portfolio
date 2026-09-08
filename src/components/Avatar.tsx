"use client";

import { useState } from "react";

export default function Avatar({
  src = "/images/personal/bedis_ammar.webp",
  size = 32,
}: {
  src?: string;
  size?: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        style={{ width: size, height: size }}
        className="flex shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-[11px] font-semibold text-accent"
      >
        AB
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Ammar Bedis"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
      className="shrink-0 rounded-full border border-line object-cover"
    />
  );
}

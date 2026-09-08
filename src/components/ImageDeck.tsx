"use client";

import Deck from "./Deck";

export default function ImageDeck({
  images,
}: {
  images: { src: string; caption: string }[];
}) {
  const cards = images.map((img) => (
    <figure key={img.src} className="flex h-full flex-col">
      <div className="flex flex-1 items-center justify-center overflow-hidden bg-bg p-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img.src} alt={img.caption} className="max-h-full max-w-full object-contain" />
      </div>
      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[11px] text-text-sec">
        {img.caption}
      </figcaption>
    </figure>
  ));

  return <Deck items={cards} width={560} height={380} spread={190} hint="DRAG · ← → · CLICK AN IMAGE" />;
}

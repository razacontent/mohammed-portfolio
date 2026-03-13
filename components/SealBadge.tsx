"use client";

import { BIRD_IMG } from "@/lib/assets";

export default function SealBadge({ size = 220 }: { size?: number }) {
  const points = 24;
  const outerR = size / 2;
  const innerR = outerR * 0.88;
  const cx = outerR;
  const cy = outerR;

  const pathData = Array.from({ length: points * 2 }, (_, i) => {
    const angle = (Math.PI * i) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ") + " Z";

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <path d={pathData} fill="#1a1a1a" />
        <text
          x={cx}
          y={cy - 28}
          textAnchor="middle"
          fill="#F0D4D1"
          fontSize={11}
          fontWeight={600}
          letterSpacing="0.14em"
          fontFamily="'Outfit', sans-serif"
        >
          MOHAMMED RAZA
        </text>
        <text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fill="#F0D4D1"
          fontSize={10}
          fontWeight={400}
          letterSpacing="0.08em"
          fontFamily="'Outfit', sans-serif"
        >
          SR. CONTENT DESIGNER
        </text>
        <text
          x={cx}
          y={cy + 10}
          textAnchor="middle"
          fill="#F0D4D1"
          fontSize={10}
          fontWeight={400}
          letterSpacing="0.08em"
          fontFamily="'Outfit', sans-serif"
        >
          &amp; UX WRITER
        </text>
        <text
          x={cx}
          y={cy + 34}
          textAnchor="middle"
          fill="#F0D4D1"
          fontSize={9}
          fontWeight={300}
          letterSpacing="0.10em"
          fontFamily="'Outfit', sans-serif"
        >
          EST. 2017
        </text>
      </svg>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BIRD_IMG}
        alt=""
        style={{
          position: "absolute",
          bottom: -18,
          right: -18,
          width: 72,
          height: 72,
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
}

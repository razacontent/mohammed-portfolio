"use client";

import { BIRD_IMG } from "@/lib/assets";

export default function SealBadge({ size = 220 }: { size?: number }) {
  const points = 24;
  const outerR = size / 2;
  const innerR = outerR * 0.88;
  const cx = outerR;
  const cy = outerR;

  let path = "";
  for (let i = 0; i < points * 2; i++) {
    const angle = (Math.PI * i) / points - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    path += (i === 0 ? "M" : "L") + x.toFixed(2) + "," + y.toFixed(2);
  }
  path += "Z";

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <path d={path} fill="#fff" stroke="#D4A017" strokeWidth="1.5" />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: size * 0.72,
          height: size * 0.72,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BIRD_IMG}
          alt="Content Canary"
          style={{ width: "140%", height: "140%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

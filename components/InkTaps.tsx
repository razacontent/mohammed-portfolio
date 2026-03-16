"use client";

import { useState, useEffect, useCallback } from "react";

const PENCIL_CURSOR_SVG = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <defs>
    <pattern id="d" x="0" y="0" width="2.5" height="2.5" patternUnits="userSpaceOnUse">
      <circle cx="1.25" cy="1.25" r="0.4" fill="#1a1a1a"/>
    </pattern>
  </defs>
  <g transform="translate(16,16) rotate(45) translate(-4,-16)">
    <rect x="0.5" y="0" width="7" height="3.5" rx="1" fill="#fff" stroke="#1a1a1a" stroke-width="0.8"/>
    <rect x="1.2" y="0.5" width="5.6" height="2.5" rx="0.5" fill="url(#d)"/>
    <rect x="0" y="3.5" width="8" height="3" rx="0.2" fill="#fff" stroke="#1a1a1a" stroke-width="0.8"/>
    <line x1="0.3" y1="5" x2="7.7" y2="5" stroke="#1a1a1a" stroke-width="0.5"/>
    <rect x="0.5" y="6.5" width="7" height="16" fill="#fff" stroke="#1a1a1a" stroke-width="0.8"/>
    <rect x="5.2" y="6.5" width="2.3" height="16" fill="url(#d)"/>
    <polygon points="0.5,22.5 7.5,22.5 5.8,27 2.2,27" fill="#fff" stroke="#1a1a1a" stroke-width="0.8"/>
    <polygon points="4,22.5 7.5,22.5 5.8,27 3.5,27" fill="url(#d)"/>
    <polygon points="2.2,27 5.8,27 4,30" fill="#1a1a1a" stroke="#1a1a1a" stroke-width="0.3"/>
  </g>
</svg>`)}`;

export default function InkTaps() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [pressing, setPressing] = useState(false);
  const [taps, setTaps] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMove = useCallback(
    (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY }),
    []
  );

  const handleDown = useCallback((e: MouseEvent) => {
    setPressing(true);
    const id = Date.now();
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;
    setTaps((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setTaps((prev) => prev.filter((t) => t.id !== id)), 500);
  }, []);

  const handleUp = useCallback(() => setPressing(false), []);
  const handleLeave = useCallback(
    () => setMousePos({ x: -100, y: -100 }),
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [handleMove, handleDown, handleUp, handleLeave]);

  return (
    <>
      {/* Pencil cursor */}
      <div
        style={{
          position: "fixed",
          left: mousePos.x - 6,
          top: mousePos.y - 28,
          width: 32,
          height: 32,
          pointerEvents: "none",
          zIndex: 99999,
          transition: pressing
            ? "transform 0.06s ease-in"
            : "transform 0.15s ease-out",
          transform: pressing
            ? "translate(2px, 2px) scale(0.93)"
            : "translate(0, 0) scale(1)",
          transformOrigin: "6px 28px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PENCIL_CURSOR_SVG}
          alt=""
          style={{ width: 32, height: 32 }}
        />
      </div>

      {/* Ink tap marks */}
      {taps.map((tap) => (
        <div
          key={tap.id}
          style={{
            position: "absolute",
            left: tap.x - 3,
            top: tap.y - 3,
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: "rgba(26,26,26,0.4)",
            pointerEvents: "none",
            zIndex: 9999,
            animation: "inkDot 0.5s ease-out forwards",
          }}
        />
      ))}
    </>
  );
}

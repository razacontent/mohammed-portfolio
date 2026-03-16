"use client";

import { useState, useEffect, useCallback } from "react";

const PENCIL_CURSOR_SVG = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 60 60">
  <defs>
    <pattern id="dots" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="0.6" fill="#1a1a1a"/>
    </pattern>
  </defs>
  <g transform="translate(30,30) rotate(45) translate(-6,-25)">
    <rect x="0.5" y="0" width="11" height="6" rx="1.5" fill="#fff" stroke="#1a1a1a" stroke-width="1.2"/>
    <rect x="1.5" y="1" width="9" height="4" rx="1" fill="url(#dots)"/>
    <rect x="0" y="6" width="12" height="5.5" rx="0.3" fill="#fff" stroke="#1a1a1a" stroke-width="1.2"/>
    <line x1="0.5" y1="8" x2="11.5" y2="8" stroke="#1a1a1a" stroke-width="0.8"/>
    <line x1="0.5" y1="10" x2="11.5" y2="10" stroke="#1a1a1a" stroke-width="0.5"/>
    <rect x="0.5" y="11.5" width="11" height="26" fill="#fff" stroke="#1a1a1a" stroke-width="1.2"/>
    <rect x="8" y="11.5" width="3.5" height="26" fill="url(#dots)"/>
    <polygon points="0.5,37.5 11.5,37.5 8.5,44.5 3.5,44.5" fill="#fff" stroke="#1a1a1a" stroke-width="1.2"/>
    <polygon points="6,37.5 11.5,37.5 8.5,44.5 5.5,44.5" fill="url(#dots)"/>
    <polygon points="3.5,44.5 8.5,44.5 6,50" fill="#1a1a1a" stroke="#1a1a1a" stroke-width="0.5"/>
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
          left: mousePos.x - 10,
          top: mousePos.y - 38,
          width: 48,
          height: 48,
          pointerEvents: "none",
          zIndex: 99999,
          transition: pressing
            ? "transform 0.06s ease-in"
            : "transform 0.15s ease-out",
          transform: pressing
            ? "translate(3px, 3px) scale(0.93)"
            : "translate(0, 0) scale(1)",
          transformOrigin: "10px 38px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PENCIL_CURSOR_SVG}
          alt=""
          style={{ width: 48, height: 48 }}
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

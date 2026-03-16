"use client";

import { useState, useEffect, useCallback } from "react";

export default function InkTaps() {
  const [pressing, setPressing] = useState(false);
  const [taps, setTaps] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleDown = useCallback((e: MouseEvent) => {
    setPressing(true);
    const id = Date.now();
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;
    setTaps((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setTaps((prev) => prev.filter((t) => t.id !== id)), 500);
  }, []);

  const handleUp = useCallback(() => setPressing(false), []);

  useEffect(() => {
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [handleDown, handleUp]);

  return (
    <>
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

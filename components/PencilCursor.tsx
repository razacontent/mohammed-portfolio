"use client";

import { useState, useEffect, useCallback } from "react";
import { PENCIL_SVG } from "@/lib/assets";

export default function PencilCursor() {
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
        <img src={PENCIL_SVG} alt="" style={{ width: 48, height: 48 }} />
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

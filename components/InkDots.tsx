"use client";
import { useState, useEffect, useCallback, useRef } from "react";

interface Dot {
  id: number;
  x: number;
  y: number;
}

export default function InkDots() {
  const [dots, setDots] = useState<Dot[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = useCallback((e: MouseEvent) => {
    const id = Date.now();
    setDots(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => setDots(prev => prev.filter(d => d.id !== id)), 500);
  }, []);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    let emojiUrl = '';
    if (ctx) {
      ctx.font = '28px serif';
      ctx.fillText('✏️', 2, 28);
      emojiUrl = canvas.toDataURL('image/png');
    }

    const style = document.createElement('style');
    style.id = 'emoji-cursor';
    style.textContent = '';
    document.head.appendChild(style);

    const handleMove = () => {
      style.textContent = '';
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        style.textContent = '* { cursor: url("' + emojiUrl + '") 4 28, auto !important; }';
      }, 200);
    };

    const handleLeave = () => {
      style.textContent = '';
      if (timerRef.current) clearTimeout(timerRef.current);
    };

    window.addEventListener("mousedown", handleClick);
    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      if (timerRef.current) clearTimeout(timerRef.current);
      style.remove();
    };
  }, [handleClick]);

  return (
    <>
      <style>{`
        @keyframes inkDot {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
      `}</style>
      {dots.map(dot => (
        <div
          key={dot.id}
          style={{
            position: "fixed",
            left: dot.x,
            top: dot.y,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#1a1a1a",
            pointerEvents: "none",
            zIndex: 99999,
            animation: "inkDot 500ms ease-out forwards",
          }}
        />
      ))}
    </>
  );
}

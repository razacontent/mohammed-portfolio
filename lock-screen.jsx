import { useState, useCallback } from "react";

const LOCK_CLOSED = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMTIwIDE1MCI+CjxkZWZzPjxwYXR0ZXJuIGlkPSJsZCIgeD0iMCIgeT0iMCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjAuOCIgZmlsbD0iIzFhMWExYSIvPjwvcGF0dGVybj48L2RlZnM+CjwhLS0gU2hhY2tsZSAtLT4KPHBhdGggZD0iTTMyLDY1IEwzMiw0MCBRMzIsMTIgNjAsMTIgUTg4LDEyIDg4LDQwIEw4OCw2NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWExYTFhIiBzdHJva2Utd2lkdGg9IjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8IS0tIEJvZHkgLS0+CjxyZWN0IHg9IjE4IiB5PSI2MiIgd2lkdGg9Ijg0IiBoZWlnaHQ9IjcyIiByeD0iOCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMWExYTFhIiBzdHJva2Utd2lkdGg9IjMiLz4KPCEtLSBCb2R5IHNoYWRpbmcgLS0+CjxyZWN0IHg9IjcwIiB5PSI2MiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjcyIiByeD0iMCIgZmlsbD0idXJsKCNsZCkiLz4KPHJlY3QgeD0iOTQiIHk9IjYyIiB3aWR0aD0iOCIgaGVpZ2h0PSI3MiIgcng9IjAgOCA4IDAiIGZpbGw9InVybCgjbGQpIi8+CjwhLS0gS2V5aG9sZSAtLT4KPGNpcmNsZSBjeD0iNjAiIGN5PSI5NCIgcj0iOCIgZmlsbD0iIzFhMWExYSIvPgo8cmVjdCB4PSI1NyIgeT0iOTQiIHdpZHRoPSI2IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iIzFhMWExYSIvPgo8L3N2Zz4=";
const LOCK_OPEN = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMTIwIDE1MCI+CjxkZWZzPjxwYXR0ZXJuIGlkPSJsZDIiIHg9IjAiIHk9IjAiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIwLjgiIGZpbGw9IiMxYTFhMWEiLz48L3BhdHRlcm4+PC9kZWZzPgo8IS0tIFNoYWNrbGUgLSBsaWZ0ZWQgYW5kIHJvdGF0ZWQgLS0+CjxwYXRoIGQ9Ik0zMiw2NSBMMzIsMjggUTMyLDAgNjAsMCBRODgsMCA4OCwyOCBMODgsMzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSI4IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPCEtLSBCb2R5IC0tPgo8cmVjdCB4PSIxOCIgeT0iNjIiIHdpZHRoPSI4NCIgaGVpZ2h0PSI3MiIgcng9IjgiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIzIi8+CjwhLS0gQm9keSBzaGFkaW5nIC0tPgo8cmVjdCB4PSI3MCIgeT0iNjIiIHdpZHRoPSIzMiIgaGVpZ2h0PSI3MiIgcng9IjAiIGZpbGw9InVybCgjbGQyKSIvPgo8cmVjdCB4PSI5NCIgeT0iNjIiIHdpZHRoPSI4IiBoZWlnaHQ9IjcyIiByeD0iMCA4IDggMCIgZmlsbD0idXJsKCNsZDIpIi8+CjwhLS0gS2V5aG9sZSAtLT4KPGNpcmNsZSBjeD0iNjAiIGN5PSI5NCIgcj0iOCIgZmlsbD0iIzFhMWExYSIvPgo8cmVjdCB4PSI1NyIgeT0iOTQiIHdpZHRoPSI2IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0iIzFhMWExYSIvPgo8L3N2Zz4=";

export default function LockScreen({ onUnlock }) {
  const [code, setCode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [shake, setShake] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleKey = useCallback((digit) => {
    if (unlocked) return;
    const next = code + digit;
    if (next.length <= 4) {
      setCode(next);
      if (next.length === 4) {
        if (next === "5306") {
          setUnlocked(true);
          setTimeout(() => setFadeOut(true), 1200);
          setTimeout(() => onUnlock && onUnlock(), 2200);
        } else {
          setShake(true);
          setTimeout(() => { setShake(false); setCode(""); }, 600);
        }
      }
    }
  }, [code, unlocked, onUnlock]);

  const handleDelete = useCallback(() => {
    if (!unlocked) setCode((c) => c.slice(0, -1));
  }, [unlocked]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100000,
      backgroundColor: "#F0D4D1",
      fontFamily: "'Outfit', sans-serif",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      transition: "opacity 0.8s ease, transform 0.8s ease",
      opacity: fadeOut ? 0 : 1,
      transform: fadeOut ? "scale(1.05)" : "scale(1)",
      pointerEvents: fadeOut ? "none" : "auto",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        @keyframes shakeAnim {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-12px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(6px); }
        }
        @keyframes unlockBounce {
          0% { transform: scale(1); }
          30% { transform: scale(1.15); }
          60% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
      `}</style>

      {/* Lock image */}
      <div style={{
        marginBottom: 32,
        transition: "transform 0.5s ease",
        animation: unlocked ? "unlockBounce 0.6s ease forwards" : "none",
      }}>
        <img
          src={unlocked ? LOCK_OPEN : LOCK_CLOSED}
          alt={unlocked ? "Unlocked" : "Locked"}
          style={{ width: 80, height: 100, objectFit: "contain" }}
        />
      </div>

      {/* Prompt text */}
      <p style={{
        fontSize: 15, fontWeight: 500, color: "#1a1a1a",
        marginBottom: 24, textAlign: "center",
      }}>
        {unlocked ? "Welcome in" : "Enter the code to see some cool content thinking"}
      </p>

      {/* Code dots */}
      <div style={{
        display: "flex", gap: 14, marginBottom: 32,
        animation: shake ? "shakeAnim 0.5s ease" : "none",
      }}>
        {[0,1,2,3].map((i) => (
          <div key={i} style={{
            width: 16, height: 16, borderRadius: "50%",
            border: "1.5px solid #1a1a1a",
            backgroundColor: i < code.length ? "#1a1a1a" : "transparent",
            transition: "background-color 0.15s ease, transform 0.15s ease",
            transform: i === code.length - 1 && code.length > 0 ? "scale(1.2)" : "scale(1)",
          }} />
        ))}
      </div>

      {/* Keypad */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10,
        width: 220, marginBottom: 32,
      }}>
        {[1,2,3,4,5,6,7,8,9].map((n) => (
          <button key={n} onClick={() => handleKey(String(n))} style={{
            width: 64, height: 64, borderRadius: 14,
            border: "1.5px solid rgba(26,26,26,0.15)",
            background: "transparent",
            fontSize: 22, fontWeight: 600, fontFamily: "'Outfit', sans-serif",
            color: "#1a1a1a",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.15s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => { e.target.style.background = "#fff"; e.target.style.borderColor = "rgba(26,26,26,0.25)"; }}
          onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(26,26,26,0.15)"; }}
          >
            {n}
          </button>
        ))}
        {/* Bottom row: delete, 0, empty */}
        <button onClick={handleDelete} style={{
          width: 64, height: 64, borderRadius: 14,
          border: "1.5px solid rgba(26,26,26,0.1)",
          background: "transparent",
          fontSize: 13, fontWeight: 500, fontFamily: "'Outfit', sans-serif",
          color: "rgba(26,26,26,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", transition: "all 0.15s ease",
        }}
        onMouseEnter={(e) => { e.target.style.color = "#1a1a1a"; }}
        onMouseLeave={(e) => { e.target.style.color = "rgba(26,26,26,0.4)"; }}
        >
          DEL
        </button>
        <button onClick={() => handleKey("0")} style={{
          width: 64, height: 64, borderRadius: 14,
          border: "1.5px solid rgba(26,26,26,0.15)",
          background: "transparent",
          fontSize: 22, fontWeight: 600, fontFamily: "'Outfit', sans-serif",
          color: "#1a1a1a",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.15s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => { e.target.style.background = "#fff"; e.target.style.borderColor = "rgba(26,26,26,0.25)"; }}
        onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(26,26,26,0.15)"; }}
        >
          0
        </button>
        <div style={{ width: 64, height: 64 }} />
      </div>

      {/* Contact line */}
      <p style={{
        fontSize: 12, fontWeight: 400, color: "rgba(26,26,26,0.4)",
        textAlign: "center",
      }}>
        Don\u2019t have it? Reach me at{" "}
        <a href="mailto:mohammed@razacontent.com" style={{
          color: "rgba(26,26,26,0.5)", textDecoration: "underline",
          textUnderlineOffset: 2,
        }}>
          mohammed@razacontent.com
        </a>
      </p>
    </div>
  );
}

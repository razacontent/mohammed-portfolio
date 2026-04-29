"use client";

import { useEffect, useState } from "react";

const PASSCODE = "5306";
const STORAGE_KEY = "portfolio_unlocked";

export default function LockScreen() {
  const [entered, setEntered] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setUnlocked(true);
      return;
    }
    const params = new URLSearchParams(window.location.search);
    if (params.get("key") === PASSCODE) {
      localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (entered === PASSCODE) {
      localStorage.setItem(STORAGE_KEY, "true");
      const t = setTimeout(() => setUnlocked(true), 250);
      return () => clearTimeout(t);
    }
    if (entered.length === 4) {
      const t = setTimeout(() => setEntered(""), 500);
      return () => clearTimeout(t);
    }
  }, [entered]);

  const press = (n: string) => {
    setEntered((e) => (e.length < 4 ? e + n : e));
  };

  return (
    <div className={`lock-screen${unlocked ? " unlocked" : ""}`}>
      <div className="lock-content">
        <div className="lock-mast">
          razacontent
          <span
            className="dot"
            role="button"
            tabIndex={0}
            onClick={() => setEntered(PASSCODE)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setEntered(PASSCODE);
            }}
          >
            .
          </span>
        </div>
        <h1 className="lock-welcome">
          Welcome to the <span className="canary-mark">newsstand.</span>
        </h1>
        <div className="lock-tagline">
          Content designer · Engineer · Strategist
        </div>
        <p className="lock-prompt">
          Some cool content thinking lives behind this code.
        </p>
        <div className="lock-dots">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`lock-dot${i < entered.length ? " filled" : ""}`}
            />
          ))}
        </div>
        <div className="lock-keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <button
              key={n}
              className="key"
              onClick={() => press(String(n))}
              type="button"
            >
              {n}
            </button>
          ))}
          <button className="key spacer" type="button" tabIndex={-1} />
          <button className="key" onClick={() => press("0")} type="button">
            0
          </button>
          <button
            className="key delete"
            onClick={() => setEntered((e) => e.slice(0, -1))}
            type="button"
            aria-label="Delete"
          >
            ←
          </button>
        </div>
      </div>
    </div>
  );
}

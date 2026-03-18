"use client";

import { useState, useEffect } from "react";
import LockScreen from "./LockScreen";
import InkDots from "./InkDots";

const STORAGE_KEY = "portfolio_unlocked";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [locked, setLocked] = useState<boolean | null>(null);

  useEffect(() => {
    setLocked(localStorage.getItem(STORAGE_KEY) !== "true");
  }, []);

  const handleUnlock = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setLocked(false);
  };

  // Avoid flash: render nothing until we've checked localStorage
  if (locked === null) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#F0D4D1",
        }}
      />
    );
  }

  return (
    <>
      <InkDots />
      {locked && <LockScreen onUnlock={handleUnlock} />}
      <div
        style={{
          visibility: locked ? "hidden" : "visible",
          position: locked ? "fixed" : "static",
          inset: locked ? 0 : undefined,
          overflow: locked ? "hidden" : undefined,
        }}
      >
        {children}
      </div>
    </>
  );
}

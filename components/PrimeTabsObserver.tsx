"use client";

import { useEffect } from "react";

export default function PrimeTabsObserver() {
  useEffect(() => {
    const tabs = document.querySelectorAll<HTMLElement>(".prime-v2 .tab");
    const sections = document.querySelectorAll<HTMLElement>(
      '.prime-v2 section[id^="part-"]',
    );
    if (!("IntersectionObserver" in window) || !sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          tabs.forEach((t) => {
            if (t.dataset.part === id) t.classList.add("active");
            else if (!t.classList.contains("upcoming"))
              t.classList.remove("active");
          });
        }
      },
      { rootMargin: "-30% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return null;
}

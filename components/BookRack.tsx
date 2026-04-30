"use client";

import { useEffect, useRef } from "react";
import Cover from "./Cover";
import { caseStudies } from "@/data/caseStudies";

export default function BookRack() {
  const shelfRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shelf = shelfRef.current;
    if (!shelf) return;
    const covers = shelf.querySelectorAll<HTMLElement>(".cover");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 },
    );
    covers.forEach((cover, i) => {
      setTimeout(() => observer.observe(cover), i * 80);
    });
    return () => observer.disconnect();
  }, []);

  const scrollRight = () => {
    const shelf = shelfRef.current;
    if (!shelf) return;
    shelf.scrollBy({ left: 408, behavior: "smooth" });
  };

  return (
    <div className="rack-outer">
      <div className="rack-row">
        <div className="rack-shelf" ref={shelfRef}>
          {caseStudies.map((study) => (
            <Cover key={study.slug} study={study} />
          ))}
        </div>
        <button
          type="button"
          className="rack-arrow"
          aria-label="Scroll the rack"
          onClick={scrollRight}
        >
          <svg
            viewBox="0 0 100 50"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M2 18 L60 18 L60 4 L98 25 L60 46 L60 32 L2 32 Z" />
          </svg>
        </button>
      </div>
      <div className="rack-shelf-line" />
    </div>
  );
}

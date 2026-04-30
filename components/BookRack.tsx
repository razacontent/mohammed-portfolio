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

  const scrollByCovers = (direction: 1 | -1) => {
    const shelf = shelfRef.current;
    if (!shelf) return;
    shelf.scrollBy({ left: 472 * direction, behavior: "smooth" });
  };

  return (
    <div className="rack-outer">
      <div className="rack-row">
        <button
          type="button"
          className="rack-arrow rack-arrow-left"
          aria-label="Scroll the rack left"
          onClick={() => scrollByCovers(-1)}
        >
          <svg
            viewBox="0 0 100 50"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M98 18 L40 18 L40 4 L2 25 L40 46 L40 32 L98 32 Z" />
          </svg>
        </button>
        <div className="rack-shelf" ref={shelfRef}>
          {caseStudies.map((study) => (
            <Cover key={study.slug} study={study} />
          ))}
        </div>
        <button
          type="button"
          className="rack-arrow"
          aria-label="Scroll the rack right"
          onClick={() => scrollByCovers(1)}
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

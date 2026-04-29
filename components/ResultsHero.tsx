import type { ReactNode } from "react";

export interface ResultTile {
  num: string;
  text: ReactNode;
}

export default function ResultsHero({
  eyebrow,
  results,
}: {
  eyebrow: string;
  results: ResultTile[];
}) {
  return (
    <div className="results-hero">
      <div className="results-hero-inner">
        <div className="results-eyebrow">{eyebrow}</div>
        <div className="results-grid">
          {results.map((r, i) => (
            <div className="result-tile" key={i}>
              <div className="result-num">{r.num}</div>
              <div className="result-text">{r.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

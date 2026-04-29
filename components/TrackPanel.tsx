import type { ReactNode } from "react";

export interface Track {
  variant?: "default" | "systems";
  label: string;
  title: string;
  body: ReactNode;
  items: string[];
}

export default function TrackPanels({ tracks }: { tracks: [Track, Track] }) {
  return (
    <div className="tracks">
      {tracks.map((t, i) => (
        <div
          key={i}
          className={t.variant === "systems" ? "track-panel systems" : "track-panel"}
        >
          <div className="track-label">{t.label}</div>
          <div className="track-title">{t.title}</div>
          <p className="track-body">{t.body}</p>
          <ul className="track-list">
            {t.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

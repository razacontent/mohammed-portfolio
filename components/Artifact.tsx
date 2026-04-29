import type { ReactNode } from "react";

export default function Artifact({
  placeholder,
  caption,
  fig,
}: {
  placeholder: ReactNode;
  caption: string;
  fig: string;
}) {
  return (
    <div className="artifact">
      <div className="artifact-image">
        {/* TODO: replace with real image */}
        <div className="artifact-image-content">{placeholder}</div>
      </div>
      <div className="artifact-caption">
        <div className="artifact-caption-text">{caption}</div>
        <div className="artifact-caption-meta">{fig}</div>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";

export default function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <div className="pullquote">
      <div className="pullquote-text">{children}</div>
      {attribution && <div className="pullquote-attr">{attribution}</div>}
    </div>
  );
}

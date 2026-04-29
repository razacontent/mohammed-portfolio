import type { ReactNode, CSSProperties } from "react";

export default function ChapterSection({
  eyebrow,
  title,
  narrow = true,
  style,
  children,
}: {
  eyebrow?: string;
  title?: ReactNode;
  narrow?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <section className="article-section" style={style}>
      <div className={narrow ? "wrap-narrow" : "wrap"}>
        {eyebrow && <div className="section-eyebrow">{eyebrow}</div>}
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export function BodyProse({ children }: { children: ReactNode }) {
  return <div className="body-prose">{children}</div>;
}

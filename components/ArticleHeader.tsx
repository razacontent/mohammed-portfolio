import type { ReactNode } from "react";

export interface StatTile {
  num: string;
  label: string;
  featured?: boolean;
}

export default function ArticleHeader({
  issueNum,
  org,
  meta,
  theme,
  headline,
  hook,
  stats,
}: {
  issueNum: string;
  org: string;
  meta: string;
  theme: string;
  headline: ReactNode;
  hook: ReactNode;
  stats: StatTile[];
}) {
  return (
    <header className="article-header">
      <div className="wrap">
        <div className="article-header-inner">
          <div className="issue-marker">
            <span className="issue-num">{issueNum}</span>
            <span className="issue-org">{org}</span>
            <span className="issue-meta">{meta}</span>
          </div>
          <div className="article-theme">{theme}</div>
          <h1 className="article-headline">{headline}</h1>
          <p className="article-hook">{hook}</p>
          <div className="stat-row">
            {stats.map((s, i) => (
              <div
                key={i}
                className={s.featured ? "stat-tile featured" : "stat-tile"}
              >
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

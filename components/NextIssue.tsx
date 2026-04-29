import Link from "next/link";
import type { Accent, CaseStudy } from "@/data/caseStudies";
import { caseStudies } from "@/data/caseStudies";
import type { ReactNode } from "react";

function findNext(currentSlug: string): CaseStudy | undefined {
  const i = caseStudies.findIndex((s) => s.slug === currentSlug);
  if (i === -1) return undefined;
  return caseStudies[(i + 1) % caseStudies.length];
}

const themeMetaParts = (study: CaseStudy) =>
  `${study.org} · ${study.theme} · ${study.readMin} min`;

export default function NextIssue({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const next = findNext(currentSlug);
  if (!next) return null;
  const issueNum = `№${next.issue.toString().padStart(2, "0")}`;
  const headline: ReactNode = (
    <>
      {next.headline.before}
      <span className="accent">{next.headline.accent}</span>
      {next.headline.after}
    </>
  );
  return (
    <section className="next-issue" data-next-accent={next.accent as Accent}>
      <div className="wrap">
        <div className="next-issue-inner">
          <div>
            <div className="next-issue-prompt">Next issue · {issueNum}</div>
            <div className="next-issue-title">{headline}</div>
            <div className="next-issue-meta">{themeMetaParts(next)}</div>
          </div>
          <Link className="next-cta" href={`/work/${next.slug}`}>
            Read issue {issueNum} →
          </Link>
        </div>
      </div>
    </section>
  );
}

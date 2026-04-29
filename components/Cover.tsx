import Link from "next/link";
import IconCell from "./IconCell";
import Stamp from "./Stamp";
import type { CaseStudy } from "@/data/caseStudies";

export default function Cover({ study }: { study: CaseStudy }) {
  return (
    <Link className="cover" href={`/work/${study.slug}`}>
      <div className="cover-tab" />
      <Stamp variant={study.stamp.variant} label={study.stamp.label} />

      <div className="cover-mast">
        <div className="cover-mast-org">{study.org}</div>
        <div className="cover-mast-meta">
          <strong>{study.readMin} min</strong> · Issue №
          {study.issue.toString().padStart(2, "0")}
        </div>
      </div>

      <div className="cover-head">
        <div className="cover-theme">{study.theme}</div>
        <h3 className="cover-headline">
          {study.headline.before}
          <span className="accent">{study.headline.accent}</span>
          {study.headline.after}
        </h3>
        <p className="cover-hook">{study.hook}</p>
      </div>

      <div className="cover-art">
        {study.icons.map((iconName, i) => (
          <IconCell key={iconName} name={iconName} label={study.iconLabels[i]} />
        ))}
      </div>

      <div className="cover-body">
        <div className="cover-section">
          <div className="cover-section-label">
            <span className="lbl-num">▣</span> {study.trackALabel}
          </div>
          <ul>
            {study.trackAItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="cover-section impact">
          <div className="cover-section-label">
            <span className="lbl-num">{study.metricStrip ? "▣" : "▲"}</span>{" "}
            {study.trackBLabel}
          </div>
          <ul>
            {study.trackBItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {study.metricStrip && (
        <div className="metric-strip">
          <div className="metric-strip-label">{study.metricStrip.label}</div>
          <div
            className="metric-strip-text"
            dangerouslySetInnerHTML={{ __html: study.metricStrip.html }}
          />
        </div>
      )}

      <div className="cover-foot">
        <span>{study.dateRange}</span>
        <span className="cover-cta">Read story →</span>
      </div>
    </Link>
  );
}

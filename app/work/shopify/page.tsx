"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackArrow from "@/components/BackArrow";
import { useState, useEffect } from "react";

const sideNavItems = [
  { label: "Role", id: "role" },
  { label: "Problem", id: "problem" },
  { label: "Feature naming", id: "naming" },
  { label: "Artifacts", id: "artifacts" },
  { label: "Redesign", id: "redesign" },
  { label: "Content shifts", id: "shifts" },
  { label: "Tooltip system", id: "tooltips" },
  { label: "Outcomes", id: "outcomes" },
  { label: "Why it matters", id: "bridge" },
];

const TEXT = "#1a1a1a";
const TEXT_SEC = "rgba(26,26,26,0.6)";
const TEXT_MUTED = "rgba(26,26,26,0.4)";
const BORDER = "1.5px solid rgba(26,26,26,0.1)";
const DIVIDER = "0.5px solid rgba(26,26,26,0.15)";
const GREEN = "#1D9E75";

/* ── Sub-components ─────────────────────────────────────────────── */

function Card({
  label,
  title,
  body,
  style,
}: {
  label?: string;
  title?: string;
  body?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "transparent",
        border: BORDER,
        borderColor: hovered ? "rgba(26,26,26,0.2)" : "rgba(26,26,26,0.1)",
        borderRadius: 14,
        padding: "1.25rem 1.5rem",
        transition: "background 0.2s, border-color 0.2s",
        ...style,
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.35)",
            marginBottom: 4,
          }}
        >
          {label}
        </div>
      )}
      {title && (
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: TEXT,
            marginBottom: 6,
          }}
        >
          {title}
        </div>
      )}
      {body && (
        <div
          style={{
            fontSize: 13,
            lineHeight: 1.7,
            color: TEXT_SEC,
          }}
        >
          {body}
        </div>
      )}
    </div>
  );
}

function ImgFrame({
  src,
  alt,
  caption,
  tag,
}: {
  src: string;
  alt: string;
  caption: string;
  tag: string;
}) {
  return (
    <>
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto 0.5rem",
        }}
      >
        <div
          style={{
            border: "3px solid #1a1a1a",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0.5rem auto 2rem",
          maxWidth: "90%",
        }}
      >
        <span style={{ fontSize: 12, color: TEXT_MUTED }}>{caption}</span>
        <span
          style={{
            fontSize: 11,
            color: TEXT_SEC,
            border: BORDER,
            borderRadius: 100,
            padding: "2px 10px",
          }}
        >
          {tag}
        </span>
      </div>
    </>
  );
}

function SectionLabel({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        color: TEXT_MUTED,
        marginBottom: "0.75rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "1.4rem",
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </h2>
  );
}

function SectionSubtitle({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <h3
      style={{
        fontSize: 17,
        fontWeight: 700,
        lineHeight: 1.3,
        marginBottom: "0.75rem",
        marginTop: "1.5rem",
        ...style,
      }}
    >
      {children}
    </h3>
  );
}

function SectionBody({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 15,
        lineHeight: 1.8,
        color: "rgba(26,26,26,0.65)",
        marginBottom: "1.5rem",
      }}
    >
      {children}
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "1.15rem",
        fontWeight: 500,
        lineHeight: 1.55,
        color: TEXT,
        padding: "1.5rem 0",
        borderTop: "2px solid rgba(26,26,26,0.08)",
        marginBottom: "1.75rem",
        maxWidth: 640,
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: DIVIDER,
        margin: "2.5rem 0",
      }}
    />
  );
}

function NamingBlock({
  beforeCopy,
  beforeNote,
  afterCopy,
  afterNote,
  whyLabel,
  whyBody,
}: {
  beforeCopy: string;
  beforeNote: string;
  afterCopy: string;
  afterNote: string;
  whyLabel: string;
  whyBody: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: BORDER,
        borderColor: hovered ? "rgba(26,26,26,0.25)" : "rgba(26,26,26,0.1)",
        borderRadius: 14,
        overflow: "hidden",
        marginBottom: "1.25rem",
        transition: "border-color 0.2s",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 28px 1fr",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "1.25rem 1.5rem" }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.35)",
              marginBottom: 5,
            }}
          >
            Before
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: TEXT,
              marginBottom: 4,
              lineHeight: 1.3,
            }}
          >
            {beforeCopy}
          </div>
          <div
            style={{
              fontSize: 12,
              lineHeight: 1.55,
              color: "rgba(26,26,26,0.5)",
            }}
          >
            {beforeNote}
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 16,
            color: "rgba(26,26,26,0.25)",
          }}
        >
          &rarr;
        </div>
        <div
          style={{
            padding: "1.25rem 1.5rem",
            background: "rgba(26,26,26,0.025)",
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: GREEN,
              marginBottom: 5,
            }}
          >
            After
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: TEXT,
              marginBottom: 4,
              lineHeight: 1.3,
            }}
          >
            {afterCopy}
          </div>
          <div
            style={{
              fontSize: 12,
              lineHeight: 1.55,
              color: "rgba(26,26,26,0.5)",
            }}
          >
            {afterNote}
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "1rem 1.5rem",
          borderTop: "0.5px solid rgba(26,26,26,0.08)",
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.35)",
            marginBottom: 5,
          }}
        >
          {whyLabel}
        </div>
        <div
          style={{
            fontSize: 13,
            lineHeight: 1.7,
            color: "rgba(26,26,26,0.65)",
          }}
        >
          {whyBody}
        </div>
      </div>
    </div>
  );
}

/* ── Main page ──────────────────────────────────────────────────── */

export default function ShopifyPage() {
  const [activeSection, setActiveSection] = useState("role");
  const [s1H, setS1H] = useState(false);
  const [s2H, setS2H] = useState(false);
  const [s3H, setS3H] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    for (const item of sideNavItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    const lastId = sideNavItems[sideNavItems.length - 1].id;
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 100
      ) {
        setActiveSection(lastId);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F0D4D1",
        fontFamily: "'Outfit', sans-serif",
        color: TEXT,
      }}
    >
      <BackArrow />
      <Navigation />
      <div
        style={{
          width: "100%",
          height: 0.5,
          backgroundColor: "rgba(26,26,26,0.15)",
          marginTop: 12,
        }}
      />

      <div
        style={{
          maxWidth: 1060,
          margin: "0 auto",
          padding: "0 24px 160px",
          display: "flex",
          gap: 0,
        }}
      >
        {/* Side nav */}
        <nav
          style={{
            position: "sticky",
            top: 100,
            alignSelf: "flex-start",
            width: 140,
            flexShrink: 0,
            paddingTop: 380,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: 6 }}
          >
            {sideNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  fontSize: 12,
                  fontWeight: activeSection === item.id ? 600 : 400,
                  color:
                    activeSection === item.id
                      ? TEXT
                      : "rgba(26,26,26,0.35)",
                  textDecoration: "none",
                  padding: "4px 0",
                  transition: "all 0.2s ease",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div style={{ flex: 1, maxWidth: 860 }}>
          {/* ── HERO ───────────────────────────────────────────────── */}
          <div style={{ padding: "64px 0 32px" }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: TEXT_MUTED,
                marginBottom: "1rem",
              }}
            >
              Shopify
            </p>
            <h1
              style={{
                fontSize: "clamp(30px, 4.5vw, 48px)",
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Abandonment to adoption
            </h1>
            <p
              style={{
                fontSize: 16,
                color: "rgba(26,26,26,0.65)",
                lineHeight: 1.8,
                maxWidth: 660,
                marginBottom: "1.25rem",
              }}
            >
              12% of Shopify merchants used Marketing Analytics. The rest
              opened it and closed the tab. The data was there. The
              interface gave merchants no reason to trust it and no path to
              act on it.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "rgba(26,26,26,0.65)",
                lineHeight: 1.8,
                maxWidth: 660,
                marginBottom: "1.25rem",
              }}
            >
              This is a case study about a practitioner tool with a naming
              problem, a trust problem, and a structural misalignment
              between how data was organized and how people actually make
              marketing decisions. The same problem Figma solves every time
              it ships a feature to designers who already know what
              they&rsquo;re doing.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: "2.5rem",
              }}
            >
              {[
                "Practitioner tools",
                "Feature naming",
                "Terminology systems",
                "E-commerce",
                "Progressive disclosure",
                "Information architecture",
                "Process-building",
                "B2B SaaS",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 12,
                    color: TEXT_SEC,
                    border: BORDER,
                    borderRadius: 100,
                    padding: "4px 12px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Stat bar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1px",
                background: "rgba(26,26,26,0.1)",
                border: BORDER,
                borderRadius: 14,
                overflow: "hidden",
                marginBottom: "3rem",
              }}
            >
              <div
                onMouseEnter={() => setS1H(true)}
                onMouseLeave={() => setS1H(false)}
                style={{
                  background: s1H ? "#fff" : "#F0D4D1",
                  padding: "1.25rem 1.5rem",
                  transition: "background 0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  12%&rarr;28%
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: TEXT_MUTED,
                  }}
                >
                  Analytics adoption
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: TEXT_MUTED,
                    marginTop: 3,
                    lineHeight: 1.45,
                  }}
                >
                  Content architecture doubled merchant engagement with
                  Marketing Analytics
                </div>
              </div>
              <div
                onMouseEnter={() => setS2H(true)}
                onMouseLeave={() => setS2H(false)}
                style={{
                  background: s2H ? "#fff" : "#F0D4D1",
                  padding: "1.25rem 1.5rem",
                  transition: "background 0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  +29%
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: TEXT_MUTED,
                  }}
                >
                  Attribution engagement
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: TEXT_MUTED,
                    marginTop: 3,
                    lineHeight: 1.45,
                  }}
                >
                  Sidebar restructure eliminated a four-click detour to
                  performance data
                </div>
              </div>
              <div
                onMouseEnter={() => setS3H(true)}
                onMouseLeave={() => setS3H(false)}
                style={{
                  background: s3H ? "#fff" : "#F0D4D1",
                  padding: "1.25rem 1.5rem",
                  transition: "background 0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  +37%
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: TEXT_MUTED,
                  }}
                >
                  Automation activation
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: TEXT_MUTED,
                    marginTop: 3,
                    lineHeight: 1.45,
                  }}
                >
                  Tooltip pattern adopted across 12 metrics independently
                  by other teams
                </div>
              </div>
            </div>
          </div>

          <Divider />

          {/* ── ROLE ────────────────────────────────────────────────── */}
          <div id="role" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>My role</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <Card
              label="Scope"
              title="Content Designer, Marketing Analytics"
              body="Led content strategy for the entire Marketing Analytics redesign. Partnered with data scientists, engineers, and PMs across Campaigns, Attribution, and Automations. Conducted primary research including a 12-merchant shadowing study. Facilitated a cross-team alignment workshop that resolved a six-month definition stalemate. Participated in weekly design critiques, giving feedback on information hierarchy and interaction design alongside copy. Reported to Alison Munn Garcia, UX Manager."
            />
            <Card
              label="Proficiencies demonstrated"
              title="What this work required"
              body={
                <>
                  Feature naming and terminology systems &middot;
                  Information architecture &middot; Cross-platform
                  terminology audit &middot; Progressive disclosure &middot;
                  Practitioner UX writing &middot; Merchant workflow
                  research &middot; Tooltip content patterns &middot;
                  Internal alignment facilitation &middot; Metric governance
                  standards &middot; Design critique participation &middot;
                  Content system scalability
                </>
              }
            />
          </div>

          <Divider />

          {/* ── PROBLEM ─────────────────────────────────────────────── */}
          <div id="problem" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>The problem</SectionLabel>
          <SectionTitle>
            A practitioner tool that had never been designed for
            practitioners
          </SectionTitle>
          <SectionBody>
            Marketing Analytics had a 12% adoption rate. The initial
            assumption was that merchants lacked analytics sophistication.
            User interviews told a different story: the merchants were
            capable. The tool was organized by technical data category
            rather than by how practitioners actually make decisions. And
            because nobody had ever audited how the same metrics were named
            across platforms, every number in Shopify was quietly in
            conflict with every number in Google, Meta, and Triple Whale
            &mdash; with no explanation why.
          </SectionBody>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <Card
              label="Problem 01"
              title="Not actionable"
              body={
                <>
                  The tool presented data without direction. Merchants
                  said: &ldquo;I can see my numbers. I don&rsquo;t know
                  what to do about them.&rdquo; Data without
                  decision-making context is noise, not insight.
                </>
              }
            />
            <Card
              label="Problem 02"
              title="A naming and trust problem"
              body={
                <>
                  ROAS in Shopify didn&rsquo;t match ROAS in Google or
                  Meta. Merchants assumed Shopify&rsquo;s numbers were
                  wrong. They weren&rsquo;t wrong &mdash; they were
                  calculated differently. The terminology had never been
                  made to do the trust work it needed to do.
                </>
              }
            />
            <Card
              label="Problem 03"
              title="Sophistication mismatch"
              body="Expert merchants found the tool too shallow. First-time entrepreneurs found it overwhelming. The same interface served both poorly. Progressive disclosure was the architectural answer."
            />
            <Card
              label="Problem 04"
              title="Structural misalignment"
              body={
                <>
                  Answering &ldquo;Should I increase Facebook
                  spend?&rdquo; required data from four pages across two
                  navigation sections. The architecture was organized by
                  data type, not by how practitioners make decisions.
                </>
              }
            />
          </div>

          <PullQuote>
            The interface was organized by technical category rather than
            by the questions practitioners actually need answered. Figma
            faces this same problem every time it ships prototyping, design
            systems, or Dev Mode features.
          </PullQuote>

          <Divider />

          {/* ── FEATURE NAMING ──────────────────────────────────────── */}
          <div id="naming" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>
            Feature naming &mdash; the work Figma specifically hires for
          </SectionLabel>
          <SectionTitle>
            Every metric label is a naming decision. Every naming decision
            is a trust decision.
          </SectionTitle>
          <SectionBody>
            The terminology audit revealed that the same concepts had
            different names, different calculation windows, and different
            exclusions across every platform merchants used. ROAS in
            Shopify used last-click attribution with a 30-day window.
            Google used a 28-day click window with view-through. Meta
            included view-through conversions that Shopify didn&rsquo;t
            count. These weren&rsquo;t bugs. They were methodology
            differences that nobody had surfaced through the
            product&rsquo;s language.
          </SectionBody>
          <SectionBody>
            The naming decisions below show the full chain: what the old
            term was, what replaced it, and why the new word does different
            cognitive work for a practitioner who already knows what
            they&rsquo;re doing.
          </SectionBody>

          <NamingBlock
            beforeCopy={"\u201CSales from marketing\u201D"}
            beforeNote="Implies direct causation. A sale \u201Cfrom\u201D marketing is a single-source claim."
            afterCopy={"\u201CSales attributed to marketing\u201D"}
            afterNote="Signals model-based calculation. The word \u201Cattributed\u201D does legal and epistemic work simultaneously."
            whyLabel="Why this word"
            whyBody={"\u201CFrom\u201D implies a single origin. Most conversions touch multiple channels \u2014 a merchant who sees Shopify report \u201Csales from Facebook\u201D while Meta reports the same sale as \u201Csales from Instagram\u201D reasonably concludes one platform is lying. \u201CAttributed to\u201D shifts the mental model from source-of-truth to model-based estimate, which is accurate. A practitioner reading this label understands immediately that attribution is a methodology question, not a factual one. This is the difference between a label that creates a support ticket and one that builds trust."}
          />

          <NamingBlock
            beforeCopy={"\u201CMarketing cost\u201D"}
            beforeNote="An input metric. Shows what was spent. Implies the important question is the cost."
            afterCopy={"\u201CConversion rate\u201D"}
            afterNote="An outcome metric. Shows what spending achieved. The question that actually matters to a practitioner."
            whyLabel="Why this word"
            whyBody="The homepage metric hierarchy communicates what matters most. Leading with \u201CMarketing cost\u201D told merchants the important question was how much they spent. Leading with \u201CConversion rate\u201D tells them the important question is whether the spending worked. This is a naming decision as a product strategy decision: it reorients the entire surface from accounting to performance measurement."
          />

          <NamingBlock
            beforeCopy={"\u201CROAS\u201D (undefined)"}
            beforeNote="A standard industry term used without methodology disclosure. Conflicts silently with every other platform\u2019s ROAS number."
            afterCopy={"\u201CROAS\u201D + tooltip: scope, exclusions, formula"}
            afterNote="The term stays. The methodology becomes visible. Practitioners who need precision can find it."
            whyLabel="Why this approach"
            whyBody="Leadership initially wanted to simplify the term or rename it to avoid the cross-platform conflict. I argued against simplification: \u201CROAS\u201D is the right word for the concept, and changing it would disconnect Shopify\u2019s language from the industry vocabulary practitioners already use. The fix was not a new name \u2014 it was surfacing the methodology that makes the existing name trustworthy. Transparency over renaming. The tooltip is the trust mechanism, not the label."
          />

          <NamingBlock
            beforeCopy={"\u201CAnalytics\u201D (buried under Reports)"}
            beforeNote="Attribution treated as a reporting feature. Four clicks deep. Framed as a record of what happened."
            afterCopy={"\u201CAttribution\u201D (within Marketing)"}
            afterNote="Named and elevated as a first-class marketing decision tool. Framed as a tool for what to do next."
            whyLabel="Why this placement"
            whyBody="Naming is not only about words \u2014 it is about where a concept lives in a hierarchy. \u201CAttribution\u201D as a navigation item inside Marketing says: this is a tool for making marketing decisions. \u201CAnalytics > Reports > Marketing attribution\u201D says: this is a record of what happened. The same concept, named and placed differently, produces different behavior. Attribution page visits increased 43% after the restructure."
          />

          <ImgFrame
            src="/images/shopify port/termaudit.png"
            alt="Cross-platform terminology audit"
            caption="Cross-platform metrics comparison: ROAS and Conversion Rate across five analytics platforms"
            tag="Terminology audit"
          />

          <Divider />

          {/* ── ARTIFACTS ───────────────────────────────────────────── */}
          <div id="artifacts" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>
            The three artifacts that changed how the organization
            understood the problem
          </SectionLabel>

          <SectionSubtitle>
            Artifact 01 &mdash; Cross-platform terminology audit
          </SectionSubtitle>
          <SectionBody>
            Nobody knew how Shopify had arrived at its current metric
            definitions. Prior content decisions had no documentation. I
            tracked down the teams who&rsquo;d worked on marketing
            analytics, reviewed journal entries, and scheduled 1:1s with
            content designers on adjacent product spaces to map the
            holistic merchant journey. This revealed the critical insight:
            platforms calculate differently, and obscuring this creates
            false precision. I presented findings to product leadership:
            transparency over simplification. They initially resisted
            exposing formulas. I proposed phased testing with power users,
            which proved adoption increased when merchants could see the
            math. This reframed the content strategy from hiding complexity
            to exposing calculation logic &mdash; influencing tooltip
            implementation and metric definition standards across all
            marketing products.
          </SectionBody>

          <SectionSubtitle style={{ marginTop: "2rem" }}>
            Artifact 02 &mdash; Merchant workflow maps
          </SectionSubtitle>
          <SectionBody>
            I designed a shadowing study with 12 merchants documenting
            their Monday morning marketing review step by step. The
            current state: Open Triple Whale (5 min). Open Google Ads (10
            min). Open Meta Ads Manager (10 min). Open Shopify Analytics (5
            min, abandons because numbers don&rsquo;t match). Export CSVs
            (15 min). Manual reconciliation in Google Sheets (90 min). Over
            two hours for a question that should take three minutes:
            &ldquo;Where should I put my money this week?&rdquo; I
            synthesized findings into six workflow principles. This shifted
            scope from surface improvements to full information
            architecture redesign.
          </SectionBody>

          <ImgFrame
            src="/images/shopify port/workflowdoc.png"
            alt="Merchant workflow map"
            caption="Current state (6 steps, 135 minutes) vs desired state (5 steps, 12 minutes)"
            tag="Workflow artifact"
          />

          <SectionSubtitle style={{ marginTop: "2rem" }}>
            Artifact 03 &mdash; Internal alignment workshop
          </SectionSubtitle>
          <SectionBody>
            Engineering wanted platform-specific definitions to match
            backend logic. Marketing wanted merchant-friendly
            simplifications. The two sides had been at a stalemate for six
            months. I facilitated an alignment workshop anchored around
            merchant confusion quotes, which shifted the conversation from
            &ldquo;what&rsquo;s technically accurate&rdquo; to
            &ldquo;what prevents merchant errors.&rdquo; This reframing
            broke the deadlock. We reached consensus on a shared definition
            matrix covering 23 core metrics with standardized scope,
            exclusions, and attribution models. The artifact became the
            reference standard for feature development and tooltip
            implementation &mdash; and other teams started using it as a
            template for their own alignment processes.
          </SectionBody>

          <ImgFrame
            src="/images/shopify port/workshopwork.png"
            alt="Metrics Definition Alignment workshop"
            caption="Metrics Definition Alignment: interactive workshop with five voting categories"
            tag="Alignment artifact"
          />

          <Divider />

          {/* ── REDESIGN ────────────────────────────────────────────── */}
          <div id="redesign" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>The redesign</SectionLabel>
          <SectionTitle>Structure as a content decision</SectionTitle>
          <SectionBody>
            The sidebar positioned marketing as binary: create campaigns or
            automate workflows. No path to understanding what was working.
            Attribution lived buried three clicks deep. I argued in design
            critiques that this structural misalignment was the primary
            adoption barrier &mdash; not the copy. Elevating Attribution to
            equal hierarchy within Marketing eliminated the four-click
            detour. Attribution page visits increased 43% post-launch.
          </SectionBody>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <div>
              <ImgFrame
                src="/images/shopify-sidebar-before.png"
                alt="Previous sidebar"
                caption="Before: Attribution buried under Analytics"
                tag="Before"
              />
            </div>
            <div>
              <ImgFrame
                src="/images/shopify-sidebar-after.png"
                alt="New sidebar"
                caption="After: Attribution elevated to Marketing section"
                tag="After"
              />
            </div>
          </div>

          <SectionBody>
            The previous homepage prioritized educational content &mdash;
            video tutorials, feature explanations &mdash; over performance
            data. I proposed repositioning education to email campaigns
            where it would be read voluntarily, and using the homepage for
            glanceable metrics. This reframed the page from &ldquo;learn
            how to use marketing tools&rdquo; to &ldquo;understand how
            your marketing is performing.&rdquo; Educational email CTR
            increased 34% over in-product placement.
          </SectionBody>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <div>
              <ImgFrame
                src="/images/shopify-homepage-before.png"
                alt="Previous homepage"
                caption="Before: education over performance"
                tag="Before"
              />
            </div>
            <div>
              <ImgFrame
                src="/images/shopify-homepage-after.png"
                alt="Redesigned homepage"
                caption="After: performance data above the fold"
                tag="After"
              />
            </div>
          </div>

          <Divider />

          {/* ── CONTENT SHIFTS ──────────────────────────────────────── */}
          <div id="shifts" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Three content strategy shifts</SectionLabel>
          <SectionTitle>Reframing what the interface says</SectionTitle>

          <SectionSubtitle>Feature &rarr; Task</SectionSubtitle>
          <SectionBody>
            The previous homepage centered Shopify&rsquo;s features rather
            than merchant objectives. Reframing the primary content module
            as &ldquo;Top marketing channels&rdquo; shifted from what
            Shopify can do to what merchants need to accomplish. Merchant
            feedback: &ldquo;Finally shows me what I actually came here
            for.&rdquo;
          </SectionBody>
          <ImgFrame
            src="/images/shopify port/featureandtaskbeforeandafter.png"
            alt="Feature to Task"
            caption="From product education to merchant workflow"
            tag="Before / After"
          />

          <SectionSubtitle>
            Causation &rarr; Attribution
          </SectionSubtitle>
          <SectionBody>
            Original terminology implied direct causation: &ldquo;Sales
            from marketing.&rdquo; Changing metric labels to
            &ldquo;attributed to marketing&rdquo; acknowledged that
            attribution is model-based calculation, not simple source
            tagging. This also set up tooltip explanations that
            transparently describe attribution methodology rather than
            defending oversimplified causal claims. I also replaced
            &ldquo;Marketing cost&rdquo; (an input metric showing what was
            spent) with &ldquo;Conversion rate&rdquo; (an outcome metric
            showing what the spending achieved).
          </SectionBody>
          <ImgFrame
            src="/images/shopify port/causationandaqusationbeforeandafter.png"
            alt="Causation to Attribution"
            caption="From false precision to honest attribution"
            tag="Before / After"
          />

          <SectionSubtitle>Builder &rarr; Analyst</SectionSubtitle>
          <SectionBody>
            The sole top-right control was a creation CTA: &ldquo;Create
            campaign.&rdquo; Research showed merchants arrive wanting to
            analyze performance, not create new campaigns. Three data
            controls now occupy the header: date range selector, comparison
            toggle, and attribution model switcher. Attribution model
            switching increased 36%.
          </SectionBody>
          <ImgFrame
            src="/images/shopify port/builderanalyst.png"
            alt="Builder to Analyst"
            caption="From creation-first to analysis-first"
            tag="Before / After"
          />

          <Divider />

          {/* ── TOOLTIP SYSTEM ──────────────────────────────────────── */}
          <div id="tooltips" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>
            The tooltip system &mdash; making a complex technical feature
            approachable
          </SectionLabel>
          <SectionTitle>
            Progressive disclosure as content architecture
          </SectionTitle>
          <SectionBody>
            The Campaigns page had to serve expert merchants requiring
            granular attribution breakdowns and novice merchants needing
            foundational understanding simultaneously. The solution was
            progressive disclosure as architecture: surface-level metrics
            at a glance, detailed breakdowns on-demand, calculation
            transparency via tooltips. Both audiences served. Neither
            overwhelmed.
          </SectionBody>
          <SectionBody>
            The tooltip pattern follows a three-part structure. This is not
            a writing pattern &mdash; it is a content architecture decision
            that scales across any technically complex surface where
            practitioners need precision without friction.
          </SectionBody>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <Card
              label="Part 01 &mdash; Scope"
              title="What the metric measures"
              body="Plain language, no jargon. A novice reads this and understands the number. An expert reads it and either confirms or skips to part two."
            />
            <Card
              label="Part 02 &mdash; Boundaries"
              title="What the metric excludes"
              body={
                <>
                  This is where trust is built. Naming what&rsquo;s not
                  counted prevents the false precision that eroded merchant
                  confidence. Practitioners specifically look for this
                  &mdash; it signals honesty about methodology.
                </>
              }
            />
            <Card
              label="Part 03 &mdash; Formula"
              title="How it&rsquo;s calculated"
              body="The exact math, visible on demand. Expert merchants audit this. Novices skip it. Both trust the number more because it&rsquo;s there."
            />
          </div>

          <SectionBody>
            I developed this pattern and the team applied it across 12
            metrics. It was later adopted for Attribution reports and
            Automations tables by other teams independently. A content
            system that only works when the content designer is in the room
            is not a system.
          </SectionBody>

          <ImgFrame
            src="/images/shopify-tooltips.png"
            alt="Three-part tooltip pattern across campaign metrics"
            caption="Three-part tooltip pattern applied across campaign metrics"
            tag="Content system"
          />

          <Divider />

          {/* ── OUTCOMES ────────────────────────────────────────────── */}
          <div id="outcomes" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Outcomes</SectionLabel>
          <div
            style={{
              border: BORDER,
              borderRadius: 14,
              padding: "1.75rem",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "1.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  12%&rarr;28%
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: TEXT_MUTED,
                    marginTop: 2,
                  }}
                >
                  Analytics adoption
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: 3,
                  }}
                >
                  Content architecture doubled adoption without new
                  features
                </div>
                <div
                  style={{
                    fontSize: 13,
                    lineHeight: 1.75,
                    color: TEXT_SEC,
                  }}
                >
                  When the interface matched how merchants think about
                  marketing decisions, they stopped closing the tab. The
                  naming changes, information architecture redesign, and
                  progressive disclosure system worked as a single coherent
                  system &mdash; not a series of copy improvements.
                </div>
              </div>
            </div>

            <hr
              style={{
                border: "none",
                borderTop: "0.5px solid rgba(26,26,26,0.1)",
                margin: "1.25rem 0",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "1.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  +34%
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: TEXT_MUTED,
                    marginTop: 2,
                  }}
                >
                  Educational email CTR vs. in-product
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: TEXT,
                    marginBottom: 3,
                  }}
                >
                  Practitioners want to learn on their own time
                </div>
                <div
                  style={{
                    fontSize: 13,
                    lineHeight: 1.75,
                    color: TEXT_SEC,
                  }}
                >
                  Moving educational content to email achieved 34% higher
                  click-through than in-product placement. Content that
                  respects when practitioners want information &mdash; not
                  when the product wants to give it &mdash; performs better
                  everywhere.
                </div>
              </div>
            </div>

            <hr
              style={{
                border: "none",
                borderTop: "0.5px solid rgba(26,26,26,0.1)",
                margin: "1.25rem 0",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                paddingTop: "1.25rem",
                borderTop: "0.5px solid rgba(26,26,26,0.1)",
                textAlign: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                  }}
                >
                  23
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: TEXT_MUTED,
                    marginTop: 2,
                  }}
                >
                  Metrics standardized in definition matrix
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                  }}
                >
                  12
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: TEXT_MUTED,
                    marginTop: 2,
                  }}
                >
                  Merchant shadowing sessions conducted
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                  }}
                >
                  +43%
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: TEXT_MUTED,
                    marginTop: 2,
                  }}
                >
                  Attribution page visits post-restructure
                </div>
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "rgba(26,26,26,0.5)",
              marginBottom: "2rem",
            }}
          >
            &ldquo;Mohammed is an incredible content designer with a
            thoughtful and passionate approach to UX writing and building a
            solid content strategy. He was able to make a huge impact on a
            difficult project with a large scope, helping us to form a
            strong story around what we were doing, and what needs to be
            done.&rdquo; &mdash; Alison Munn Garcia, UX Manager
          </p>

          <Divider />

          {/* ── BRIDGE ──────────────────────────────────────────────── */}
          <div id="bridge" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>
            Why this matters for Figma specifically
          </SectionLabel>
          <div
            style={{
              border: BORDER,
              borderRadius: 14,
              padding: "1.75rem 2rem",
              background: "rgba(26,26,26,0.025)",
              marginBottom: "1.75rem",
            }}
          >
            <SectionLabel style={{ marginBottom: "0.75rem" }}>
              The transferable problem
            </SectionLabel>
            <SectionBody>
              Figma&rsquo;s hardest writing problems are Shopify Analytics
              problems. Prototyping, design systems features, Dev Mode
              &mdash; all complex technical capabilities used by
              practitioners who already know what they&rsquo;re doing. The
              content challenge is not to explain the concept. It is to
              make the feature feel precise, trustworthy, and obvious at
              the moment a practitioner needs it.
            </SectionBody>
            <SectionBody>
              The naming decisions here &mdash; &ldquo;attributed
              to&rdquo; vs &ldquo;from,&rdquo; methodology disclosure over
              simplification, terminology that serves both expert and
              novice simultaneously &mdash; are the same decisions that
              govern how &ldquo;Auto layout,&rdquo;
              &ldquo;Variables,&rdquo; &ldquo;Constraints,&rdquo; and
              &ldquo;Passthrough&rdquo; get written at Figma. The tooltip
              system &mdash; scope, boundaries, formula &mdash; is the
              same progressive disclosure architecture that makes any
              technically complex feature approachable without hiding its
              power.
            </SectionBody>
            <div
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(26,26,26,0.7)",
                marginBottom: 0,
              }}
            >
              The alignment workshop that produced a 23-metric definition
              matrix is the same process Figma runs when it names a new
              feature. You need engineering, product, and design to agree
              on what a thing is before you can write what it does.
              I&rsquo;ve done that work. I know how to facilitate it,
              document it, and make the output last after the meeting is
              over.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

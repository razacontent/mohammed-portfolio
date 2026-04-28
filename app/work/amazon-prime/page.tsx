"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackArrow from "@/components/BackArrow";
import { useState, useEffect } from "react";

const TEXT = "#1a1a1a";
const TEXT_SEC = "rgba(26,26,26,0.6)";
const TEXT_MUTED = "rgba(26,26,26,0.4)";
const BORDER = "1.5px solid rgba(26,26,26,0.1)";
const DIVIDER = "0.5px solid rgba(26,26,26,0.15)";

const sideNavItems = [
  { label: "The problem", id: "problem" },
  { label: "The system", id: "system" },
  { label: "The conviction", id: "conviction" },
  { label: "Copy decisions", id: "craft" },
  { label: "Pillar taxonomy", id: "pillars" },
  { label: "Principles", id: "principles" },
  { label: "Aurora", id: "aurora" },
  { label: "Milestones", id: "milestones" },
  { label: "In product", id: "product" },
  { label: "Socialization", id: "socialization" },
  { label: "Outcomes", id: "outcomes" },
];

/* ── Sub-components ─────────────────────────────────────────────── */

function Card({
  label,
  title,
  body,
}: {
  label?: string;
  title?: string;
  body?: React.ReactNode;
}) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? "#fff" : "transparent",
        border: BORDER,
        borderColor: h ? "rgba(26,26,26,0.2)" : "rgba(26,26,26,0.1)",
        borderRadius: 14,
        padding: "1.25rem 1.5rem",
        transition: "background 0.2s, border-color 0.2s",
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        color: TEXT_MUTED,
        marginBottom: "0.75rem",
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
        fontSize: "1.35rem",
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </h2>
  );
}

function SectionBody({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        fontSize: 15,
        lineHeight: 1.8,
        color: "rgba(26,26,26,0.65)",
        marginBottom: "1.5rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function CraftBlock({
  quote,
  from,
  sections,
}: {
  quote: string;
  from: string;
  sections: { label: string; body: React.ReactNode }[];
}) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        border: BORDER,
        borderColor: h ? "rgba(26,26,26,0.25)" : "rgba(26,26,26,0.1)",
        borderRadius: 14,
        overflow: "hidden",
        marginBottom: "1.5rem",
        transition: "border-color 0.2s",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.75fr",
          gap: 0,
        }}
      >
        <div
          style={{
            background: TEXT,
            padding: "1.75rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 15,
              fontWeight: 500,
              lineHeight: 1.6,
              color: "#fff",
              fontStyle: "italic",
              marginBottom: "0.75rem",
            }}
          >
            {quote}
          </div>
          <div
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            {from}
          </div>
        </div>
        <div style={{ padding: "1.5rem" }}>
          {sections.map((s, i) => (
            <div key={i}>
              {i > 0 && (
                <hr
                  style={{
                    border: "none",
                    borderTop: "0.5px solid rgba(26,26,26,0.08)",
                    margin: "0.85rem 0",
                  }}
                />
              )}
              <div style={{ marginBottom: i < sections.length - 1 ? "1rem" : 0 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(26,26,26,0.35)",
                    marginBottom: 5,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: "rgba(26,26,26,0.65)",
                  }}
                >
                  {s.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main page ──────────────────────────────────────────────────── */

export default function AmazonPrimePage() {
  const [activeSection, setActiveSection] = useState("problem");

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
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
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
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {sideNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  fontSize: 12,
                  fontWeight: activeSection === item.id ? 600 : 400,
                  color: activeSection === item.id ? TEXT : "rgba(26,26,26,0.35)",
                  textDecoration: "none",
                  padding: "4px 0",
                  transition: "all 0.2s",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Main content */}
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
              Amazon World Wide Prime &middot; Content Engineering
            </p>
            <h1
              style={{
                fontSize: "clamp(28px, 4.5vw, 46px)",
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}
            >
              I built Prime&rsquo;s first content strategy.<br />Then I made it run without me.
            </h1>
            <p
              style={{
                fontSize: 16,
                color: "rgba(26,26,26,0.65)",
                lineHeight: 1.8,
                maxWidth: 660,
                marginBottom: "2rem",
              }}
            >
              Every benefit was real. Not one of them was felt. I built the content architecture that changed that: a research-grounded naming taxonomy, a lifecycle framework, and an AI content schema that now governs 400M+ personalized touchpoints across onboarding, engagement, retention, and three GenAI programs.
            </p>
            <p
              style={{
                fontSize: 16,
                color: "rgba(26,26,26,0.65)",
                lineHeight: 1.8,
                maxWidth: 660,
                marginBottom: "2rem",
              }}
            >
              This is a content engineering case study &mdash; but it is also a naming case study, a design system case study, and a case study in making the complex feel inevitable. The same instinct that makes a tax flow feel like a conversation or a design tool feel learnable makes a membership product feel like it actually knows you.
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
                "Content engineering",
                "AI content systems",
                "Voice architecture",
                "Lifecycle strategy",
                "Prompt engineering",
                "Measurement frameworks",
                "Localization",
                "Retention",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 12,
                    color: TEXT_SEC,
                    border: BORDER,
                    borderRadius: 100,
                    padding: "4px 12px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stat bar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1px",
                background: "rgba(26,26,26,0.1)",
                border: BORDER,
                borderRadius: 14,
                overflow: "hidden",
                marginBottom: "3rem",
              }}
            >
              {[
                { n: "+77K", l: "Members retained", d: "Annualized, non-incentivized Milestones" },
                { n: "+1.8%", l: "Renewal rate lift", d: "Annual, framework-driven" },
                { n: "400M+", l: "AI touchpoints", d: "Governed by the content schema I built" },
                { n: "15+", l: "Teams adopted", d: "Using the framework independently" },
              ].map((stat) => (
                <StatCell key={stat.l} n={stat.n} l={stat.l} d={stat.d} />
              ))}
            </div>
          </div>

          <Divider />

          {/* ── PROBLEM ────────────────────────────────────────────── */}
          <div id="problem" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>The problem</SectionLabel>
          <SectionTitle>No shared language. No strategy. A product talking to 200M members with no connective tissue.</SectionTitle>
          <SectionBody>
            Three separate frameworks governed Prime&rsquo;s voice. Four research studies sat in separate folders, each containing part of the same answer. The UXD team had never produced a content strategy deck. I joined with a dual mandate &mdash; content layer for Lumix (Prime&rsquo;s design system) and content lead for Membership Growth &mdash; and chose to solve the infrastructure problem while delivering both.
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
              label="What the research said"
              title="Members used Prime. They did not feel it."
              body="Four studies, one through-line: loyalty was habitual, not emotional. Members renewed out of utility. They had never been acknowledged, never shown cumulative proof, never given language that made the product feel like it knew them."
            />
            <Card
              label="What I built in response"
              title="A content system built for humans and AI simultaneously"
              body="A Value Communications Playbook with research synthesis, value pillar taxonomy, content principles with lifecycle emphasis, a measurement rubric, and CX briefs — designed from the start to serve both human writers making copy decisions and AI models generating content at scale."
            />
          </div>

          <Divider />

          {/* ── THE SYSTEM ─────────────────────────────────────────── */}
          <div id="system" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>The content engineering architecture</SectionLabel>
          <SectionTitle>From research brief to 400M AI-generated touchpoints</SectionTitle>

          {/* Architecture diagram */}
          <div
            style={{
              border: BORDER,
              borderRadius: 14,
              overflow: "hidden",
              background: "#fff",
              marginBottom: "1.75rem",
            }}
          >
            <svg
              viewBox="0 0 820 152"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "100%", fontFamily: "'Outfit',sans-serif" }}
            >
              <rect width="820" height="152" fill="#fff" />
              <defs>
                <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M0 0L10 5L0 10z" fill="rgba(26,26,26,0.35)" />
                </marker>
              </defs>

              <rect x="20" y="36" width="120" height="80" rx="8" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.12)" strokeWidth="1.5" />
              <text x="80" y="64" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(26,26,26,0.35)" letterSpacing="0.5">RESEARCH</text>
              <text x="80" y="82" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">Synthesis</text>
              <text x="80" y="98" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.45)">4 studies → 1 brief</text>

              <path d="M142 76 L162 76" stroke="rgba(26,26,26,0.3)" strokeWidth="1.5" markerEnd="url(#arr)" />

              <rect x="164" y="36" width="130" height="80" rx="8" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.12)" strokeWidth="1.5" />
              <text x="229" y="64" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(26,26,26,0.35)" letterSpacing="0.5">PLAYBOOK</text>
              <text x="229" y="82" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">Architecture</text>
              <text x="229" y="98" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.45)">Values · Principles · Tone</text>

              <path d="M296 76 L316 76" stroke="rgba(26,26,26,0.3)" strokeWidth="1.5" markerEnd="url(#arr)" />

              <rect x="318" y="26" width="152" height="100" rx="8" fill="#1a1a1a" />
              <text x="394" y="58" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(255,255,255,0.4)" letterSpacing="0.5">AI SCHEMA</text>
              <text x="394" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Content System</text>
              <text x="394" y="93" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.5)">Aurora · PriME · Binoculars</text>
              <text x="394" y="108" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.4)">Kairos · Locked/open vars</text>

              <path d="M472 76 L492 76" stroke="rgba(26,26,26,0.3)" strokeWidth="1.5" markerEnd="url(#arr)" />

              <rect x="494" y="36" width="130" height="80" rx="8" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.12)" strokeWidth="1.5" />
              <text x="559" y="64" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(26,26,26,0.35)" letterSpacing="0.5">PRODUCT</text>
              <text x="559" y="82" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">Copy</text>
              <text x="559" y="98" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.45)">Milestones · AR Off · Lumix</text>

              <path d="M626 76 L646 76" stroke="rgba(26,26,26,0.3)" strokeWidth="1.5" markerEnd="url(#arr)" />

              <rect x="648" y="36" width="152" height="80" rx="8" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.12)" strokeWidth="1.5" />
              <text x="724" y="64" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(26,26,26,0.35)" letterSpacing="0.5">OUTCOMES</text>
              <text x="724" y="82" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">Business impact</text>
              <text x="724" y="98" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.45)">+77K members · +1.8% renewal</text>
            </svg>
            <div
              style={{
                padding: "0.6rem 1.25rem",
                borderTop: "0.5px solid rgba(26,26,26,0.1)",
                fontSize: 11,
                color: TEXT_MUTED,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Research → Playbook → AI schema → Product copy → Outcomes</span>
              <span>Content engineering system</span>
            </div>
          </div>

          {/* People */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              margin: "0.75rem 0 1.5rem",
            }}
          >
            {[
              { color: "#1a6bb5", name: "UX PM" },
              { color: "#1d7a6b", name: "UX Design Lead" },
              { color: "#c47f0a", name: "Brand Content Designer" },
              { color: "#8b5cf6", name: "Membership Growth" },
              { color: "#c44a2a", name: "Prime Design Library (Lumix)" },
              { color: "#378add", name: "Engineering & AI" },
              { color: "#1a1a1a", name: "Global partners — JP, BR, DE, SA" },
            ].map((p) => (
              <span
                key={p.name}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  color: "rgba(26,26,26,0.7)",
                  border: BORDER,
                  borderRadius: 100,
                  padding: "4px 12px 4px 8px",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: p.color,
                  }}
                />
                {p.name}
              </span>
            ))}
          </div>

          <Divider />

          {/* ── CONVICTION ─────────────────────────────────────────── */}
          <div id="conviction" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>The conviction that proved it</SectionLabel>
          <SectionTitle>Emotional design outperforms incentives for membership retention</SectionTitle>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 0,
              border: BORDER,
              borderRadius: 14,
              overflow: "hidden",
              marginBottom: "1.75rem",
            }}
          >
            <div
              style={{
                background: TEXT,
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <div style={{ fontSize: "4rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>+77K</div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 4,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                members retained, annualized
              </div>
            </div>
            <div
              style={{
                padding: "2rem",
                background: "rgba(26,26,26,0.02)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: "0.6rem" }}>
                The team wanted to attach an offer. I argued against it.
              </div>
              <div style={{ fontSize: 13.5, lineHeight: 1.75, color: "rgba(26,26,26,0.65)" }}>
                The instinct in every retention meeting was the same: give members a credit, a discount, something tangible to justify staying. I pushed back. Four research studies showed that members did not feel Prime &mdash; they used it. Attaching an offer to every milestone moment would make the celebration transactional, which was exactly the problem the framework was built to solve.
                <br /><br />
                Milestones was Prime&rsquo;s first systematic effort to celebrate members without attaching an incentive. The A/B test result validated the argument: non-incentivized messaging outperformed incentivized messaging among New to Prime and Frequent cohorts. The content did the work. The coupon was not needed.
              </div>
            </div>
          </div>

          <Divider />

          {/* ── COPY DECISIONS ─────────────────────────────────────── */}
          <div id="craft" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Copy decisions &mdash; the writing behind the system</SectionLabel>
          <SectionTitle>Four moments where the framework became a specific word</SectionTitle>
          <SectionBody>
            Systems architecture is only half the story. Each decision below shows a constraint from the framework translating into a specific copy choice &mdash; and why the alternative would have failed.
          </SectionBody>

          {/* Decision 1 */}
          <CraftBlock
            quote={"\u201CFrom wishlists to watchlists, we\u2019re grateful you are here.\u201D"}
            from="Milestones — General welcome · Stage 01"
            sections={[
              {
                label: "The challenge",
                body: "Welcome a brand new Prime member without listing benefits. A list would signal that membership is a catalogue of features — the opposite of how the framework defines the Emotional and Access pillars.",
              },
              {
                label: "The decision",
                body: (
                  <>
                    &ldquo;Wishlists to watchlists&rdquo; activates two value pillars &mdash; shopping and entertainment &mdash; through parallel structure in four words. No enumeration. The brevity implies breadth rather than listing it. The rhyme creates a sense of craft that signals Prime is paying attention.
                    <br /><br />
                    &ldquo;We&rsquo;re grateful you are here&rdquo; centers Prime&rsquo;s gratitude, not the member&rsquo;s obligation. The Inviting tone from Stage 01: open a door, make no demands.
                  </>
                ),
              },
              {
                label: "What it accomplished",
                body: "A member reads this and feels welcomed into an integrated ecosystem, not catalogued into a benefit tier. The emotional register is warm and specific — it does not read like it was written by a system.",
              },
            ]}
          />

          {/* Decision 2 */}
          <CraftBlock
            quote={"\u201CYour membership just paid for itself!\u201D"}
            from="Lumix CX — Stage 03 · Definitive tone"
            sections={[
              {
                label: "The challenge",
                body: (
                  <>
                    Communicate cumulative savings to a Tenured Prime member. The conventional approach: &ldquo;You&rsquo;ve saved $X with Prime.&rdquo; Accurate, cold, forgettable.
                  </>
                ),
              },
              {
                label: "The decision",
                body: (
                  <>
                    &ldquo;Paid for itself&rdquo; converts a number into a verdict. The member does not calculate whether Prime was worth it &mdash; the copy does the math emotionally and delivers the conclusion. This is the Definitive tone from Stage 03 (Proved Value): strong, unqualified, data-backed without leading with the data.
                    <br /><br />
                    The alternative &mdash; &ldquo;You&rsquo;ve saved $87&rdquo; &mdash; asks the member to evaluate. This headline tells them what to conclude. One requires cognitive work. The other creates felt value.
                  </>
                ),
              },
              {
                label: "What it accomplished",
                body: (
                  <>
                    This became the governing pattern for all aggregate value communication in Lumix. Any surface showing cumulative savings uses the &ldquo;paid for itself&rdquo; framing rather than raw numbers. The decision scaled across 30+ product surfaces.
                  </>
                ),
              },
            ]}
          />

          {/* Decision 3 */}
          <CraftBlock
            quote={"\u201CTell us a bit about your interests to help us personalize your Amazon Prime experience.\u201D"}
            from="Aurora — Preference collection · New to Prime"
            sections={[
              {
                label: "The challenge",
                body: (
                  <>
                    Design the prompt that collects member preference signals to train Aurora&rsquo;s personalization model. Low completion rates produce poor signal quality. Poor signal quality produces worse AI output.
                  </>
                ),
              },
              {
                label: "The decision",
                body: (
                  <>
                    &ldquo;Tell us a bit&rdquo; is deliberately low-stakes &mdash; it signals this is a conversation, not a form. &ldquo;To help us personalize your Amazon Prime experience&rdquo; makes the data exchange explicit and promises something specific in return. The word &ldquo;personalize&rdquo; is a commitment, not a feature descriptor.
                    <br /><br />
                    This is a content engineering decision as much as a copy decision: the tone of this prompt directly determines the quality of the AI input it collects.
                  </>
                ),
              },
              {
                label: "What it accomplished",
                body: "A warm, low-commitment prompt produces more honest, high-signal responses than a direct data request. Better preference signals produce better AI-generated recommendations — this copy choice has measurable downstream impact on Aurora\u2019s personalization quality.",
              },
            ]}
          />

          {/* Decision 4 */}
          <CraftBlock
            quote={"\u201CHere\u2019s how your membership has been working for you \u2014 and what you can unlock next.\u201D"}
            from="Aurora Milestone — 30-day · Value realization"
            sections={[
              {
                label: "The challenge",
                body: "Introduce a 30-day membership recap to a member who is beginning to evaluate whether Prime is worth keeping. Voluntary churn was 47.4% of all cancellations. This is a high-stakes moment.",
              },
              {
                label: "The decision",
                body: (
                  <>
                    &ldquo;Working for you&rdquo; positions Prime as active and purposeful &mdash; the membership is doing something on their behalf. This is the Trust pillar in the Perceived state: the member has moved past potential and is beginning to build belief.
                    <br /><br />
                    &ldquo;What you can unlock next&rdquo; introduces forward motion without pressure. It implies there is more value to realize &mdash; without framing it as &ldquo;you&rsquo;re missing out.&rdquo; The Considerate tone from Stage 02: respect the member&rsquo;s moment and agency.
                  </>
                ),
              },
              {
                label: "What it accomplished",
                body: "This copy leads into the milestone celebration with no guilt, no urgency, and no offer attached. The milestone data and a $5 credit follow — but the opening sets a relational tone that makes the credit feel like a gift rather than a retention mechanism.",
              },
            ]}
          />

          <Divider />

          {/* ── PILLAR TAXONOMY ─────────────────────────────────────── */}
          <div id="pillars" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 02 &mdash; Value pillar taxonomy</SectionLabel>
          <SectionTitle>The schema that serves humans and AI simultaneously</SectionTitle>
          <SectionBody>
            Each pillar maps the member journey from abstract promise to concrete proof. For human writers, it answers: what should this copy lead with at this lifecycle stage? For AI programs, it answers: what content category, what emotional register, what proof type to generate for this member state.
          </SectionBody>

          {/* Pillar table */}
          <div
            style={{
              width: "100%",
              border: BORDER,
              borderRadius: 14,
              overflow: "hidden",
              marginBottom: "1.75rem",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 13,
              }}
            >
              <thead>
                <tr style={{ background: "rgba(26,26,26,0.04)" }}>
                  {["Pillar", "Potential (Promise)", "Perceived (Belief)", "Realized (Proof)"].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: "10px 14px",
                        textAlign: "left",
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: TEXT_MUTED,
                        borderBottom: "0.5px solid rgba(26,26,26,0.12)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { pillar: "Monetary", potential: "\u201CPrime might save me money\u201D", perceived: "\u201CI believe Prime pays for itself\u201D", realized: "\u201CI saved $87 on shipping this month\u201D" },
                  { pillar: "Convenience", potential: "\u201CPrime could simplify shopping\u201D", perceived: "\u201CLife runs smoother with Prime\u201D", realized: "\u201CMy orders arrived early 8 times\u201D" },
                  { pillar: "Access", potential: "\u201CMembers get things I might want\u201D", perceived: "\u201CBeing a member feels special\u201D", realized: "\u201CI got early access to the deal I wanted\u201D" },
                  { pillar: "Emotional", potential: "\u201CPrime says it cares about me\u201D", perceived: "\u201CI feel recognized as a member\u201D", realized: "\u201CPrime celebrates me\u201D" },
                  { pillar: "Trust", potential: "\u201CPrime promises reliability\u201D", perceived: "\u201CI believe Prime is transparent\u201D", realized: "\u201CI trust Prime\u201D" },
                ].map((row, i, arr) => (
                  <tr key={row.pillar}>
                    <td
                      style={{
                        padding: "11px 14px",
                        lineHeight: 1.5,
                        fontWeight: 700,
                        color: TEXT,
                        borderBottom: i < arr.length - 1 ? "0.5px solid rgba(26,26,26,0.06)" : "none",
                        verticalAlign: "top",
                      }}
                    >
                      {row.pillar}
                    </td>
                    <td
                      style={{
                        padding: "11px 14px",
                        lineHeight: 1.5,
                        color: TEXT_MUTED,
                        fontStyle: "italic",
                        borderBottom: i < arr.length - 1 ? "0.5px solid rgba(26,26,26,0.06)" : "none",
                        verticalAlign: "top",
                      }}
                    >
                      {row.potential}
                    </td>
                    <td
                      style={{
                        padding: "11px 14px",
                        lineHeight: 1.5,
                        color: TEXT_SEC,
                        borderBottom: i < arr.length - 1 ? "0.5px solid rgba(26,26,26,0.06)" : "none",
                        verticalAlign: "top",
                      }}
                    >
                      {row.perceived}
                    </td>
                    <td
                      style={{
                        padding: "11px 14px",
                        lineHeight: 1.5,
                        color: "#1d7a6b",
                        fontWeight: 600,
                        borderBottom: i < arr.length - 1 ? "0.5px solid rgba(26,26,26,0.06)" : "none",
                        verticalAlign: "top",
                      }}
                    >
                      {row.realized}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionBody style={{ marginTop: "-0.5rem" }}>
            &ldquo;I trust Prime&rdquo; is the target state the entire content system was engineered to create. Three words. The full arc.
          </SectionBody>

          <div
            style={{
              fontSize: "1.1rem",
              fontWeight: 500,
              lineHeight: 1.6,
              color: TEXT,
              padding: "1.5rem 0",
              borderTop: "2px solid rgba(26,26,26,0.08)",
              marginBottom: "1.75rem",
              maxWidth: 620,
            }}
          >
            The pillar names themselves are a naming exercise. &ldquo;Monetary&rdquo; not &ldquo;Savings.&rdquo; &ldquo;Convenience&rdquo; not &ldquo;Speed.&rdquo; &ldquo;Emotional&rdquo; not &ldquo;Loyalty.&rdquo; Each word had to be precise enough to anchor a content decision, broad enough to survive across 30+ surfaces and four languages, and clear enough that any PM or engineer reading the framework understood immediately what territory it covered.
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <Card
              label="Naming decision 01"
              title={"\u201CMonetary\u201D over \u201CSavings\u201D or \u201CValue\u201D"}
              body={<>&ldquo;Savings&rdquo; implies a comparison to a non-Prime price. &ldquo;Value&rdquo; is abstract. &ldquo;Monetary&rdquo; is the precise category: real financial return, quantifiable, verifiable. The name needed to hold for a $6.99 delivery waiver and a $150 Prime Day saving simultaneously.</>}
            />
            <Card
              label="Naming decision 02"
              title={"\u201CPertinent\u201D over \u201CRelevant\u201D or \u201CTimely\u201D"}
              body={<>&ldquo;Relevant&rdquo; is already a tone attribute inside this pillar. &ldquo;Timely&rdquo; collapses the principle to one dimension. &ldquo;Pertinent&rdquo; covers both contextual fit and lifecycle fit &mdash; the right content for the right person at the right moment &mdash; without privileging either.</>}
            />
            <Card
              label="Naming decision 03"
              title={"\u201CEmpathetic\u201D over \u201CEmotional\u201D or \u201CHuman\u201D"}
              body={<>&ldquo;Emotional&rdquo; is a pillar name, not a principle name &mdash; the overlap would create confusion. &ldquo;Human&rdquo; is too broad to be useful as a decision-making tool. &ldquo;Empathetic&rdquo; is directional: it tells a writer which audience instinct to activate, not just which register to use.</>}
            />
          </div>

          <Divider />

          {/* ── PRINCIPLES ─────────────────────────────────────────── */}
          <div id="principles" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 03 &mdash; Content principles</SectionLabel>
          <SectionTitle>A scale of emphasis, not a checklist</SectionTitle>

          {/* Principles diagram */}
          <div
            style={{
              border: BORDER,
              borderRadius: 14,
              overflow: "hidden",
              background: "#fff",
              marginBottom: "1.75rem",
            }}
          >
            <svg
              viewBox="0 0 820 195"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "100%", fontFamily: "'Outfit',sans-serif" }}
            >
              <rect width="820" height="195" fill="#fff" />
              <text x="110" y="26" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(26,26,26,0.3)" letterSpacing="0.8">VALUES</text>
              <text x="380" y="26" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(26,26,26,0.3)" letterSpacing="0.8">PRINCIPLES</text>
              <text x="650" y="26" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(26,26,26,0.3)" letterSpacing="0.8">TONE ATTRIBUTES</text>

              <rect x="32" y="36" width="155" height="148" rx="8" fill="rgba(26,26,26,0.03)" stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" />
              <text x="109" y="63" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1a1a1a">Monetary</text>
              <line x1="50" y1="74" x2="169" y2="74" stroke="rgba(26,26,26,0.07)" strokeWidth="1" />
              <text x="109" y="96" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1a1a1a">Convenience</text>
              <line x1="50" y1="107" x2="169" y2="107" stroke="rgba(26,26,26,0.07)" strokeWidth="1" />
              <text x="109" y="128" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1a1a1a">Access</text>
              <line x1="50" y1="139" x2="169" y2="139" stroke="rgba(26,26,26,0.07)" strokeWidth="1" />
              <text x="109" y="158" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1a1a1a">Emotion</text>
              <line x1="50" y1="168" x2="169" y2="168" stroke="rgba(26,26,26,0.07)" strokeWidth="1" />
              <text x="109" y="178" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1a1a1a">Trust</text>

              <text x="220" y="115" textAnchor="middle" fontSize="18" fill="rgba(26,26,26,0.18)">&rarr;</text>

              <rect x="248" y="36" width="138" height="44" rx="7" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" />
              <text x="317" y="55" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">Intuitive</text>
              <text x="317" y="71" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.45)">Monetary + Convenience</text>

              <rect x="248" y="90" width="138" height="44" rx="7" fill="rgba(26,26,26,0.04)" stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" />
              <text x="317" y="109" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">Pertinent</text>
              <text x="317" y="125" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.45)">Convenience + Access</text>

              <rect x="248" y="144" width="138" height="44" rx="7" fill="#1a1a1a" />
              <text x="317" y="163" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Empathetic</text>
              <text x="317" y="179" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.45)">Emotion + Trust</text>

              <text x="425" y="115" textAnchor="middle" fontSize="18" fill="rgba(26,26,26,0.18)">&rarr;</text>

              <rect x="450" y="36" width="340" height="148" rx="8" fill="rgba(26,26,26,0.03)" stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" />
              <text x="468" y="61" fontSize="11" fontWeight="700" fill="#1a1a1a">Comprehensible</text>
              <text x="593" y="61" fontSize="11" fontWeight="700" fill="#1a1a1a">Efficient</text>
              <text x="686" y="61" fontSize="11" fontWeight="700" fill="#1a1a1a">Tangible</text>
              <line x1="460" y1="71" x2="780" y2="71" stroke="rgba(26,26,26,0.07)" strokeWidth="1" />
              <text x="468" y="93" fontSize="11" fontWeight="700" fill="#1a1a1a">Adaptive</text>
              <text x="593" y="93" fontSize="11" fontWeight="700" fill="#1a1a1a">Contextual</text>
              <text x="686" y="93" fontSize="11" fontWeight="700" fill="#1a1a1a">Relevant</text>
              <line x1="460" y1="103" x2="780" y2="103" stroke="rgba(26,26,26,0.07)" strokeWidth="1" />
              <text x="468" y="127" fontSize="11" fontWeight="700" fill="#1a1a1a">Dependable</text>
              <text x="593" y="127" fontSize="11" fontWeight="700" fill="#1a1a1a">Considerate</text>
              <text x="686" y="127" fontSize="11" fontWeight="700" fill="#1a1a1a">Celebratory</text>
              <line x1="460" y1="137" x2="780" y2="137" stroke="rgba(26,26,26,0.07)" strokeWidth="1" />
              <text x="615" y="157" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.35)">+ Personalised · Insightful · Sincere · Validating · Appreciative · Inviting</text>
            </svg>
            <div
              style={{
                padding: "0.6rem 1.25rem",
                borderTop: "0.5px solid rgba(26,26,26,0.1)",
                fontSize: 11,
                color: TEXT_MUTED,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Non-Prime surfaces prioritize Intuitive. Tenured anniversary moments prioritize Empathetic. A decision-making tool, not a style guide.</span>
              <span>Artifact 03</span>
            </div>
          </div>

          <Divider />

          {/* ── AURORA ─────────────────────────────────────────────── */}
          <div id="aurora" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Project Aurora &mdash; the playbook as AI content schema</SectionLabel>
          <SectionTitle>Re-imagined Prime Onboarding: how the framework became an agentic system</SectionTitle>

          <SectionBody>
            Project Aurora is AI-powered agentic Prime onboarding for 2026 &mdash; a personalized, concierge-like experience across four stages: Welcome, Activate, Value Realization, Retention. I led content design alongside UX design and PM. The five CX Goals that govern Aurora are a direct translation of the playbook into AI content constraints.
          </SectionBody>

          {/* Aurora CX Goals diagram */}
          <div
            style={{
              border: BORDER,
              borderRadius: 14,
              overflow: "hidden",
              background: "#fff",
              marginBottom: "1.75rem",
            }}
          >
            <svg
              viewBox="0 0 820 230"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "100%", fontFamily: "'Outfit',sans-serif" }}
            >
              <rect width="820" height="230" fill="#fff" />
              <text x="32" y="26" fontSize="9" fontWeight="600" fill="rgba(26,26,26,0.3)" letterSpacing="0.8">AURORA CX GOALS — PLAYBOOK TRANSLATED INTO AI CONTENT OBJECTIVES</text>

              <rect x="32" y="38" width="234" height="80" rx="8" fill="rgba(26,26,26,0.03)" stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" />
              <text x="149" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">Welcome and celebrate</text>
              <text x="149" y="78" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.5)">Acknowledge joining, reward engagement,</text>
              <text x="149" y="93" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.5)">foster loyalty and relationship</text>
              <text x="149" y="109" textAnchor="middle" fontSize="9" fill="rgba(26,26,26,0.35)">Empathetic · Emotional pillar</text>

              <rect x="294" y="38" width="234" height="80" rx="8" fill="rgba(26,26,26,0.03)" stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" />
              <text x="411" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">Simplify comprehension</text>
              <text x="411" y="78" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.5)">Visual and linguistic hierarchy, Prime&rsquo;s</text>
              <text x="411" y="93" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.5)">breadth feels intuitive and accessible</text>
              <text x="411" y="109" textAnchor="middle" fontSize="9" fill="rgba(26,26,26,0.35)">Intuitive · Monetary + Convenience</text>

              <rect x="556" y="38" width="232" height="80" rx="8" fill="rgba(26,26,26,0.03)" stroke="rgba(26,26,26,0.1)" strokeWidth="1.5" />
              <text x="672" y="62" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1a1a1a">Proactively discover Prime</text>
              <text x="672" y="78" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.5)">Anticipate needs before they arise,</text>
              <text x="672" y="93" textAnchor="middle" fontSize="10" fill="rgba(26,26,26,0.5)">offer solutions seamlessly</text>
              <text x="672" y="109" textAnchor="middle" fontSize="9" fill="rgba(26,26,26,0.35)">Pertinent · Access pillar</text>

              <rect x="163" y="136" width="234" height="80" rx="8" fill="#1a1a1a" />
              <text x="280" y="160" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Be personal + contextual</text>
              <text x="280" y="176" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)">Adapt to member intent and lifecycle stage,</text>
              <text x="280" y="191" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)">messaging always timely and relevant</text>
              <text x="280" y="207" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.35)">Pertinent · Lifecycle CX framework</text>

              <rect x="425" y="136" width="234" height="80" rx="8" fill="#1a1a1a" />
              <text x="542" y="160" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Strengthen perceived value</text>
              <text x="542" y="176" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)">Connect actions to visible value,</text>
              <text x="542" y="191" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)">Prime feels essential and worth keeping</text>
              <text x="542" y="207" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.35)">Trust pillar · Measurement rubric</text>
            </svg>
            <div
              style={{
                padding: "0.6rem 1.25rem",
                borderTop: "0.5px solid rgba(26,26,26,0.1)",
                fontSize: 11,
                color: TEXT_MUTED,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Each goal traces back to a specific playbook principle &mdash; Aurora&rsquo;s AI output is constrained by the content architecture, not generated freely</span>
              <span>Project Aurora &middot; Jan 2026</span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <Card
              label="Locked variables"
              title="What the AI cannot change"
              body="Lifecycle stage · Tone principle · Value pillar · Brand register. These constraints are the content architecture. Without them, personalization at scale produces voice drift — the copy starts to sound like a different product on every surface."
            />
            <Card
              label="Open variables"
              title="What the AI personalizes"
              body="Member name · Savings data · Benefit category · Shopping behavior signals · Emotional hook · Contextual event. The model personalizes within a constrained voice — the difference between a brand experience and noise at scale."
            />
          </div>

          <Divider />

          {/* ── MILESTONES ─────────────────────────────────────────── */}
          <div id="milestones" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Milestones &mdash; the playbook in product</SectionLabel>
          <SectionTitle>Celebrating members who had never been celebrated</SectionTitle>

          {/* Annotation: image + text */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <div>
              <div style={{ background: TEXT, borderRadius: 10, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/amazon-prime-01.jpg"
                  alt="Thanks for being a part of Prime"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
            <div style={{ border: BORDER, borderRadius: 14, padding: "1.25rem" }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.35)",
                  marginBottom: 5,
                }}
              >
                Framework applied
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: TEXT,
                  marginBottom: 6,
                  lineHeight: 1.5,
                }}
              >
                &ldquo;Thanks for being a part of Prime! From wishlists to watchlists, we&rsquo;re grateful you are here.&rdquo;
              </div>
              <div style={{ fontSize: 12.5, lineHeight: 1.7, color: TEXT_SEC }}>
                Stage 01 &middot; Empathetic (Inviting) &middot; Access + Emotional pillars
                <br /><br />
                See Copy Decision 01 above for the full annotation on &ldquo;wishlists to watchlists.&rdquo; The framework decision here: lead with belonging, not benefit. A list of features would make this moment transactional before it started.
              </div>
            </div>
          </div>

          {/* Two milestone images side by side */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <div>
              <div style={{ background: TEXT, borderRadius: 10, overflow: "hidden", marginBottom: 8 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/amazon-prime-02.jpg"
                  alt="Cheers to your first month"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: TEXT_MUTED }}>30-day &middot; Perceived Value</span>
                <span
                  style={{
                    fontSize: 10,
                    color: "rgba(26,26,26,0.5)",
                    border: BORDER,
                    borderRadius: 100,
                    padding: "2px 10px",
                  }}
                >
                  Non-incentivized
                </span>
              </div>
            </div>
            <div>
              <div style={{ background: TEXT, borderRadius: 10, overflow: "hidden", marginBottom: 8 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/amazon-prime-03.jpg"
                  alt="Happy Prime anniversary"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 11, color: TEXT_MUTED }}>1-year &middot; Proved Value</span>
                <span
                  style={{
                    fontSize: 10,
                    color: "rgba(26,26,26,0.5)",
                    border: BORDER,
                    borderRadius: 100,
                    padding: "2px 10px",
                  }}
                >
                  Non-incentivized
                </span>
              </div>
            </div>
          </div>

          <Divider />

          {/* ── IN PRODUCT ─────────────────────────────────────────── */}
          <div id="product" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>In product &mdash; Lumix CX examples</SectionLabel>
          <SectionTitle>The framework at 30+ surfaces</SectionTitle>

          {/* Annotation: paid for itself */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <div>
              <div style={{ background: TEXT, borderRadius: 10, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/amazon-prime-04.jpg"
                  alt="Membership paid for itself"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
            <div style={{ border: BORDER, borderRadius: 14, padding: "1.25rem" }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.35)",
                  marginBottom: 5,
                }}
              >
                Stage 03 &mdash; Proved Value, Definitive
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: TEXT,
                  marginBottom: 6,
                  lineHeight: 1.5,
                }}
              >
                &ldquo;Your membership just paid for itself!&rdquo;
              </div>
              <div style={{ fontSize: 12.5, lineHeight: 1.7, color: TEXT_SEC }}>
                See Copy Decision 02 above. The Definitive tone from Stage 03: no qualifications, no asterisk. The member does not calculate &mdash; the copy delivers the verdict. Anchored to &ldquo;Prime Big Deal Days&rdquo; so the savings feel earned and specific, not accumulated invisibly.
              </div>
            </div>
          </div>

          {/* Annotation: orders page */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: "1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            <div>
              <div style={{ border: "2.5px solid #1a1a1a", borderRadius: 10, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/amazon-prime-05.jpg"
                  alt="Orders page"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
            <div style={{ border: BORDER, borderRadius: 14, padding: "1.25rem" }}>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.35)",
                  marginBottom: 5,
                }}
              >
                Stage 02 &mdash; Perceived Value, Contextual
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: TEXT,
                  marginBottom: 6,
                  lineHeight: 1.5,
                }}
              >
                &ldquo;Your membership paid for itself!&rdquo;
              </div>
              <div style={{ fontSize: 12.5, lineHeight: 1.7, color: TEXT_SEC }}>
                Same pattern, different surface. Appears on the Your Orders page &mdash; where a member is already thinking about what they spent. The placement is the strategy: Contextual and Timely tones from Stage 02, surfacing proof at the exact moment it is most felt.
              </div>
            </div>
          </div>

          <Divider />

          {/* ── SOCIALIZATION ──────────────────────────────────────── */}
          <div id="socialization" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Socialization</SectionLabel>
          <SectionTitle>15+ teams, no mandate</SectionTitle>
          <SectionBody>
            A framework nobody uses is a document. I socialized the playbook through five specific mechanisms &mdash; not by policy, but by making the framework the most useful thing in the room.
          </SectionBody>

          {/* Toolkit rows */}
          <div
            style={{
              border: BORDER,
              borderRadius: 14,
              padding: "0 1.25rem",
              marginBottom: "1.75rem",
            }}
          >
            {[
              {
                name: "Strategic brief",
                desc: "Presented the research synthesis to leadership as a business problem, not a content document. The direction followed from the problem. People adopted it because they recognized the gap, not because I told them to.",
              },
              {
                name: "Design critiques",
                desc: "Embedded in weekly design reviews across Membership Growth and Lumix — reviewing screens at the copy, interaction, and hierarchy level simultaneously. Content feedback in critique is different from content feedback in a doc: you are evaluating how words land against visual weight, layout constraints, and interaction state. I gave as much feedback on flow and visual hierarchy as on copy.",
              },
              {
                name: "Lumix design system",
                desc: "Built the content layer for Prime\u2019s next-generation design system: component-level copy guidance, terminology standards, and voice decisions that govern how any designer using Lumix writes. A design system content layer is not a style guide — it is a set of constraints that enable rather than restrict. Every component ships with decisions already made, so teams spend their time on judgment rather than re-solving solved problems.",
              },
              {
                name: "Vocabulary embedding",
                desc: "Embedded the framework\u2019s language into design reviews, PM briefs, and eng specs. When the vocabulary became the vocabulary of the product conversation, adoption followed automatically.",
              },
              {
                name: "AI team translation",
                desc: "Translated the rubric into engineering-legible criteria for Aurora, PriME, Binoculars, and Kairos. Defining \u201CEmpathetic\u201D as a measurable signal in AI output is a different problem from defining it for a human writer.",
              },
            ].map((row, i, arr) => (
              <div
                key={row.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "170px 1fr",
                  gap: "1.25rem",
                  padding: "0.9rem 0",
                  borderBottom: i < arr.length - 1 ? "0.5px solid rgba(26,26,26,0.08)" : "none",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>{row.name}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: TEXT_SEC }}>{row.desc}</div>
              </div>
            ))}
          </div>

          <Divider />

          {/* ── OUTCOMES ───────────────────────────────────────────── */}
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
            {/* Main outcome rows */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "130px 1fr",
                gap: "1.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <div>
                <div style={{ fontSize: "1.85rem", fontWeight: 700, lineHeight: 1.1 }}>+77K</div>
                <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 2 }}>Annualized member impact</div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, marginBottom: 3 }}>Non-incentivized content outperformed offers</div>
                <div style={{ fontSize: 13, lineHeight: 1.75, color: TEXT_SEC }}>
                  Strongest results from New to Prime and Frequent cohorts with no incentive attached. The Appreciative and Validating tones were doing the work. This validated the empathetic design argument &mdash; and the conviction to push back on the room.
                </div>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "0.5px solid rgba(26,26,26,0.1)", margin: "1.25rem 0" }} />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "130px 1fr",
                gap: "1.5rem",
                marginBottom: "1.25rem",
              }}
            >
              <div>
                <div style={{ fontSize: "1.85rem", fontWeight: 700, lineHeight: 1.1 }}>+1.8%</div>
                <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 2 }}>Annual renewal rate lift</div>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: TEXT, marginBottom: 3 }}>Content architecture tied to retention revenue</div>
                <div style={{ fontSize: 13, lineHeight: 1.75, color: TEXT_SEC }}>
                  At Prime&rsquo;s scale, 1.8% represents significant retained revenue. This is what content systems look like when their business consequence is measured rather than assumed.
                </div>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "0.5px solid rgba(26,26,26,0.1)", margin: "1.25rem 0" }} />

            {/* Mini stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: "1rem",
                paddingTop: "1.25rem",
                borderTop: "0.5px solid rgba(26,26,26,0.1)",
                textAlign: "center",
              }}
            >
              {[
                { n: "400M+", l: "AI touchpoints governed" },
                { n: "15+", l: "Teams adopted independently" },
                { n: "3", l: "GenAI programs shipped" },
                { n: "4", l: "Global markets" },
              ].map((m) => (
                <div key={m.l}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>{m.n}</div>
                  <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 2 }}>{m.l}</div>
                </div>
              ))}
            </div>
          </div>

          <Divider />

          {/* ── BRIDGE / FIGMA MAPPING ─────────────────────────────── */}
          <div
            style={{
              border: BORDER,
              borderRadius: 14,
              padding: "1.75rem 2rem",
              background: "rgba(26,26,26,0.025)",
              marginBottom: "1.75rem",
            }}
          >
            <SectionLabel>Why this maps to the Figma Production Experience role</SectionLabel>
            <SectionBody style={{ marginBottom: "1rem" }}>
              The role asks for someone who can take technically complex features and make them feel simple and human. The Prime work shows the same instinct applied at scale: a naming taxonomy that governed how 200M+ members experienced value language, a design system content layer (Lumix) that functions the same way Figma&rsquo;s own component libraries do, and an AI content schema that constrains non-deterministic output to a consistent voice.
            </SectionBody>
            <div
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(26,26,26,0.7)",
                marginBottom: 0,
              }}
            >
              The TurboTax case study pairs with this one &mdash; Prime shows content engineering and design systems, TurboTax shows making a genuinely complex technical system (tax law, branching conditional flows, high-stakes error states) feel approachable for anyone. Together they answer the full job description.
            </div>
          </div>


        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ── StatCell sub-component ─────────────────────────────────────── */

function StatCell({ n, l, d }: { n: string; l: string; d: string }) {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: h ? "#fff" : "#F0D4D1",
        padding: "1.25rem 1.5rem",
        transition: "background 0.2s",
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 700, lineHeight: 1, marginBottom: 4 }}>{n}</div>
      <div
        style={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: TEXT_MUTED,
        }}
      >
        {l}
      </div>
      <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3, lineHeight: 1.45 }}>{d}</div>
    </div>
  );
}

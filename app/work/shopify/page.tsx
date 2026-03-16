"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const TEXT = "#1a1a1a";
const TEXT_SEC = "rgba(26,26,26,0.6)";
const TEXT_MUTED = "rgba(26,26,26,0.4)";
const BORDER = "1.5px solid rgba(26,26,26,0.1)";
const DIVIDER = "0.5px solid rgba(26,26,26,0.15)";
const GREEN = "#1D9E75";
const AMBER = "#c47f0a";

function Card({
  label,
  title,
  body,
}: {
  label?: string;
  title?: string;
  body?: React.ReactNode;
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
        padding: "1.5rem",
        transition: "background 0.2s, border-color 0.2s",
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: TEXT_MUTED,
            marginBottom: "0.5rem",
          }}
        >
          {label}
        </div>
      )}
      {title && (
        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: "0.5rem" }}>
          {title}
        </div>
      )}
      {body && (
        <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>
          {body}
        </div>
      )}
    </div>
  );
}

function ScreenFrame({
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
          background: "#1a1a1a",
          borderRadius: 10,
          overflow: "hidden",
          marginBottom: "1rem",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ width: "100%", display: "block" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          background: "rgba(26,26,26,0.03)",
          border: BORDER,
          borderTop: "none",
          borderRadius: "0 0 10px 10px",
          marginBottom: "1.5rem",
        }}
      >
        <span style={{ fontSize: 12, color: TEXT_SEC }}>{caption}</span>
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.10em",
        textTransform: "uppercase",
        color: TEXT_MUTED,
        marginBottom: "1rem",
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
        fontSize: "1.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </h2>
  );
}

function SectionBody({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 15,
        lineHeight: 1.8,
        color: TEXT_SEC,
        marginBottom: "2rem",
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return (
    <hr style={{ border: "none", borderTop: DIVIDER, margin: "2.75rem 0" }} />
  );
}

export default function ShopifyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F0D4D1",
        fontFamily: "'Outfit', sans-serif",
        color: TEXT,
      }}
    >
      <Navigation />
      <div
        style={{
          width: "100%",
          height: 0.5,
          backgroundColor: "rgba(26,26,26,0.15)",
          marginTop: 12,
        }}
      />

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 1.5rem 8rem" }}>

        {/* Hero */}
        <div style={{ padding: "4rem 0 2rem" }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "1rem" }}>Shopify</p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
            Abandonment<br />to adoption
          </h1>
          <p style={{ fontSize: 17, fontWeight: 400, color: TEXT_SEC, lineHeight: 1.7, maxWidth: 660, marginBottom: "2rem" }}>
            12% of merchants used Shopify&rsquo;s Marketing Analytics. The rest opened it and closed the tab. The tool presented data without direction, cross-platform discrepancies eroded trust, and the product architecture was organized by data type rather than by how merchants actually make marketing decisions. <strong style={{ color: TEXT, fontWeight: 600 }}>This is the story of how content design turned a reporting tool into a decision-making system.</strong>
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem" }}>
            {["E-commerce", "SaaS", "Analytics", "B2B", "Progressive disclosure", "Content systems", "Information architecture"].map(t => (
              <span key={t} style={{ fontSize: 12, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "4px 12px", background: "rgba(26,26,26,0.04)" }}>{t}</span>
            ))}
          </div>
        </div>

        <Divider />

        {/* The Problem */}
        <SectionLabel>The problem</SectionLabel>
        <SectionTitle>Why merchants weren&rsquo;t using Analytics</SectionTitle>
        <SectionBody>
          Only 12% of Shopify merchants were using Marketing Analytics. Not because the data wasn&rsquo;t there, but because the interface gave them no reason to trust it and no path to act on it.
        </SectionBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
          <Card label="Problem 01" title="Not actionable" body={<>&ldquo;I can see my numbers. I don&rsquo;t know what to do about them.&rdquo;</>} />
          <Card label="Problem 02" title="Trust deficit" body="Cross-platform discrepancies between Shopify, Google, and Meta led merchants to distrust the numbers entirely." />
          <Card label="Problem 03" title="Sophistication mismatch" body="Expert merchants found it not insightful enough. Beginners found it overwhelming. The same interface had to serve both." />
          <Card label="Problem 04" title="Product architecture" body={<>Navigation was organized by data type, not by merchant workflow. Answering &ldquo;should I increase Facebook spend?&rdquo; required four pages across two nav sections.</>} />
        </div>

        <Divider />

        {/* Users */}
        <SectionLabel>The users</SectionLabel>
        <SectionTitle>Merchant sophistication spectrum</SectionTitle>
        <SectionBody>The same product had to serve two fundamentally different users. Understanding this tension shaped every content decision.</SectionBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
          <div style={{ border: BORDER, borderRadius: 14, padding: "1.5rem", transition: "background 0.2s" }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.5rem" }}>Marketing Expert</div>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: "0.5rem" }}>South Africa, Jerky</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC, marginBottom: "1rem" }}>
              <strong style={{ color: TEXT, fontWeight: 500 }}>Current behavior:</strong> Uses 3+ analytics tools. Exports to spreadsheets. Manually reconciles data across platforms.
            </div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>
              <strong style={{ color: TEXT, fontWeight: 500 }}>What they need:</strong> Unify my campaigns. Compare attribution models. Automate decisions. Show me methodology, not just numbers.
            </div>
          </div>
          <div style={{ border: BORDER, borderRadius: 14, padding: "1.5rem", transition: "background 0.2s" }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.5rem" }}>First-Time Entrepreneur</div>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: "0.5rem" }}>Toronto, Jewelry</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC, marginBottom: "1rem" }}>
              <strong style={{ color: TEXT, fontWeight: 500 }}>Current behavior:</strong> Opens analytics, closes tab. Doesn&rsquo;t know where to start. Can&rsquo;t interpret the numbers.
            </div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>
              <strong style={{ color: TEXT, fontWeight: 500 }}>What they need:</strong> Tell me what to do. Give me templates. Show me benchmarks. Make the path obvious.
            </div>
          </div>
        </div>

        <div style={{ fontSize: "1.2rem", fontWeight: 500, lineHeight: 1.6, color: TEXT, padding: "1.5rem 0", borderTop: "2px solid rgba(26,26,26,0.08)", marginBottom: "2rem", maxWidth: 640 }}>
          Progressive disclosure became the architectural answer: surface-level metrics visible at a glance, detailed breakdowns on-demand, calculation transparency via tooltips. Both audiences served. Neither overwhelmed.
        </div>

        <Divider />

        {/* Artifact 1 */}
        <SectionLabel>Artifact 01 of 03</SectionLabel>
        <SectionTitle>Cross-platform terminology audit</SectionTitle>
        <SectionBody>
          <>
            Merchants reported attribution discrepancies between Shopify and other platforms. Engineering assumed bugs. Leadership wanted simplification. But no one knew how we&rsquo;d arrived at our current metric definitions. Prior content decisions had no documentation.
            <br /><br />
            I tracked down teams who&rsquo;d worked on marketing analytics, reviewed journal entries, and scheduled 1:1s with content designers on adjacent product spaces to understand historical context and map the holistic merchant journey. This revealed a critical insight: <strong style={{ color: TEXT, fontWeight: 600 }}>platforms calculate differently, and obscuring this creates false precision.</strong>
            <br /><br />
            I audited Google Analytics, Meta Ads, Triple Whale, and Amplitude documentation, confirming these were methodology differences, not errors. I presented findings to product leadership: transparency over simplification. They initially resisted exposing formulas, concerned about overwhelming merchants. I proposed phased testing with power users, which proved adoption increased. <strong style={{ color: TEXT, fontWeight: 600 }}>This reframed our content strategy from hiding complexity to exposing calculation logic</strong>, influencing tooltip implementation and metric definition standards across marketing products.
          </>
        </SectionBody>

        <ScreenFrame src="/images/shopify-audit-table.png" alt="Cross-platform terminology audit comparing ROAS and Conversion Rate across Shopify, Google Analytics, Meta Ads, Triple Whale, and Amplitude" caption="Cross-platform metrics comparison matrix" tag="Research artifact" />

        <Divider />

        {/* Artifact 2 */}
        <SectionLabel>Artifact 02 of 03</SectionLabel>
        <SectionTitle>Merchant workflow maps</SectionTitle>
        <SectionBody>
          <>
            Initial problem framing positioned merchants as lacking analytics sophistication. User interviews suggested otherwise: <strong style={{ color: TEXT, fontWeight: 600 }}>interface structure didn&rsquo;t match decision-making workflow.</strong>
            <br /><br />
            I partnered with data scientists for instrument tracking, engineering to validate technical feasibility, and product managers across Campaigns, Attribution, and Automations to align on roadmap implications. I designed a shadowing study with 12 merchants, documenting their marketing workflow.
            <br /><br />
            The core issue: answering &ldquo;Should I increase Facebook spend?&rdquo; required synthesizing data from four pages across two navigation sections. I synthesized findings into six workflow principles prioritizing comparison over trends and single-screen budget decisions. Presented analysis to VP of Product, demonstrating that incremental UI changes wouldn&rsquo;t resolve structural misalignment. <strong style={{ color: TEXT, fontWeight: 600 }}>This shifted the team&rsquo;s scope from surface improvements to full information architecture redesign</strong>, informing sidebar restructure and homepage prioritization.
          </>
        </SectionBody>

        <ScreenFrame src="/images/shopify-workflow-map.png" alt="Merchant workflow map showing current state vs desired state for Monday morning marketing review" caption="Current state vs. desired state: Monday morning marketing review" tag="Workflow artifact" />

        <Divider />

        {/* Artifact 3 */}
        <SectionLabel>Artifact 03 of 03</SectionLabel>
        <SectionTitle>Internal alignment workshop</SectionTitle>
        <SectionBody>
          <>
            Cross-team audit revealed engineering, data science, and marketing teams calculated and perceived some terms differently. I recognized this as a blocker: we couldn&rsquo;t write consistent merchant-facing definitions until internal teams agreed on source of truth.
            <br /><br />
            I proposed and facilitated an alignment workshop with technical leads, data scientists, and product managers, using merchant confusion quotes as the decision-making framework. Engineering initially wanted platform-specific definitions to match backend logic. Marketing wanted merchant-friendly simplifications. <strong style={{ color: TEXT, fontWeight: 600 }}>I anchored the workshop around merchant confusion quotes, which shifted the conversation from &ldquo;what&rsquo;s technically accurate&rdquo; to &ldquo;what prevents merchant errors.&rdquo;</strong>
            <br /><br />
            We reached consensus on a shared definition matrix covering 23 core metrics with standardized scope, exclusions, and attribution models. This artifact became the reference standard for feature development and tooltip implementation, establishing governance that prevented future definition drift across marketing products. This consensus-building approach resolved a 6-month stalemate.
          </>
        </SectionBody>

        <ScreenFrame src="/images/shopify-alignment-workshop.png" alt="Metrics Definition Alignment workshop tool with voting cards" caption="Metrics Definition Alignment: interactive workshop facilitation tool" tag="Alignment artifact" />

        <Divider />

        {/* Sidebar Redesign */}
        <SectionLabel>The redesign</SectionLabel>
        <SectionTitle>Execution without insight: the sidebar problem</SectionTitle>
        <SectionBody>
          <>
            The sidebar positioned marketing as binary: create campaigns and automate workflows. But it offered no path to understanding what was working. Attribution lived buried three clicks deep in Analytics &gt; Reports &gt; Marketing attribution. It was treated as a reporting feature rather than a strategic decision-making tool.
            <br /><br />
            Workflow mapping revealed merchants operate in continuous loops: launch campaign, check attribution, adjust budget, repeat. But the interface forced context switching across separate navigation sections. <strong style={{ color: TEXT, fontWeight: 600 }}>Redesigned sidebar elevated Attribution to equal hierarchy within Marketing</strong>, eliminating the four-click detour. This structural change aligned information architecture with the iterative nature of campaign optimization. Attribution page visits increased 43% post-launch.
          </>
        </SectionBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
          <div style={{ border: BORDER, borderRadius: 14, padding: "1.5rem" }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: AMBER, marginBottom: "0.75rem" }}>Before</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>Marketing contained only Campaigns and Automations. Attribution buried under Analytics &gt; Reports. Four clicks to get there. Merchants abandoned the journey.</div>
          </div>
          <div style={{ border: BORDER, borderRadius: 14, padding: "1.5rem" }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: GREEN, marginBottom: "0.75rem" }}>After</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>Marketing now contains Campaigns, Attribution, and Automations. Attribution is one click away. The sidebar reflects how merchants actually work: launch, measure, adjust, repeat.</div>
          </div>
        </div>

        <ScreenFrame src="/images/shopify-sidebar-before.png" alt="Shopify Marketing sidebar before redesign" caption="Previous sidebar: execution without insight" tag="Before" />
        <ScreenFrame src="/images/shopify-sidebar-after.png" alt="Shopify Marketing sidebar after redesign" caption="Redesigned sidebar: merchant-obsessed mental model" tag="After" />

        <Divider />

        {/* Homepage Redesign */}
        <SectionLabel>The redesign</SectionLabel>
        <SectionTitle>Performance data above the fold</SectionTitle>
        <SectionBody>
          <>
            The previous homepage prioritized educational content like video tutorials and feature explanations over performance data. Experienced merchants saw onboarding content and questioned whether the platform could support sophisticated operations. Inexperienced merchants felt overwhelmed by choices before understanding their baseline.
            <br /><br />
            Both segments needed performance data first, education second. I proposed repositioning educational content to email campaigns and help documentation, using the homepage&rsquo;s above-the-fold space for glanceable metrics instead. <strong style={{ color: TEXT, fontWeight: 600 }}>This reframed the page from &ldquo;learn how to use marketing tools&rdquo; to &ldquo;understand how your marketing is performing.&rdquo;</strong>
          </>
        </SectionBody>

        <ScreenFrame src="/images/shopify-homepage-before.png" alt="Previous Shopify Marketing homepage" caption="Previous homepage: education over performance" tag="Before" />
        <ScreenFrame src="/images/shopify-homepage-after.png" alt="Redesigned Shopify Marketing homepage" caption="Redesigned homepage: performance data above the fold" tag="After" />

        <Divider />

        {/* Three Content Shifts */}
        <SectionLabel>Content strategy shifts</SectionLabel>
        <SectionTitle>Three decisions that reshaped the interface</SectionTitle>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
          <Card label="Shift 01" title="Feature → Task" body={<>Reframed primary content module as &ldquo;Top marketing channels,&rdquo; shifting from what Shopify can do to what merchants need to accomplish. Merchant feedback validated the shift: &ldquo;Finally shows me what I actually came here for.&rdquo;</>} />
          <Card label="Shift 02" title="Causation → Attribution" body={<>Changed metric labels from &ldquo;from marketing&rdquo; (implying direct causation) to &ldquo;attributed to marketing&rdquo; (acknowledging model-based calculation). This signaled measurement sophistication and set up transparent tooltip explanations.</>} />
          <Card label="Shift 03" title="Builder → Analyst" body="Replaced the sole creation CTA with three data controls: date range selector, comparison toggle, and attribution model switcher. Post-launch, attribution model switching increased 36%." />
        </div>

        <Divider />

        {/* Tooltip System */}
        <SectionLabel>The system</SectionLabel>
        <SectionTitle>Campaign page tooltips: making metric logic explicit</SectionTitle>
        <SectionBody>
          <>
            Formula tooltips required solving a scalability problem: make complex attribution calculations comprehensible without overwhelming every metric card with technical details. I used a progressive disclosure pattern: plain language definition on the first line, formula on the second.
            <br /><br />
            I developed a three-part tooltip pattern that the team applied across 12 metrics and later adopted for Attribution reports and Automations tables:
          </>
        </SectionBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
          <Card label="Part 01" title="Scope" body="What the metric measures. Plain language, no jargon. A novice merchant reads this and understands what the number represents." />
          <Card label="Part 02" title="Boundaries" body="What the metric excludes. This is where trust is built. Naming what's not counted prevents the false precision that eroded merchant confidence." />
          <Card label="Part 03" title="Formula" body="How it's calculated. The exact math, visible on demand. Expert merchants audit this. Novices skip it. Both trust the number more because it's there." />
        </div>

        <ScreenFrame src="/images/shopify-tooltips.png" alt="Campaign page tooltip examples showing scope, boundaries, and formula pattern" caption="Three-part tooltip pattern: scope, boundaries, formula" tag="Content system" />

        <Divider />

        {/* Outcomes */}
        <SectionLabel>Outcome</SectionLabel>
        <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>

          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>12%→28%</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Marketing Analytics adoption</div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>More than doubling adoption through content architecture</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Merchant adoption of Marketing Analytics more than doubled. Not through feature additions, but through structural clarity. <strong style={{ color: TEXT, fontWeight: 500 }}>When the interface matched how merchants think about marketing decisions, they stopped closing the tab.</strong></div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>+29%</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Attribution page engagement</div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Discoverability drove engagement with performance data</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Elevating Attribution to the Marketing sidebar eliminated the four-click detour. Merchants who previously never found it now used it as part of their weekly workflow. <strong style={{ color: TEXT, fontWeight: 500 }}>The content was always valuable. It was the architecture that was failing.</strong></div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>+34%</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Educational email CTR vs. in-product</div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Education works better outside the decision-making moment</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Moving educational content from the homepage to email campaigns achieved 34% higher click-through than in-product placement. <strong style={{ color: TEXT, fontWeight: 500 }}>Merchants want to learn on their own time, not when they&rsquo;re trying to decide where to spend money.</strong></div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>+37%</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Automation activation rate</div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Content frameworks scaled without content design bottlenecks</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>The tooltip pattern, terminology standards, and metric definitions I created were adopted across Attribution reports and Automations tables by other teams. <strong style={{ color: TEXT, fontWeight: 500 }}>A content system that only works when the content designer is in the room is not a system.</strong></div>
            </div>
          </div>

        </div>

        <Divider />

        {/* Bridge */}
        <SectionLabel>Why this matters</SectionLabel>
        <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.75rem" }}>The problem this case study is about</div>
          <div style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_SEC }}>
            Analytics products fail when they treat data presentation as the deliverable instead of decision-making as the outcome. The merchants weren&rsquo;t unsophisticated. The interface was. It organized information by technical category rather than by the questions merchants actually need answered.
            <br /><br />
            <strong style={{ color: TEXT, fontWeight: 600 }}>Content design was the lever that transformed a 12% adoption reporting tool into a 28% adoption decision-making system.</strong> Not through better labels on the same structure, but through three artifacts that changed how the organization understood the problem, and three content strategy shifts that changed how the interface served its users.
          </div>
        </div>

        <Divider />

        {/* Role */}
        <SectionLabel>My role</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
          <Card label="Scope" title="Content Designer, Marketing Analytics" body="Led content strategy for the entire Marketing Analytics redesign. Partnered with data scientists, engineers, and product managers across Campaigns, Attribution, and Automations. Conducted primary research including 12-merchant shadowing study. Facilitated cross-team alignment workshop that resolved a 6-month definition stalemate." />
          <Card label="Proficiencies demonstrated" title="What this work required" body="Information architecture redesign · Cross-platform terminology audit · Progressive disclosure systems · Merchant workflow research · Tooltip content patterns · Internal alignment facilitation · Metric governance standards · Dual-audience content strategy" />
        </div>

        <Divider />

        {/* Feedback */}
        <SectionLabel>Feedback</SectionLabel>
        <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.75rem" }}>Alison Munn Garcia, UX Manager</div>
          <div style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_SEC }}>
            &ldquo;Mohammed is an incredible content designer with a thoughtful and passionate approach to UX writing and building a solid content strategy. We were lucky to have him on the team. He was able to make a huge impact on a difficult project with a large scope, helping us to form a strong story around what we were doing, and what needs to be done.&rdquo;
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

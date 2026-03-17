"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackArrow from "@/components/BackArrow";
import { useState, useEffect } from "react";

const sideNavItems = [
  { label: "Role", id: "role" },
  { label: "Problem", id: "problem" },
  { label: "Users", id: "users" },
  { label: "Artifacts", id: "artifacts" },
  { label: "Redesign", id: "redesign" },
  { label: "Content Shifts", id: "shifts" },
  { label: "Tooltip System", id: "system" },
  { label: "Outcomes", id: "outcomes" },
];

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
        padding: "1.5rem",
        transition: "background 0.2s, border-color 0.2s",
        ...style,
      }}
    >
      {label && (
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.5rem" }}>{label}</div>
      )}
      {title && (
        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: "0.5rem" }}>{title}</div>
      )}
      {body && (
        <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>{body}</div>
      )}
    </div>
  );
}

function ImgFrame({ src, alt, caption, tag }: { src: string; alt: string; caption: string; tag: string }) {
  return (
    <>
      <div style={{ border: "3px solid #1a1a1a", borderRadius: 10, overflow: "hidden", marginBottom: "0.5rem", maxWidth: "90%", margin: "0 auto 0.5rem" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", maxWidth: "90%", margin: "0 auto 2rem" }}>
        <span style={{ fontSize: 12, color: TEXT_MUTED }}>{caption}</span>
        <span style={{ fontSize: 11, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "2px 10px" }}>{tag}</span>
      </div>
    </>
  );
}

function SectionLabel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "1rem", ...style }}>{children}</div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.2, marginBottom: "0.75rem" }}>{children}</h2>;
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3, marginBottom: "0.75rem" }}>{children}</h3>;
}

function SectionBody({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_SEC, marginBottom: "2rem" }}>{children}</div>;
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: "1.3rem", fontWeight: 500, lineHeight: 1.55, color: TEXT, padding: "2rem 0", borderTop: "2px solid rgba(26,26,26,0.08)", marginBottom: "2rem", maxWidth: 640 }}>{children}</div>;
}

function Divider() {
  return <hr style={{ border: "none", borderTop: DIVIDER, margin: "2.75rem 0" }} />;
}

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
    <div style={{ minHeight: "100vh", backgroundColor: "#F0D4D1", fontFamily: "'Outfit', sans-serif", color: TEXT }}>
      <BackArrow />
      <Navigation />
      <div style={{ width: "100%", height: 0.5, backgroundColor: "rgba(26,26,26,0.15)", marginTop: 12 }} />

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 1.5rem 8rem", display: "flex", gap: 0 }}>

        {/* Side nav */}
        <nav style={{ position: "sticky", top: 100, alignSelf: "flex-start", width: 140, flexShrink: 0, paddingTop: 280 }}>
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
                  color: activeSection === item.id ? TEXT : TEXT_MUTED,
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

        {/* Hero */}
        <div style={{ padding: "4rem 0 2rem" }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "1rem" }}>Shopify</p>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>Abandonment<br />to adoption</h1>
          <p style={{ fontSize: 17, fontWeight: 400, color: TEXT_SEC, lineHeight: 1.7, maxWidth: 660, marginBottom: "2rem" }}>
            12% of Shopify merchants used Marketing Analytics. The rest opened it and closed the tab. The data was there. The interface gave merchants no reason to trust it and no path to act on it. <strong style={{ color: TEXT, fontWeight: 600 }}>This is the story of how content design turned a reporting tool into a decision-making system.</strong>
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem" }}>
            {["E-commerce", "SaaS", "Analytics", "B2B", "Content systems", "Progressive disclosure", "Information architecture"].map(t => (
              <span key={t} style={{ fontSize: 12, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "4px 12px", background: "rgba(26,26,26,0.04)" }}>{t}</span>
            ))}
          </div>

          {/* Outcome bar */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(26,26,26,0.1)", border: BORDER, borderRadius: 14, overflow: "hidden", marginBottom: "3rem" }}>
            <div onMouseEnter={() => setS1H(true)} onMouseLeave={() => setS1H(false)} style={{ background: s1H ? "#fff" : "#F0D4D1", padding: "1.25rem 1.5rem", transition: "background 0.2s" }}>
              <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, marginBottom: 4, letterSpacing: "-0.02em" }}>12%&rarr;28%</div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED }}>Analytics adoption</div>
              <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>Content architecture doubled merchant engagement with Marketing Analytics</div>
            </div>
            <div onMouseEnter={() => setS2H(true)} onMouseLeave={() => setS2H(false)} style={{ background: s2H ? "#fff" : "#F0D4D1", padding: "1.25rem 1.5rem", transition: "background 0.2s" }}>
              <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, marginBottom: 4, letterSpacing: "-0.02em" }}>+29%</div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED }}>Attribution engagement</div>
              <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>Sidebar restructure eliminated four-click detour to performance data</div>
            </div>
            <div onMouseEnter={() => setS3H(true)} onMouseLeave={() => setS3H(false)} style={{ background: s3H ? "#fff" : "#F0D4D1", padding: "1.25rem 1.5rem", transition: "background 0.2s" }}>
              <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, marginBottom: 4, letterSpacing: "-0.02em" }}>+37%</div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED }}>Automation activation</div>
              <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>Tooltip pattern and terminology standards adopted across teams independently</div>
            </div>
          </div>
        </div>

        <Divider />

        {/* My Role */}
        <div id="role" style={{ scrollMarginTop: 80 }} />
        <SectionLabel>My role</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
          <Card label="Scope" title="Content Designer, Marketing Analytics" body="Led content strategy for the entire Marketing Analytics redesign at Shopify. Partnered with data scientists for instrument tracking, engineers to validate technical feasibility, and product managers across Campaigns, Attribution, and Automations to align on roadmap implications. Conducted primary research including a 12-merchant shadowing study. Facilitated a cross-team alignment workshop with technical leads, data scientists, and product managers that resolved a 6-month definition stalemate. Reported to Alison Munn Garcia, UX Manager." />
          <Card label="Proficiencies demonstrated" title="What this work required" body={<>Information architecture redesign &middot; Cross-platform terminology audit &middot; Progressive disclosure systems &middot; Merchant workflow research &middot; Tooltip content patterns &middot; Internal alignment facilitation &middot; Metric governance standards &middot; Dual-audience content strategy &middot; Stakeholder management &middot; Content system scalability</>} />
        </div>

        <Divider />

        {/* The Problem */}
        <div id="problem" style={{ scrollMarginTop: 80 }} />
        <SectionLabel>The problem</SectionLabel>
        <SectionTitle>Why merchants weren&rsquo;t using Analytics</SectionTitle>
        <SectionBody>Marketing Analytics had a 12% adoption rate. The initial organizational assumption was that merchants lacked analytics sophistication. User interviews told a different story: the merchants were capable. The interface was not. Four overlapping problems made the tool feel unreliable and unusable.</SectionBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
          <Card label="Problem 01" title="Not actionable" body={<>The tool presented data without direction. Merchants said: &ldquo;I can see my numbers. I don&rsquo;t know what to do about them.&rdquo; Data without decision-making context is noise, not insight.</>} />
          <Card label="Problem 02" title="Trust deficit" body="ROAS in Shopify didn't match ROAS in Google or Meta. Merchants assumed Shopify's numbers were wrong. They weren't wrong. They were calculated differently. But no one had explained that." />
          <Card label="Problem 03" title="Sophistication mismatch" body="Expert merchants running $30K/month ad budgets found the tool too shallow. First-time entrepreneurs found it overwhelming. The same interface served both poorly." />
          <Card label="Problem 04" title="Structural misalignment" body={<>Answering &ldquo;Should I increase Facebook spend?&rdquo; required synthesizing data from four pages across two navigation sections. The architecture was organized by data type, not by how merchants make decisions.</>} />
        </div>

        <PullQuote>The interface was organized by technical category rather than by the questions merchants actually need answered.</PullQuote>

        <Divider />

        {/* Users */}
        <div id="users" style={{ scrollMarginTop: 80 }} />
        <SectionLabel>The users</SectionLabel>
        <SectionTitle>Merchant sophistication spectrum</SectionTitle>
        <SectionBody>The same product had to serve two fundamentally different users. Understanding this tension shaped every content decision that followed. A Marketing Expert from South Africa running a jerky brand with a $30K monthly budget across Facebook, Instagram, and Google Shopping. And a First-Time Entrepreneur from Toronto selling handmade jewelry who opens the analytics tab and immediately closes it. The same product must serve both. Progressive disclosure became the architectural answer.</SectionBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
          <Card label="Marketing Expert" title="South Africa, Jerky, ~$30K/month" body={<><div style={{ marginBottom: "1rem" }}><strong style={{ color: TEXT, fontWeight: 500 }}>Current behavior:</strong> Uses 3+ analytics tools simultaneously. Exports to spreadsheets. Manually reconciles data across Shopify, Google Analytics, Meta Ads Manager, and Triple Whale.</div><div><strong style={{ color: TEXT, fontWeight: 500 }}>What they need:</strong> Unify my campaigns in one view. Let me compare attribution models. Automate budget decisions. Show me the methodology behind the numbers so I can trust them.</div></>} />
          <Card label="First-Time Entrepreneur" title="Toronto, Jewelry, just getting started" body={<><div style={{ marginBottom: "1rem" }}><strong style={{ color: TEXT, fontWeight: 500 }}>Current behavior:</strong> Opens analytics, closes tab. Doesn&rsquo;t know where to start. Can&rsquo;t interpret numbers. Feels the tool is &ldquo;not for people like me.&rdquo;</div><div><strong style={{ color: TEXT, fontWeight: 500 }}>What they need:</strong> Tell me what to do next. Give me templates. Show me benchmarks. Make the path obvious so I don&rsquo;t have to guess whether my marketing is working.</div></>} />
        </div>

        <PullQuote>Progressive disclosure became the architectural answer: surface-level metrics visible at a glance, detailed breakdowns on-demand, calculation transparency via tooltips. Both audiences served. Neither overwhelmed.</PullQuote>

        <Divider />

        {/* Artifact 1 */}
        <div id="artifacts" style={{ scrollMarginTop: 80 }} />
        <SectionLabel>Artifact 01 of 03</SectionLabel>
        <SectionTitle>Cross-platform terminology audit</SectionTitle>
        <SectionBody>
          <>Merchants reported attribution discrepancies between Shopify and other platforms. Engineering assumed bugs. Leadership wanted simplification. But no one knew how we&rsquo;d arrived at our current metric definitions. Prior content decisions had no documentation.<br /><br />I tracked down teams who&rsquo;d worked on marketing analytics, reviewed journal entries, and scheduled 1:1s with content designers on adjacent product spaces to understand historical context and map the holistic merchant journey. This revealed a critical insight: <strong style={{ color: TEXT, fontWeight: 600 }}>platforms calculate differently, and obscuring this creates false precision.</strong><br /><br />I audited Google Analytics 4, Meta Ads, Triple Whale, and Amplitude documentation, comparing how each platform defines ROAS and Conversion Rate. The differences were substantial: Shopify used last-click attribution with a 30-day window. Google used a 28-day click window with view-through. Meta included view-through conversions that Shopify didn&rsquo;t count. Triple Whale blended all channels including non-campaign revenue. These were methodology differences, not bugs.<br /><br />I presented findings to product leadership: transparency over simplification. They initially resisted exposing formulas, concerned about overwhelming merchants. I proposed phased testing with power users, which proved adoption increased when merchants could see the math. <strong style={{ color: TEXT, fontWeight: 600 }}>This reframed our content strategy from hiding complexity to exposing calculation logic</strong>, influencing tooltip implementation and metric definition standards across all marketing products.</>
        </SectionBody>
        <ImgFrame src="/images/shopify port/termaudit.png" alt="Cross-platform terminology audit comparing ROAS and Conversion Rate across Shopify, Google Analytics, Meta Ads, Triple Whale, and Amplitude" caption="Cross-platform metrics comparison: ROAS and Conversion Rate definitions across five analytics platforms" tag="Research artifact" />

        <Divider />

        {/* Artifact 2 */}
        <SectionLabel>Artifact 02 of 03</SectionLabel>
        <SectionTitle>Merchant workflow maps</SectionTitle>
        <SectionBody>
          <>Initial problem framing positioned merchants as lacking analytics sophistication. User interviews suggested otherwise: <strong style={{ color: TEXT, fontWeight: 600 }}>interface structure didn&rsquo;t match decision-making workflow.</strong><br /><br />I partnered with data scientists for instrument tracking, engineering to validate technical feasibility, and product managers across Campaigns, Attribution, and Automations to align on roadmap implications. I designed a shadowing study with 12 merchants, documenting their Monday morning marketing review workflow step by step.<br /><br />The current state was brutal. A marketing expert&rsquo;s weekly review: Open Triple Whale (5 min). Open Google Ads (10 min). Open Meta Ads Manager (10 min). Open Shopify Analytics (5 min, abandons because numbers don&rsquo;t match). Export CSVs from each platform (15 min). Manual reconciliation in Google Sheets (90 min). That&rsquo;s over two hours for a question that should take three minutes: &ldquo;Where should I put my money this week?&rdquo;<br /><br />I synthesized findings into six workflow principles prioritizing comparison over trends and single-screen budget decisions. Presented analysis to VP of Product, demonstrating that incremental UI changes wouldn&rsquo;t resolve structural misalignment. <strong style={{ color: TEXT, fontWeight: 600 }}>This shifted the team&rsquo;s scope from surface improvements to full information architecture redesign</strong>, informing sidebar restructure and homepage prioritization.</>
        </SectionBody>
        <ImgFrame src="/images/shopify port/workflowdoc.png" alt="Merchant workflow map showing current state vs desired state for Monday morning marketing review" caption="Current state (6 steps, 135 minutes) vs. desired state (5 steps, 12 minutes)" tag="Workflow artifact" />

        <Divider />

        {/* Artifact 3 */}
        <SectionLabel>Artifact 03 of 03</SectionLabel>
        <SectionTitle>Internal alignment workshop</SectionTitle>
        <SectionBody>
          <>Cross-team audit revealed a deeper problem: engineering, data science, and marketing teams calculated and perceived the same terms differently. I recognized this as a blocker. We couldn&rsquo;t write consistent merchant-facing definitions until internal teams agreed on a source of truth.<br /><br />I proposed and facilitated an alignment workshop with technical leads, data scientists, and product managers. Engineering wanted platform-specific definitions to match backend logic. Marketing wanted merchant-friendly simplifications. The two sides had been at a stalemate for six months.<br /><br /><strong style={{ color: TEXT, fontWeight: 600 }}>I anchored the workshop around merchant confusion quotes</strong>, which shifted the conversation from &ldquo;what&rsquo;s technically accurate&rdquo; to &ldquo;what prevents merchant errors.&rdquo; This reframing broke the deadlock. We reached consensus on a shared definition matrix covering 23 core metrics with standardized scope, exclusions, and attribution models.<br /><br />The artifact became the reference standard for feature development and tooltip implementation, establishing governance that prevented future definition drift across marketing products. Other teams started using it as a template for their own alignment processes.</>
        </SectionBody>
        <ImgFrame src="/images/shopify port/workshopwork.png" alt="Metrics Definition Alignment workshop tool with interactive voting cards" caption="Metrics Definition Alignment: interactive workshop tool with five voting categories" tag="Alignment artifact" />

        <Divider />

        {/* Sidebar Redesign */}
        <div id="redesign" style={{ scrollMarginTop: 80 }} />
        <SectionLabel>The redesign</SectionLabel>
        <SectionTitle>Execution without insight: the sidebar problem</SectionTitle>
        <SectionBody>
          <>The sidebar positioned marketing as binary: create campaigns and automate workflows. It offered no path to understanding what was working. Merchants could launch Facebook ads and set up abandoned cart emails, but Attribution lived buried three clicks deep in Analytics &gt; Reports &gt; Marketing attribution. It was treated as a reporting feature rather than a strategic decision-making tool.<br /><br />This was a structural misalignment between how we organized features and how merchants manage marketing budgets. Workflow mapping revealed merchants operate in continuous loops: launch campaign, check attribution, adjust budget, repeat. But the interface forced context switching across separate navigation sections.<br /><br /><strong style={{ color: TEXT, fontWeight: 600 }}>Redesigned sidebar elevated Attribution to equal hierarchy within Marketing</strong>, eliminating the four-click detour. This structural change aligned information architecture with the iterative nature of campaign optimization. Attribution page visits increased 43% post-launch. Discoverability directly influenced engagement with performance data.</>
        </SectionBody>

        <ImgFrame src="/images/shopify-sidebar-before.png" alt="Previous sidebar: Marketing only contains Campaigns and Automations" caption="Before: Attribution buried under Analytics" tag="Before" />
        <ImgFrame src="/images/shopify-sidebar-after.png" alt="New sidebar: Marketing contains Campaigns, Attribution, and Automations" caption="After: Attribution elevated to Marketing section" tag="After" />

        <Divider />

        {/* Homepage Redesign */}
        <SectionLabel>The redesign</SectionLabel>
        <SectionTitle>Performance data above the fold</SectionTitle>
        <SectionBody>
          <>The previous homepage prioritized educational content like video tutorials and feature explanations over performance data. This created a dual problem: experienced merchants saw the prominence of onboarding content and questioned whether the platform could support sophisticated marketing operations, while inexperienced merchants felt overwhelmed by choices before understanding their current performance baseline.<br /><br />Both segments needed performance data first, education second. I proposed repositioning educational content to email campaigns and help documentation where merchants could engage at their own pace, using the homepage&rsquo;s above-the-fold space for glanceable metrics instead. <strong style={{ color: TEXT, fontWeight: 600 }}>This reframed the page from &ldquo;learn how to use marketing tools&rdquo; to &ldquo;understand how your marketing is performing.&rdquo;</strong><br /><br />The homepage now prioritizes four glanceable metrics: Sessions, Sales attributed to marketing, Orders attributed to marketing, and Conversion rate. The &ldquo;Top marketing channels&rdquo; report became the primary workspace element, eliminating the detour to Analytics and surfacing attribution data where spending decisions happen.</>
        </SectionBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
          <div>
            <ImgFrame src="/images/shopify-homepage-before.png" alt="Previous homepage: video tutorials above performance data" caption="Before: education over performance" tag="Before" />
          </div>
          <div>
            <ImgFrame src="/images/shopify-homepage-after.png" alt="Redesigned homepage: performance metrics above the fold" caption="After: performance data above the fold" tag="After" />
          </div>
        </div>

        <Divider />

        {/* Three Content Shifts */}
        <div id="shifts" style={{ scrollMarginTop: 80 }} />
        <SectionLabel>Content strategy shifts</SectionLabel>
        <SectionTitle>Three decisions that reshaped the interface</SectionTitle>
        <SectionBody>The structural changes to sidebar and homepage created the container. These three content strategy shifts defined what went inside it. Each one represents a deliberate reframing of how the interface communicates with merchants.</SectionBody>

        <SectionLabel style={{ marginTop: "1.5rem" }}>Shift 01</SectionLabel>
        <SectionSubtitle>Feature &rarr; Task</SectionSubtitle>
        <SectionBody>The previous homepage centered Shopify&rsquo;s features rather than merchant objectives. I reframed the primary content module as &ldquo;Top marketing channels,&rdquo; shifting from what Shopify can do to what merchants need to accomplish. This change repositioned the interface from teaching product capabilities to supporting decision-making workflows. Merchant feedback validated the shift: &ldquo;Finally shows me what I actually came here for&rdquo; rather than requiring them to translate feature descriptions into their own business context.</SectionBody>
        <ImgFrame src="/images/shopify port/featureandtaskbeforeandafter.png" alt="Feature to Task: before showing automation video, after showing Top marketing channels table" caption="From product education to merchant workflow" tag="Before / After" />

        <SectionLabel style={{ marginTop: "1.5rem" }}>Shift 02</SectionLabel>
        <SectionSubtitle>Causation &rarr; Attribution</SectionSubtitle>
        <SectionBody>Original terminology used language implying direct causation and single-touch attribution: &ldquo;Sales from marketing,&rdquo; &ldquo;Orders from marketing.&rdquo; This created false precision, suggesting customers came from marketing and bought from marketing when reality involved multiple touch points. I changed metric labels to &ldquo;attributed to marketing,&rdquo; acknowledging that attribution is model-based calculation, not simple source tagging. The shift signaled measurement sophistication, communicating that Shopify understood multi-touch customer journeys. This change also set up tooltip explanations that transparently describe attribution methodology rather than defending oversimplified causal claims. I also replaced &ldquo;Marketing cost&rdquo; (an input metric showing what merchants spent) with &ldquo;Conversion rate&rdquo; (an outcome metric showing what the spending achieved).</SectionBody>
        <ImgFrame src="/images/shopify port/causationandaqusationbeforeandafter.png" alt="Causation to Attribution: before showing 'from marketing', after showing 'attributed to marketing'" caption="From false precision to honest attribution" tag="Before / After" />

        <SectionLabel style={{ marginTop: "1.5rem" }}>Shift 03</SectionLabel>
        <SectionSubtitle>Builder &rarr; Analyst</SectionSubtitle>
        <SectionBody>The sole top-right control was a creation CTA: &ldquo;Create campaign.&rdquo; Research showed that merchants arrive wanting to analyze existing performance, not create new campaigns. Three data controls now occupy the header: date range selector, comparison toggle, and attribution model switcher. This structural change acknowledged that campaign analysis happens more frequently than campaign creation, aligning interface affordances with actual merchant workflow. Moving analytical controls from Analytics (four clicks away) to Marketing homepage positioned performance measurement as a core marketing activity. Post-launch, attribution model switching increased 36%.</SectionBody>
        <ImgFrame src="/images/shopify port/builderanalyst.png" alt="Builder to Analyst: before showing only Create Campaign button, after showing date range, comparison, and attribution model controls" caption="From creation-first to analysis-first" tag="Before / After" />

        <Divider />

        {/* Tooltip System */}
        <div id="system" style={{ scrollMarginTop: 80 }} />
        <SectionLabel>The system</SectionLabel>
        <SectionTitle>Making metric logic explicit</SectionTitle>
        <SectionBody>
          <>The Campaigns page needed to serve expert merchants requiring granular attribution breakdowns and novice merchants needing foundational metric understanding. I advocated for progressive disclosure as the architectural solution: surface-level metrics visible at a glance, detailed breakdowns on-demand, calculation transparency via tooltips. This approach let us support &ldquo;Is my marketing working?&rdquo; and &ldquo;Should I reallocate budget from Facebook to Google?&rdquo; without forcing experts through explanatory content or overwhelming beginners.<br /><br />Formula tooltips required solving a scalability problem: make complex attribution calculations comprehensible without overwhelming every metric card with technical details. I used a progressive disclosure pattern: plain language definition on the first line, formula on the second. I balanced simplicity for novice merchants against precision for experienced analysts. Each tooltip followed a three-part structure:</>
        </SectionBody>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
          <Card label="Part 01" title="Scope" body="What the metric measures. Plain language, no jargon. A novice merchant reads this and understands what the number represents without needing a glossary." />
          <Card label="Part 02" title="Boundaries" body="What the metric excludes. This is where trust is built. Naming what's not counted prevents the false precision that eroded merchant confidence in the first place." />
          <Card label="Part 03" title="Formula" body="How it's calculated. The exact math, visible on demand. Expert merchants audit this. Novices skip it. Both trust the number more because it's there." />
        </div>

        <SectionBody>I developed this three-part tooltip pattern and the team applied it across 12 metrics. It was later adopted for Attribution reports and Automations tables by other teams who used the pattern independently. <strong style={{ color: TEXT, fontWeight: 600 }}>This signaled platform sophistication through explicit methodology rather than oversimplified labels.</strong></SectionBody>

        <ImgFrame src="/images/shopify-tooltips.png" alt="Campaign page tooltip examples showing scope, boundaries, and formula pattern for Sessions over time, Sales over time, Average order value, Orders over time, and Sales by UTM parameters" caption="Three-part tooltip pattern applied across campaign metrics" tag="Content system" />

        <Divider />

        {/* Outcomes */}
        <div id="outcomes" style={{ scrollMarginTop: 80 }} />
        <SectionLabel>Outcome</SectionLabel>
        <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>

          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>12%&rarr;28%</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Marketing Analytics adoption</div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>More than doubling adoption through content architecture</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Merchant adoption of Marketing Analytics more than doubled. Not through feature additions, but through structural clarity. <strong style={{ color: TEXT, fontWeight: 500 }}>When the interface matched how merchants think about marketing decisions, they stopped closing the tab.</strong> The content strategy shifts, information architecture redesign, and progressive disclosure system worked as a single coherent system.</div>
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
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Elevating Attribution to the Marketing sidebar eliminated the four-click detour. Merchants who previously never found Attribution now used it as part of their weekly workflow. <strong style={{ color: TEXT, fontWeight: 500 }}>The content was always valuable. It was the architecture that was failing.</strong></div>
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
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Moving educational content from the homepage to email campaigns achieved 34% higher click-through than in-product placement. <strong style={{ color: TEXT, fontWeight: 500 }}>Merchants want to learn on their own time, not when they&rsquo;re trying to decide where to spend money.</strong> This validated the hypothesis that the homepage should serve decision-making, not onboarding.</div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>+37%</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Automation activation rate, Q1 post-launch</div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Content frameworks scaled without content design bottlenecks</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>The tooltip pattern, terminology standards, and metric definitions I created were adopted across Attribution reports and Automations tables by other teams independently. <strong style={{ color: TEXT, fontWeight: 500 }}>A content system that only works when the content designer is in the room is not a system.</strong> It&rsquo;s a dependency.</div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", textAlign: "center", paddingTop: "1.5rem" }}>
            <div>
              <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>23</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Metrics standardized in definition matrix</div>
            </div>
            <div>
              <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>12</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Merchant shadowing sessions conducted</div>
            </div>
            <div>
              <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>3 &times; 3</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Artifacts produced &times; strategy shifts designed</div>
            </div>
          </div>

        </div>

        <Divider />

        {/* Why This Matters */}
        <SectionLabel>Why this matters now</SectionLabel>
        <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.75rem" }}>The problem this case study is about</div>
          <div style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_SEC }}>
            Analytics products fail when they treat data presentation as the deliverable instead of decision-making as the outcome. The merchants weren&rsquo;t unsophisticated. The interface was. It organized information by technical category rather than by the questions merchants actually need answered.<br /><br />Content design was the lever that transformed a 12% adoption reporting tool into a 28% adoption decision-making system. Not through better labels on the same structure, but through three artifacts that changed how the organization understood the problem, and three content strategy shifts that changed how the interface served its users. <strong style={{ color: TEXT, fontWeight: 600 }}>The methodology, the cross-functional alignment process, the progressive disclosure architecture, and the content governance standards all transfer directly to any data-dense product surface where users need to make confident decisions.</strong>
          </div>
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
      </div>

      <Footer />
    </div>
  );
}

"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const TEXT = "#1a1a1a";
const TEXT_SEC = "rgba(26,26,26,0.6)";
const TEXT_MUTED = "rgba(26,26,26,0.4)";
const BORDER = "1.5px solid rgba(26,26,26,0.1)";
const BORDER_MID = "1.5px solid rgba(26,26,26,0.2)";
const DIVIDER = "0.5px solid rgba(26,26,26,0.15)";
const GREEN = "#1D9E75";
const AMBER = "#c47f0a";

const sideNavItems = [
  { label: "Role", id: "ap-role" },
  { label: "Problem", id: "ap-problem" },
  { label: "Framework", id: "ap-framework" },
  { label: "Rubric", id: "ap-rubric" },
  { label: "Milestones", id: "ap-milestones" },
  { label: "Value in Product", id: "ap-value" },
  { label: "Global & AI", id: "ap-global" },
  { label: "Outcomes", id: "ap-outcomes" },
  { label: "Why It Matters", id: "ap-bridge" },
];

function Card({ label, title, body, style }: { label?: string; title?: string; body?: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "#fff" : "transparent", border: BORDER, borderColor: hovered ? "rgba(26,26,26,0.2)" : "rgba(26,26,26,0.1)", borderRadius: 14, padding: "1.5rem", transition: "background 0.2s, border-color 0.2s", ...style }}>
      {label && <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.5rem" }}>{label}</div>}
      {title && <div style={{ fontSize: 16, fontWeight: 600, marginBottom: "0.5rem" }}>{title}</div>}
      {body && <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>{body}</div>}
    </div>
  );
}

function ImgFrame({ src, alt, caption, tag, dark }: { src: string; alt: string; caption?: string; tag?: string; dark?: boolean }) {
  return (
    <>
      <div style={{ background: dark ? "#1a1a1a" : undefined, border: dark ? undefined : "3px solid #1a1a1a", borderRadius: 10, overflow: "hidden", marginBottom: "0.5rem", maxWidth: "90%", margin: "0 auto 0.5rem" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
      </div>
      {caption && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", maxWidth: "90%", margin: "0 auto 2rem" }}>
          <span style={{ fontSize: 12, color: TEXT_MUTED }}>{caption}</span>
          {tag && <span style={{ fontSize: 11, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "2px 10px" }}>{tag}</span>}
        </div>
      )}
    </>
  );
}

function ScreenAnnotation({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "1.5rem", alignItems: "start", marginBottom: "2rem" }}>{children}</div>;
}

function AnnotationBlock({ children }: { children: React.ReactNode }) {
  return <div style={{ background: "transparent", border: BORDER, borderRadius: 14, padding: "1.5rem" }}>{children}</div>;
}

function AnnotationLabel({ children, first }: { children: React.ReactNode; first?: boolean }) {
  return <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.4rem", marginTop: first ? 0 : "1rem" }}>{children}</div>;
}

function AnnotationCopy({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 13.5, fontStyle: "italic", fontWeight: 500, color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>{children}</div>;
}

function AnnotationBody({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC, marginBottom: "0.5rem" }}>{children}</div>;
}

function SectionLabel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "1rem", ...style }}>{children}</div>;
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

function Pip({ filled, color }: { filled?: boolean; color?: string }) {
  return <span style={{ width: 8, height: 8, borderRadius: "50%", background: filled ? (color || TEXT) : "rgba(26,26,26,0.12)", flexShrink: 0, display: "inline-block" }} />;
}

export default function AmazonPrimePage() {
  const [activeSection, setActiveSection] = useState("ap-role");
  const [s1H, setS1H] = useState(false);
  const [s2H, setS2H] = useState(false);
  const [s3H, setS3H] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { for (const e of entries) { if (e.isIntersecting) setActiveSection(e.target.id); } },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    for (const item of sideNavItems) { const el = document.getElementById(item.id); if (el) observer.observe(el); }
    const lastId = sideNavItems[sideNavItems.length - 1].id;
    const handleScroll = () => { if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) setActiveSection(lastId); };
    window.addEventListener("scroll", handleScroll);
    return () => { observer.disconnect(); window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F0D4D1", fontFamily: "'Outfit', sans-serif", color: TEXT }}>
      <Navigation />
      <div style={{ width: "100%", height: 0.5, backgroundColor: "rgba(26,26,26,0.15)", marginTop: 12 }} />

      <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 1.5rem 8rem", display: "flex", gap: 0 }}>

        <nav style={{ position: "sticky", top: 100, alignSelf: "flex-start", width: 140, flexShrink: 0, paddingTop: 280 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {sideNavItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" }); }} style={{ fontSize: 12, fontWeight: activeSection === item.id ? 600 : 400, color: activeSection === item.id ? TEXT : TEXT_MUTED, textDecoration: "none", padding: "4px 0", transition: "all 0.2s ease", fontFamily: "'Outfit', sans-serif" }}>{item.label}</a>
            ))}
          </div>
        </nav>

        <div style={{ flex: 1, maxWidth: 860 }}>

          {/* Hero */}
          <div style={{ padding: "4rem 0 2rem" }}>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "1rem" }}>Amazon World Wide Prime</p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>Rewriting how Prime earns loyalty</h1>
            <p style={{ fontSize: 17, fontWeight: 400, color: TEXT_SEC, lineHeight: 1.7, maxWidth: 660, marginBottom: "2rem" }}>
              Prime had 200 million members and a trust problem. Research showed members saw the service as a useful necessity: habitual, transactional, and emotionally flat. The benefits were there. The language wasn&rsquo;t earning them. <strong style={{ color: TEXT, fontWeight: 600 }}>I built the content system that changed how Prime communicates value across the design system, membership growth, and global markets.</strong>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem" }}>
              {["Membership", "Content systems", "Retention", "Localization", "AI content design", "Design systems"].map(t => (
                <span key={t} style={{ fontSize: 12, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "4px 12px", background: "rgba(26,26,26,0.04)" }}>{t}</span>
              ))}
            </div>
          {/* Outcome bar */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(26,26,26,0.1)", border: BORDER, borderRadius: 14, overflow: "hidden", marginBottom: "3rem" }}>
            <div onMouseEnter={() => setS1H(true)} onMouseLeave={() => setS1H(false)} style={{ background: s1H ? "#fff" : "#F0D4D1", padding: "1.25rem 1.5rem", transition: "background 0.2s" }}>
              <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, marginBottom: 4, letterSpacing: "-0.02em" }}>+77K</div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED }}>Member impact</div>
              <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>Annualized retention lift from non-incentivized Milestones celebrations</div>
            </div>
            <div onMouseEnter={() => setS2H(true)} onMouseLeave={() => setS2H(false)} style={{ background: s2H ? "#fff" : "#F0D4D1", padding: "1.25rem 1.5rem", transition: "background 0.2s" }}>
              <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, marginBottom: 4, letterSpacing: "-0.02em" }}>10+</div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED }}>Experiments shipped</div>
              <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>Framework-grounded content experiments across the membership lifecycle</div>
            </div>
            <div onMouseEnter={() => setS3H(true)} onMouseLeave={() => setS3H(false)} style={{ background: s3H ? "#fff" : "#F0D4D1", padding: "1.25rem 1.5rem", transition: "background 0.2s" }}>
              <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, marginBottom: 4, letterSpacing: "-0.02em" }}>47.4%</div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED }}>Cancellations targeted</div>
              <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>Emotional storytelling retention system for voluntary cancellation flow</div>
            </div>
          </div>
          </div>

          <Divider />

          {/* My Role */}
          <div id="ap-role" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>My role</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <Card label="Scope" title="UX Writer, Membership Growth" body="I held a dual mandate: building the content layer of Lumix, Prime's next-generation design system, while serving as content design lead for Membership Growth. I partnered with design, product, and CX teams across the US, Japan, Brazil, Germany, and Saudi Arabia. My work touched acquisition, onboarding, engagement, retention, and cancellation simultaneously." />
            <Card label="Proficiencies demonstrated" title="What this work required" body="Content strategy · Content systems · Voice and tone · Membership lifecycle · Retention writing · Localization · RTL design · AI content frameworks · Research synthesis · Stakeholder influence · Cross-functional leadership" />
          </div>

          <Divider />

          {/* The Problem */}
          <div id="ap-problem" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>The problem</SectionLabel>
          <SectionTitle>Prime had a trust problem, not a value problem</SectionTitle>
          <SectionBody>
            <>Nobody had assembled the full picture. Across Prime&rsquo;s organization, four separate research studies existed in isolation, each sitting in its own team, its own doc, its own quarterly review. <strong style={{ color: TEXT, fontWeight: 600 }}>I was the one who saw the through-line.</strong> I pulled those studies together, synthesized the findings into a coherent narrative, and brought that narrative to the team as the strategic foundation for everything that followed. What emerged was consistent and uncomfortable: members weren&rsquo;t confused about what Prime was. They just didn&rsquo;t feel anything about it.</>
          </SectionBody>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <Card label="Research 01" title="Manipulated and overwhelmed" body={<>Love Letters to Prime found members felt the service nudged them toward impulse purchases rather than genuine savings. They felt <strong style={{ color: TEXT, fontWeight: 500 }}>connected but manipulated.</strong> Prime was useful, but they were suspicious of its intent.</>} />
            <Card label="Research 02" title="Gaming it, not embracing it" body={<>Prime Passengers research showed passive members treated Prime as an expendable convenience, timing renewals for deals, not engaging with the ecosystem. <strong style={{ color: TEXT, fontWeight: 500 }}>Prime was infrastructure, not identity.</strong></>} />
            <Card label="Research 03" title="Curious but unappreciated" body={<>The Milestones concept study found value communication reached too few members and failed to create emotional connection. <strong style={{ color: TEXT, fontWeight: 500 }}>Members actively wanted recognition.</strong> They just weren&rsquo;t getting it.</>} />
            <Card label="Research 04" title="Pragmatic, not loyal" body={<>US Prime Value Perception research found loyalty was habitual, not emotional. Conditional, and therefore fragile. <strong style={{ color: TEXT, fontWeight: 500 }}>The moment something better appeared, members would leave.</strong></>} />
          </div>

          <PullQuote>Prime knew how to tell members what they saved. It didn&rsquo;t know how to make them feel like they mattered. That gap was the brief.</PullQuote>

          <Divider />

          {/* Artifact 01: Framework */}
          <div id="ap-framework" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 01 of 05</SectionLabel>
          <SectionTitle>The Value Communication Framework</SectionTitle>
          <SectionBody>
            <>The team&rsquo;s existing content guidance was fragmented: three overlapping sets of principles from Brand, Amazon RIO, and Prime itself, with separate strategies for acquisition, engagement, and retention. Everyone who touched Prime copy was working from a different map. The result was content that felt inconsistent at best and, at worst, like Amazon talking to itself rather than to members.<br /><br />I built the framework from first principles, grounded in four inputs: what Prime actually stands for (Values), what members actually feel (the four research studies I synthesized), how Prime&rsquo;s voice intersects with Amazon&rsquo;s brand (Guidelines), and how high-trust brands communicate value externally. A competitive audit of AllTrails, Nike, Starbucks, Thrive Market, Headspace, Duolingo, and Spotify.<br /><br />The competitive audit surfaced four consistent behaviors from brands members actually trust: they build relationships through transparency, they celebrate beyond transactions, they show up at the right moment, and they make the abstract concrete. <strong style={{ color: TEXT, fontWeight: 600 }}>These weren&rsquo;t new ideas. They were gaps. Prime was doing none of them consistently.</strong><br /><br />The framework synthesized into three content principles. Critically, the principles aren&rsquo;t mutually exclusive. They&rsquo;re a scale for measuring emphasis. A retention surface for a Tenured member leads with Pertinent and layers in Empathetic. An acquisition surface leads with Intuitive. The framework gives writers the vocabulary to make those calls deliberately, not instinctively.</>
          </SectionBody>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <Card label="Principle 01" title="Intuitive" body={<>For monetary and convenience value. <strong style={{ color: TEXT, fontWeight: 500 }}>Clear · Efficient · Tangible.</strong> Membership values are easy to understand. Prime connects value to habits, focusing on real-world applications. Using Prime&rsquo;s benefits is straightforward and requires little effort.</>} />
            <Card label="Principle 02" title="Pertinent" body={<>For convenience, access, and personalization. <strong style={{ color: TEXT, fontWeight: 500 }}>Adaptive · Contextual · Relevant.</strong> Prime evolves with a member&rsquo;s growing needs. It anticipates and shares the right value at the right time. It personalizes, knowing what to prioritize.</>} />
            <Card label="Principle 03" title="Empathetic" body={<>For emotion and trust. <strong style={{ color: TEXT, fontWeight: 500 }}>Dependable · Considerate · Celebratory and Delightful.</strong> Prime delivers on what it says, building confidence through consistency. It respects members&rsquo; privacy, current tasks, and preferences. It recognizes achievements and creates moments of joy.</>} />
          </div>

          <Divider />

          {/* Artifact 02: Rubric */}
          <div id="ap-rubric" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 02 of 05</SectionLabel>
          <SectionTitle>The Content Rubric</SectionTitle>
          <SectionBody>
            <>A framework without a way to measure it is just a document. After establishing the Value Communication principles, I built a content rubric to evaluate whether copy was actually meeting the bar, and to track how member-facing language was changing over time. The rubric served two purposes: it gave content marketers and PMs a tool to self-audit copy before it shipped, and it gave me a defensible way to show the team what &ldquo;better&rdquo; looked like in concrete terms.<br /><br /><strong style={{ color: TEXT, fontWeight: 600 }}>Each dimension maps directly to a pattern the research identified as broken.</strong> Clarity addresses the generic and confusing language finding. Value Expression addresses the gap between what Prime delivers and what members feel. Emotional Resonance addresses the manipulated and transactional sentiment. Relevance to Member Segment addresses the &ldquo;reaches too few members&rdquo; finding from the Milestones concept study. Trust Signals addresses conditional loyalty: members who would leave the moment something better appeared.</>
          </SectionBody>

          {/* Rubric Table */}
          <div style={{ border: BORDER, borderRadius: 14, overflow: "hidden", marginBottom: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr 1fr 1fr", background: "rgba(26,26,26,0.05)", borderBottom: BORDER_MID }}>
              {["Dimension", "1  Failing", "2  Weak", "3  Functional", "4  Strong", "5  Exemplary"].map((h, i) => (
                <div key={i} style={{ padding: "0.75rem 1rem", fontSize: 10, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, borderRight: i < 5 ? BORDER : undefined }}>{h}</div>
              ))}
            </div>
            {[
              { dim: "Clarity", sub: "Is the value immediately understood?", cells: ["Confusing or requires prior knowledge to parse", "Understandable but requires effort", "Clear on first read; no ambiguity", "Clear and leads with what matters most to this member", "Effortlessly understood; nothing to cut, nothing missing"] },
              { dim: "Value Expression", sub: "Does the copy communicate earned value, not just features?", cells: ["Lists features with no member outcome", "Mentions benefit but stays abstract", "Connects feature to outcome (\u201Cfast delivery saves time\u201D)", "Translates value into a felt experience (\u201Cyour order arrived next day\u201D)", "Makes value feel personal and already earned, not promised"] },
              { dim: "Emotional Resonance", sub: "Does the copy make the member feel seen?", cells: ["Pushy, salesy, or indifferent to the member\u2019s state", "Neutral, functional but forgettable", "Warm without being performative", "Acknowledges the member\u2019s actual situation or history", "Creates a moment of genuine recognition: the member feels celebrated, not marketed to"] },
              { dim: "Relevance to Segment", sub: "Is the message calibrated to where this member is in their journey?", cells: ["One-size copy with no signal of who the reader is", "Slightly tailored but could apply to anyone", "Clearly written for a defined segment (New / Tenured / Returning)", "Uses behavioral or lifecycle signals to sharpen relevance", "Feels written specifically for this person at this moment"] },
              { dim: "Trust Signals", sub: "Does the copy build or erode confidence?", cells: ["Exaggerated claims, vague superlatives, or pressure tactics", "Accurate but unverifiable, no grounding detail", "Honest and specific; sets accurate expectations", "Transparent about limitations; respects the member\u2019s intelligence", "Builds credibility through specificity and consistency across touchpoints"] },
            ].map((row, ri) => (
              <div key={ri} style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr 1fr 1fr", borderBottom: ri < 4 ? BORDER : undefined }}>
                <div style={{ padding: "1rem", fontSize: 13.5, color: TEXT, fontWeight: 600, borderRight: BORDER }}>{row.dim}<span style={{ display: "block", fontSize: 11.5, fontWeight: 400, color: TEXT_MUTED, marginTop: 3, lineHeight: 1.5 }}>{row.sub}</span></div>
                {row.cells.map((cell, ci) => (
                  <div key={ci} style={{ padding: "1rem", fontSize: 13, color: TEXT_SEC, lineHeight: 1.5, borderRight: ci < 4 ? BORDER : undefined }}>{cell}</div>
                ))}
              </div>
            ))}
          </div>

          <Divider />

          {/* Artifact 03: Milestones */}
          <div id="ap-milestones" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 03 of 05</SectionLabel>
          <SectionTitle>Milestones: celebrating members who weren&rsquo;t being celebrated</SectionTitle>
          <SectionBody>
            <>The existing assumption was that the fix was a better deal: a discount, a credit, a promotion tied to anniversary dates. I pushed back on that framing. The research I had compiled didn&rsquo;t show members wanted more offers. <strong style={{ color: TEXT, fontWeight: 600 }}>It showed they wanted acknowledgment.</strong> A member who had been with Prime for a year had never once been told that Prime knew they&rsquo;d been there for a year.<br /><br />Milestones was Prime&rsquo;s first systematic effort to celebrate members simply for being members. Not because they were about to cancel, not because they clicked something, but because they belonged. I designed three distinct content moments: a general welcome appreciation experience, a 30-day milestone, and a one-year anniversary. Each required its own content strategy based on where the member was emotionally and what register would resonate.<br /><br />A key finding from analysis: the non-incentivized versions, celebrations without any discount mechanics, performed strongest among New to Prime and Frequent member cohorts. <strong style={{ color: TEXT, fontWeight: 600 }}>The content was doing the work, not the offer.</strong> I introduced emotional storytelling methodologies that were new to the Prime team, moving the experience from &ldquo;here&rsquo;s what you saved&rdquo; to &ldquo;here&rsquo;s what this year meant.&rdquo;</>
          </SectionBody>

          <SectionSubtitle>General welcome, Empathetic (Considerate)</SectionSubtitle>
          <ScreenAnnotation>
            <div>
              <div style={{ background: "#1a1a1a", borderRadius: 10, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/amazon-prime-01.jpg" alt="Thanks for being a part of Prime screen" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <AnnotationBlock>
              <AnnotationLabel first>The copy</AnnotationLabel>
              <AnnotationCopy>&ldquo;Thanks for being a part of Prime!&rdquo;<br />&ldquo;From wishlists to watchlists, we&rsquo;re grateful you are here.&rdquo;</AnnotationCopy>
              <AnnotationLabel>What it does</AnnotationLabel>
              <AnnotationBody>&ldquo;Wishlists to watchlists&rdquo; spans the full breadth of Prime, shopping and streaming, without listing features. It earns warmth through specificity without becoming a benefits inventory.</AnnotationBody>
              <AnnotationBody>&ldquo;We&rsquo;re grateful you are here&rdquo; centers Prime&rsquo;s gratitude, not the member&rsquo;s obligation. No urgency. No upsell. The line makes Prime the one who&rsquo;s lucky, not the member.</AnnotationBody>
              <AnnotationBody>The CTA, <strong style={{ color: TEXT, fontWeight: 500 }}>Shop Prime deals,</strong> is low-pressure by design, nudging engagement rather than demanding it.</AnnotationBody>
              <AnnotationLabel>Rubric score</AnnotationLabel>
              <AnnotationBody>Passes on Clarity, Emotional Resonance, and Trust Signals. Scalability noted as a watch item for markets where the &ldquo;wishlists to watchlists&rdquo; construction needs structural adaptation.</AnnotationBody>
            </AnnotationBlock>
          </ScreenAnnotation>

          <SectionSubtitle>30-day and 1-year milestones, Empathetic (Celebratory and Delightful)</SectionSubtitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <div>
              <div style={{ background: "#1a1a1a", borderRadius: 10, overflow: "hidden", marginBottom: "0.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/amazon-prime-02.jpg" alt="Cheers to your first month Prime modal" style={{ width: "100%", display: "block" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <span style={{ fontSize: 12, color: TEXT_MUTED }}>30-day milestone modal</span>
                <span style={{ fontSize: 11, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "2px 10px" }}>New to Prime</span>
              </div>
            </div>
            <div>
              <div style={{ background: "#1a1a1a", borderRadius: 10, overflow: "hidden", marginBottom: "0.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/amazon-prime-03.jpg" alt="Happy Prime anniversary modal with personalized movie tiles" style={{ width: "100%", display: "block" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <span style={{ fontSize: 12, color: TEXT_MUTED }}>1-year anniversary modal</span>
                <span style={{ fontSize: 11, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "2px 10px" }}>Tenured member</span>
              </div>
            </div>
          </div>

          <SectionBody>
            <>The 30-day headline &ldquo;Cheers to your first month!&rdquo; leads with celebration, not achievement. The subhead uses name personalization to create immediate relevance, and &ldquo;let&rsquo;s celebrate&rdquo; frames the moment as shared: an invitation, not a notification. The visual (a Prime box with balloon-style &ldquo;30&rdquo; floating out) carries the celebratory register so the copy doesn&rsquo;t have to oversell.<br /><br />The 1-year anniversary version shifts register meaningfully. &ldquo;Your first year&rdquo; honors duration without sentimentalizing it. The movie tiles (Rings of Power, Fallout, Cross) aren&rsquo;t placeholder content. They&rsquo;re surfaced from the member&rsquo;s actual viewing history. <strong style={{ color: TEXT, fontWeight: 600 }}>Content personalization and emotional personalization working together.</strong> The offer becomes evidence of attention, not a generic reward.</>
          </SectionBody>

          <Divider />

          {/* Artifact 04: Value in Product */}
          <div id="ap-value" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 04 of 05</SectionLabel>
          <SectionTitle>Value communication in the product</SectionTitle>
          <SectionBody>
            <>The framework only matters if it shows up in real surfaces. Running parallel to Milestones, I led content for the aggregated value surfaces: the benefit dashboard and savings displays that gave members a running picture of their membership&rsquo;s impact. <strong style={{ color: TEXT, fontWeight: 600 }}>Members knew savings existed, but the presentation felt like a spreadsheet, not a story.</strong></>
          </SectionBody>

          <SectionSubtitle>Aggregated value dashboard, Pertinent (Contextual)</SectionSubtitle>
          <ScreenAnnotation>
            <div>
              <div style={{ background: "#1a1a1a", borderRadius: 10, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/amazon-prime-04.jpg" alt="Your membership just paid for itself dashboard" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <AnnotationBlock>
              <AnnotationLabel first>The headline</AnnotationLabel>
              <AnnotationCopy>&ldquo;Your membership just paid for itself!&rdquo;<br />&ldquo;You saved $75 during Prime Big Deal Days&rdquo;</AnnotationCopy>
              <AnnotationLabel>The content decisions</AnnotationLabel>
              <AnnotationBody>&ldquo;Paid for itself&rdquo; translates an abstract savings figure into a felt outcome. <strong style={{ color: TEXT, fontWeight: 500 }}>The member doesn&rsquo;t have to calculate whether Prime was worth it. The copy does the math emotionally.</strong></AnnotationBody>
              <AnnotationBody>Anchoring to &ldquo;Prime Big Deal Days&rdquo; makes the saving concrete and earned, tied to a specific event the member participated in, not a running total they have no memory of accumulating.</AnnotationBody>
              <AnnotationBody>The benefit breakdown by category uses the Intuitive (Tangible) sub-principle: specificity replaces a lump sum and builds trust through transparency.</AnnotationBody>
              <AnnotationLabel>CTA</AnnotationLabel>
              <AnnotationBody>&ldquo;See the breakdown&rdquo; invites curiosity rather than claiming credit. The member controls the next step.</AnnotationBody>
            </AnnotationBlock>
          </ScreenAnnotation>

          <SectionSubtitle>Point-in-line value, the right message at the right moment</SectionSubtitle>
          <ScreenAnnotation>
            <div>
              <div style={{ border: "3px solid #1a1a1a", borderRadius: 10, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/amazon-prime-05.jpg" alt="Orders page with membership paid for itself banner" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <AnnotationBlock>
              <AnnotationLabel first>The banner</AnnotationLabel>
              <AnnotationCopy>&ldquo;Your membership paid for itself!&rdquo;</AnnotationCopy>
              <AnnotationLabel>Why placement is the content decision</AnnotationLabel>
              <AnnotationBody>This message appears on the Your Orders page, exactly where a member is already thinking about what they&rsquo;ve spent. The timing is the design decision, not just the copy.</AnnotationBody>
              <AnnotationBody>No dollar figure needed here. The statement is the value. The member is mid-task; the copy is brief by design. <strong style={{ color: TEXT, fontWeight: 500 }}>Brevity here is precision, not laziness.</strong></AnnotationBody>
              <AnnotationBody>Point-in-line value communication means appearing naturally within an interaction the member is already having, resonating with it, not interrupting it.</AnnotationBody>
            </AnnotationBlock>
          </ScreenAnnotation>

          <SectionSubtitle>Anniversary on MeTab, the same message adapted to context</SectionSubtitle>
          <ScreenAnnotation>
            <div>
              <div style={{ background: "#1a1a1a", borderRadius: 10, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/amazon-prime-06.png" alt="Anniversary experience on the Prime member homepage" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <AnnotationBlock>
              <AnnotationLabel first>The surface difference</AnnotationLabel>
              <AnnotationBody>The MeTab version strips back the visual drama of the modal and integrates the celebration into the ambient member homepage. The headline is the same. The register adapts to the context.</AnnotationBody>
              <AnnotationBody>The benefit cards below are dynamically surfaced based on the member&rsquo;s behavior. Pertinent (Relevant) content coexisting with the Empathetic (Celebratory) anniversary moment in a single surface.</AnnotationBody>
              <AnnotationLabel>Content systems thinking</AnnotationLabel>
              <AnnotationBody><strong style={{ color: TEXT, fontWeight: 500 }}>The same underlying message is expressed differently depending on where and how the member encounters it.</strong> A modal demands attention. The MeTab earns it. Understanding that difference is content design.</AnnotationBody>
            </AnnotationBlock>
          </ScreenAnnotation>

          <Divider />

          {/* Artifact 05: Global + AI */}
          <div id="ap-global" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 05 of 05</SectionLabel>
          <SectionTitle>Global markets, retention systems, and GenAI</SectionTitle>
          <SectionBody>
            <>As the framework scaled globally, I led content design for right-to-left market adaptations including Arabic-language experiences for Saudi Arabia. The existing team approach was to localize after the fact: translate the English, flip the layout, ship it. <strong style={{ color: TEXT, fontWeight: 600 }}>I pushed for content architecture designed for RTL from the start, not retrofitted.</strong> RTL design requires rethinking information hierarchy, visual anchoring, number formatting, and emotional register, not just linguistic accuracy.</>
          </SectionBody>

          <ScreenAnnotation>
            <div>
              <div style={{ border: "3px solid #1a1a1a", borderRadius: 10, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/amazon-prime-07.jpg" alt="Arabic right-to-left Prime savings dashboard" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <AnnotationBlock>
              <AnnotationLabel first>Currency localization</AnnotationLabel>
              <AnnotationBody>SAR (Saudi Riyal) formatted with local conventions. The template maintains the same visual weight as USD equivalents without creating confusion between amount label and value.</AnnotationBody>
              <AnnotationLabel>Bidirectional architecture</AnnotationLabel>
              <AnnotationBody>The tab switching between time periods preserves the same content architecture as the English version while reading naturally right-to-left. The information hierarchy is identical. The reading direction isn&rsquo;t.</AnnotationBody>
              <AnnotationLabel>Breakdown hierarchy in RTL</AnnotationLabel>
              <AnnotationBody>Primary text right-anchored, values left-anchored. The color-coded benefit indicators maintain visual alignment across the breakdown without requiring structural changes. <strong style={{ color: TEXT, fontWeight: 500 }}>The content system holds in both directions.</strong></AnnotationBody>
              <AnnotationLabel>Disclaimer precision</AnnotationLabel>
              <AnnotationBody>The legal disclaimer required particular care: transparent, legally accurate, and accessible to an Arabic-speaking audience without losing the trust-building intent.</AnnotationBody>
            </AnnotationBlock>
          </ScreenAnnotation>

          <SectionBody>
            <>The Milestones initiative launched across four markets simultaneously across US, Japan, Brazil, and Germany. Each required distinct decisions about voice, tone, and emotional register. Japan: understated celebratory, warmth through precision. Brazil: warmer and more expressive, calibrated to Brazilian Portuguese norms. Germany: precision-forward, clarity as the trust signal. US: full Empathetic (Celebratory and Delightful), the framework&rsquo;s highest expressiveness. <strong style={{ color: TEXT, fontWeight: 600 }}>Localization strategy was embedded in the framework from day one, not retrofitted after the fact.</strong></>
          </SectionBody>

          <SectionBody>
            <>On the retention side, AR Off addressed the decision to cancel, where 47.4% of cancellations were voluntary. I built a content matrix mapped to cancellation reason and introduced emotional storytelling as a retention mechanism new to the Prime team. The difference: &ldquo;Your next order ships free&rdquo; is a fact. &ldquo;You&rsquo;ve ordered 12 times this year. Most of it arrived next day&rdquo; is a story about who this person is. The second sentence doesn&rsquo;t close a deal. It reminds someone of something they&rsquo;d stopped noticing.<br /><br />Three GenAI personalization initiatives ran in parallel. For PriME, I designed prompt frameworks and voice evaluation criteria so AI-generated copy stayed within Prime&rsquo;s voice while adapting to individual member signals. For Binoculars (ML-powered event discovery, scaled worldwide), I built tone guidance that matched register to event type. For Kairos (AI-generated merchandise tiles), I developed the content structure that constrained the AI&rsquo;s output without breaking its personalization capability. <strong style={{ color: TEXT, fontWeight: 600 }}>Guardrails that enabled rather than limited.</strong></>
          </SectionBody>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <Card label="AR Off" title="Emotional storytelling as retention" body={<>Content matrix mapped to cancellation reason. Empathetic (Considerate) register throughout. No guilt, no dark patterns. Introduced narrative techniques that were new to the team. <strong style={{ color: TEXT, fontWeight: 500 }}>47.4% of cancellations were voluntary.</strong> Language had a real lever to pull.</>} />
            <Card label="PriME and Binoculars" title="Personalization at 200M+ scale" body={<>Built prompt frameworks and voice evaluation criteria for AI-generated copy. Binoculars scaled worldwide with automated event updates. <strong style={{ color: TEXT, fontWeight: 500 }}>The content system had to hold across event types and member histories without a writer in the loop.</strong></>} />
            <Card label="Kairos" title="Guardrails that enable, not limit" body={<>AI-generated personalized merchandise tiles required content structure that preserved Prime&rsquo;s voice while allowing the model to adapt to each member. <strong style={{ color: TEXT, fontWeight: 500 }}>The design challenge was knowing which constraints to set and which to leave open.</strong></>} />
          </div>

          <Divider />

          {/* Outcomes */}
          <div id="ap-outcomes" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Outcome</SectionLabel>
          <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>+77K</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Annualized member impact</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Non-incentivized celebration drove measurable retention</div>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Milestones drove +77K annualized member impact across US, Japan, Brazil, and Germany. The strongest results came from non-incentivized messaging for New to Prime and Frequent cohorts. <strong style={{ color: TEXT, fontWeight: 500 }}>The content was doing the work, not the offer.</strong> This validated the core hypothesis I brought to the team: members don&rsquo;t just want savings, they want to feel seen.</div>
              </div>
            </div>
            <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>10+</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Experiments shipped</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>The framework powered a slate of live experiments</div>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Activation at Signup, Welcome Email, Value Widget on MeTab, SlashPrime and PMP playbooks, each grounded in the VC Framework and scored against the rubric. <strong style={{ color: TEXT, fontWeight: 500 }}>The experiments established design maturity for a team that had been operating without a unified content system.</strong> Content went from reactive to authoritative.</div>
              </div>
            </div>
            <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>47.4%</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Of cancellations targeted</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>A new methodology for retention content</div>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>The AR Off framework introduced emotional storytelling as a retention tool for a team that had been relying on benefit lists. The content matrix gave teams a principled, auditable approach to the largest single cancellation driver. <strong style={{ color: TEXT, fontWeight: 500 }}>The emotional storytelling methodology became new standard practice for the team.</strong></div>
              </div>
            </div>
            <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", textAlign: "center", paddingTop: "1.5rem" }}>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>200M+</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Global members reached</div>
              </div>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>4</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Markets launched simultaneously</div>
              </div>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>3</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>GenAI initiatives shipped</div>
              </div>
            </div>
          </div>

          <Divider />

          {/* Why This Matters */}
          <div id="ap-bridge" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Why this matters now</SectionLabel>
          <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.75rem" }}>The transferable problem</div>
            <div style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_SEC }}>
              The Amazon Prime problem isn&rsquo;t unique to Amazon. Any product with high engagement and low emotional connection faces it. Any membership or subscription product with a churn problem faces it. Any AI-powered product that generates personalized copy at scale faces it. The common thread: when content defaults to feature communication, it leaves the trust work undone. Trust is the only thing that survives a competitor&rsquo;s better offer.<br /><br />What I built at Prime was a system for doing the trust work at scale. A framework that gives writers, content marketers, and PMs a shared vocabulary for making content decisions deliberately. A rubric that makes &ldquo;better&rdquo; legible rather than subjective. A localization approach that designs for cultural context from the start. And an emotional storytelling practice that treats retention as a human problem, not a messaging optimization. <strong style={{ color: TEXT, fontWeight: 600 }}>That is the work I want to bring to your team.</strong>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

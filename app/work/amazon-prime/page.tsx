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
  { label: "Role", id: "ap-role" },
  { label: "Problem", id: "ap-problem" },
  { label: "Framework", id: "ap-framework" },
  { label: "Lifecycle", id: "ap-lifecycle" },
  { label: "Toolkit", id: "ap-toolkit" },
  { label: "Milestones", id: "ap-milestones" },
  { label: "Value in Product", id: "ap-value" },
  { label: "Global & AI", id: "ap-global" },
  { label: "Outcomes", id: "ap-outcomes" },
  { label: "Why It Matters", id: "ap-bridge" },
];

function Card({ label, title, body }: { label?: string; title?: string; body?: React.ReactNode }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: h ? "#fff" : "transparent", border: BORDER, borderColor: h ? "rgba(26,26,26,0.2)" : "rgba(26,26,26,0.1)", borderRadius: 14, padding: "1.5rem", transition: "background 0.2s, border-color 0.2s" }}>
      {label && <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.5rem" }}>{label}</div>}
      {title && <div style={{ fontSize: 16, fontWeight: 600, marginBottom: "0.5rem" }}>{title}</div>}
      {body && <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>{body}</div>}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "1rem" }}>{children}</div>;
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

function ToneItem({ name, desc }: { name: string; desc: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.25rem" }}>{name}</div>
      <div style={{ fontSize: 13, lineHeight: 1.65, color: TEXT_SEC }}>{desc}</div>
    </div>
  );
}

function StageCard({ num, name, sub, researchText, feelings, tones }: {
  num: string; name: string; sub: string;
  researchText: React.ReactNode;
  feelings: string[];
  tones: { section: string; items: { name: string; desc: React.ReactNode }[] }[];
}) {
  return (
    <div style={{ border: BORDER, borderRadius: 14, marginBottom: "1.5rem", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "1rem 1.5rem", borderBottom: BORDER, background: "rgba(26,26,26,0.03)" }}>
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED }}>{num}</span>
        <span style={{ fontSize: 16, fontWeight: 700 }}>{name}</span>
        <span style={{ fontSize: 13, color: TEXT_MUTED }}>{sub}</span>
      </div>
      <div style={{ padding: "1.5rem" }}>
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.5rem" }}>Research insight</div>
          <div style={{ fontSize: 14, lineHeight: 1.75, color: TEXT_SEC, marginBottom: "0.75rem" }}>{researchText}</div>
          <div style={{ display: "flex", gap: 8 }}>
            {feelings.map(f => <span key={f} style={{ fontSize: 12, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "3px 12px", background: "rgba(26,26,26,0.04)" }}>{f}</span>)}
          </div>
        </div>
        {tones.map((section, si) => (
          <div key={si}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.75rem", marginTop: si > 0 ? "1.25rem" : 0 }}>{section.section}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "0.5rem" }}>
              {section.items.map((item, ii) => <ToneItem key={ii} name={item.name} desc={item.desc} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolkitRow({ tool, desc }: { tool: string; desc: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "1.5rem", padding: "1rem 0", borderBottom: BORDER }}>
      <div style={{ fontSize: 14, fontWeight: 600 }}>{tool}</div>
      <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>{desc}</div>
    </div>
  );
}

export default function AmazonPrimePage() {
  const [activeSection, setActiveSection] = useState("ap-role");

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
      <BackArrow />
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
              Prime had 200 million members and a trust problem. Research showed members saw the service as a useful necessity: habitual, transactional, and emotionally flat. The benefits were there. The language wasn&rsquo;t earning them. <strong style={{ color: TEXT, fontWeight: 600 }}>I built the content system that changed how Prime communicates value across its design system, membership growth initiatives, and global markets.</strong>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem" }}>
              {["Membership", "Content systems", "Voice and tone", "Retention", "Localization", "AI content design"].map(t => (
                <span key={t} style={{ fontSize: 12, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "4px 12px", background: "rgba(26,26,26,0.04)" }}>{t}</span>
              ))}
            </div>

          </div>

          <Divider />

          <div id="ap-role" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>My role</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <Card label="Scope" title="UX Writer, Membership Growth" body="I held a dual mandate: building the content layer of Lumix, Prime's next-generation design system, while serving as content design lead for Membership Growth. I partnered with design, product, and CX teams across the US, Japan, Brazil, Germany, and Saudi Arabia. My work touched acquisition, onboarding, engagement, retention, and cancellation simultaneously." />
            <Card label="Proficiencies demonstrated" title="What this work required" body="Content strategy · Content systems · Voice and tone architecture · Lifecycle content design · Retention writing · Localization · RTL design · AI content frameworks · Research synthesis · Stakeholder influence · Cross-functional leadership" />
          </div>

          <Divider />

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
          <SectionLabel>Artifact 01 of 06</SectionLabel>
          <SectionTitle>The Value Communication Framework</SectionTitle>
          <SectionBody>
            <>The team&rsquo;s existing content guidance was fragmented: three overlapping sets of principles from Brand, Amazon RIO, and Prime itself, with separate strategies for acquisition, engagement, and retention. Everyone who touched Prime copy was working from a different map. I built a framework from first principles, grounded in four inputs: what Prime actually stands for (Values), what members actually feel (the four research studies I synthesized), how Prime&rsquo;s voice intersects with Amazon&rsquo;s brand (Guidelines), and how high-trust brands communicate value in the market (a competitive audit of AllTrails, Nike, Starbucks, Thrive Market, Headspace, Duolingo, and Spotify).<br /><br />The competitive audit surfaced four consistent behaviors from brands members actually trust: they build relationships through transparency, they celebrate beyond transactions, they show up at the right moment, and they make the abstract concrete. <strong style={{ color: TEXT, fontWeight: 600 }}>These weren&rsquo;t new ideas. They were gaps. Prime was doing none of them consistently.</strong><br /><br />The framework synthesized into three content principles. Critically, the principles aren&rsquo;t mutually exclusive. They&rsquo;re a scale for measuring emphasis. A retention surface for a Tenured member may lead with Pertinent and layer in Empathetic. An acquisition surface leads with Intuitive. The framework gives writers the vocabulary to make those calls deliberately, not instinctively.</>
          </SectionBody>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <Card label="Principle 01" title="Intuitive" body={<>For monetary and convenience value. <strong style={{ color: TEXT, fontWeight: 500 }}>Clear · Efficient · Tangible.</strong> Membership values are easy to understand. Prime connects value to habits, focusing on real-world applications. Benefits are straightforward and require little effort to use.</>} />
            <Card label="Principle 02" title="Pertinent" body={<>For convenience, access, and personalization. <strong style={{ color: TEXT, fontWeight: 500 }}>Adaptive · Contextual · Relevant.</strong> Prime evolves with a member&rsquo;s growing needs. It anticipates and shares the right value at the right time. It personalizes, knowing what to prioritize.</>} />
            <Card label="Principle 03" title="Empathetic" body={<>For emotion and trust. <strong style={{ color: TEXT, fontWeight: 500 }}>Dependable · Considerate · Celebratory and Delightful.</strong> Prime delivers on what it says, building confidence through consistency. It respects members&rsquo; privacy, current tasks, and preferences. It recognizes achievements and creates moments of joy.</>} />
          </div>

          <Divider />

          {/* Artifact 02: Lifecycle */}
          <div id="ap-lifecycle" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 02 of 06</SectionLabel>
          <SectionTitle>The lifecycle content strategy</SectionTitle>
          <SectionBody>
            <>The Value Communication Content Strategy document I authored mapped the full membership arc into three distinct stages, each grounded in its own research summary, member emotional state, and voice and tone specification. This wasn&rsquo;t a style guide. It was a strategic tool that gave every writer, PM, and content marketer a shared language for making content decisions at each moment in the member journey. <strong style={{ color: TEXT, fontWeight: 600 }}>The insight that shaped the whole system: the same member feels differently depending on where they are, and content that works at acquisition actively fails at retention.</strong></>
          </SectionBody>

          <StageCard num="Stage 01" name="Promised Value" sub="Discovery and Acquisition"
            researchText={<>Potential customers perceive Prime primarily as a shipping service. This creates a significant barrier to acquisition: most potential members remain unaware of Prime&rsquo;s broader benefit ecosystem. <strong style={{ color: TEXT, fontWeight: 600 }}>Content must strike a delicate balance: lead with compelling, emotionally resonant messaging that captures attention, then transition into practical, customer-backwards information that builds trust and enables informed decisions.</strong></>}
            feelings={["Skeptical", "Anxious", "Curious"]}
            tones={[
              { section: "Clear", items: [
                { name: "Welcoming", desc: "Warm, approachable language that makes Prime feel accessible. Break down the membership into simple, friendly terms that invite exploration without pressure." },
                { name: "Direct", desc: "Get to the point about what's included and what it costs. Respect their time and intelligence, avoiding fluff that increases skepticism." },
                { name: "Concrete", desc: "Connect abstract benefits to real-world moments. Turn \"streaming service\" into \"watch Thursday Night Football without cable.\"" },
              ]},
              { section: "Relevant", items: [
                { name: "Attuned", desc: "Show awareness of their evaluation mindset without assuming commitment. Acknowledge they're comparing options and need information to decide." },
                { name: "Timely", desc: "Surface the right information at the right moment in their consideration journey. Answer questions as they naturally arise." },
                { name: "Personalized", desc: "Address their specific interests based on browsing behavior or stated needs, rather than listing every benefit generically." },
              ]},
              { section: "Empathetic", items: [
                { name: "Transparent", desc: "Be honest about costs, commitments, and what to expect. Build credibility through truthfulness that addresses anxiety about making a commitment." },
                { name: "Reassuring", desc: "Convey stability through calm, confident language. Reduce decision anxiety by emphasizing risk-free trials and easy cancellation." },
                { name: "Inviting", desc: "Show genuine enthusiasm about what Prime offers without being pushy. Respect that they're not ready to commit yet." },
              ]},
            ]}
          />

          <StageCard num="Stage 02" name="Perceived Value" sub="Activation and Engagement"
            researchText={<>New members are building their understanding of Prime&rsquo;s value, but there&rsquo;s a critical gap: <strong style={{ color: TEXT, fontWeight: 600 }}>increased usage doesn&rsquo;t automatically translate to stronger value perception.</strong> Members are discovering how Prime fits into their lives but haven&rsquo;t yet felt the full weight of what they&rsquo;re receiving. Content must guide them toward meaningful experiences and help them see the growing return on their investment.</>}
            feelings={["Curious", "Uncertain", "Hopeful"]}
            tones={[
              { section: "Clear", items: [
                { name: "Encouraging", desc: "Celebrate their usage and early wins with positive reinforcement. Turn \"you ordered twice\" into \"you're already getting value.\"" },
                { name: "Guiding", desc: "Provide clear direction toward relevant next benefits based on what they're using. Show them the path forward without overwhelming them with everything at once." },
                { name: "Tangible", desc: "Connect actual usage to measurable outcomes: \"That order arrived in 1 day instead of 5. You saved $8.99 and 4 days of waiting.\"" },
              ]},
              { section: "Relevant", items: [
                { name: "Pertinent", desc: "Show awareness of their specific usage patterns. Reflect back what they're doing in ways that feel insightful rather than intrusive." },
                { name: "Contextual", desc: "Surface benefits at precisely the right moments in their routine. Suggest Prime Video when they're planning movie night, not randomly on Tuesday morning." },
                { name: "Tailored", desc: "Recommend based on what they're actually using. Make every suggestion feel personally relevant rather than generic." },
              ]},
              { section: "Empathetic", items: [
                { name: "Validating", desc: "Reinforce that their membership decision was smart through concrete evidence. Build confidence and reduce buyer's remorse." },
                { name: "Supportive", desc: "Acknowledge their learning curve and make discovery feel easy. Help them navigate Prime's breadth without judgment." },
                { name: "Appreciative", desc: "Express genuine recognition for their engagement and trust. Celebrate their milestones authentically, making them feel valued as they build their relationship with Prime." },
              ]},
            ]}
          />

          <StageCard num="Stage 03" name="Proved Value" sub="Retention and Loyalty"
            researchText={<>Long-term members demonstrate frequent usage but don&rsquo;t perceive Prime as superior to alternatives. <strong style={{ color: TEXT, fontWeight: 600 }}>Higher engagement correlates with heightened price sensitivity, not stronger value perception.</strong> Members need content that makes their Prime ROI undeniable, that celebrates their loyalty without gimmicks, and that proves Prime knows them as individuals, not as a subscription line item.</>}
            feelings={["Habitual", "Underappreciated", "Conditional"]}
            tones={[
              { section: "Clear", items: [
                { name: "Definitive", desc: "Present cumulative value with confidence. Use strong, data-driven language: \"You saved $847. That's 19x your membership fee.\"" },
                { name: "Comprehensive", desc: "Show the full scope of their Prime relationship across all touchpoints and time periods. Paint the complete picture of consistent value delivery." },
                { name: "Confident", desc: "Quantify everything with specific numbers: \"127 deliveries, 89 hours streamed, $2,341 saved over 3 years.\"" },
              ]},
              { section: "Relevant", items: [
                { name: "Reflective", desc: "Look back on their membership arc with thoughtful acknowledgment of their loyalty. Show how Prime has evolved with their changing life stages." },
                { name: "Insightful", desc: "Demonstrate deep understanding of their complete usage history. Surface patterns that prove Prime truly knows them, transforming habitual use into recognized relationship." },
                { name: "Personalized", desc: "Honor their unique, long-term relationship with precision. Address their exact circumstances and multi-year patterns, making them feel seen as an individual." },
              ]},
              { section: "Empathetic", items: [
                { name: "Grateful", desc: "Express appreciation for their years of loyalty. Make them feel genuinely valued and recognized for their commitment, not taken for granted." },
                { name: "Sincere", desc: "Let transparent, comprehensive data speak about cumulative value. Be straightforward about what they've gained, building renewed trust through evidence rather than claims." },
                { name: "Celebratory", desc: "Honor their achievements and anniversaries with authentic enthusiasm. Make their tenure feel special and worthy of celebration." },
              ]},
            ]}
          />

          <Divider />

          {/* Artifact 03: Toolkit */}
          <div id="ap-toolkit" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 03 of 06</SectionLabel>
          <SectionTitle>The content toolkit</SectionTitle>
          <SectionBody>
            <>Alongside the lifecycle framework, I defined a content toolkit: the tactical techniques that operationalize the principles at the copy level. These weren&rsquo;t writing tips. They were the mechanics that make the framework show up in a headline, a notification, or a savings dashboard. <strong style={{ color: TEXT, fontWeight: 600 }}>Each technique maps to a specific research finding about what was missing from Prime&rsquo;s existing content.</strong></>
          </SectionBody>

          <div style={{ border: BORDER, borderRadius: 14, padding: "0 1.5rem", marginBottom: "2rem" }}>
            <ToolkitRow tool="Value Verbs" desc={<>Lead with action words that demonstrate clear, tangible value. <strong style={{ color: TEXT, fontWeight: 500 }}>Save, Get, Unlock, Discover, Explore, Enjoy, Stream, Shop, Earn.</strong> Value verbs transform passive descriptions into active invitations that show customers what they can do, not what the product is.</>} />
            <ToolkitRow tool="Specific Data and Proof Points" desc={<>Quantify value wherever possible. <strong style={{ color: TEXT, fontWeight: 500 }}>&ldquo;Save $6.99 in shipping.&rdquo; &ldquo;Stream thousands of titles.&rdquo; &ldquo;Get free Same-Day Delivery on over 3 million items.&rdquo;</strong> Specific data makes abstract value tangible and measurable.</>} />
            <ToolkitRow tool="Personalization Signals" desc={<>Leverage customer behavior, preferences, and history to make content feel relevant and timely. <strong style={{ color: TEXT, fontWeight: 500 }}>&ldquo;You&rsquo;ve saved $XX with Prime this year&rdquo;</strong> demonstrates that Prime understands and serves individual needs.</>} />
            <ToolkitRow tool="Progressive Disclosure" desc="Present Prime's extensive benefit set through clear hierarchy and layered information. Lead with what matters most for each audience, then reveal depth on demand. Use scannable formats and visual hierarchy to prevent overwhelm while making breadth accessible." />
            <ToolkitRow tool="Lifecycle-Specific Framing" desc="Adapt messaging to match where customers are in their journey. For Non-Prime: emphasize discovery and reasons to join. For New members: focus on activation and first experiences. For Tenured: highlight ongoing value and hidden gems. For Returning: show what they've been missing." />
            <ToolkitRow tool="Contextual Clarity" desc="Ensure every piece of content answers the customer's immediate question within their current context. Avoid jargon, provide clear next steps, and make wayfinding effortless." />
            <ToolkitRow tool="Social Proof and Credibility" desc="Show cumulative savings, highlight popular benefits, and demonstrate real member outcomes to build trust and reinforce worth. Credibility markers reduce the skepticism that research identified as a core barrier at every stage of the lifecycle." />
          </div>

          <Divider />

          {/* Artifact 04: Milestones */}
          <div id="ap-milestones" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 04 of 06</SectionLabel>
          <SectionTitle>Milestones: celebrating members who weren&rsquo;t being celebrated</SectionTitle>
          <SectionBody>
            <>The existing assumption was that the fix for churn was a better deal: a discount, a credit, a promotion tied to anniversary dates. I pushed back on that framing. The research I had compiled didn&rsquo;t show members wanted more offers. <strong style={{ color: TEXT, fontWeight: 600 }}>It showed they wanted acknowledgment.</strong> A member who had been with Prime for a year had never once been told that Prime knew they&rsquo;d been there for a year.<br /><br />Milestones was Prime&rsquo;s first systematic effort to celebrate members simply for being members. Not because they were about to cancel, not because they clicked something, but because they belonged. I designed three distinct content moments, each drawing directly from the Perceived and Proved Value frameworks I authored.</>
          </SectionBody>

          <SectionSubtitle>General welcome: Stage 01 Empathetic (Considerate)</SectionSubtitle>
          <ScreenAnnotation>
            <div><div style={{ background: "#1a1a1a", borderRadius: 10, overflow: "hidden" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/amazon-prime-01.jpg" alt="Thanks for being a part of Prime screen" style={{ width: "100%", display: "block" }} /></div></div>
            <AnnotationBlock>
              <AnnotationLabel first>The copy</AnnotationLabel>
              <AnnotationCopy>&ldquo;Thanks for being a part of Prime!&rdquo;<br />&ldquo;From wishlists to watchlists, we&rsquo;re grateful you are here.&rdquo;</AnnotationCopy>
              <AnnotationLabel>Framework in action</AnnotationLabel>
              <AnnotationBody>&ldquo;Wishlists to watchlists&rdquo; activates the Unified Story principle from the content strategy: introducing Prime as an integrated ecosystem rather than isolated features, spanning shopping and streaming in four words.</AnnotationBody>
              <AnnotationBody>&ldquo;We&rsquo;re grateful you are here&rdquo; centers Prime&rsquo;s gratitude, not the member&rsquo;s obligation. This is the <strong style={{ color: TEXT, fontWeight: 500 }}>Inviting tone from Stage 01</strong>: showing genuine enthusiasm while respecting that they&rsquo;re not yet fully committed.</AnnotationBody>
              <AnnotationLabel>Toolkit technique</AnnotationLabel>
              <AnnotationBody>Lifecycle-Specific Framing for a new member: emphasizing the warmth of belonging over the breadth of benefits. The CTA (Shop Prime deals) is low-pressure, nudging engagement rather than demanding it.</AnnotationBody>
            </AnnotationBlock>
          </ScreenAnnotation>

          <SectionSubtitle>30-day and 1-year milestones: Stage 02 and 03 Empathetic (Celebratory and Delightful)</SectionSubtitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <div>
              <div style={{ background: "#1a1a1a", borderRadius: 10, overflow: "hidden", marginBottom: "0.5rem" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/amazon-prime-02.jpg" alt="Cheers to your first month Prime modal" style={{ width: "100%", display: "block" }} /></div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}><span style={{ fontSize: 12, color: TEXT_MUTED }}>30-day milestone modal</span><span style={{ fontSize: 11, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "2px 10px" }}>Perceived Value stage</span></div>
            </div>
            <div>
              <div style={{ background: "#1a1a1a", borderRadius: 10, overflow: "hidden", marginBottom: "0.5rem" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/amazon-prime-03.jpg" alt="Happy Prime anniversary modal" style={{ width: "100%", display: "block" }} /></div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}><span style={{ fontSize: 12, color: TEXT_MUTED }}>1-year anniversary modal</span><span style={{ fontSize: 11, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "2px 10px" }}>Proved Value stage</span></div>
            </div>
          </div>

          <SectionBody>
            <>The 30-day modal lives in Stage 02 (Perceived Value): the member is building their relationship with Prime, still hopeful and uncertain. &ldquo;Cheers to your first month!&rdquo; leads with celebration, not achievement, and &ldquo;let&rsquo;s celebrate&rdquo; frames the moment as shared, an invitation rather than a notification. The Validating tone from Stage 02 is doing work here: reinforcing that their membership decision was smart through concrete evidence (the $6 Prime Video credit is proof of value, not a discount).<br /><br />The 1-year anniversary lives in Stage 03 (Proved Value). &ldquo;Your first year&rdquo; honors duration without sentimentalizing it. The movie tiles (Rings of Power, Fallout, Cross) aren&rsquo;t placeholder content. They&rsquo;re surfaced from the member&rsquo;s actual viewing history, activating the <strong style={{ color: TEXT, fontWeight: 600 }}>Insightful and Personalized tones from Stage 03</strong>: demonstrating deep understanding of their complete usage history and making them feel seen as an individual. A key finding from Milestones analysis: non-incentivized messaging performed strongest among New to Prime and Frequent cohorts. The content was doing the work, not the offer.</>
          </SectionBody>

          <Divider />

          {/* Artifact 05: Value in Product */}
          <div id="ap-value" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 05 of 06</SectionLabel>
          <SectionTitle>Value communication in the product</SectionTitle>
          <SectionBody>
            <>The framework only matters if it shows up in real surfaces. I led content for the aggregated value surfaces: the benefit dashboard and savings displays that gave members a running picture of their membership&rsquo;s impact. This is where the Proved Value stage framework did its heaviest lifting. Members at Stage 03 need Definitive, Comprehensive, Confident copy. <strong style={{ color: TEXT, fontWeight: 600 }}>They need to be shown, not told, that Prime is worth it.</strong></>
          </SectionBody>

          <SectionSubtitle>Aggregated value dashboard: Proved Value, Definitive and Tangible</SectionSubtitle>
          <ScreenAnnotation>
            <div><div style={{ background: "#1a1a1a", borderRadius: 10, overflow: "hidden" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/amazon-prime-04.jpg" alt="Your membership just paid for itself dashboard" style={{ width: "100%", display: "block" }} /></div></div>
            <AnnotationBlock>
              <AnnotationLabel first>The headline</AnnotationLabel>
              <AnnotationCopy>&ldquo;Your membership just paid for itself!&rdquo;<br />&ldquo;You saved $75 during Prime Big Deal Days&rdquo;</AnnotationCopy>
              <AnnotationLabel>Framework in action</AnnotationLabel>
              <AnnotationBody>&ldquo;Paid for itself&rdquo; is the Definitive tone from Stage 03: strong, data-driven language that leaves no doubt about the return on investment. <strong style={{ color: TEXT, fontWeight: 500 }}>The member doesn&rsquo;t have to calculate whether Prime was worth it. The copy does the math emotionally.</strong></AnnotationBody>
              <AnnotationBody>Anchoring to &ldquo;Prime Big Deal Days&rdquo; activates the Reflective and Contextual toolkit techniques: making the saving concrete and earned, tied to a specific event the member participated in rather than a running total they have no memory of accumulating.</AnnotationBody>
              <AnnotationLabel>Toolkit techniques</AnnotationLabel>
              <AnnotationBody>Specific Data and Proof Points ($75), Social Proof and Credibility (the benefit breakdown by category), and Lifecycle-Specific Framing (Tenured member, Proved Value stage). The CTA &ldquo;See the breakdown&rdquo; uses Progressive Disclosure: inviting depth rather than demanding attention.</AnnotationBody>
            </AnnotationBlock>
          </ScreenAnnotation>

          <SectionSubtitle>Point-in-line value: Perceived Value, Contextual and Timely</SectionSubtitle>
          <ScreenAnnotation>
            <div><div style={{ border: "3px solid #1a1a1a", borderRadius: 10, overflow: "hidden" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/amazon-prime-05.jpg" alt="Orders page with membership paid for itself banner" style={{ width: "100%", display: "block" }} /></div></div>
            <AnnotationBlock>
              <AnnotationLabel first>The surface</AnnotationLabel>
              <AnnotationCopy>&ldquo;Your membership paid for itself!&rdquo;</AnnotationCopy>
              <AnnotationLabel>Why this is a content design decision</AnnotationLabel>
              <AnnotationBody>This message appears on the Your Orders page, exactly where a member is already thinking about what they&rsquo;ve spent. The placement is the strategy. This is the <strong style={{ color: TEXT, fontWeight: 500 }}>Contextual and Timely tones from Stage 02</strong>: surfacing benefits at precisely the right moment in their routine.</AnnotationBody>
              <AnnotationBody>No dollar figure is needed. The statement is the value. Brevity here is precision: the member is mid-task, and the framework&rsquo;s principle of Contextual Clarity means the copy answers their immediate question without derailing their intent.</AnnotationBody>
            </AnnotationBlock>
          </ScreenAnnotation>

          <SectionSubtitle>Anniversary on MeTab: Stage 03 within the ambient member homepage</SectionSubtitle>
          <ScreenAnnotation>
            <div><div style={{ background: "#1a1a1a", borderRadius: 10, overflow: "hidden" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/amazon-prime-06.png" alt="Anniversary experience on the Prime member homepage" style={{ width: "100%", display: "block" }} /></div></div>
            <AnnotationBlock>
              <AnnotationLabel first>The content systems decision</AnnotationLabel>
              <AnnotationBody>The MeTab version of the anniversary strips back the visual drama of the modal and integrates the celebration into the ambient member homepage. The headline is the same. The register adapts to the context. This is <strong style={{ color: TEXT, fontWeight: 500 }}>content systems thinking</strong>: the same underlying message, expressed differently depending on where and how the member encounters it.</AnnotationBody>
              <AnnotationBody>The benefit cards below are dynamically surfaced based on the member&rsquo;s behavior, activating the Pertinent and Tailored tones from Stage 02 within the same surface as the Celebratory Stage 03 anniversary moment. Both lifecycle stages coexist on one screen.</AnnotationBody>
              <AnnotationLabel>Framework note</AnnotationLabel>
              <AnnotationBody>The MeTab is the aggregated view of the member&rsquo;s relationship with Prime. An anniversary message here carries more weight than a modal. It&rsquo;s woven into the homepage fabric, not interrupting it. The framework&rsquo;s Lifecycle-Specific Framing principle governed this decision.</AnnotationBody>
            </AnnotationBlock>
          </ScreenAnnotation>

          <Divider />

          {/* Artifact 06: Global + AI */}
          <div id="ap-global" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 06 of 06</SectionLabel>
          <SectionTitle>Global markets, retention systems, and GenAI</SectionTitle>
          <SectionBody>
            <>As the framework scaled globally, I led content design for right-to-left market adaptations including Arabic-language experiences for Saudi Arabia. The existing team approach was to localize after the fact: translate the English, flip the layout, ship it. <strong style={{ color: TEXT, fontWeight: 600 }}>I designed for RTL from the start, not retrofitted.</strong> RTL design requires rethinking information hierarchy, visual anchoring, number formatting, and emotional register, not just linguistic accuracy. The Transparent and Reassuring tones from Stage 01 look different in Arabic cultural context than they do in US English.</>
          </SectionBody>

          <ScreenAnnotation>
            <div><div style={{ border: "3px solid #1a1a1a", borderRadius: 10, overflow: "hidden" }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/images/amazon-prime-07.jpg" alt="Arabic right-to-left Prime savings dashboard" style={{ width: "100%", display: "block" }} /></div></div>
            <AnnotationBlock>
              <AnnotationLabel first>RTL content decisions</AnnotationLabel>
              <AnnotationBody>SAR (Saudi Riyal) formatted with local conventions, maintaining the same visual weight as USD equivalents. The Definitive and Comprehensive tones from Stage 03 hold across both directions: the member sees their savings summary with the same clarity and specificity.</AnnotationBody>
              <AnnotationBody>Primary text right-anchored, values left-anchored. The color-coded benefit indicators maintain visual alignment across the breakdown without structural changes. <strong style={{ color: TEXT, fontWeight: 500 }}>The content system holds in both directions.</strong></AnnotationBody>
              <AnnotationLabel>Localization strategy</AnnotationLabel>
              <AnnotationBody>The Milestones initiative launched across US, Japan, Brazil, and Germany simultaneously. Each market required distinct decisions about emotional register: Japan (understated, warmth through precision), Brazil (expressive, calibrated to Brazilian Portuguese norms), Germany (precision-forward, clarity as trust signal), US (full Celebratory and Delightful). Localization was embedded in the framework from day one, not retrofitted.</AnnotationBody>
            </AnnotationBlock>
          </ScreenAnnotation>

          <SectionBody>
            <>On retention: AR Off addressed the decision to cancel, where 47.4% of cancellations were voluntary. I built a content matrix mapped to cancellation reason and introduced emotional storytelling as a retention mechanism new to the Prime team. The difference: &ldquo;Your next order ships free&rdquo; is a fact. &ldquo;You&rsquo;ve ordered 12 times this year. Most of it arrived next day&rdquo; is a story about who this person is. That&rsquo;s the Reflective and Sincere tones from Stage 03 doing their work.<br /><br />Three GenAI personalization initiatives ran in parallel: PriME (prompt frameworks for personalized experiences), Binoculars (ML-powered event discovery, scaled worldwide), and Kairos (AI-generated merchandise tiles). For each, I designed the content structure that constrained the AI&rsquo;s output to Prime voice while preserving the personalization benefit. The framework&rsquo;s Personalization Signals toolkit technique was the governing principle: each initiative had to show value through the member&rsquo;s specific lens, not a generic one.</>
          </SectionBody>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <Card label="AR Off" title="Emotional storytelling as retention" body={<>Stage 03 framework applied at the highest-stakes moment. Sincere, Reflective, Grateful tones throughout. No guilt. No dark patterns. <strong style={{ color: TEXT, fontWeight: 500 }}>Introduced narrative techniques new to the Prime team.</strong> Voluntary churn was 47.4% of all cancellations.</>} />
            <Card label="PriME and Binoculars" title="Personalization at 200M+ scale" body={<>Prompt frameworks and voice evaluation criteria for AI-generated copy. Binoculars scaled worldwide with automated event updates. <strong style={{ color: TEXT, fontWeight: 500 }}>The content system had to hold across event types and member histories without a writer in the loop.</strong></>} />
            <Card label="Kairos" title="Guardrails that enable, not limit" body={<>AI-generated personalized merchandise tiles required content structure that preserved Prime voice while allowing model adaptation to each member. <strong style={{ color: TEXT, fontWeight: 500 }}>The design challenge was knowing which constraints to set and which to leave open.</strong></>} />
          </div>

          <Divider />

          {/* Outcomes */}
          <div id="ap-outcomes" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Outcome</SectionLabel>
          <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
              <div><div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>+77K</div><div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Annualized member impact</div></div>
              <div><div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Non-incentivized celebration drove measurable retention</div><div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Milestones drove +77K annualized member impact across US, Japan, Brazil, and Germany. The strongest results came from non-incentivized messaging for New to Prime and Frequent cohorts. <strong style={{ color: TEXT, fontWeight: 500 }}>The Appreciative and Validating tones from Stage 02 were doing the work, not the offer.</strong> This validated the core hypothesis: members don&rsquo;t just want savings. They want to feel seen.</div></div>
            </div>
            <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
              <div><div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>10+</div><div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Experiments shipped</div></div>
              <div><div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>The framework powered a slate of live experiments</div><div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Activation at Signup, Welcome Email, Value Widget on MeTab, SlashPrime and PMP playbooks, each grounded in the lifecycle framework and content toolkit. <strong style={{ color: TEXT, fontWeight: 500 }}>The experiments established design maturity for a team that had been operating without a unified content system.</strong> Content went from reactive to authoritative.</div></div>
            </div>
            <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
              <div><div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>47.4%</div><div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Of cancellations targeted</div></div>
              <div><div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>A new methodology for retention content</div><div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>The AR Off framework introduced Stage 03 emotional storytelling as a retention tool for a team that had been relying on benefit lists. <strong style={{ color: TEXT, fontWeight: 500 }}>The Reflective and Sincere tones, applied at cancellation, became new standard practice for the team.</strong></div></div>
            </div>
            <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", textAlign: "center", paddingTop: "1.5rem" }}>
              <div><div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>200M+</div><div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Global members reached</div></div>
              <div><div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>4</div><div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Markets launched simultaneously</div></div>
              <div><div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>3</div><div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>GenAI initiatives shipped</div></div>
            </div>
          </div>

          <Divider />

          <div id="ap-bridge" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Why this matters now</SectionLabel>
          <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.75rem" }}>The transferable problem</div>
            <div style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_SEC }}>
              The Amazon Prime problem isn&rsquo;t unique to Amazon. Any product with high engagement and low emotional connection faces it. Any membership or subscription product with a churn problem faces it. Any AI-powered product that generates personalized copy at scale faces it. The common thread: when content defaults to feature communication, it leaves the trust work undone, and trust is the only thing that survives a competitor&rsquo;s better offer.<br /><br />What I built at Prime was a system for doing the trust work at scale. A lifecycle framework that gives writers, PMs, and content marketers a shared vocabulary for making decisions deliberately. A toolkit that operationalizes the framework at the copy level. A rubric that makes &ldquo;better&rdquo; legible rather than subjective. A localization approach that designs for cultural context from the start. And an emotional storytelling practice that treats retention as a human problem, not a messaging optimization. <strong style={{ color: TEXT, fontWeight: 600 }}>That is the work I want to bring to your team.</strong>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

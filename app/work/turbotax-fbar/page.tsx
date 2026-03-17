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
  { label: "Role", id: "tt-role" },
  { label: "Problem", id: "tt-problem" },
  { label: "Planning", id: "tt-planning" },
  { label: "Discovery", id: "tt-discovery" },
  { label: "Engineering", id: "tt-engineering" },
  { label: "Screens", id: "tt-screens" },
  { label: "Rewrites", id: "tt-rewrites" },
  { label: "Outcomes", id: "tt-outcomes" },
  { label: "Why It Matters", id: "tt-bridge" },
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

function ImgFull({ src, alt, caption, tag }: { src: string; alt: string; caption: string; tag: string }) {
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

function WorkflowStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginBottom: "1.5rem" }}>
      <div style={{ fontSize: 24, fontWeight: 700, color: TEXT_MUTED, flexShrink: 0, width: 36 }}>{num}</div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, marginBottom: "0.4rem" }}>{title}</div>
        <div style={{ fontSize: 14, lineHeight: 1.75, color: TEXT_SEC }}>{desc}</div>
      </div>
    </div>
  );
}

function BeforeAfter({ beforeCopy, beforeNote, afterCopy, afterNote }: { beforeCopy: string; beforeNote: string; afterCopy: string; afterNote: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
      <div style={{ border: BORDER, borderRadius: 14, padding: "1.5rem" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#c47f0a", marginBottom: "0.75rem" }}>Before</div>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>&ldquo;{beforeCopy}&rdquo;</div>
        <div style={{ fontSize: 12, lineHeight: 1.6, color: TEXT_MUTED }}>{beforeNote}</div>
      </div>
      <div style={{ border: BORDER, borderRadius: 14, padding: "1.5rem" }}>
        <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1D9E75", marginBottom: "0.75rem" }}>After</div>
        <div style={{ fontSize: 14, lineHeight: 1.7, color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>&ldquo;{afterCopy}&rdquo;</div>
        <div style={{ fontSize: 12, lineHeight: 1.6, color: TEXT_MUTED }}>{afterNote}</div>
      </div>
    </div>
  );
}

export default function TurbotaxFbarPage() {
  const [activeSection, setActiveSection] = useState("tt-role");
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
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "1rem" }}>Intuit TurboTax</p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>Making tax law feel human</h1>
            <p style={{ fontSize: 17, fontWeight: 400, color: TEXT_SEC, lineHeight: 1.7, maxWidth: 660, marginBottom: "2rem" }}>
              The FBAR filing experience inside TurboTax was written for compliance lawyers, not for the people who actually had to file. Dense legal language, passive voice, and jargon-heavy copy were causing confusion, drop-off, and eroding trust at exactly the moment users needed to feel confident. <strong style={{ color: TEXT, fontWeight: 600 }}>I rebuilt the content system from the ground up using prompt engineering, GenAI tooling, and a compliance-safe rewriting workflow that increased FBAR adoption by 341%.</strong>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "2.5rem" }}>
              {["FinTech", "Compliance content", "Content engineering", "Prompt engineering", "GenAI tooling", "Information architecture"].map(t => (
                <span key={t} style={{ fontSize: 12, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "4px 12px", background: "rgba(26,26,26,0.04)" }}>{t}</span>
              ))}
            </div>

            {/* Outcome bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(26,26,26,0.1)", border: BORDER, borderRadius: 14, overflow: "hidden", marginBottom: "3rem" }}>
              <div onMouseEnter={() => setS1H(true)} onMouseLeave={() => setS1H(false)} style={{ background: s1H ? "#fff" : "#F0D4D1", padding: "1.25rem 1.5rem", transition: "background 0.2s" }}>
                <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, marginBottom: 4, letterSpacing: "-0.02em" }}>341%</div>
                <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED }}>FBAR adoption</div>
                <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>Year-over-year increase driven by plain-language content rewrites</div>
              </div>
              <div onMouseEnter={() => setS2H(true)} onMouseLeave={() => setS2H(false)} style={{ background: s2H ? "#fff" : "#F0D4D1", padding: "1.25rem 1.5rem", transition: "background 0.2s" }}>
                <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, marginBottom: 4, letterSpacing: "-0.02em" }}>100%</div>
                <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED }}>Legal approval</div>
                <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>Every rewrite cleared compliance review without a single failure</div>
              </div>
              <div onMouseEnter={() => setS3H(true)} onMouseLeave={() => setS3H(false)} style={{ background: s3H ? "#fff" : "#F0D4D1", padding: "1.25rem 1.5rem", transition: "background 0.2s" }}>
                <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1, marginBottom: 4, letterSpacing: "-0.02em" }}>8th</div>
                <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED }}>Grade reading level</div>
                <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>Down from college-graduate, without losing legal accuracy</div>
              </div>
            </div>
          </div>

          <Divider />

          <div id="tt-role" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>My role</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <Card label="Scope" title="Sr. Content Designer, TurboTax FBAR" body="I was the design lead for TurboTax FBAR, owning design vision, collaboration and strategic planning, and all content strategy, creation, and narrative. I partnered with a Project Manager, Product Designer, Tax Content Analyst, Corporate Counsel, the Dev Team, Marketing, and CX across the full lifecycle from discovery through post-launch." />
            <Card label="Proficiencies demonstrated" title="What this work required" body="Compliance content · Prompt engineering · GenAI tooling (Writer.ai) · Content principles · Information architecture · Legal review navigation · Decision logging · Cross-functional leadership · Readability optimization · Content systems" />
          </div>

          <Divider />

          <div id="tt-problem" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>The problem</SectionLabel>
          <SectionTitle>The law was written for regulators. The product was written for no one.</SectionTitle>
          <SectionBody>
            <>FBAR compliance is genuinely complex: US persons with foreign financial accounts over $10,000 must report them annually to FinCEN. The legal definitions are precise, the consequences of mistakes are severe, and the audience ranges from experienced investors to first-time filers who had no idea they were even required to file. <strong style={{ color: TEXT, fontWeight: 600 }}>The existing TurboTax FBAR content copied IRS regulatory language almost verbatim.</strong> It read the way it was written: by lawyers, for lawyers.</>
          </SectionBody>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <Card label="Problem 01" title="Regulatory language, unedited" body={<>Entire paragraphs lifted from FinCEN documentation. <strong style={{ color: TEXT, fontWeight: 500 }}>Reading level was college-graduate or higher.</strong> Users with legitimate foreign accounts were abandoning the flow before completing it.</>} />
            <Card label="Problem 02" title="No plain-language definitions" body={<>Terms like &ldquo;financial interest,&rdquo; &ldquo;signature authority,&rdquo; and &ldquo;owner of record&rdquo; appeared without explanation. <strong style={{ color: TEXT, fontWeight: 500 }}>Users couldn&rsquo;t parse whether they were even required to file</strong> because the terms were never connected to their real situation.</>} />
            <Card label="Problem 03" title="Passive voice everywhere" body={<>Passive constructions obscured who needed to do what. &ldquo;A financial interest is determined by...&rdquo; told users nothing about action. <strong style={{ color: TEXT, fontWeight: 500 }}>The copy described the law without ever speaking to the person reading it.</strong></>} />
            <Card label="Problem 04" title="No shared standard for &ldquo;better&rdquo;" body={<>Legal and compliance teams had no framework for evaluating plain-language rewrites. Every edit required a justification from scratch. <strong style={{ color: TEXT, fontWeight: 500 }}>There was no shared vocabulary for what good looked like</strong> that both content and legal could trust.</>} />
          </div>

          <PullQuote>The content wasn&rsquo;t wrong. It was accurate, compliant, and completely unusable. Accuracy and clarity are not the same thing. For users trying to file correctly, only clarity matters.</PullQuote>

          <Divider />

          <div id="tt-planning" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 01 of 05</SectionLabel>
          <SectionTitle>Logistics, planning, and cross-functional cadence</SectionTitle>
          <SectionBody>
            <>Before writing a single word, I built the operational infrastructure. The FBAR project required unusually close collaboration across product design, legal, tax content analysts, and engineering. I established a structured cadence: a dedicated rhythm between the PD and CD teams that created fast feedback loops and dedicated time for open discussion. I set content principles early so every stakeholder shared a direction before any copy existed. And I built a decision log that proactively documented every content call and its rationale, reducing back-and-forth and creating a record legal could reference instead of relitigating decisions. <strong style={{ color: TEXT, fontWeight: 600 }}>The decision log alone changed how the team worked.</strong></>
          </SectionBody>

          <ImgFull src="/images/turbotax-fbar-01.png" alt="Logistics and planning slide showing cadence, content principles, and decision log" caption="Logistics and planning: cadence, content principles, decision log" tag="Phase 01" />

          <SectionBody>
            <>The content principles I established for FBAR were grounded in three ideas: be <strong style={{ color: TEXT, fontWeight: 600 }}>Transparent</strong> (clear and direct about what TurboTax can do, building trust through honesty), be <strong style={{ color: TEXT, fontWeight: 600 }}>Confident</strong> (guide users toward the right direction while showing tax expertise and customer awareness), and be <strong style={{ color: TEXT, fontWeight: 600 }}>Resourceful</strong> (provide the right information without being overbearing). These weren&rsquo;t abstract values. They were the filter every piece of copy went through.</>
          </SectionBody>

          <ImgFull src="/images/turbotax-fbar-02.jpg" alt="Decision log and content annotation system showing approved copy changes" caption="Decision log: annotated content changes with legal approval tracking" tag="Content system" />

          <Divider />

          <div id="tt-discovery" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 02 of 05</SectionLabel>
          <SectionTitle>Discovery and research</SectionTitle>
          <SectionBody>
            <>I studied FBAR regulations through primary documentation and SME interviews, documented and dissected existing solutions (the FinCEN BSA e-filing system and external FBAR services), and conducted user interviews and prototype testing. The research uncovered three consistent user pain points: confusion about FBAR eligibility, difficulty with data entry especially currency conversion, and anxiety about whether they had filed correctly. <strong style={{ color: TEXT, fontWeight: 600 }}>FBAR caused anxiety, frustration, and confusion</strong> at proportions that went well beyond a typical tax flow.</>
          </SectionBody>

          <ImgFull src="/images/turbotax-fbar-03.jpg" alt="Discovery research: knowledge base documents, current solutions audit, and prototype testing" caption="Discovery: regulatory documentation, competitive audit, and prototype research" tag="Phase 02" />

          <SectionBody>
            <>User research surfaced what people actually needed at each moment in the flow. They needed reminders and clear tracking. They needed confidence that they had filed correctly. They wanted TurboTax to save their bank account information so returning next year would be seamless. And they needed the currency conversion guidance to be specific, not vague. <strong style={{ color: TEXT, fontWeight: 600 }}>None of those needs were being met by the existing content.</strong></>
          </SectionBody>

          <Divider />

          <div id="tt-engineering" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 03 of 05</SectionLabel>
          <SectionTitle>The content engineering workflow</SectionTitle>
          <SectionBody>
            <>The core challenge was scale: dozens of screens, each with legally specific language that couldn&rsquo;t be rewritten casually. Manual rewrites one by one would take months and introduce inconsistency. I built a three-phase workflow using Writer.ai and prompt engineering as the engine, with human judgment at every decision point that mattered.</>
          </SectionBody>

          <ImgFull src="/images/turbotax-fbar-04.png" alt="Content engineering: analysis and discovery, prompt development, implementation and team impact" caption="Content engineering: analysis, prompt development, implementation" tag="Phase 03" />

          <div style={{ marginBottom: "2rem" }}>
            <WorkflowStep num="01" title="Analysis and discovery: map every pain point before touching copy" desc="I reviewed the existing FBAR experience and documented every term that confused users in research, every complex explanation around filing requirements, and every recurring pattern from CX call logs. This audit became the brief for the prompt engineering phase." />
            <WorkflowStep num="02" title="Prompt construction: encode the constraints before touching the copy" desc="Each prompt included the original text, the legally immovable terms, the target reading level (8th grade), the voice directive (active, direct address), and the specific question a user is trying to answer at this moment in the flow. The prompt wasn't just 'simplify this.' It was a specification for a particular content decision." />
            <WorkflowStep num="03" title="Output evaluation: four-point quality check before anything leaves my desk" desc="Every AI-generated rewrite went through four checks: accuracy (no meaning change), compliance (required terms preserved), readability (measurably lower reading level), and voice (active, direct, second person). Anything that failed any check was revised manually or reprompted." />
            <WorkflowStep num="04" title="Legal review: structured evidence, not just rewrites" desc="I never sent legal a rewrite in isolation. Each submission included the original, the rewrite, a side-by-side term comparison showing every immovable term was preserved, and a readability score delta. Legal could review for compliance without having to also evaluate clarity. Those concerns were separated by design." />
            <WorkflowStep num="05" title="Documentation: prompt library and decision log for team transfer" desc="Every approved rewrite and its prompt went into a shared library. Every legal decision went into the decision log. I led workshops teaching the prompt engineering approach to the broader content team, and built a decision framework for when to use GenAI versus traditional development. The second round of FBAR updates took a fraction of the time." />
          </div>

          <SectionSubtitle>What the prompts actually looked like</SectionSubtitle>
          <div style={{ border: BORDER, borderRadius: 14, padding: "1.5rem", marginBottom: "2rem", background: "rgba(26,26,26,0.02)" }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.75rem" }}>Prompt example: financial interest definition</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>
              Simplify the following FBAR content while maintaining technical accuracy.<br /><br />
              <strong style={{ color: TEXT, fontWeight: 600 }}>Constraints:</strong><br />
              Preserve exactly: &ldquo;financial interest,&rdquo; &ldquo;owner of record,&rdquo; &ldquo;legal title&rdquo;<br />
              Target: 8th grade reading level<br />
              Voice: active voice, direct address (&ldquo;You have a financial interest when...&rdquo;)<br />
              Max sentence length: 20 words<br /><br />
              <strong style={{ color: TEXT, fontWeight: 600 }}>User context:</strong> This person is trying to figure out whether they need to report a foreign account. They are not a tax professional. They may be anxious about whether they have done something wrong.<br /><br />
              <strong style={{ color: TEXT, fontWeight: 600 }}>Original:</strong><br />
              &ldquo;Financial interest is determined by the owner of record or legal title. The FBAR regulations provide that a United States person has a financial interest in a foreign financial account for which the United States person is the owner of record or has legal title, whether the account is maintained for his own benefit or for the benefit of others.&rdquo;
            </div>
          </div>

          <Divider />

          <div id="tt-screens" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 04 of 05</SectionLabel>
          <SectionTitle>The redesigned experience</SectionTitle>
          <SectionBody>The work shows up in the screens. Every content decision was annotated with its purpose, hierarchy, and tone so the design team and engineering had shared context. The content notes weren&rsquo;t afterthoughts — they were part of the design artifact.</SectionBody>

          <SectionSubtitle>Before and after: the flow entry</SectionSubtitle>
          <ImgFull src="/images/turbotax-fbar-05.jpg" alt="Before and after: retirement plan screen transitioning to foreign bank account question" caption="Entry flow: from generic income question to direct FBAR identification" tag="Before / After" />
          <ImgFull src="/images/turbotax-fbar-06.jpg" alt="Before and after: Tell Us About Foreign Bank Accounts to Value of All Your Foreign Accounts" caption="Account disclosure screens: restructured copy and clearer value framing" tag="Before / After" />

          <SectionSubtitle>The landing page: before and after</SectionSubtitle>
          <ImgFull src="/images/turbotax-fbar-07.png" alt="Landing page before and after: external landing page to in-product FBAR filing screen" caption="Landing page to in-product: copy focused on user benefit, not feature description" tag="Before / After" />

          <SectionSubtitle>Content notes in context</SectionSubtitle>
          <SectionBody>Every key screen shipped with annotated content notes documenting the purpose hierarchy and tone. These weren&rsquo;t informal Figma comments. They were a structured part of the handoff artifact that ensured engineering understood the intent behind every word.</SectionBody>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}>
            <div>
              <div style={{ border: "3px solid #1a1a1a", borderRadius: 10, overflow: "hidden", marginBottom: "0.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/turbotax-fbar-08.png" alt="FBAR welcome screen with content notes" style={{ width: "100%", display: "block" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <span style={{ fontSize: 12, color: TEXT_MUTED }}>FBAR welcome screen with content annotations</span>
                <span style={{ fontSize: 11, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "2px 10px" }}>Content notes</span>
              </div>
            </div>
            <div>
              <div style={{ border: "3px solid #1a1a1a", borderRadius: 10, overflow: "hidden", marginBottom: "0.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/turbotax-fbar-09.jpg" alt="Error state screen with content notes" style={{ width: "100%", display: "block" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <span style={{ fontSize: 12, color: TEXT_MUTED }}>Error state with content notes</span>
                <span style={{ fontSize: 11, color: TEXT_SEC, border: BORDER, borderRadius: 100, padding: "2px 10px" }}>Content notes</span>
              </div>
            </div>
          </div>

          <SectionBody>The &ldquo;You Need to File a Report&rdquo; screen required particular care: it had to be direct and honest about a limitation (TurboTax couldn&rsquo;t file directly at that time) without causing panic or breaking trust. <strong style={{ color: TEXT, fontWeight: 600 }}>Empathetic honesty at a high-stakes moment is one of the hardest content problems.</strong></SectionBody>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "1.5rem", alignItems: "start", marginBottom: "2rem" }}>
            <div style={{ border: "3px solid #1a1a1a", borderRadius: 10, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/turbotax-fbar-10.png" alt="You Need to File a Report screen" style={{ width: "100%", display: "block" }} />
            </div>
            <div style={{ background: "transparent", border: BORDER, borderRadius: 14, padding: "1.5rem" }}>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.4rem" }}>The screen</div>
              <div style={{ fontSize: 13.5, fontStyle: "italic", fontWeight: 500, color: TEXT, marginBottom: "0.75rem", lineHeight: 1.6 }}>&ldquo;You Need to File a Report&rdquo;</div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.4rem", marginTop: "1rem" }}>The content challenge</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC, marginBottom: "0.5rem" }}>TurboTax couldn&rsquo;t file the FBAR directly yet. That had to be communicated honestly without feeling like a product failure. The copy leads with what is true and actionable, not with an apology.</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC, marginBottom: "0.5rem" }}>The tone directive for this screen: <strong style={{ color: TEXT, fontWeight: 500 }}>Inform, be sympathetic, be optimistic about the future.</strong> Friendly and clear. Not self-flagellating. Not burying the limitation in legalese.</div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.4rem", marginTop: "1rem" }}>What the content notes documented</div>
              <div style={{ fontSize: 13.5, lineHeight: 1.7, color: TEXT_SEC }}>Purpose hierarchy: (1) Inform, (2) Be sympathetic, (3) Be optimistic about the future. Tone: friendly, clear. The PON ID and accessibility strings were documented alongside, ensuring the support team had aligned content at every channel.</div>
            </div>
          </div>

          <SectionSubtitle>The success state</SectionSubtitle>
          <ImgFull src="/images/turbotax-fbar-11.jpg" alt="That's a wrap! We've submitted your FBAR success screen" caption={`"That's a wrap!" — completion screen reinforcing value and setting up next year`} tag="Post-submit" />

          <Divider />

          <div id="tt-rewrites" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Artifact 05 of 05</SectionLabel>
          <SectionTitle>The rewrites</SectionTitle>
          <SectionBody>The before/after comparisons are the clearest demonstration of what the workflow produced. Each rewrite preserved every required legal term while cutting reading level, eliminating passive voice, and reorienting the copy around the question a user was actually trying to answer. <strong style={{ color: TEXT, fontWeight: 600 }}>The goal wasn&rsquo;t simpler copy. It was copy that helped someone make a correct decision.</strong></SectionBody>

          <SectionSubtitle>Financial interest definition</SectionSubtitle>
          <BeforeAfter
            beforeCopy="Financial interest is determined by the owner of record or legal title. The FBAR regulations provide that a United States person has a financial interest in a foreign financial account for which the United States person is the owner of record or has legal title, whether the account is maintained for his own benefit or for the benefit of others."
            beforeNote="Reading level: College graduate. Passive voice. No direct address. User cannot determine if this applies to them."
            afterCopy="You have a financial interest in a foreign account when you're the owner of record or hold legal title to it, even if you hold it for someone else's benefit."
            afterNote="Reading level: 8th grade. Active voice. Direct address. User knows immediately whether this applies to their situation."
          />

          <SectionSubtitle>Signature authority explanation</SectionSubtitle>
          <BeforeAfter
            beforeCopy="A United States person has signature authority over a foreign financial account if the United States person can control the disposition of money, funds or other assets held in a financial account by direct communication (whether in writing or otherwise) to the bank or other financial institution where the financial account is maintained."
            beforeNote="84 words. Two-clause sentence. No example. User must decode what 'direct communication' means for their employer's account."
            afterCopy="Signature authority means that you have some level of control over the disposition of assets through direct communication with the institution. For example, if you're a signatory on an employer's foreign bank account, you have signature authority and should report the account on your FBAR."
            afterNote="Concrete example included. The employer scenario, the most common confusion point, is addressed directly."
          />

          <SectionSubtitle>Filing threshold screen</SectionSubtitle>
          <BeforeAfter
            beforeCopy="Did your foreign accounts total more than $10,000 at any time in 2022? If you do, you'll need to file an FBAR (FinCEN Form 114)."
            beforeNote="Threshold buried after the condition. 'You'll need to' uses future tense, creating uncertainty. No context for what 'at any time' means in practice."
            afterCopy="Did you own or control a foreign bank account, trust or financial asset in 2022? This is one of those things the IRS requires us to ask."
            afterNote="Reframed as a straightforward question. 'This is one of those things the IRS requires us to ask' removes anxiety by normalizing the question and clarifying TurboTax is asking on behalf of the requirement, not making an accusation."
          />

          <Divider />

          <div id="tt-outcomes" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Outcome</SectionLabel>
          <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>341%</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>FBAR adoption increase</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Clearer copy converted skeptical users into filers</div>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>The 341% adoption increase from year one to year two wasn&rsquo;t driven by a redesigned UI or a new feature. The flow structure was the same. <strong style={{ color: TEXT, fontWeight: 500 }}>The only thing that changed was the content.</strong> Users who had previously abandoned because they couldn&rsquo;t determine whether they qualified were now completing the flow. Plain language converted confusion into confidence.</div>
              </div>
            </div>
            <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />
            <div style={{ marginBottom: "1.5rem", maxWidth: "90%", margin: "0 auto 1.5rem" }}>
              <div style={{ border: "3px solid #1a1a1a", borderRadius: 10, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/turbotax-fbar-12.jpg" alt="341% adoption chart showing week-over-week growth" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>100%</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Legal approval rate</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Every rewrite cleared legal review without a compliance failure</div>
                <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>The four-point quality checklist and structured legal submission format meant no rewrite was flagged for compliance failure after submission. <strong style={{ color: TEXT, fontWeight: 500 }}>The workflow made legal&rsquo;s job easier, not harder.</strong> That trust opened the door to using the same prompt engineering approach on other regulated flows across TurboTax products.</div>
              </div>
            </div>
            <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5rem", textAlign: "center", paddingTop: "1.5rem" }}>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>5</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Workflow phases documented</div>
              </div>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>3</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Team handoff artifacts</div>
              </div>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>341%</div>
                <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Year-over-year adoption lift</div>
              </div>
            </div>
          </div>

          <Divider />

          <div id="tt-bridge" style={{ scrollMarginTop: 80 }} />
          <SectionLabel>Why this matters now</SectionLabel>
          <div style={{ border: BORDER, borderRadius: 14, padding: "2rem", marginBottom: "2rem" }}>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: "0.75rem" }}>The transferable problem</div>
            <div style={{ fontSize: 15, lineHeight: 1.8, color: TEXT_SEC }}>
              Every product that operates under legal or regulatory constraints faces a version of this problem. The language that satisfies compliance teams is rarely the language that helps users. Most teams resolve that tension by defaulting to compliance: the copy is accurate, the lawyers are satisfied, and users are left to figure it out themselves.<br /><br />What I built at TurboTax was a way to resolve that tension systematically: a workflow that gave legal teams the evidence they needed to approve plain-language rewrites, gave writers a repeatable process for producing them, and gave the product a content standard that could survive team turnover. I also established that GenAI and prompt engineering, used with discipline and structure, can accelerate compliance-adjacent content work without compromising accuracy. <strong style={{ color: TEXT, fontWeight: 600 }}>The 341% adoption lift is the number. The workflow is what scales.</strong>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

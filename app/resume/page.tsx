"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

const sideNavItems = [
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Languages", id: "languages" },
  { label: "Education", id: "education" },
];

export default function ResumePage() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("experience");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    for (const item of sideNavItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const roles = [
    {
      id: "amazon",
      company: "Amazon",
      title: "UX Writer, World Wide Prime",
      years: "2025–2026",
      industry: "E-commerce · Subscription · AI",
      tags: ["AI strategy", "Personalization", "Content systems", "Retention", "International", "200M+ members"],
      proficiencies: ["LLM content frameworks", "Value communication systems", "Experimentation practice", "Terminology standards", "Cross-functional alignment"],
      summary: "Architected the unified AI content strategy for three LLM-powered personalization agents serving 200M+ members. Built the Value Communication framework adopted by 15+ teams. Established the experimentation practice that shifted the organization from opinion-based to evidence-based content decisions. The Milestones retention program delivered +77K annualized member impact.",
      bullets: [
        "Architected unified AI strategy for three LLM-powered personalization agents (PriME, Binoculars, Kairos) serving 200M+ members, translating frontier capabilities into scalable content frameworks that global teams use to ship consistent intelligent experiences. Defined the organizational standards for when AI communicates, how it handles uncertainty, and where human judgment remains essential\u2014directly influencing product roadmap and technical investments.",
        "Drove organizational alignment across product, engineering, marketing, and research to establish Prime\u2019s Value Communication framework as strategic initiative. Built decision-making principles that 15+ cross-functional teams now use to determine how members discover and understand benefits across lifecycle stages and cultural contexts.",
        "Solved complex challenges of non-deterministic AI systems by establishing experimentation practice and evaluation frameworks that shifted team culture from opinion-based to evidence-based content decisions. The Milestones retention program delivered +77K annualized member impact by identifying how AI should communicate at vulnerable moments.",
        "Built content ecosystem infrastructure including terminology standards, reusable content patterns, naming conventions, and evaluation criteria that enables global teams to maintain quality independently.",
      ],
    },
    {
      id: "crunchyroll",
      company: "Crunchyroll",
      title: "Sr. Content Designer (Content Lead)",
      years: "2022–2024",
      industry: "Streaming · Anime · AI · Localization",
      tags: ["Conversational AI", "Content systems", "Voice frameworks", "Localization", "10M+ members", "0 to 1"],
      proficiencies: ["AI product vision", "Content practice creation", "Voice & style guides", "ML localization strategy", "Stakeholder alignment"],
      summary: "Led 0-1 initiative to ship Crunchyroll\u2019s first conversational AI (Ask Hime!). Established the content design practice from scratch, creating voice frameworks and decision-making principles adopted across the organization. Reduced support tickets 30% through trust-building error messaging. Drove ML-powered localization strategy for dozens of languages.",
      bullets: [
        "Led 0-1 initiative to define product vision and ship Crunchyroll\u2019s first conversational AI (Ask Hime!), navigating extreme ambiguity to establish LLM guidelines, training taxonomies, and evaluation processes for multi-step agentic workflows. Partnered with engineering to shape the AI roadmap and advocate for design-led technical investments that enabled natural, fan-first interactions across millions of conversations.",
        "Established Crunchyroll\u2019s content design practice from the ground up, rallying global teams around a shared vision by creating voice frameworks, style guides, and decision-making principles. Changed how product and engineering teams approach content by demonstrating its strategic value in shaping intelligent experiences\u2014reducing support tickets 30% through error messaging that builds trust in failure scenarios.",
        "Drove organizational alignment on ML-powered localization strategy for dozens of languages, partnering with engineering and international teams to define quality thresholds and content principles that ensured voice survived cultural adaptation. Built evaluation frameworks that enabled teams to ship localized AI experiences independently.",
      ],
    },
    {
      id: "shopify",
      company: "Shopify",
      title: "Content Designer",
      years: "2021",
      industry: "E-commerce · SaaS · Analytics",
      tags: ["Marketing analytics", "Data visualization", "Terminology systems", "Merchant UX"],
      proficiencies: ["Information architecture", "Data-dense UX writing", "Tooltip & guidance patterns", "Cross-platform content"],
      summary: "Led content strategy for the Marketing Analytics platform. Merchants had data but lacked the language to act on it. Defined the information architecture, terminology system, and microcopy for a revamped dashboard that translated complex spend data into confident marketing decisions.",
      bullets: [
        "Led content strategy for Shopify\u2019s Marketing Analytics platform at a moment of high ambiguity. Merchants had data but lacked the language to act on it. Defined the information architecture, terminology system, and microcopy for a revamped dashboard that translated complex spend data into confident marketing decisions. Built tooltips, inline guidance, and content patterns that scaled across the platform and gave cross-functional teams a shared framework for handling data-dense surfaces consistently.",
      ],
    },
    {
      id: "turbotax",
      company: "TurboTax / Intuit",
      title: "Sr. Content Designer",
      years: "2021–2022",
      industry: "Fintech · Tax · AI · Compliance",
      tags: ["AI assistant", "Cryptocurrency", "High-trust domain", "Innovation award"],
      proficiencies: ["AI content principles", "Legal/compliance navigation", "Terminology frameworks", "Financial UX writing"],
      summary: "Led product strategy for TurboTax\u2019s first AI assistant from concept to launch. Defined when AI provides answers versus when it escalates to human experts. Won innovation award. Also defined the content approach for cryptocurrency, building consensus across product, legal, and engineering.",
      bullets: [
        "Led product strategy for TurboTax\u2019s first AI assistant from concept to launch, translating LLM capabilities into consumer-facing financial guidance. Established content principles for non-deterministic systems in high-trust domain, defining when AI provides answers versus when it escalates to human experts. Won innovation award; feature drove customer acquisition.",
        "Navigated deep ambiguity to define TurboTax\u2019s content approach for cryptocurrency\u2014an emerging, jargon-heavy domain where users needed clarity under pressure. Built consensus across product, legal, and engineering teams to establish a shared terminology framework, then translated it into microcopy for analytics dashboards that made complex financial data feel actionable and trustworthy. The terminology standards became the organizational model for handling specialized financial topics at scale.",
      ],
    },
    {
      id: "alaska",
      company: "Alaska Airlines",
      title: "Sr. UX Writer",
      years: "2019–2021",
      industry: "Travel · Aviation · CX",
      tags: ["Style guide creation", "Call center reduction", "Digital touchpoints"],
      proficiencies: ["UX style guide", "Organizational infrastructure", "Cross-channel content"],
      summary: "Established Alaska\u2019s first UX style guide, creating organizational infrastructure that reduced call center volume 15-20% and enabled consistent customer experiences across digital touchpoints.",
      bullets: [
        "Led Alaska\u2019s content design practice by establishing the company\u2019s first UX style guide, creating organizational infrastructure that reduced call center volume 15-20% and enabled consistent customer experiences across digital touch points.",
      ],
    },
    {
      id: "zulily",
      company: "Zulily",
      title: "UX Writer",
      years: "2018–2019",
      industry: "E-commerce · Mobile · Retail",
      tags: ["Error messaging", "Content patterns", "Web & mobile"],
      proficiencies: ["Error pattern systems", "Notification design", "Cross-platform consistency"],
      summary: "Established content patterns for error messaging and notifications that became the standard across web and mobile, enabling consistent user experiences in a fast-paced e-commerce environment.",
      bullets: [
        "Established content patterns for error messaging and notifications that became the standard across web and mobile, enabling consistent user experiences in a fast-paced e-commerce environment.",
      ],
    },
  ];

  const skills = [
    { label: "AI & Conversational Design", items: ["LLM prompt engineering", "Generative AI features", "Agentic workflows", "Multimodal interfaces", "Training taxonomies", "Evaluation frameworks"] },
    { label: "Content Strategy & Systems", items: ["Information architecture", "Voice & tone frameworks", "Style guides", "Terminology standards", "Content patterns", "Decision-making frameworks"] },
    { label: "Design & Tools", items: ["Figma", "Journey mapping", "Conversation flows", "Prototyping", "Design system collaboration", "Cross-platform content"] },
    { label: "Localization & Accessibility", items: ["International adaptation", "ML translation strategies", "Accessibility standards", "Cultural context"] },
  ];

  const cardStyle = (id: string) => ({
    background: hovered === id ? "#fff" : "transparent",
    border: hovered === id ? "1.5px solid rgba(26,26,26,0.15)" : "1.5px solid rgba(26,26,26,0.1)",
    borderRadius: 14,
    padding: "2rem 2rem 1.75rem",
    marginBottom: "1.25rem",
    transition: "all 0.2s ease",
  });

  const smallCardStyle = (id: string) => ({
    background: hovered === id ? "#fff" : "transparent",
    border: hovered === id ? "1.5px solid rgba(26,26,26,0.15)" : "1.5px solid rgba(26,26,26,0.1)",
    borderRadius: 14,
    padding: "1.5rem 1.5rem 1.25rem",
    transition: "all 0.2s ease",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F0D4D1",
        fontFamily: "'Outfit', sans-serif",
        color: "#1a1a1a",
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

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 32px 120px", display: "flex", gap: 0 }}>

        {/* Side nav */}
        <nav
          style={{
            position: "sticky",
            top: 100,
            alignSelf: "flex-start",
            width: 140,
            flexShrink: 0,
            paddingTop: 280,
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
                  color: activeSection === item.id ? "#1a1a1a" : "rgba(26,26,26,0.35)",
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

        <div style={{ flex: 1, maxWidth: 800 }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <h1 style={{ fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 700, marginBottom: 6, letterSpacing: -0.5 }}>Mohammed Raza</h1>
          <p style={{ fontSize: 15, fontWeight: 500, color: "rgba(26,26,26,0.6)", marginBottom: 8 }}>Content Design, Strategy, and Engineering</p>
          <p style={{ fontSize: 13, fontWeight: 400, fontStyle: "italic", color: "rgba(26,26,26,0.4)", marginBottom: 16 }}>Interests: Localization, Korean cinema, pizza, and getting bullied by my two daughters</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["razacontent.com", "linkedin.com/in/razamohammed", "mohammed@razacontent.com", "Seattle, WA"].map(item => (
              <span key={item} style={{ fontSize: 12, color: "rgba(26,26,26,0.5)", border: "1.5px solid rgba(26,26,26,0.1)", borderRadius: 100, padding: "4px 12px" }}>{item}</span>
            ))}
          </div>
        </div>

        {/* About card */}
        <article
          onMouseEnter={() => setHovered("about")}
          onMouseLeave={() => setHovered(null)}
          style={cardStyle("about")}
        >
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: 12 }}>About</p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(26,26,26,0.75)" }}>
            8+ years leading content design for products reaching over a billion users, including Amazon Prime, TurboTax, and Crunchyroll. I architect AI content systems and localization frameworks that enable global teams to ship intelligent, human-centered experiences at scale. I believe content design is the canary in the coal mine. I surface what would break trust, compromise safety, or dilute voice in non-deterministic systems, then build the frameworks that stop them before they ship.
          </p>
        </article>

        {/* Experience */}
        <p id="experience" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "1.5rem", marginTop: "2rem", scrollMarginTop: 80 }}>Experience</p>

        {roles.map((role) => (
          <article
            key={role.id}
            onMouseEnter={() => setHovered(role.id)}
            onMouseLeave={() => setHovered(null)}
            style={cardStyle(role.id)}
          >
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.5rem" }}>{role.company}</p>
            <h2 style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2, marginBottom: "0.25rem" }}>{role.title}</h2>
            <p style={{ fontSize: 13, color: "rgba(26,26,26,0.4)", marginBottom: "0.75rem" }}>{role.years} &middot; {role.industry}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: "1.5rem" }}>
              {role.tags.map(t => (
                <span key={t} style={{ fontSize: 12, fontWeight: 400, color: "rgba(26,26,26,0.6)", background: "rgba(26,26,26,0.03)", border: "0.5px solid rgba(26,26,26,0.1)", borderRadius: 100, padding: "3px 11px", lineHeight: 1.5 }}>{t}</span>
              ))}
            </div>

            <hr style={{ border: "none", borderTop: "0.5px solid rgba(26,26,26,0.1)", margin: "0 0 1.5rem" }} />

            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "2rem", alignItems: "start", marginBottom: "1.5rem" }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.75rem" }}>Key areas</p>
                <ul style={{ listStyle: "none" }}>
                  {role.proficiencies.map(p => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, color: "rgba(26,26,26,0.6)", lineHeight: 1.5, padding: "5px 0", borderBottom: "0.5px solid rgba(26,26,26,0.08)" }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(26,26,26,0.18)", flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.75rem" }}>Summary</p>
                <p style={{ fontSize: 14, color: "rgba(26,26,26,0.6)", lineHeight: 1.8 }}>{role.summary}</p>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "0.5px solid rgba(26,26,26,0.1)", margin: "0 0 1.5rem" }} />

            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.75rem" }}>What I did</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {role.bullets.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(26,26,26,0.2)", flexShrink: 0, marginTop: 9 }} />
                  <p style={{ fontSize: 13.5, lineHeight: 1.75, color: "rgba(26,26,26,0.6)" }}>{b}</p>
                </div>
              ))}
            </div>
          </article>
        ))}

        {/* Skills */}
        <p id="skills" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "1.5rem", marginTop: "2rem", scrollMarginTop: 80 }}>Skills</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: 48 }}>
          {skills.map((skill, idx) => (
            <article
              key={idx}
              onMouseEnter={() => setHovered("skill-" + idx)}
              onMouseLeave={() => setHovered(null)}
              style={smallCardStyle("skill-" + idx)}
            >
              <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.75rem" }}>{skill.label}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {skill.items.map(item => (
                  <span key={item} style={{ fontSize: 12, fontWeight: 400, color: "rgba(26,26,26,0.6)", background: "rgba(26,26,26,0.03)", border: "0.5px solid rgba(26,26,26,0.1)", borderRadius: 100, padding: "3px 11px", lineHeight: 1.5 }}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Languages */}
        <div id="languages" style={{ scrollMarginTop: 80 }} />
        <article
          onMouseEnter={() => setHovered("lang")}
          onMouseLeave={() => setHovered(null)}
          style={{ ...smallCardStyle("lang"), marginBottom: 48 }}
        >
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.75rem" }}>Languages</p>
          <div style={{ display: "flex", gap: 24 }}>
            {[{ lang: "English", level: "Native" }, { lang: "Portuguese", level: "Conversational" }, { lang: "Urdu", level: "Conversational" }, { lang: "Hindi", level: "Conversational" }].map(l => (
              <div key={l.lang}>
                <p style={{ fontSize: 14, fontWeight: 600 }}>{l.lang}</p>
                <p style={{ fontSize: 12, color: "rgba(26,26,26,0.4)" }}>{l.level}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Education */}
        <p id="education" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "1.5rem", scrollMarginTop: 80 }}>Education</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: 48 }}>
          <article
            onMouseEnter={() => setHovered("edu1")}
            onMouseLeave={() => setHovered(null)}
            style={smallCardStyle("edu1")}
          >
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.5rem" }}>University</p>
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>University of Washington</p>
            <p style={{ fontSize: 13, color: "rgba(26,26,26,0.5)", lineHeight: 1.6 }}>Anthropology &amp; Education, minor in Language Studies</p>
          </article>
          <article
            onMouseEnter={() => setHovered("edu2")}
            onMouseLeave={() => setHovered(null)}
            style={smallCardStyle("edu2")}
          >
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.5rem" }}>Certification</p>
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>UX Writers Collective</p>
            <p style={{ fontSize: 13, color: "rgba(26,26,26,0.5)", lineHeight: 1.6 }}>Certified UX Writer</p>
          </article>
        </div>

        {/* Footer */}
        <hr style={{ border: "none", borderTop: "0.5px solid rgba(26,26,26,0.15)", margin: "0 0 32px" }} />
        <p style={{ fontSize: 12, fontWeight: 400, color: "rgba(26,26,26,0.4)", textAlign: "center" }}>
          Mohammed Raza &middot; Sr. Content Designer &amp; UX Writer &middot; razacontent.com
        </p>
        </div>
      </div>
    </div>
  );
}

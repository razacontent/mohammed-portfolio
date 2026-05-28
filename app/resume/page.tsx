import PrintButton from "@/components/PrintButton";

export const metadata = {
  title: "Resume · Mohammed Raza · razacontent",
};

const experience = [
  {
    role: "UX Writer",
    date: "2025 — 2026",
    org: "Amazon Worldwide Prime",
    tagline:
      "Content design lead for Prime's first LLM-powered personalization agents.",
    bullets: [
      "Authored the prompt frameworks, system prompts, and voice systems that govern model behavior across Prime's first three LLM-powered personalization agents serving 200M+ members.",
      "Designed the response patterns, refusal logic, calibrated uncertainty language, and human-AI handoff criteria that decide when each agent acts, hedges, or escalates to a person.",
      "Built the AI content evaluation framework now used by 15+ product teams to ship AI features independently, partnering with applied scientists, engineers, and trust leads on the production-quality bar.",
      "Built the Value Communications Framework (Promised, Perceived, Proved), Prime's voice and lifecycle content system. Drove cross-functional adoption across product, marketing, and content teams.",
      "Drove +77K annualized member impact on a retention initiative by reframing voluntary churn moments through narrative content rather than discount mechanics.",
    ],
  },
  {
    role: "Senior Content Designer · Founding Hire",
    date: "Nov 2022 — Feb 2025",
    org: "Crunchyroll",
    tagline:
      "Founded the content design practice and shipped Crunchyroll's first conversational AI from zero.",
    bullets: [
      "Designed and shipped Crunchyroll's first conversational AI. Mapped conversation flows, authored LLM guidelines and training taxonomies, and defined evaluation criteria with engineering for model behavior, error recovery, and tone across millions of fan interactions.",
      "Founded Crunchyroll's content design practice from zero: voice system, design system contributions, and content rituals that established the discipline's quality bar across product teams.",
      "Led content strategy for the end-to-end overhaul of Crunchyroll's 10-foot TV experience across smart TVs, consoles, streaming devices, web, and mobile, unifying the multi-surface interface for 15M+ viewers.",
    ],
  },
  {
    role: "Content Designer · Contract",
    date: "Oct 2021 — Oct 2022",
    org: "Intuit TurboTax",
    tagline:
      "Shipped TurboTax's first AI tax assistant for crypto and complex foreign accounts.",
    bullets: [
      "Designed and shipped TurboTax's first AI assistant for cryptocurrency and complex foreign account reporting. Authored prompt frameworks and response patterns for high-stakes regulated content with legal, product, and engineering partners.",
      "Drove adoption of the foreign account reporting flow (FBAR) by rewriting tax law into decision-tree language users could act on without expert help.",
      "Engineered AI content workflows in Writer.ai that scaled plain-language editing across legal, compliance, and product teams.",
    ],
  },
  {
    role: "Content Designer",
    date: "Feb 2021 — Sep 2021",
    org: "Shopify",
    bullets: [
      "Lifted Marketing Analytics adoption from 12% to 28% by rewriting navigation, terminology, and onboarding for 200K+ merchants interpreting performance data. Authored content principles and IA patterns adopted as the analytics team's content standard.",
    ],
  },
  {
    role: "Senior UX Writer",
    date: "Feb 2019 — Feb 2021",
    org: "Alaska Airlines",
    bullets: [
      "Created Alaska's first UX style guide in Figma, reducing call center contact volume 15–20% by aligning error messaging, confirmations, and self-service language across desktop, mobile, and kiosk.",
    ],
  },
];

const skills = [
  {
    cat: "Prompt Engineering · Model UX",
    items: [
      "System prompts",
      "Prompt frameworks",
      "Few-shot prompting",
      "Prompt chaining",
      "Response patterns",
      "Refusal logic",
      "Calibrated uncertainty language",
      "Human-AI handoff design",
      "Conversation design",
      "Agentic flow design",
      "Multi-agent orchestration",
      "Model UX patterns",
    ],
  },
  {
    cat: "AI Evaluation · Governance",
    items: [
      "LLM evaluation criteria",
      "Model output review",
      "Content red-teaming",
      "Responsible AI partnership with legal, policy, and trust teams",
      "AI rollout coordination",
      "Safety and trust UX patterns",
      "Brand-voice alignment in production",
    ],
  },
  {
    cat: "AI Tools · Workflow",
    items: [
      "Claude",
      "Gemini",
      "ChatGPT",
      "Writer.ai",
      "Prompt iteration",
      "AI-assisted content pipelines",
      "Model output evaluation in daily workflow",
    ],
  },
  {
    cat: "Content Design Leadership",
    items: [
      "Content strategy",
      "UX writing",
      "Content design practice founding",
      "Design system content layers",
      "Voice and tone frameworks",
      "Terminology standards",
      "Content principles",
      "Content taxonomies",
      "Documentation IA",
      "Accessibility",
      "Cross-functional partnership with applied scientists, engineers, designers, PMs, legal, and trust teams",
    ],
  },
  {
    cat: "Tools",
    items: ["Figma", "Writer.ai", "Notion", "Jira", "GitHub"],
  },
];

export default function ResumePage() {
  return (
    <>
      <div className="print-toolbar">
        <div className="print-toolbar-inner">
          <div className="print-toolbar-text">
            ★ One-page resume · ATS-friendly when copied or printed
          </div>
          <PrintButton />
        </div>
      </div>

      <div className="resume-wrap">
        <div className="resume-page">
          <header className="resume-header">
            <h1 className="resume-name">Mohammed Raza</h1>
            <div className="resume-role">
              <span>Senior Content Designer</span>{" "}
              <span className="resume-role-spec">
                AI · Model UX · Prompt Engineering
              </span>
            </div>
            <div className="resume-contacts">
              <a href="mailto:mohammed@razacontent.com">
                mohammed@razacontent.com
              </a>
              <span className="sep">·</span>
              <a href="https://razacontent.com">razacontent.com</a>
              <span className="sep">·</span>
              <a href="https://linkedin.com/in/mohammedraza">LinkedIn</a>
              <span className="sep">·</span>
              <span>Seattle, WA</span>
              <span className="sep">·</span>
              <span>EN · PT · ES</span>
            </div>
          </header>

          <section className="resume-summary">
            <p>
              <strong>
                Senior content designer specializing in AI products.
              </strong>{" "}
              Eight years building experiences for more than a billion users,
              the last three deep in LLM production work, authoring the prompts,
              voice systems, and evaluation criteria that govern model behavior
              at consumer scale. My work sits at the intersection of content
              design, prompt engineering, and Model UX: system prompts, response
              patterns, refusal logic, calibrated uncertainty, human-AI handoff,
              and the evaluation systems that let teams ship AI without a writer
              in the loop on every flow. Trust in AI is authored in the words a
              model says when it doesn't know the answer.
            </p>
          </section>

          <section className="resume-section">
            <div className="resume-section-head">
              <div className="resume-section-title">Experience</div>
              <div className="resume-section-meta">5 roles · 2019 — Present</div>
            </div>
            {experience.map((row) => (
              <div className="exp-row" key={row.date}>
                <div className="exp-header">
                  <div className="exp-role">
                    {row.role} <span className="exp-org-inline">{row.org}</span>
                  </div>
                  <div className="exp-date">{row.date}</div>
                </div>
                {row.tagline && (
                  <div className="exp-tagline">{row.tagline}</div>
                )}
                <ul className="exp-bullets">
                  {row.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <div className="resume-section-head">
              <div className="resume-section-title">Skills</div>
              <div className="resume-section-meta">By track</div>
            </div>
            {skills.map((cat) => (
              <div className="skills-grid" key={cat.cat}>
                <div className="skills-cat">{cat.cat}</div>
                <div className="skills-list">{cat.items.join(" · ")}</div>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <div className="resume-section-head">
              <div className="resume-section-title">Education</div>
            </div>
            <div className="edu-row">
              <div className="edu-degree">
                M.A. Anthropology · B.A. Anthropology
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

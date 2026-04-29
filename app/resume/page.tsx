import PrintButton from "@/components/PrintButton";

export const metadata = {
  title: "Resume · Mohammed Raza · razacontent",
};

const experience = [
  {
    role: "Senior Content Designer · L5",
    date: "2022 — 2025",
    org: "Amazon Prime · Worldwide Membership & Personalization",
    bullets: [
      <>
        Built the <strong>Value Communication Framework</strong> end-to-end
        (research, writing, experiments, regional rollout); attributed to{" "}
        <strong>+77K members retained annually.</strong>
      </>,
      <>
        Designed AI content schemas, voice framework, and content data model
        adopted by <strong>15 teams and 3 GenAI programs</strong> at Prime.
      </>,
      <>
        Shipped{" "}
        <strong>400M+ AI-personalized lifecycle moments</strong> across 22
        product surfaces and 9 regions.
      </>,
      <>
        Partnered with retention, growth, AI, and personalization orgs to
        embed the framework as strategic infrastructure for Prime growth.
      </>,
    ],
  },
  {
    role: "Founding Content Designer",
    date: "2020 — 2022",
    org: "Crunchyroll · Anime Streaming",
    bullets: [
      <>
        Joined as the only content designer at a{" "}
        <strong>13M+ subscriber service.</strong> Established the craft,
        socialized it across the org, enabled PMs, brand, and growth as
        writing partners.
      </>,
      <>
        Wrote brand voice, product writing principles, and the strings
        powering <strong>free-to-premium upgrade flow</strong> and{" "}
        <strong>ad-tier launch conversion funnel.</strong>
      </>,
      <>
        Embedded content design into membership growth, monetization, and
        the everyday product experience: in-app messaging, queue/watchlist,
        recommendations.
      </>,
      <>
        Codified writing review systems that let partner teams ship
        voice-aligned copy without bottlenecking on me.
      </>,
    ],
  },
  {
    role: "Senior UX Writer",
    date: "2019 — 2020",
    org: "Shopify · Merchant Analytics",
    bullets: [
      <>
        Diagnosed analytics adoption failure as IA, not user sophistication.
        Restructured the dashboard around real merchant decisions.
      </>,
      <>
        Lifted trust scores <strong>+18 points</strong> and rebuilt adoption
        from a 12% baseline. Pattern adopted as the merchant analytics
        template across Shopify.
      </>,
      <>
        Influenced merchants doing <strong>$200B+ in GMV</strong> annually.
      </>,
    ],
  },
  {
    role: "UX Writer",
    date: "2018 — 2019",
    org: "Intuit / TurboTax · Filing Compliance",
    bullets: [
      <>
        Rewrote a high-stakes tax compliance form line by line with legal.
        Translated regulatory language into plain-English strings users
        could finish.
      </>,
      <>
        Built the <strong>four-point clarity standard</strong> adopted
        across compliance flows. Recovered an abandoned filing flow with
        zero legal rejections.
      </>,
      <>
        Influenced filing for <strong>50M+ TurboTax users.</strong>
      </>,
    ],
  },
  {
    role: "UX Writer",
    date: "2017 — 2018",
    org: "Alaska Airlines · Booking & Loyalty",
    bullets: [
      <>
        First content design role. Wrote booking, mobile app, and Mileage
        Plan loyalty strings.
      </>,
      <>
        Learned the discipline of writing under regulatory, operational, and
        brand constraints.
      </>,
    ],
  },
];

const skills = [
  {
    cat: "AI · Systems",
    items: [
      { label: "Content schemas", canary: true },
      { label: "Voice frameworks", canary: true },
      { label: "AI taxonomies", canary: true },
      { label: "GenAI prompt design" },
      { label: "Content data models" },
      { label: "Lifecycle taxonomies" },
    ],
  },
  {
    cat: "Writing · Craft",
    items: [
      { label: "UX writing", canary: true },
      { label: "Content design", canary: true },
      { label: "Plain-language frameworks" },
      { label: "Localization-ready copy" },
      { label: "A/B copy testing" },
      { label: "Brand voice" },
      { label: "Naming & IA" },
    ],
  },
  {
    cat: "Strategy · Org",
    items: [
      { label: "Founding content design", canary: true },
      { label: "Partner enablement" },
      { label: "Cross-functional leadership" },
      { label: "Practitioner-led research" },
      { label: "Legal & compliance partnership" },
    ],
  },
  {
    cat: "Tools",
    items: [
      { label: "Figma" },
      { label: "Notion" },
      { label: "Lokalise" },
      { label: "Mixpanel · Amplitude" },
      { label: "Claude · GPT-4" },
      { label: "React (read-level)" },
    ],
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
              Senior Content Designer · Engineer · Strategist
            </div>
            <div className="resume-contacts">
              <a href="mailto:hello@razacontent.com">
                hello@razacontent.com
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
                Senior content designer with eight years across Amazon Prime,
                Crunchyroll, Shopify, TurboTax, and Alaska Airlines
              </strong>{" "}
              — on products that have reached over a billion users. I write
              end-to-end experiences for membership growth, ad-tier
              conversion, and AI personalization at 400M+ scale. In parallel,
              I engineer the voice frameworks, content schemas, and AI
              taxonomies they ship on.{" "}
              <strong>A content canary in the data mine</strong> — surfacing
              what would break trust before it ships, then building the
              systems that scale that judgment org-wide.
            </p>
          </section>

          <section className="resume-section">
            <div className="resume-section-head">
              <div className="resume-section-title">Experience</div>
              <div className="resume-section-meta">5 roles · 2017—2025</div>
            </div>
            {experience.map((row) => (
              <div className="exp-row" key={row.date}>
                <div className="exp-header">
                  <div className="exp-role">{row.role}</div>
                  <div className="exp-date">{row.date}</div>
                </div>
                <div className="exp-org">{row.org}</div>
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
                <div className="skills-list">
                  {cat.items.map((s) => (
                    <span
                      key={s.label}
                      className={s.canary ? "skill canary" : "skill"}
                    >
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <div className="resume-section-head">
              <div className="resume-section-title">Education</div>
            </div>
            <div className="edu-row">
              <div>
                <div className="edu-degree">
                  M.A. Education, Language &amp; Anthropology
                </div>
                <div className="edu-school">University · Field of study</div>
              </div>
              <div className="edu-date">2015 — 2017</div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

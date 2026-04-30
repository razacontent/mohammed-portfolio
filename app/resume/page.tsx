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
      "Built the Value Communication Framework end-to-end (research, writing, experiments, regional rollout); attributed to +77K members retained annually.",
      "Designed AI content schemas, voice framework, and content data model adopted by 15 teams and 3 GenAI programs at Prime.",
      "Shipped 400M+ AI-personalized lifecycle moments across 22 product surfaces and 9 regions.",
      "Partnered with retention, growth, AI, and personalization orgs to embed the framework as strategic infrastructure for Prime growth.",
    ],
  },
  {
    role: "Founding Content Designer",
    date: "2020 — 2022",
    org: "Crunchyroll · Anime Streaming",
    bullets: [
      "Joined as the only content designer at a 13M+ subscriber service. Established the craft, socialized it across the org, enabled PMs, brand, and growth as writing partners.",
      "Wrote brand voice, product writing principles, and the strings powering free-to-premium upgrade flow and ad-tier launch conversion funnel.",
      "Embedded content design into membership growth, monetization, and the everyday product experience: in-app messaging, queue/watchlist, recommendations.",
      "Codified writing review systems that let partner teams ship voice-aligned copy without bottlenecking on me.",
    ],
  },
  {
    role: "Senior UX Writer",
    date: "2019 — 2020",
    org: "Shopify · Merchant Analytics",
    bullets: [
      "Diagnosed analytics adoption failure as IA, not user sophistication. Restructured the dashboard around real merchant decisions.",
      "Lifted trust scores +18 points and rebuilt adoption from a 12% baseline. Pattern adopted as the merchant analytics template across Shopify.",
      "Influenced merchants doing $200B+ in GMV annually.",
    ],
  },
  {
    role: "UX Writer",
    date: "2018 — 2019",
    org: "Intuit / TurboTax · Filing Compliance",
    bullets: [
      "Rewrote a high-stakes tax compliance form line by line with legal. Translated regulatory language into plain-English strings users could finish.",
      "Built the four-point clarity standard adopted across compliance flows. Recovered an abandoned filing flow with zero legal rejections.",
      "Influenced filing for 50M+ TurboTax users.",
    ],
  },
  {
    role: "UX Writer",
    date: "2017 — 2018",
    org: "Alaska Airlines · Booking & Loyalty",
    bullets: [
      "First content design role. Wrote booking, mobile app, and Mileage Plan loyalty strings.",
      "Learned the discipline of writing under regulatory, operational, and brand constraints.",
    ],
  },
];

const skills = [
  {
    cat: "AI · Systems",
    items: [
      "Content schemas",
      "Voice frameworks",
      "AI taxonomies",
      "GenAI prompt design",
      "Content data models",
      "Lifecycle taxonomies",
    ],
  },
  {
    cat: "Writing · Craft",
    items: [
      "UX writing",
      "Content design",
      "Plain-language frameworks",
      "Localization-ready copy",
      "A/B copy testing",
      "Brand voice",
      "Naming & IA",
    ],
  },
  {
    cat: "Strategy · Org",
    items: [
      "Founding content design",
      "Partner enablement",
      "Cross-functional leadership",
      "Practitioner-led research",
      "Legal & compliance partnership",
    ],
  },
  {
    cat: "Tools",
    items: [
      "Figma",
      "Notion",
      "Lokalise",
      "Mixpanel · Amplitude",
      "Claude · GPT-4",
      "React (read-level)",
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
              <a href="mailto:mohammed@razacontent.com">
                mohammed@razacontent.com
              </a>
              <span className="sep">·</span>
              <a href="https://razacontent.com">razacontent.com</a>
              <span className="sep">·</span>
              <a href="https://linkedin.com/in/razamohammed">LinkedIn</a>
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
              taxonomies they ship on.
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
                <div className="skills-list">{cat.items.join(", ")}.</div>
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

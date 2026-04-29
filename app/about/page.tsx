export const metadata = {
  title: "About · Mohammed Raza · razacontent",
};

const tracks = [
  {
    color: "canary",
    num: "Track 01",
    title: "AI",
    body: (
      <>
        Designing the{" "}
        <strong>content schemas, taxonomies, and voice frameworks</strong>{" "}
        that AI generation systems write inside. The language layer behind
        every GenAI surface.
      </>
    ),
  },
  {
    color: "coral",
    num: "Track 02",
    title: "Content systems",
    body: (
      <>
        Building{" "}
        <strong>
          the infrastructure that turns one writer&rsquo;s judgment into an
          org-wide capability.
        </strong>{" "}
        Voice frameworks as design systems. Lifecycle taxonomies. Pattern
        libraries.
      </>
    ),
  },
  {
    color: "matcha",
    num: "Track 03",
    title: "Team cohesion",
    body: (
      <>
        Growing the craft, socializing it across the org, enabling partner
        teams to write with confidence the brand will hold.{" "}
        <strong>Founding-content-designer work.</strong>
      </>
    ),
  },
  {
    color: "blue",
    num: "Track 04",
    title: "Brand identity",
    body: (
      <>
        Holding the{" "}
        <strong>
          through-line between the brand promise and the product surface
        </strong>
        , making the every-day strings sound like the things the brand says
        it stands for.
      </>
    ),
  },
] as const;

const timeline = [
  {
    date: "2022 — 2025",
    role: "Senior Content Designer · L5",
    org: "Amazon Prime · Worldwide Membership",
    body: (
      <>
        Built the <strong>Value Communication Framework</strong> that lifted
        retention by 77K members annually. Designed the AI content schemas
        and voice framework adopted by 15 teams and 3 GenAI programs at
        Prime.
      </>
    ),
  },
  {
    date: "2020 — 2022",
    role: "Founding Content Designer",
    org: "Crunchyroll · Streaming",
    body: (
      <>
        Joined as the only content designer at a{" "}
        <strong>13M+ subscriber service.</strong> Grew the craft, socialized
        it across PMs, brand, and growth, and shipped the strings powering
        free-to-premium conversion and ad-tier launch.
      </>
    ),
  },
  {
    date: "2019 — 2020",
    role: "Senior UX Writer",
    org: "Shopify · Merchant Analytics",
    body: (
      <>
        Diagnosed analytics adoption failure as IA, not user sophistication.
        Restructured the dashboard around real merchant decisions, lifting
        trust scores +18 points and influencing merchants doing{" "}
        <strong>$200B+ in GMV.</strong>
      </>
    ),
  },
  {
    date: "2018 — 2019",
    role: "UX Writer",
    org: "Intuit / TurboTax · Filing Compliance",
    body: (
      <>
        Rewrote a high-stakes tax form line by line with legal. Built the{" "}
        <strong>four-point clarity standard</strong> that recovered an
        abandoned filing flow and influenced filing for 50M+ users.
      </>
    ),
  },
  {
    date: "2017 — 2018",
    role: "UX Writer",
    org: "Alaska Airlines · Booking & Loyalty",
    body: (
      <>
        First content design role. Wrote booking, mobile, and loyalty
        strings; learned the discipline of writing under regulatory and
        operational constraints.
      </>
    ),
  },
];

const beyond = [
  {
    label: "Cooking",
    text: (
      <>
        Smoking salmon, wood-fired pizza, fish dishes that take all weekend.{" "}
        <strong>The content-design analogue of slow craft.</strong>
      </>
    ),
  },
  {
    label: "Photography",
    text: (
      <>
        Street and family work, mostly on a Leica D-Lux 7. The discipline of{" "}
        <strong>noticing what&rsquo;s already there.</strong>
      </>
    ),
  },
  {
    label: "Korean cinema",
    text: (
      <>
        Anything Park Chan-wook, Bong Joon-ho, or the Lee Chang-dong school.{" "}
        <strong>Master classes in narrative restraint.</strong>
      </>
    ),
  },
  {
    label: "Languages",
    text: (
      <>
        Fluent in <strong>English, Portuguese, and Spanish.</strong>{" "}
        Anthropology background — language is the thing I think about most.
      </>
    ),
  },
  {
    label: "Heritage menswear",
    text: (
      <>
        Drake&rsquo;s, J.Press, Norse Projects, A.P.C.{" "}
        <strong>Continental workwear intellectualism,</strong> if you must.
      </>
    ),
  },
  {
    label: "Family",
    text: (
      <>
        Two daughters and a partner in Seattle.{" "}
        <strong>The audience that demands my best writing.</strong>
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="about-hero">
        <div className="wrap">
          <div className="about-hero-grid">
            <div>
              <div className="about-eyebrow">From the publisher&rsquo;s desk</div>
              <h1 className="about-headline">
                A content canary in the{" "}
                <span className="accent">data mine.</span>
              </h1>
              <p className="about-intro">
                I&rsquo;m Mohammed Raza, a{" "}
                <strong>
                  content designer, engineer, and strategist
                </strong>{" "}
                with eight years across Amazon Prime, Crunchyroll, Shopify,
                TurboTax, and Alaska Airlines. My work is surfacing what
                would break trust before it ships, then building the content
                systems and culture that scale that judgment across every
                team.
              </p>
            </div>
            <div className="about-photo">
              {/* TODO: real halftone-treated photo */}
              <span>
                [photo of Mohammed
                <br />
                halftone-treated B&amp;W portrait
                <br />
                indoor light · Seattle 2026]
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow">How I work</div>
          <h2 className="section-title">
            Four tracks, run in <span className="accent">parallel</span>.
          </h2>
          <div className="body-prose">
            <p>
              Every project I take on lives across these four tracks at the
              same time. The job isn&rsquo;t to pick one. It&rsquo;s to know
              which is leading at any given moment, and which the others are
              quietly serving.
            </p>
          </div>
          <div className="tracks-grid">
            {tracks.map((t) => (
              <div className="track-card" data-color={t.color} key={t.num}>
                <div className="track-card-num">{t.num}</div>
                <div className="track-card-title">{t.title}</div>
                <div className="track-card-body">{t.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow">What I&rsquo;ve shipped</div>
          <h2 className="section-title">
            Eight years, four orgs,{" "}
            <span className="accent">a billion-plus</span> users reached.
          </h2>
          <div className="body-prose">
            <p>
              The numbers below aren&rsquo;t the work — the case studies are.
              But they answer the question scanners ask first:{" "}
              <em>can this person operate at the scale I need?</em>
            </p>
          </div>
          <div className="shipped-grid">
            <div className="shipped-tile">
              <div className="shipped-num">
                <span className="accent">1B+</span>
              </div>
              <div className="shipped-label">
                Users reached across products shipped
              </div>
            </div>
            <div className="shipped-tile">
              <div className="shipped-num">400M</div>
              <div className="shipped-label">
                AI-personalized moments at Prime
              </div>
            </div>
            <div className="shipped-tile">
              <div className="shipped-num">22</div>
              <div className="shipped-label">
                Product surfaces shipped end-to-end
              </div>
            </div>
            <div className="shipped-tile">
              <div className="shipped-num">15</div>
              <div className="shipped-label">
                Teams adopted my frameworks org-wide
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow">Career arc</div>
          <h2 className="section-title">
            From founding the craft to scaling the systems.
          </h2>
          <div className="timeline">
            {timeline.map((row) => (
              <div className="timeline-row" key={row.date}>
                <div className="timeline-date">{row.date}</div>
                <div className="timeline-content">
                  <div className="timeline-role">{row.role}</div>
                  <div className="timeline-org">{row.org}</div>
                  <div className="timeline-body">{row.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="wrap">
          <div className="section-eyebrow">Beyond the page</div>
          <h2 className="section-title">
            A few things I&rsquo;m into when I&rsquo;m not{" "}
            <span className="accent">writing</span>.
          </h2>
          <div className="beyond-grid">
            {beyond.map((b) => (
              <div className="beyond-card" key={b.label}>
                <div className="beyond-card-label">{b.label}</div>
                <div className="beyond-card-text">{b.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="about-contact">
          <div className="about-contact-grid">
            <div>
              <div className="about-contact-title">
                Looking for a{" "}
                <span className="accent">senior IC, lead, or staff</span>{" "}
                content designer?
              </div>
              <div className="about-contact-body">
                AI-native content systems and growth-stage products preferred.
                Remote, hybrid Seattle, or relocating. Available for
                full-time roles, commissions, talks, and audits.
              </div>
            </div>
            <div className="about-contact-actions">
              <a className="btn" href="mailto:hello@razacontent.com">
                ✉ Email Mohammed
              </a>
              <a className="btn outline" href="/resume">
                ↗ See the resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

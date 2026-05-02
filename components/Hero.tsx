export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-canary"
        src="/images/canary-portrait.png"
        alt="The razacontent canary mascot"
        width={1024}
        height={1024}
      />
      <div className="hero-inner">
        <div className="hero-eyebrow">Editor &amp; Author · est. 2017</div>

        <h1 className="hero-headline">
          <span className="line">Part writer.</span>
          <span className="line">Part architect.</span>
          <span className="line">
            Part <span className="canary-mark">canary.</span>
          </span>
        </h1>

        <p className="hero-sub">
          I&rsquo;m Mohammed Raza, a content designer, engineer, and strategist
          with eight years across{" "}
          <strong>
            Amazon Prime, Crunchyroll, Shopify, TurboTax, and Alaska Airlines
          </strong>
          , on products that have reached{" "}
          <span className="scale">over a billion users.</span> I write{" "}
          <strong>end-to-end experiences</strong> for membership growth, ad-tier
          conversion, and AI personalization at{" "}
          <span className="scale">400M+ scale.</span> In parallel, I engineer
          the{" "}
          <strong>
            voice frameworks, content schemas, and AI taxonomies
          </strong>{" "}
          they ship on. I think in four tracks at once:{" "}
          <span className="highlight">
            AI, content systems, team cohesion, and brand identity.
          </span>
        </p>

        <p className="hero-sub hero-sub-canary">
          I think of myself as a{" "}
          <strong>content canary in the data mine.</strong> My work is surfacing
          what would break trust before it ships, building the content systems
          and culture that scale that judgment, and giving every team the tools
          and confidence to make those calls themselves.
        </p>

        <hr className="hero-rule" />

        <div className="hero-meta">
          <span className="row">
            <strong>Most recent</strong> · Amazon Prime · Senior content
            designer · 2022—2025
          </span>
          <span className="row">
            <strong>Founded</strong> · Crunchyroll content design practice ·
            2020—2022
          </span>
          <span className="row">
            <strong>Earlier</strong> · Shopify · Intuit/TurboTax · Alaska
            Airlines
          </span>
        </div>

        <div className="hero-chips">
          <span className="chip canary">Senior · Amazon</span>
          <span className="chip">Founded · Crunchyroll</span>
          <span className="chip outline">1B+ users reached</span>
          <span className="chip outline">AI taxonomy · voice systems</span>
        </div>

        <div className="hero-status">
          Open to{" "}
          <strong>senior IC, content design lead, or staff IC</strong> roles.
          AI-native content systems and growth-stage products preferred.
          Remote, hybrid Seattle, or relocating.
        </div>
      </div>
    </section>
  );
}

// SHOPIFY CARD — replace the placeholder Shopify card on the Work page
// This goes inside the case studies section

// Card content:
// Company label: Shopify
// Title: Abandonment to adoption
// Problem: How do you turn a 12% adoption analytics tool into a decision-making 
//   system — when the data is there but the interface gives merchants no reason 
//   to trust it and no path to act on it?
// Tags: E-commerce, SaaS, Analytics, B2B, Progressive disclosure, Content systems, Information architecture
// Proficiencies: Information architecture redesign, Cross-platform terminology audit, 
//   Progressive disclosure systems, Merchant workflow research, Tooltip content patterns,
//   Internal alignment facilitation
// Summary: Led content strategy for Shopify's Marketing Analytics redesign, transforming 
//   a 12% adoption reporting tool into a 28% adoption decision-making system. Built three 
//   foundational artifacts — a cross-platform terminology audit, merchant workflow maps, 
//   and an internal alignment workshop — that changed how the organization understood the 
//   problem. Then designed three content strategy shifts (Feature → Task, Causation → 
//   Attribution, Builder → Analyst) and a three-part tooltip pattern adopted across 12 
//   metrics. The work drove +29% attribution engagement, +37% automation activation, and 
//   established metric governance standards that scaled across Marketing products.

// JSX for the card (matches the Crunchyroll/Amazon card format):

/*
<article onMouseEnter={() => setHoveredCard(2)} onMouseLeave={() => setHoveredCard(null)} onClick={() => window.location.href = '/work/shopify'} style={{ background: hoveredCard === 2 ? "#fff" : "transparent", border: hoveredCard === 2 ? "1.5px solid rgba(26,26,26,0.15)" : "1.5px solid rgba(26,26,26,0.1)", borderRadius: 14, padding: "2.25rem 2.25rem 2rem", marginBottom: "1.25rem", position: "relative", transition: "all 0.2s ease" }}>
  <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.5rem" }}>Shopify</p>
  <img src={ICON_SHOPIFY} alt="Shopify" style={{ width: 100, height: 100, objectFit: "contain", marginBottom: "0.75rem" }} />
  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 26, fontWeight: 600, lineHeight: 1.2, marginBottom: "0.6rem" }}>Abandonment to adoption</h2>
  <p style={{ fontSize: 14, color: "rgba(26,26,26,0.6)", lineHeight: 1.65, maxWidth: 560, marginBottom: "1.5rem" }}>
    How do you turn a 12% adoption analytics tool into a decision-making system — when the data is there but the interface gives merchants no reason to trust it and no path to act on it?
  </p>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 7, marginBottom: "1.5rem" }}>
    <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginRight: 2 }}>Context</span>
    {["E-commerce", "SaaS", "Analytics", "B2B", "Progressive disclosure", "Content systems"].map(t => (
      <span key={t} style={{ fontSize: 12, fontWeight: 400, color: "rgba(26,26,26,0.6)", background: "rgba(26,26,26,0.03)", border: "0.5px solid rgba(26,26,26,0.1)", borderRadius: 100, padding: "3px 11px", lineHeight: 1.5 }}>{t}</span>
    ))}
  </div>
  <hr style={{ border: "none", borderTop: "0.5px solid rgba(26,26,26,0.1)", margin: "0 0 1.5rem" }} />
  <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "2.5rem", alignItems: "start" }}>
    <div>
      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.75rem" }}>Proficiencies</p>
      <ul style={{ listStyle: "none" }}>
        {["Information architecture", "Cross-platform audit", "Progressive disclosure", "Merchant research", "Tooltip content systems", "Internal alignment"].map(p => (
          <li key={p} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, color: "rgba(26,26,26,0.6)", lineHeight: 1.5, padding: "5px 0", borderBottom: "0.5px solid rgba(26,26,26,0.1)" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(26,26,26,0.18)", flexShrink: 0 }} />
            {p}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "0.75rem" }}>Summary</p>
      <p style={{ fontSize: 14, color: "rgba(26,26,26,0.6)", lineHeight: 1.8 }}>
        Led content strategy for Shopify's Marketing Analytics redesign, transforming a <strong style={{ color: "#1a1a1a", fontWeight: 500 }}>12% adoption</strong> reporting tool into a <strong style={{ color: "#1a1a1a", fontWeight: 500 }}>28% adoption</strong> decision-making system. Built three foundational artifacts that changed how the organization understood the problem, then designed three content strategy shifts and a <strong style={{ color: "#1a1a1a", fontWeight: 500 }}>three-part tooltip pattern adopted across 12 metrics</strong>. The work drove +29% attribution engagement, +37% automation activation, and established metric governance standards that scaled across Marketing products.
      </p>
    </div>
  </div>
</article>
*/

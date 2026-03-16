import Navigation from "@/components/Navigation";
import SealBadge from "@/components/SealBadge";
import CaseStudyCard from "@/components/CaseStudyCard";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/data";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F0D4D1",
        fontFamily: "'Outfit', sans-serif",
        color: "#1a1a1a",
        position: "relative",
      }}
    >
      <Navigation />

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: 0.5,
          backgroundColor: "rgba(26,26,26,0.15)",
          marginTop: 12,
        }}
      />

      {/* Hero */}
      <section
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "80px 32px 40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 4.5vw, 48px)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: -0.5,
            marginBottom: 80,
            color: "rgba(26,26,26,0.85)",
          }}
        >
          Tell good stories, empower teams, and make the world easier to live in
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <SealBadge size={220} />
        </div>

        <p
          style={{
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: 0.2,
            marginBottom: 20,
            textAlign: "left",
          }}
        >
          I write words and build the systems they live in
        </p>

        <p
          style={{
            fontSize: 14,
            lineHeight: 1.7,
            fontWeight: 400,
            color: "rgba(26,26,26,0.8)",
            textAlign: "left",
          }}
        >
          I&rsquo;ve spent 8 years proving that by building the content
          infrastructure behind products that reach a billion users across 60+
          countries. At Amazon, Crunchyroll, TurboTax, and Shopify I didn&rsquo;t
          just write the words, I built the frameworks, terminology systems, and
          AI guardrails that let entire teams ship consistent, human experiences
          at scale. Think of me as the <span style={{ color: "#D4A017" }}>content canary in the data-system mine</span>. I
          find what erodes trust, dilutes voice, and feels apathetic before it
          reaches people.
        </p>
      </section>

      {/* Separator */}
      <div
        style={{
          width: 120,
          height: 0.5,
          backgroundColor: "rgba(26,26,26,0.2)",
          margin: "40px auto 60px",
        }}
      />

      {/* Case Studies */}
      <section
        style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px 100px" }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.4)",
            marginBottom: "2.25rem",
          }}
        >
          My case studies
        </p>

        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </section>

      <Footer />
    </div>
  );
}

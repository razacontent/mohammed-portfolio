import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { caseStudies } from "@/lib/data";

export default function TurbotaxPage() {
  const study = caseStudies.find((s) => s.slug === "turbotax")!;

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
      <div
        style={{
          width: "100%",
          height: 0.5,
          backgroundColor: "rgba(26,26,26,0.15)",
          marginTop: 12,
        }}
      />

      <section
        style={{ maxWidth: 800, margin: "0 auto", padding: "80px 32px 100px" }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.4)",
            marginBottom: "0.75rem",
          }}
        >
          {study.company}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={study.icon}
          alt={study.company}
          style={{
            width: 120,
            height: 120,
            objectFit: "contain",
            marginBottom: "1.5rem",
          }}
        />
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          {study.company} Case Study
        </h1>
        <p
          style={{
            fontSize: 16,
            color: "rgba(26,26,26,0.4)",
            lineHeight: 1.7,
          }}
        >
          Coming soon.
        </p>
      </section>

      <Footer />
    </div>
  );
}

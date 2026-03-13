import Navigation from "@/components/Navigation";
import PencilCursor from "@/components/PencilCursor";
import Footer from "@/components/Footer";

export default function AboutPage() {
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
      <PencilCursor />
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
        <h1
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          About Me
        </h1>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  const cardStyle = (id: string) => ({
    background: hovered === id ? "#fff" : "transparent",
    border: hovered === id ? "1.5px solid rgba(26,26,26,0.15)" : "1.5px solid rgba(26,26,26,0.1)",
    borderRadius: 14,
    padding: "2rem",
    marginBottom: "1.25rem",
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

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "80px 32px 120px" }}>

        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "1rem" }}>About me</p>
        <h1 style={{ fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 700, marginBottom: 12, letterSpacing: -0.5 }}>The person behind the words</h1>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(26,26,26,0.6)", maxWidth: 660, marginBottom: 48 }}>
          An anthropologist at heart, I found my love for content design when I realized the power language has to help people gain agency over their lives, feel respected, and find inspiration.
        </p>

        {/* Origins */}
        <article onMouseEnter={() => setHovered("origins")} onMouseLeave={() => setHovered(null)} style={cardStyle("origins")}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "1rem" }}>Origins</p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(26,26,26,0.7)", marginBottom: "1.5rem" }}>
            I spent most of my youth growing up between Pakistan, where I was born, and the United Arab Emirates. Eating shawarmas and fruit cocktails in Abu Dhabi, and playing cricket in the middle of the street in my childhood gully in Karachi.
          </p>
          <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: "0.75rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/about-karachi.jpg" alt="Sadequain's Earth and Heavens, Frere Hall, Karachi" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
          </div>
          <p style={{ fontSize: 12, color: "rgba(26,26,26,0.4)", lineHeight: 1.5 }}>
            One of my favorite works of art. Sadequain&rsquo;s &ldquo;Earth and Heavens&rdquo; was left unfinished due to his passing. Frere Hall, Karachi, Pakistan.
          </p>
        </article>

        {/* Language & Anthropology */}
        <article onMouseEnter={() => setHovered("education")} onMouseLeave={() => setHovered(null)} style={cardStyle("education")}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "1rem" }}>Language &amp; anthropology</p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(26,26,26,0.7)", marginBottom: "1.5rem" }}>
            After moving to the United States and developing a love for anthropology during my school years, I decided to study Portuguese, Education, and Anthropology of Globalization. I wanted to understand how people use language to gain agency over their lives, feel respected, and find inspiration through storytelling.
          </p>
          <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: "0.75rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/about-lisbon.jpeg" alt="Carmo Archaeological Museum, Lisbon" style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }} />
          </div>
          <p style={{ fontSize: 12, color: "rgba(26,26,26,0.4)", lineHeight: 1.5 }}>
            The Carmo Archaeological Museum. Lisbon is a standing memory of the infamous 1755 Lisbon Earthquake.
          </p>
        </article>

        {/* Travel */}
        <article onMouseEnter={() => setHovered("travel")} onMouseLeave={() => setHovered(null)} style={cardStyle("travel")}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "1rem" }}>Travel</p>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(26,26,26,0.7)", marginBottom: "1.5rem" }}>
            When I&rsquo;m not nerding out on design and language, I love to travel. Some favorite spots have been Peru for its incredible cuisine and natural beauty, Cuba for Cold War history, cigars, and perseverance, and South Korea for its beautiful architecture, like Zaha Hadid&rsquo;s Dongdaemun Design Plaza.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: "0.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/about-cuba.jpeg" alt="Street art in Havana, Cuba" style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
              </div>
              <p style={{ fontSize: 12, color: "rgba(26,26,26,0.4)", lineHeight: 1.5 }}>Havana, Cuba</p>
            </div>
            <div>
              <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: "0.5rem" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/about-peru.jpeg" alt="Machu Picchu, Peru" style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
              </div>
              <p style={{ fontSize: 12, color: "rgba(26,26,26,0.4)", lineHeight: 1.5 }}>Machu Picchu, Peru</p>
            </div>
          </div>

          <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: "0.75rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/about-korea.jpeg" alt="Dongdaemun Design Plaza, Seoul" style={{ width: "100%", height: 400, objectFit: "cover", display: "block" }} />
          </div>
          <p style={{ fontSize: 12, color: "rgba(26,26,26,0.4)", lineHeight: 1.5 }}>
            Dongdaemun Design Plaza by Zaha Hadid. Seoul, South Korea.
          </p>
        </article>

        {/* Family */}
        <article onMouseEnter={() => setHovered("family")} onMouseLeave={() => setHovered(null)} style={cardStyle("family")}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "1rem" }}>Family</p>
          <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: "1rem" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/about-seattle.jpeg" alt="Lissy and Fizza by the water in West Seattle" style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }} />
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(26,26,26,0.7)" }}>
            That&rsquo;s my boss-wife Lissy and her apprentice, I mean our daughter, Fizza. We love taking strolls by the water close to our home in West Seattle.
          </p>
        </article>

        {/* Beyond work */}
        <article onMouseEnter={() => setHovered("interests")} onMouseLeave={() => setHovered(null)} style={cardStyle("interests")}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(26,26,26,0.4)", marginBottom: "1rem" }}>Beyond work</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(26,26,26,0.7)", marginBottom: "1rem" }}>
                Besides travel, I&rsquo;m a huge fan of coffee and cafe culture, a huge cinephile (I imagine being an actor turned director in another life), and political science and philosophy.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(26,26,26,0.7)" }}>
                Feel free to reach out to chat about anything above at{" "}
                <a href="mailto:mohammed@razacontent.com" style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>mohammed@razacontent.com</a>
              </p>
            </div>
            <div style={{ borderRadius: 10, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about-home.jpeg" alt="Mohammed and daughter napping" style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </article>

        <p style={{ fontSize: 15, fontWeight: 600, textAlign: "center", color: "rgba(26,26,26,0.3)", marginTop: 32, marginBottom: 32 }}>Fin!</p>

        <hr style={{ border: "none", borderTop: "0.5px solid rgba(26,26,26,0.15)", margin: "0 0 32px" }} />
        <p style={{ fontSize: 12, fontWeight: 400, color: "rgba(26,26,26,0.4)", textAlign: "center" }}>
          Mohammed Raza &middot; Sr. Content Designer &amp; UX Writer &middot; razacontent.com
        </p>
      </div>
    </div>
  );
}

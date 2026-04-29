"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackArrow from "@/components/BackArrow";
import { useState, useEffect } from "react";

const crSideNavItems = [
  { label: "Context", id: "cr-context" },
  { label: "Role", id: "cr-role" },
  { label: "Before", id: "cr-before" },
  { label: "Approach", id: "cr-approach" },
  { label: "Pre-Play", id: "cr-preplay" },
  { label: "Core-Play", id: "cr-coreplay" },
  { label: "Documentation", id: "cr-docs" },
  { label: "Post-Play", id: "cr-postplay" },
  { label: "Privacy", id: "cr-privacy" },
  { label: "Why It Matters", id: "cr-bridge" },
  { label: "Outcomes", id: "cr-outcomes" },
];

const WHITE = "#fff";
const BG = "#E0A8A7";
const TEXT = "#1a1a1a";
const TEXT_SEC = "rgba(26,26,26,0.6)";
const TEXT_MUTED = "rgba(26,26,26,0.4)";
const BORDER = "1.5px solid rgba(26,26,26,0.1)";
const DIVIDER = "0.5px solid rgba(26,26,26,0.15)";
const GREEN = "#1D9E75";
const BLUE = "#378ADD";
const AMBER = "#c47f0a";
const RADIUS_CARD = 14;

/* ── Sub-components ─────────────────────────────────────────────── */

function Card({
  label,
  labelColor,
  title,
  body,
  style,
}: {
  label?: string;
  labelColor?: string;
  title?: string;
  body?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? WHITE : "transparent",
        border: BORDER,
        borderColor: hovered ? "rgba(26,26,26,0.2)" : "rgba(26,26,26,0.1)",
        borderRadius: RADIUS_CARD,
        padding: "1.5rem 1.75rem",
        transition: "background 0.2s, border-color 0.2s",
        ...style,
      }}
    >
      {label && (
        <div
          style={{
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: labelColor || TEXT_MUTED,
            marginBottom: "0.4rem",
          }}
        >
          {label}
        </div>
      )}
      {title && (
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: TEXT,
            marginBottom: "0.5rem",
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>
      )}
      {body && (
        <div
          style={{
            fontSize: 13,
            color: TEXT_SEC,
            lineHeight: 1.75,
          }}
        >
          {body}
        </div>
      )}
    </div>
  );
}

function Divider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: DIVIDER,
        margin: "2.75rem 0",
      }}
    />
  );
}

function SectionLabel({
  children,
  dotColor,
  style,
}: {
  children: React.ReactNode;
  dotColor?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: TEXT_MUTED,
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: 8,
        ...style,
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: dotColor || "rgba(26,26,26,0.2)",
          flexShrink: 0,
          display: "inline-block",
        }}
      />
      {children}
    </div>
  );
}

function ScreenFrame({
  src,
  alt,
  captionText,
  captionTag,
  imgStyle,
  style,
}: {
  src: string;
  alt: string;
  captionText: string;
  captionTag: string;
  imgStyle?: React.CSSProperties;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        border: BORDER,
        borderRadius: RADIUS_CARD,
        overflow: "hidden",
        background: "#111",
        margin: "1.5rem 0",
        ...style,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", display: "block", ...imgStyle }}
      />
      <div
        style={{
          background: "rgba(26,26,26,0.04)",
          borderTop: DIVIDER,
          padding: "0.75rem 1.25rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap" as const,
          gap: 8,
        }}
      >
        <span style={{ fontSize: 12, color: TEXT_SEC }}>{captionText}</span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: TEXT_MUTED,
          }}
        >
          {captionTag}
        </span>
      </div>
    </div>
  );
}

function PullQuote({
  text,
  sub,
  style,
}: {
  text: string;
  sub: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        borderLeft: `3px solid ${TEXT}`,
        padding: "1rem 1.5rem",
        margin: "1.75rem 0",
        ...style,
      }}
    >
      <div
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: TEXT,
          lineHeight: 1.45,
          letterSpacing: "-0.01em",
        }}
      >
        {text}
      </div>
      <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: "0.5rem" }}>
        {sub}
      </div>
    </div>
  );
}

function Annotation({
  label,
  html,
}: {
  label: string;
  html: string;
}) {
  return (
    <div
      style={{
        borderLeft: "2px solid rgba(26,26,26,0.15)",
        padding: "0.6rem 1rem",
        margin: "0.75rem 0",
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: TEXT_MUTED,
          marginBottom: 3,
        }}
      >
        {label}
      </div>
      <div
        style={{ fontSize: 13, color: TEXT_SEC, lineHeight: 1.65 }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

function MetricPill({
  children,
  color,
  bg,
}: {
  children: React.ReactNode;
  color: string;
  bg: string;
}) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.07em",
        padding: "3px 10px",
        borderRadius: 100,
        marginRight: 6,
        marginBottom: 12,
        background: bg,
        color: color,
      }}
    >
      {children}
    </span>
  );
}

/* ── Main page ──────────────────────────────────────────────────── */

export default function CrunchyrollPage() {
  const [tensionHovered, setTensionHovered] = useState(false);
  const [stat1Hovered, setStat1Hovered] = useState(false);
  const [stat2Hovered, setStat2Hovered] = useState(false);
  const [stat3Hovered, setStat3Hovered] = useState(false);
  const [stat4Hovered, setStat4Hovered] = useState(false);
  const [crActiveSection, setCrActiveSection] = useState("cr-context");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setCrActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    for (const item of crSideNavItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    const lastId = crSideNavItems[crSideNavItems.length - 1].id;
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        setCrActiveSection(lastId);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: BG,
        fontFamily: "'Outfit', sans-serif",
        color: TEXT,
        position: "relative",
        padding: "0 1.5rem 8rem",
      }}
    >
      <BackArrow />
      <Navigation />

      <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", gap: 0 }}>

        {/* Side nav */}
        <nav style={{ position: "sticky", top: 100, alignSelf: "flex-start", width: 140, flexShrink: 0, paddingTop: 280 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {crSideNavItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  fontSize: 12,
                  fontWeight: crActiveSection === item.id ? 600 : 400,
                  color: crActiveSection === item.id ? TEXT : "rgba(26,26,26,0.35)",
                  textDecoration: "none",
                  padding: "4px 0",
                  transition: "all 0.2s ease",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div style={{ flex: 1, maxWidth: 860 }}>

        {/* ── HERO ───────────────────────────────────────────────── */}
        <header style={{ padding: "4rem 0 2rem" }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: TEXT_MUTED,
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: GREEN,
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            Crunchyroll &middot; 2022 to 2024
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            When the ad is the product
          </h1>
          <p
            style={{
              fontSize: 17,
              fontWeight: 400,
              color: TEXT_SEC,
              lineHeight: 1.7,
              maxWidth: 660,
              marginBottom: "2rem",
            }}
            dangerouslySetInnerHTML={{
              __html:
                `Crunchyroll had always run ads. What it did not have was content design thinking behind them. No language system. No surface-specific decisions. No framework for what the experience should feel like or what trust it needed to earn. The ads existed. The friction existed. <strong style="color:${TEXT};font-weight:600;">What was missing was the intentional design layer that makes an ad-supported product something a member chooses to stay with rather than something they tolerate.</strong>`,
            }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: "2.5rem",
            }}
          >
            {[
              "Ad experience",
              "Content systems",
              "Consumer trust",
              "Privacy UX",
              "CTV",
              "Mobile",
              "Web",
              "Cross-functional influence",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 12,
                  color: TEXT_SEC,
                  border: BORDER,
                  borderRadius: 100,
                  padding: "4px 12px",
                  background: "rgba(26,26,26,0.04)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* ── TENSION BANNER ─────────────────────────────────────── */}
        <div
          onMouseEnter={() => setTensionHovered(true)}
          onMouseLeave={() => setTensionHovered(false)}
          style={{
            border: BORDER,
            borderRadius: RADIUS_CARD,
            padding: "1.5rem 2rem",
            marginBottom: "2rem",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "start",
            gap: "1.5rem",
            background: tensionHovered ? WHITE : "rgba(26,26,26,0.03)",
            transition: "background 0.2s",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: TEXT_MUTED,
                marginBottom: "0.35rem",
              }}
            >
              Member need
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: TEXT,
                lineHeight: 1.3,
              }}
            >
              Predictability, agency, and an honest exchange
            </div>
            <div
              style={{
                fontSize: 12,
                color: TEXT_SEC,
                marginTop: "0.25rem",
                lineHeight: 1.5,
              }}
            >
              Members who understand what they are getting, and feel respected
              by it, stay through the ad break.
            </div>
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: TEXT_MUTED,
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            vs
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: TEXT_MUTED,
                marginBottom: "0.35rem",
              }}
            >
              Business need
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: TEXT,
                lineHeight: 1.3,
              }}
            >
              Completion rates that make ad inventory worth buying
            </div>
            <div
              style={{
                fontSize: 12,
                color: TEXT_SEC,
                marginTop: "0.25rem",
                lineHeight: 1.5,
              }}
            >
              Ad break completion drives inventory quality. Inventory quality
              drives CPM (the price advertisers pay per thousand views). CPM is
              the product.
            </div>
          </div>
        </div>

        {/* ── STATS ROW (4 columns) ──────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(26,26,26,0.1)",
            border: BORDER,
            borderRadius: RADIUS_CARD,
            overflow: "hidden",
            marginBottom: "3rem",
          }}
        >
          {/* Stat 1 */}
          <div
            onMouseEnter={() => setStat1Hovered(true)}
            onMouseLeave={() => setStat1Hovered(false)}
            style={{
              background: stat1Hovered ? WHITE : BG,
              padding: "1.25rem 1.5rem",
              transition: "background 0.2s",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: 4,
                letterSpacing: "-0.02em",
              }}
            >
              +22%
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: TEXT_MUTED,
              }}
            >
              Ad completion rate
            </div>
            <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>
              Mid-roll pod completion after counter and bridge language system shipped
            </div>
          </div>
          {/* Stat 2 */}
          <div
            onMouseEnter={() => setStat2Hovered(true)}
            onMouseLeave={() => setStat2Hovered(false)}
            style={{
              background: stat2Hovered ? WHITE : BG,
              padding: "1.25rem 1.5rem",
              transition: "background 0.2s",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: 4,
                letterSpacing: "-0.02em",
              }}
            >
              +18 pts
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: TEXT_MUTED,
              }}
            >
              NPS, ad-tier members
            </div>
            <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>
              Tier satisfaction lift post-system launch, measured against pre-launch baseline
            </div>
          </div>
          {/* Stat 3 */}
          <div
            onMouseEnter={() => setStat3Hovered(true)}
            onMouseLeave={() => setStat3Hovered(false)}
            style={{
              background: stat3Hovered ? WHITE : BG,
              padding: "1.25rem 1.5rem",
              transition: "background 0.2s",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: 4,
                letterSpacing: "-0.02em",
              }}
            >
              +34%
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: TEXT_MUTED,
              }}
            >
              SVOD promo conversion
            </div>
            <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>
              Watchlist adds from pre-play promo after social proof headline framework
            </div>
          </div>
          {/* Stat 4 */}
          <div
            onMouseEnter={() => setStat4Hovered(true)}
            onMouseLeave={() => setStat4Hovered(false)}
            style={{
              background: stat4Hovered ? WHITE : BG,
              padding: "1.25rem 1.5rem",
              transition: "background 0.2s",
            }}
          >
            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: 4,
                letterSpacing: "-0.02em",
              }}
            >
              &minus;30%
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: TEXT_MUTED,
              }}
            >
              Support contacts
            </div>
            <div style={{ fontSize: 11, color: TEXT_MUTED, marginTop: 3 }}>
              Fewer member escalations after content system addressed ad-moment clarity gaps
            </div>
          </div>
        </div>

        {/* ── CONTEXT ────────────────────────────────────────────── */}
        <div id="cr-context" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor="rgba(26,26,26,0.2)">
          The starting point
        </SectionLabel>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          A high-distrust audience, a high-volume ad load, and no existing
          practice to build from
        </h2>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
          }}
          dangerouslySetInnerHTML={{
            __html: `I joined Crunchyroll as the <strong style="color:${TEXT};font-weight:600;">only content designer in the entire organization</strong>. Not just for ads, but for every member-facing surface across the product. A Q4 2024 content discovery survey of 77 active members had already told us what we were working with: only <strong style="color:${TEXT};font-weight:600;">18% of members trusted the platform's recommendations</strong>. Eighty-nine percent required social validation before committing to something new. The survey also surfaced the top frustrations in open-ended responses: guidance and context were lacking, recommendations were not seen as trustworthy, and browsing the catalogue felt too difficult. These were not ad complaints. They were the baseline state of the platform before a single ad decision had been made.
<br><br>
That distinction matters. Ad content design on a streaming platform is, at its core, a discovery problem. Every ad moment is a moment where the member's attention has been pulled from content they chose toward content they did not. Getting them back to the show, or getting them to genuinely engage with a promotion, requires understanding how they make content decisions in the first place. The discovery research did not ask about ads. That is exactly what made it useful. It told us how members think about content before they have been asked to sit through advertising, which is the mental model they bring into every ad pod. Using it to ground ad content decisions was not a stretch. It was the most honest evidence base available.
<br><br>
The ad load was not small. Each episode included roughly 30 seconds of pre-roll, followed by three mid-roll breaks of approximately 80 seconds each. That is close to 5 minutes of ads inside a 23-minute episode. An <strong style="color:${TEXT};font-weight:600;">ad pod</strong> is what a single break looks like in practice: a cluster of 2 to 3 ads grouped back-to-back, which the member sits through in full before the show resumes. Every piece of content I wrote sat inside that constraint.
<br><br>
There was no content practice, no design guidelines, and no precedent. I built the system, the surface-by-surface decisions, and the documentation from scratch. Alongside engineering and product, I worked across ad sales, legal, and research, a team that had competing priorities and clear opinions. <strong style="color:${TEXT};font-weight:600;">The content decisions needed to hold under that pressure</strong>, not just make sense in a design file.`,
          }}
        />

        <Divider />

        {/* ── ROLE ───────────────────────────────────────────────── */}
        <div id="cr-role" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor="rgba(26,26,26,0.2)">My role</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <Card
            label="Scope"
            title="Lead Content Designer"
            body="Owned every content decision across the entire Crunchyroll product, not just ads. The ad experience had no prior content design thinking behind it, but neither did most of the product. That meant building consistency and a systems approach across every member touchpoint simultaneously: player states, account settings, privacy controls, onboarding, and the full ad experience across CTV, mobile, and web for 10M+ global members. Worked across product, engineering, ad sales, legal, and research."
          />
          <Card
            label="Proficiencies demonstrated"
            title="What this work required"
            body="Ad experience content design · Cross-surface content systems · Trust and privacy UX language · Member feedback and research translation · Cross-functional influence · Stakeholder decision defense · Content practice creation · Player state documentation · Social proof framing"
          />
        </div>

        <Divider />

        {/* ── BEFORE THE SYSTEM ──────────────────────────────────── */}
        <div id="cr-before" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor="rgba(26,26,26,0.2)">
          Before the system
        </SectionLabel>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          What the experience looked like without content design thinking behind it
        </h2>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
        >
          When I joined, the ad experience had been growing without a content design foundation. New ad formats were being added. New surfaces were being built. Ad sales were signing new advertiser partners. The product was expanding in every direction at once, and the copy inside it was keeping pace the only way it could without a system behind it: reactively. One string per surface, applied wherever it fit, with no shared framework connecting any of it to member intent, platform context, or advertiser goal. There was no documentation of what each moment needed to do. No surface-specific logic. No one had defined what the experience was trying to say. Two examples show what that looked like in practice.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <div>
            <ScreenFrame
              src="/images/image_01.png"
              alt="Previous ad experience showing Truth anti-Juul ad with generic Tap for More Info CTA and no pod counter or time indicator"
              captionText="Previous state · in-player ad · mobile"
              captionTag="Before"
              style={{ margin: 0 }}
            />
          </div>
          <p style={{ fontSize: 12.5, color: "rgba(26,26,26,0.55)", lineHeight: 1.6, margin: "10px 4px 0" }}>
            No counter. No duration. One generic CTA applied to every ad on every surface. The member has no idea how long the pod runs, where they are in it, or what tapping actually does.
          </p>
          <div>
            <ScreenFrame
              src="/images/image_02.png"
              alt="Previous ad experience showing Dragon Ball ad with Ad 3 of 5 Visit Advertiser conflated in single line, no time indicator"
              captionText="Previous state · in-player ad · web"
              captionTag="Before"
              style={{ margin: 0 }}
            />
          </div>
          <p style={{ fontSize: 12.5, color: "rgba(26,26,26,0.55)", lineHeight: 1.6, margin: "10px 4px 0" }}>
            A position counter exists, but it shares a line with the advertiser CTA. The counter is a promise to the member: this will end, here is when. The CTA is a request from the advertiser: do something for us. Fusing them risks the member reading the whole line as one unit, and over time, learning to ignore it entirely.
          </p>
        </div>

        <PullQuote
          text="The problem was not that the ads were bad. The problem was that nothing around them had been designed. No counter framework. No surface logic. No documentation. The content system was the missing layer between the ad inventory and the member experience."
          sub="The starting condition that made this work necessary."
          style={{ marginBottom: 0 }}
        />

        <Divider />

        {/* ── STRATEGIC APPROACH ──────────────────────────────────── */}
        <div id="cr-approach" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor="rgba(26,26,26,0.2)">
          Strategic approach
        </SectionLabel>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          How content systems and copy decisions worked together to move the numbers
        </h2>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
        >
          Each metric traces back to a specific decision: sometimes a system that restructured how every surface communicated, sometimes a single copy change that reframed what a moment meant. Both matter. These are the four levers.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Card
            label="Completion rate +22%"
            labelColor={GREEN}
            title="The counter as a promise, not a UI element"
            body="Defining position, duration, and countdown as a unified system across CTV and web meant every pod made the same legible promise. Members who could predict when it would end had a reason to stay. Completion rate is what happens when you remove uncertainty from a moment previously defined by it."
          />
          <Card
            label="SVOD conversion +34%"
            labelColor={GREEN}
            title="One survey finding, one headline framework"
            body={<>89% of members needed social validation before committing to something new. That single finding produced the headline architecture: borrow trust from the member&apos;s own fanbase, not the platform&apos;s algorithm. &ldquo;Fans of X also like...&rdquo; is not a tagline. It is the research expressed as copy.</>}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <Card
            label="NPS +18 pts"
            labelColor={BLUE}
            title="Serving members accurately, not uniformly"
            body="The skip appeared for new members alongside a Premium upsell pill. Established members who had accepted the exchange saw neither. Two segments, two different responses. NPS improved because both were served accurately. Uniform policy would have optimised for neither."
          />
          <Card
            label="Premium upsell"
            labelColor={BLUE}
            title="The session was the conversion mechanism"
            body="Upsell conversion was not determined by the CTA wording. It was determined by everything upstream: the SVOD promo building taste confidence, the counter building pod trust, the end slate confirming the platform understood what the member wanted. A member who arrived at the skip moment with the session intact was already primed to upgrade. The CTA was the surface. The session was the argument."
          />
        </div>

        <Divider />

        {/* ── PHASE NAV ──────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            border: BORDER,
            borderRadius: RADIUS_CARD,
            overflow: "hidden",
            marginBottom: "3rem",
          }}
        >
          {[
            { phase: "Phase 01", title: "Pre-play", barColor: GREEN },
            { phase: "Phase 02", title: "Core-play", barColor: AMBER },
            { phase: "Phase 03", title: "Post-play", barColor: BLUE },
          ].map((item, i) => (
            <PhaseNavItem
              key={i}
              phase={item.phase}
              title={item.title}
              barColor={item.barColor}
              isLast={i === 2}
            />
          ))}
        </div>

        {/* ── PRE-PLAY ───────────────────────────────────────────── */}
        <div id="cr-preplay" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor={GREEN}>Phase 01: Pre-play</SectionLabel>
        <div>
          <MetricPill color={GREEN} bg="rgba(29,158,117,0.12)">SVOD conversion</MetricPill>
          <MetricPill color={BLUE} bg="rgba(55,138,221,0.12)">Tier retention</MetricPill>
        </div>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          The first trust moment and what it has to do for the business
        </h2>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
          }}
          dangerouslySetInnerHTML={{
            __html: `When a member hits play, they expect to see what they chose. The SVOD promo runs instead. That is a trust violation built into the product architecture. Content design cannot remove it. It can only manage it. The question was: <strong style="color:${TEXT};font-weight:600;">how do you earn the member's patience through a moment they did not choose, without making them feel manipulated?</strong>
<br><br>
The answer matters beyond the experience. A member who feels respected through the promo is more likely to stay through the pre-roll that follows, and more likely to sit through the mid-roll ad pods after that. <strong style="color:${TEXT};font-weight:600;">Completion rates compound across the session.</strong> The SVOD promo is not just a discovery surface. It is where session-level trust is established or lost, and trust is what determines whether the ad inventory holds its value.`,
          }}
        />

        <ScreenFrame
          src="/images/image_03.png"
          alt="SVOD Promo screen showing Gachiakuta with social proof headline"
          captionText="SVOD Promo (in-player) · first frame before content starts"
          captionTag="CTV · Mobile · Web"
        />

        <PullQuote
          text={`"Fans of My Hero Academia also like... Gachiakuta"`}
          sub="The framing borrows trust from the member's own fanbase, not from the platform's recommendation engine, which only 18% of members trusted."
        />

        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
          dangerouslySetInnerHTML={{
            __html: `Every content decision on this screen was made against the research and built to serve both the member and the business at the same time. The survey showed that <strong style="color:${TEXT};font-weight:600;">79% of members use story description to decide whether to watch something</strong>. The SVOD promo had to do that job in a compressed, trust-borrowing format, without the space a full series page gets.`,
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
          }}
        >
          <Card
            label="Headline strategy"
            title={`"Fans of X also like..."`}
            body="89% of members required social validation before committing to new content, and 74% specifically wanted something similar to a previous favorite. This framing routes around the trust deficit entirely by doing both at once: it validates through the fanbase and signals similarity in the same phrase. The platform is not recommending. The fanbase is."
          />
          <Card
            label="CTA design"
            title={`"Add to Watchlist" captures intent without demanding it`}
            body="A hard conversion CTA at a trust-deficit moment fails twice: it does not convert, and it makes the member feel sold to. Watchlist capture collects genuine interest without demanding it. That signal feeds the recommendation flywheel. After tapping, a confirmation shows and playback continues uninterrupted, so engaging with the promo carries no friction penalty."
          />
          <Card
            label="Exit design"
            title={`"Skip" as the primary action`}
            body={
              <span>
                Skip is the lead CTA, orange and prominent. Ad sales pushed for
                more friction on the exit path. I held the decision: a member
                who skips and feels respected returns. One who feels trapped
                does not finish the session.{" "}
                <strong style={{ color: TEXT, fontWeight: 600 }}>
                  Respecting the exit is a retention argument, not a
                  concession.
                </strong>
              </span>
            }
          />
        </div>

        <Divider />

        {/* ── CORE-PLAY ──────────────────────────────────────────── */}
        <div id="cr-coreplay" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor={AMBER}>Phase 02: Core-play</SectionLabel>
        <div>
          <MetricPill color={GREEN} bg="rgba(29,158,117,0.12)">Ad completion rate</MetricPill>
          <MetricPill color={BLUE} bg="rgba(55,138,221,0.12)">Premium upsell</MetricPill>
        </div>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          The counter as contract: the skip as a signal, not a feature
        </h2>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
          }}
          dangerouslySetInnerHTML={{
            __html: `The core principle: <strong style="color:${TEXT};font-weight:600;">on surfaces where you cannot offer meaningful agency, transparency is the only honest trust signal available.</strong> The counter is the contract. When I tell a member "Ad 2 of 3," I have made a promise. Breaking it (through a miscount, a missing break, or a wrong total) is a trust failure that poisons the rest of the session.
<br><br>
The surface differences between CTV and web go deeper than interaction model. CTV is lean-back: no cursor, no skip expectation, completion rates already higher. Web is lean-forward: a member at a keyboard has more perceived control, and withholding all agency at that moment creates more friction than it resolves. But explaining skip as a surface decision understates the actual logic. <strong style="color:${TEXT};font-weight:600;">The skip on web is not a permanent member-comfort feature. It is a conversion surface with a defined lifecycle.</strong> The member most motivated to upgrade is the member sitting through their first mid-roll break. That moment, peak frustration and peak conversion intent, is exactly when the skip should exist, and exactly when it should surface the upsell. Once the conversion window closes, the skip has done its job. What follows is a different design problem entirely.`,
          }}
        />

        {/* Contested decision */}
        <ContestedCard />

        {/* Two-col screen frames */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            margin: "1.5rem 0",
          }}
        >
          <div>
            <ScreenFrame
              src="/images/image_04.png"
              alt="CTV player showing ad counter with no skip button"
              captionText="CTV · counter only, no false agency"
              captionTag="LRX / TV"
              style={{ margin: 0 }}
            />
            <Annotation
              label="Content decision"
              html={`<strong style="color:${TEXT};font-weight:600;">Ad 1 of 2</strong> with an 80-second orange countdown circle, positioned top-left where CTV eyes naturally scan. Two pieces of information, doing different jobs. The ad count sets scope: the member knows this is one of two, not an open-ended interruption. The countdown sets pace: 80 seconds, visibly moving, not abstract. Together they make the pod legible without a single word of explanation. No skip. No upsell. The counter is the only promise made on this surface, and it has to be kept exactly.`}
            />
          </div>
          <div>
            <ScreenFrame
              src="/images/image_05.png"
              alt="Web player showing Ad 2 of 3 with skip CTA and Premium upsell"
              captionText="Web · counter plus agency plus upsell"
              captionTag="Web"
              style={{ margin: 0 }}
            />
            <Annotation
              label="Word order is the content decision"
              html={`<strong style="color:${TEXT};font-weight:600;">"Skip ads, go Premium"</strong> not "Go Premium, skip ads." Member benefit leads. Business mechanism follows. Reverse the order and it reads as a sales pitch with a reward buried inside it. This order reads as agency with a path available.`}
            />
          </div>
        </div>

        {/* Member state signal table */}
        <SectionLabel
          dotColor="#f59e0b"
          style={{ marginTop: "2rem" }}
        >
          Member state signal system
        </SectionLabel>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          Why the skip exists, when it exists, and when it stops
        </h3>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
          dangerouslySetInnerHTML={{
            __html: `The objective of the ad platform is not simply to keep members watching ads. It is to sustain the conditions under which members remain willing to watch ads across sessions. A member who cancels or downgrades generates zero inventory. The content system has to serve completion rates <em>and</em> tier retention simultaneously, and those two goals require different responses at different points in the member lifecycle.
<br><br>
The table below maps member state to content decisions across the lifecycle. CTV holds constant. Web and mobile adapt as the member's relationship to agency changes.`,
          }}
        />

        <MemberStateTable />

        <PullQuote
          text="The skip is not a principle. It is a tool with a lifecycle. Its presence at the right moment drives Premium conversion. Its removal at the right moment drives completion rates. Both outcomes serve the same north star: a member who stays on the ad tier long enough to generate ongoing inventory value."
          sub="The business logic behind the member state signal system."
          style={{ marginBottom: "2rem" }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Card
            label="Counter placement"
            title="Top-left on CTV. Bottom-left on web."
            body="The same content pattern, placed where each surface's eyes already scan. CTV attention anchors top-center. Web and mobile media controls live at the bottom. Counter placement is a surface-specific content decision, not a visual one. The pattern is consistent. Where it lands is not."
          />
          <Card
            label="Ad break bridge"
            title={`"[Title] continues after ads"`}
            body={
              <span>
                Four to six words hold the member through a full ad pod. On CTV,
                where a member has been passive for up to 80 seconds, this is
                the only signal before playback resumes.{" "}
                <strong style={{ color: TEXT, fontWeight: 600 }}>
                  If the title is wrong or the copy is missing, the member
                  assumes something broke.
                </strong>{" "}
                These words carry the weight of the entire mid-roll relationship.
              </span>
            }
          />
        </div>

        <Divider />

        {/* ── DOCUMENTATION ──────────────────────────────────────── */}
        <div id="cr-docs" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor="rgba(26,26,26,0.2)">Documentation</SectionLabel>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          Mapping every ad moment, surface, and content response
        </h2>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
        >
          Before writing a single word of copy, I mapped the complete player
          state as a sequence flow: from playback request through entitlement
          check, SVOD promo, ad pods, dub card, and end slate. Every decision
          node, every branch condition, every terminal state. The map made the
          content design problem legible to engineering, product, and legal
          without requiring a separate conversation for every edge case. It also
          made the scope of the work visible in a single view, which mattered
          for stakeholder alignment in an organization where no one had done
          this before.
        </p>

        <ScreenFrame
          src="/images/image_06.png"
          alt="Sequence flow diagram showing full playback journey from Playback Requested through entitlement check, SVOD promo, ad pods, dub card, terminal episode decision, end slate and next episode"
          captionText="Sequence flow · full playback journey · all surfaces"
          captionTag="Systems documentation"
          imgStyle={{ background: "#1a1a1a", borderRadius: 10 }}
          style={{ marginBottom: "1.5rem" }}
        />

        <Card
          label="Why this document existed"
          title="Shared language for a team that did not share assumptions"
          body="Engineering understood the flow as a technical state machine. Product understood it as a feature set. Legal understood it as a set of disclosure obligations. A copy decision made in one frame could create a compliance problem in another. The sequence flow gave every team a single artifact, which meant disagreements happened at the map level rather than in late-stage implementation reviews."
          style={{ marginBottom: "1.5rem" }}
        />

        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
        >
          The gate taxonomy (6 gate types across 4 surfaces) was a direct
          output of the mapping process. Gates are the moments where the member
          cannot proceed without taking an action or being redirected. Naming
          them, categorizing them, and documenting the content response for each
          one meant that when a new gate state appeared during development, the
          team had a framework to drop it into rather than solving it from
          scratch each time.
        </p>

        <SystemsTable />

        <Divider />

        {/* ── POST-PLAY ──────────────────────────────────────────── */}
        <div id="cr-postplay" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor={BLUE}>Phase 03: Post-play</SectionLabel>
        <div>
          <MetricPill color={BLUE} bg="rgba(55,138,221,0.12)">Tier retention</MetricPill>
          <MetricPill color={GREEN} bg="rgba(29,158,117,0.12)">SVOD conversion</MetricPill>
        </div>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          Where the exchange pays off
        </h2>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
          }}
          dangerouslySetInnerHTML={{
            __html: `Fifty-four percent of members sought new content immediately after finishing a series, making the end slate the highest-intent discovery moment in any session. <strong style="color:${TEXT};font-weight:600;">61% wanted something with similar story or themes. 51% wanted something from their own watchlist.</strong> The content decision was not just what to show, but what signal to surface first: watchlist before similarity, because both are grounded in the member's own behavior rather than the platform's algorithm.
<br><br>
The flywheel closes here only if every earlier stage earned it. The promo earns watchlist signal. The counter earns patience through the pod. The bridge earns the return to content. The end slate earns the next session. Break any stage, and the inventory value of everything that follows breaks with it.`,
          }}
        />

        <ScreenFrame
          src="/images/image_07.png"
          alt="Crunchyroll end slate showing Fire Force recommendation with All caught up headline, similarity label, genre metadata, and Play S1 E1 CTA"
          captionText="End slate · post-completion · Web"
          captionTag="Phase 03: Post-play"
          style={{ margin: "1.5rem 0" }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <Card
            label="Headline: two jobs, five words"
            title={`"All caught up! What's next?"`}
            body={`"All caught up" lands before the ask. It acknowledges what the member just did before pivoting to what they might do next. Reversing it ("What's next? You're all caught up") loses the emotional beat and reads as transactional. Sequence is the content decision: earn the moment before spending it.`}
          />
          <Card
            label="Similarity signal"
            title={`"Similar to what you just watched"`}
            body="61% of post-completion members want something with similar story or themes. This label does not try to sell the show. It explains the selection logic quietly, below the title, as a rationale rather than a headline. The show sells itself. The label earns trust by naming why it was chosen."
          />
          <Card
            label="Primary CTA"
            title={`"Play S1 E1"`}
            body={`Not "Watch Now." Not "Start Watching." The specific episode removes every friction step between decision and action. The member decided at the title level. The CTA executes immediately. No series page detour, no episode picker, no ambiguity about where playback begins.`}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <Card
            label="Metadata line"
            title="Rating · Language · Genre, genre, genre, genre"
            body="79% of members use story description to decide. 74% use genre and subgenre. 67% use language availability. All three signals are present in a single metadata line before the member touches anything. The line is not decoration. It is the condensed decision support the research said members needed."
          />
        </div>

        <PullQuote
          text="The ad experience is not a tax on watching. It is an exchange. Content design determines whether the exchange feels fair, and a fair exchange is what makes the ad inventory worth buying."
          sub="The principle behind every content decision in this system."
        />

        <Divider />

        {/* ── PRIVACY AND CONSENT ────────────────────────────────── */}
        <div id="cr-privacy" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor="#8b5cf6">Privacy and consent</SectionLabel>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          Making privacy controls feel like product features, not legal
          disclaimers
        </h2>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
          }}
          dangerouslySetInnerHTML={{
            __html: `Being the only content designer in the organization meant the ad experience did not exist in isolation. Every decision I made in the player had to be consistent with what members encountered in account settings, in onboarding, and in the privacy controls that governed how their data was used for advertising. <strong style="color:${TEXT};font-weight:600;">The Data and Privacy screen was one of the highest-stakes surfaces I owned</strong>. Not because members visited it often, but because every word on it was load-bearing. Legal compliance, advertiser capability, and member trust were all sitting on the same page.`,
          }}
        />

        <ScreenFrame
          src="/images/image_08.png"
          alt="Crunchyroll Data and Privacy settings screen showing Profile-Based Ads and Personalized Ads toggles"
          captionText="Account Settings · Data and Privacy · web"
          captionTag="Privacy and consent UX"
          style={{ margin: "1.5rem 0" }}
        />

        <PullQuote
          text="Privacy controls that are hard to find signal that the platform is not confident in what it is asking. Controls that are easy to find signal the opposite."
          sub="The navigation placement decision behind Data and Privacy."
        />

        <SectionLabel
          dotColor="rgba(26,26,26,0.2)"
          style={{ marginTop: "2rem" }}
        >
          Decision 01 of 05
        </SectionLabel>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          Navigation placement: General, not Account, not a standalone Privacy
          section
        </h3>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
          dangerouslySetInnerHTML={{
            __html: `"Data and Privacy" sits fifth under the General navigation group, after Membership Info, Preferences, Activate Device, and Device Management. That position was deliberate. Placing it under Account (alongside Email, Phone, and Password) would have framed it as administrative and potentially alarming, a legal compliance checkbox rather than a member setting. Placing it under General alongside Preferences frames it as something the member controls as part of how they use the product.
<br><br>
The hierarchy communicates: <strong style="color:${TEXT};font-weight:600;">this matters and we are not hiding it, but it is not an emergency</strong>. Members who want to find it can. Members who are not looking for it are not made anxious by its prominence. That balance required a navigation architecture argument, not just a content decision. It also required legal sign-off that the placement met disclosure obligations without requiring it to be the first thing a member sees.`,
          }}
        />

        <SectionLabel dotColor="rgba(26,26,26,0.2)">
          Decision 02 of 05
        </SectionLabel>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          Default states: both toggles off, opt-in rather than opt-out
        </h3>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
          dangerouslySetInnerHTML={{
            __html: `Both Profile-Based Ads and Personalized Ads ship with their toggles off. This is the single most consequential content design decision on the screen. Not because of the toggle states themselves, but because of what default states communicate at scale. An opt-out default says: we assume your consent. An opt-in default says: we will ask for it.
<br><br>
For a member base where only 18% trusted platform recommendations, <strong style="color:${TEXT};font-weight:600;">opt-out would have been a trust catastrophe</strong>. The business case for opt-out is real: higher participation rates in behavioral targeting means richer audience segments, which means higher advertiser CPMs. The content design argument against it is also real: a member who discovers they were opted in without asking is not a member who stays opted in. The default state is a retention decision dressed as a privacy decision.`,
          }}
        />

        <SectionLabel dotColor="rgba(26,26,26,0.2)">
          Decision 03 of 05
        </SectionLabel>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          Toggle hierarchy: email identity before behavioral data
        </h3>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
          dangerouslySetInnerHTML={{
            __html: `Profile-Based Ads leads. Personalized Ads follows. Profile-Based uses email identity matching, meaning the member already knows they gave Crunchyroll their email. Personalized Ads uses behavioral data: viewing history, genres watched, time spent. The more concrete and already-understood data type leads. The more abstract type follows.
<br><br>
This is a progressive disclosure decision applied to a consent surface. <strong style="color:${TEXT};font-weight:600;">Starting with the familiar lowers the cognitive load before the member encounters the unfamiliar.</strong> If the order were reversed, with behavioral data first and email second, the member would have to process a more abstract concept before they had context for what kind of data the platform was even talking about.`,
          }}
        />

        <SectionLabel dotColor="rgba(26,26,26,0.2)">
          Decision 04 of 05
        </SectionLabel>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          Terminology: plain language for the ask, legal language where required
        </h3>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
          dangerouslySetInnerHTML={{
            __html: `The page title is "Data and Privacy" rather than "Ad Preferences" or "Privacy Settings." Broader framing, more honest, less optimized for advertiser framing. The subtitle, "Decide how your data and personal info is being used," opens with a verb that gives the member agency. The member is deciding, not configuring.
<br><br>
For Profile-Based Ads, the description names exactly what is being shared ("your email"), exactly who receives it ("Crunchyroll ad partners"), and what it produces ("ads based on your interests"). Three specific answers to the three questions a member has when they see a toggle they do not understand. This was the result of working closely with legal to translate compliance requirements into plain language without losing their legal meaning.
<br><br>
"Do not sell or share my personal information" at the bottom is CCPA-required copy. It is legally mandated verbatim language. It is also the only phrase on the screen that a member cannot act on without already understanding what it means. It reads as a declaration rather than an action. <strong style="color:${TEXT};font-weight:600;">That tension is where legal requirements and member clarity genuinely conflict</strong>, and the resolution here was to isolate the legal language at the bottom of the screen, visually separated from the plain-language controls above, so it reads as a reference rather than the primary ask.`,
          }}
        />

        <SectionLabel dotColor="rgba(26,26,26,0.2)">
          Decision 05 of 05
        </SectionLabel>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginBottom: "0.75rem",
          }}
        >
          Where legal and member clarity were in tension, and how those
          negotiations went
        </h3>
        <p
          style={{
            fontSize: 14,
            color: TEXT_SEC,
            lineHeight: 1.85,
            maxWidth: 700,
            marginBottom: "1.5rem",
          }}
          dangerouslySetInnerHTML={{
            __html: `The two toggle labels ("Profile-Based Ads" and "Personalized Ads") were not the first versions legal and I agreed on. The original legal drafts used terms like "targeted advertising" and "interest-based advertising," which are accurate within the industry but meaningless to a member who has never worked in adtech. My initial push was for labels that named the data type directly: "Email-Matched Ads" and "Behavior-Based Ads." Legal's concern was that these were not established terms in their disclosure framework, and that introducing non-standard labels could create ambiguity in a regulatory context.
<br><br>
The resolution was a negotiated middle: labels that were plain enough for members to read without a glossary, but stable enough for legal to defend. "Profile-Based" anchors to identity. "Personalized" anchors to behavior. They are still closer in meaning than I would have chosen without legal constraints, and a member scanning quickly might not register the difference at the label level. But that is what the descriptions are for, and the description-level work is where I was able to win the plain-language argument more completely.
<br><br>
The Personalized Ads description in the first screenshot read "Allows sharing of behavioral data with ad partners." Legal owned that language and treated "behavioral data" as a defined term. My argument was that defined terms belong in privacy policies, not in product UI. I pushed for language that named what behavioral data actually meant in practice: what the member had watched, how long they watched it, what genres they returned to. The updated version, visible in the screenshot, reflects that negotiation. The category term ("behavioral data") is gone. The actual content is there instead. Legal signed off because the plain-language version was, if anything, more accurate than the category term, and accuracy was their primary concern.
<br><br>
<strong style="color:${TEXT};font-weight:600;">This is what content design work inside a legal constraint actually looks like.</strong> It is not finding the clever workaround. It is building enough trust with legal to make the plain-language argument on its merits, iteration by iteration, until the copy on screen serves members without creating compliance risk for the company.`,
          }}
        />

        <Divider />

        {/* ── BRIDGE ─────────────────────────────────────────────── */}
        <div id="cr-bridge" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor="rgba(26,26,26,0.2)">
          Why this matters now
        </SectionLabel>
        <BridgeCard />

        <Divider />

        {/* ── OUTCOMES ────────────────────────────────────────────── */}
        <div id="cr-outcomes" style={{ scrollMarginTop: 80 }} />
        <SectionLabel dotColor="rgba(26,26,26,0.2)">Outcomes</SectionLabel>
        <div style={{ border: BORDER, borderRadius: RADIUS_CARD, padding: "2rem", marginBottom: "2rem" }}>

          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>+22%</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Ad completion rate</div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Mid-roll pod completion after content system shipped</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Measured as the percentage of members who watched through the entire mid-roll ad pod without abandoning the session. The counter language (&ldquo;Ad 2 of 3&rdquo;) set a transparent contract, and the bridge copy (&ldquo;Your show continues in...&rdquo;) reinforced the promise. Together, these reduced mid-pod drop-offs by giving members predictability through a moment they didn&rsquo;t choose. <strong style={{ color: TEXT, fontWeight: 500 }}>The content system turned an interruption into a navigable experience.</strong></div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>+18 pts</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>NPS, ad-tier members</div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Tier satisfaction lift against pre-launch baseline</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Net Promoter Score for ad-tier members, measured via quarterly member survey comparing pre-launch and post-launch cohorts. The lift reflected cumulative improvements across the full ad experience: transparent counters, honest bridge language, privacy controls with plain-language explanations, and end slates that respected the member&rsquo;s viewing intent. <strong style={{ color: TEXT, fontWeight: 500 }}>No single surface drove this. The system did.</strong></div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>+34%</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>SVOD promo conversion</div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Watchlist adds from pre-play promo after social proof framework</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Measured as the percentage of members who added a show to their watchlist after seeing the SVOD promo before episode playback. The social proof headline framework (&ldquo;Watched by 2.1M fans&rdquo;) combined with genre-specific descriptions grounded in the finding that 79% of members use story description to make viewing decisions. <strong style={{ color: TEXT, fontWeight: 500 }}>The promo earned attention by borrowing trust from the community rather than asserting platform authority.</strong></div>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: DIVIDER, margin: "1.5rem 0" }} />

          <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.1 }}>&minus;30%</div>
              <div style={{ fontSize: 12, color: TEXT_MUTED, marginTop: 4 }}>Support contacts</div>
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: "0.5rem" }}>Fewer member escalations after ad-moment clarity gaps addressed</div>
              <div style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_SEC }}>Measured as the reduction in ad-related support tickets filed through the member help center. The content system addressed the root causes: members no longer needed to ask how many ads were left (counter), when their show would return (bridge), what data was being used for targeting (privacy controls), or why they were seeing certain promotions (ad flagging flows). <strong style={{ color: TEXT, fontWeight: 500 }}>Support volume dropped because the interface answered questions before members had to ask.</strong></div>
            </div>
          </div>

        </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

/* ── Helper components ──────────────────────────────────────────── */

function PhaseNavItem({
  phase,
  title,
  barColor,
  isLast,
}: {
  phase: string;
  title: string;
  barColor: string;
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        padding: "0.9rem 1rem",
        textAlign: "center",
        borderRight: isLast ? "none" : "0.5px solid rgba(26,26,26,0.15)",
        background: hovered ? WHITE : "transparent",
        transition: "background 0.2s",
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: TEXT_MUTED,
          marginBottom: 3,
        }}
      >
        {phase}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>{title}</div>
      <div
        style={{
          height: 3,
          marginTop: 8,
          borderRadius: 2,
          background: barColor,
        }}
      />
    </div>
  );
}

function ContestedCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "1.5px solid rgba(196,127,10,0.3)",
        borderRadius: RADIUS_CARD,
        padding: "1.75rem 2rem",
        background: hovered ? "rgba(196,127,10,0.07)" : "rgba(196,127,10,0.04)",
        transition: "background 0.2s",
        margin: "1.5rem 0",
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: AMBER,
          marginBottom: "0.4rem",
        }}
      >
        The hardest stakeholder conversation
      </div>
      <div
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: TEXT,
          marginBottom: "0.5rem",
          lineHeight: 1.3,
        }}
      >
        Why CTV gets no skip button and why that argument had to be won
      </div>
      <div
        style={{ fontSize: 13, color: TEXT_SEC, lineHeight: 1.8 }}
        dangerouslySetInnerHTML={{
          __html: `No skip on CTV meant no upsell on CTV. No upsell meant no conversion path on our highest-reach surface. That was a real business cost, and the stakeholder pressure to add the skip button was real.
<br><br>
My argument: <strong style="color:${TEXT};font-weight:600;">a skip button on a remote-control surface implies agency the member cannot meaningfully exercise.</strong> The interaction model does not support it. A member who sees a skip option they cannot easily reach, on a 10-foot UI with a remote control in the middle of an ad pod, does not feel offered a choice. They feel teased with one. That experience is more damaging to trust than no skip option at all.
<br><br>
On CTV, the counter <em>is</em> the trust signal. It is the only honest promise the platform can keep on that surface. On mobile and web, where the member has a thumb or a cursor and real agency, skip and upsell both appear because on those surfaces the promise is meaningful.`,
        }}
      />
    </div>
  );
}

function MemberStateTable() {
  return (
    <div
      style={{
        overflowX: "auto",
        border: BORDER,
        borderRadius: RADIUS_CARD,
        marginBottom: "2rem",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 13,
          minWidth: 640,
        }}
      >
        <thead>
          <tr>
            {[
              "Member state",
              "Signal",
              "CTV",
              "Web / Mobile",
              "Business logic",
            ].map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "10px 12px",
                  borderBottom: "2px solid rgba(26,26,26,0.15)",
                  background: "rgba(26,26,26,0.04)",
                  fontWeight: 600,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  color: TEXT_MUTED,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <MemberStateRow
            pill={{ label: "New member", bg: "#fef3c7", color: "#92400e" }}
            signal="First session on ad tier. Just signed up or downgraded."
            ctv={
              <>
                Counter only
                <br />
                <span style={{ color: TEXT_SEC, fontSize: 11 }}>
                  Ad 1 of 2 &middot; 80s
                </span>
              </>
            }
            webMobile={
              <>
                <strong>Counter + Skip + Premium upsell</strong>
                <br />
                <span style={{ color: TEXT_SEC, fontSize: 11 }}>
                  &ldquo;Skip ads, go Premium&rdquo;
                </span>
              </>
            }
            logic="Peak upsell intent. This is the highest-friction, highest-conversion moment. The skip creates the surface. The upsell captures the intent. The counter sets expectations if neither happens."
            bg="transparent"
          />
          <MemberStateRow
            pill={{ label: "Adjusting", bg: "#dbeafe", color: "#1e40af" }}
            signal="Sessions 2 through 7. Member did not upgrade. Still building tolerance."
            ctv={
              <>
                Counter only
                <br />
                <span style={{ color: TEXT_SEC, fontSize: 11 }}>
                  Ad 1 of 2 &middot; 80s
                </span>
              </>
            }
            webMobile={
              <>
                <strong>Counter + Skip</strong>
                <br />
                <span style={{ color: TEXT_SEC, fontSize: 11 }}>
                  No upsell pill
                </span>
              </>
            }
            logic="Conversion window closed. Repeating the upsell to a member who already declined creates resentment. Skip stays to support adjustment. Removing it now would spike churn risk before the member has accepted the exchange."
            bg="rgba(26,26,26,0.015)"
          />
          <MemberStateRow
            pill={{ label: "Established", bg: "#d1fae5", color: "#065f46" }}
            signal="Session 8 and beyond. Member has accepted the ad-supported exchange."
            ctv={
              <>
                Counter only
                <br />
                <span style={{ color: TEXT_SEC, fontSize: 11 }}>
                  Ad 1 of 2 &middot; 80s
                </span>
              </>
            }
            webMobile={
              <>
                <strong>Counter only</strong>
                <br />
                <span style={{ color: TEXT_SEC, fontSize: 11 }}>
                  Web converges with CTV
                </span>
              </>
            }
            logic="Member has accepted the value exchange. Skip no longer needed. Web and CTV now hold the same contract. Completion rates stabilize. Inventory value is protected."
            bg="transparent"
          />
          <MemberStateRow
            pill={{
              label: "CTV (all states)",
              bg: "#f3e8ff",
              color: "#6b21a8",
            }}
            signal="Lean-back surface. No cursor. Remote navigation. No skip expectation established by the format."
            ctv={
              <>
                <strong>Counter only</strong>
                <br />
                <span style={{ color: TEXT_SEC, fontSize: 11 }}>
                  Constant across all lifecycle stages
                </span>
              </>
            }
            webMobile="N/A"
            logic="CTV completion rates are inherently higher on lean-back surfaces. Adding skip would create a false agency problem: a button the member cannot easily reach, which creates frustration rather than resolving it. Counter is the only contract that matters here."
            bg="rgba(26,26,26,0.015)"
          />
        </tbody>
      </table>
    </div>
  );
}

function MemberStateRow({
  pill,
  signal,
  ctv,
  webMobile,
  logic,
  bg,
}: {
  pill: { label: string; bg: string; color: string };
  signal: string;
  ctv: React.ReactNode;
  webMobile: React.ReactNode;
  logic: string;
  bg: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <tr
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid rgba(26,26,26,0.08)",
        background: hovered ? "rgba(255,255,255,0.5)" : bg,
      }}
    >
      <td style={{ padding: 12, verticalAlign: "top" }}>
        <span
          style={{
            display: "inline-block",
            background: pill.bg,
            color: pill.color,
            fontSize: 11,
            fontWeight: 600,
            padding: "2px 8px",
            borderRadius: 100,
            whiteSpace: "nowrap",
          }}
        >
          {pill.label}
        </span>
      </td>
      <td
        style={{
          padding: 12,
          verticalAlign: "top",
          color: TEXT_SEC,
          lineHeight: 1.6,
        }}
      >
        {signal}
      </td>
      <td style={{ padding: 12, verticalAlign: "top", lineHeight: 1.6 }}>
        {ctv}
      </td>
      <td style={{ padding: 12, verticalAlign: "top", lineHeight: 1.6 }}>
        {webMobile}
      </td>
      <td
        style={{
          padding: 12,
          verticalAlign: "top",
          color: TEXT_SEC,
          lineHeight: 1.6,
        }}
      >
        {logic}
      </td>
    </tr>
  );
}

function SystemsTable() {
  return (
    <div
      style={{
        overflowX: "auto",
        border: BORDER,
        borderRadius: RADIUS_CARD,
        margin: "1.5rem 0",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: 640,
          fontSize: 12,
        }}
      >
        <thead>
          <tr>
            {[
              "Phase",
              "Ad moment",
              "Member state",
              "Web",
              "Mobile",
              "CTV / LRX",
              "Trust signal",
            ].map((h) => (
              <th
                key={h}
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: TEXT_MUTED,
                  padding: "10px 14px",
                  textAlign: "left",
                  borderBottom: DIVIDER,
                  background: "rgba(26,26,26,0.03)",
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <SysRow
            phase={{ label: "Pre-play", color: GREEN }}
            moment="SVOD Promo"
            state="Hit play, expected content. Session-level trust being established."
            web={
              <>
                Social proof headline + watchlist + skip
                <br />
                <StPill variant="red">Trust-critical</StPill>
              </>
            }
            mobile={
              <>
                Same. Skip reachable by thumb.
                <br />
                <StPill variant="red">Trust-critical</StPill>
              </>
            }
            ctv={
              <>
                No easy exit. Every word carries full trust load.
                <br />
                <StPill variant="red">Trust-critical</StPill>
              </>
            }
            trust="Social proof framing · Low-commitment CTA · Honest exit"
          />
          <SysRow
            phase={{ label: "Pre-play", color: GREEN }}
            moment="Gate message"
            state="Not entitled. Blocked before playback starts. Highest frustration risk."
            web={
              <>
                6 gate types, each with distinct copy and a distinct resolution
                path.
                <br />
                <StPill variant="amber">Frustration moment</StPill>
              </>
            }
            mobile="Same as web."
            ctv={
              <>
                Profile restriction surfaces a switch-device instruction.
                <br />
                <StPill variant="amber">Frustration moment</StPill>
              </>
            }
            trust="Clear reason for gate · Clear resolution path · No dead ends"
          />
          <SysRow
            phase={{ label: "Core-play", color: AMBER }}
            moment="Pre-roll"
            state="Chosen to watch. Ad runs before the reward lands."
            web={
              <>
                Ad X of Y, bottom-left. Skip ads, go Premium.
                <br />
                <StPill variant="green">Agency + upsell</StPill>
              </>
            }
            mobile="Same. Thumb-zone skip CTA."
            ctv={
              <>
                Ad X of Y, top-left. Counter only. No false agency.
                <br />
                <StPill variant="amber">Counter only</StPill>
              </>
            }
            trust="Position + total · Countdown visible · Promise is kept"
          />
          <SysRow
            phase={{ label: "Core-play", color: AMBER }}
            moment="Mid-roll ad pods ×3"
            state="Interrupted at peak emotional engagement. Highest disruption point in the session."
            web={
              <>
                Skip CTA has its highest conversion potential here. Member is
                most motivated to exit. Counter holds those who stay.
                <br />
                <StPill variant="red">Peak disruption</StPill>
              </>
            }
            mobile={
              <>
                Touch skip is most valuable. Copy must hold the member through
                the full pod, not just one ad.
                <br />
                <StPill variant="red">Peak disruption</StPill>
              </>
            }
            ctv={
              <>
                No skip. Counter is the only promise. A wrong count breaks
                session trust completely.
                <br />
                <StPill variant="red">Counter = contract</StPill>
              </>
            }
            trust="Disruption recovery · Bridge copy reconnects member to the narrative"
          />
          <SysRow
            phase={{ label: "Core-play", color: AMBER }}
            moment="Ad break bridge"
            state="Between the last ad and content resuming. Member deciding whether to stay."
            web={
              <>
                &ldquo;[Title] continues after ads.&rdquo; Show title plus resume signal.
                <br />
                <StPill variant="blue">Continuity signal</StPill>
              </>
            }
            mobile="Same. Terminal-episode bridge can surface next-episode context."
            ctv={
              <>
                Most critical here. After 80 seconds of passive viewing, this is
                the only signal before playback resumes. If wrong, the member
                assumes the stream broke.
                <br />
                <StPill variant="red">Trust-critical</StPill>
              </>
            }
            trust="Series title · Resume signal · Low words, high stakes"
          />
          <SysRow
            phase={{ label: "Post-play", color: BLUE }}
            moment="Dub card"
            state="Post-episode. Next-content decision beginning. Language preference visible."
            web={
              <>
                67% of members use language availability as a deciding factor
                when choosing what to watch. Wrong signal here creates post-play
                frustration before the next session begins.
                <br />
                <StPill variant="blue">Discovery signal</StPill>
              </>
            }
            mobile="Same."
            ctv="Surface-specific behavior documented; in progress at handoff."
            trust="Language clarity · Correct expectation-setting before next commitment"
          />
          <SysRow
            phase={{ label: "Post-play", color: BLUE }}
            moment="End slate"
            state="Terminal episode. Highest-intent discovery moment in the session."
            web={
              <>
                54% of members seek new content right after a series ends. The
                end slate is the highest-value real estate in a session.
                <br />
                <StPill variant="green">Peak discovery intent</StPill>
              </>
            }
            mobile={
              <>
                Touch affords richer discovery across genre, similar titles, and
                watchlist.
                <br />
                <StPill variant="green">Peak discovery intent</StPill>
              </>
            }
            ctv={
              <>
                Lean-back mode. Content must surface without requiring the
                member to search.
                <br />
                <StPill variant="green">Lean-back discovery</StPill>
              </>
            }
            trust="Flywheel closes · Trust exchange pays off · Next session begins here"
            isLast
          />
        </tbody>
      </table>
    </div>
  );
}

function StPill({
  variant,
  children,
}: {
  variant: "red" | "green" | "amber" | "blue";
  children: React.ReactNode;
}) {
  const styles: Record<string, React.CSSProperties> = {
    red: { background: "rgba(192,57,43,0.1)", color: "#9b2222" },
    green: { background: "rgba(29,158,117,0.1)", color: "#0f6e56" },
    amber: { background: "rgba(196,127,10,0.1)", color: "#8a5f00" },
    blue: { background: "rgba(55,138,221,0.1)", color: "#1a5a9e" },
  };
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: 10,
        fontWeight: 500,
        padding: "2px 8px",
        borderRadius: 100,
        marginTop: 4,
        whiteSpace: "nowrap",
        ...styles[variant],
      }}
    >
      {children}
    </span>
  );
}

function SysRow({
  phase,
  moment,
  state,
  web,
  mobile,
  ctv,
  trust,
  isLast,
}: {
  phase: { label: string; color: string };
  moment: string;
  state: string;
  web: React.ReactNode;
  mobile: React.ReactNode;
  ctv: React.ReactNode;
  trust: string;
  isLast?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <tr
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.5)" : "transparent",
      }}
    >
      <td
        style={{
          padding: "11px 14px",
          verticalAlign: "top",
          borderBottom: isLast ? "none" : DIVIDER,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          color: phase.color,
        }}
      >
        {phase.label}
      </td>
      <td
        style={{
          padding: "11px 14px",
          verticalAlign: "top",
          borderBottom: isLast ? "none" : DIVIDER,
          fontWeight: 600,
          color: TEXT,
          whiteSpace: "nowrap",
        }}
      >
        {moment}
      </td>
      <td
        style={{
          padding: "11px 14px",
          verticalAlign: "top",
          borderBottom: isLast ? "none" : DIVIDER,
          color: TEXT_SEC,
          lineHeight: 1.55,
        }}
      >
        {state}
      </td>
      <td
        style={{
          padding: "11px 14px",
          verticalAlign: "top",
          borderBottom: isLast ? "none" : DIVIDER,
          color: TEXT_SEC,
          lineHeight: 1.55,
        }}
      >
        {web}
      </td>
      <td
        style={{
          padding: "11px 14px",
          verticalAlign: "top",
          borderBottom: isLast ? "none" : DIVIDER,
          color: TEXT_SEC,
          lineHeight: 1.55,
        }}
      >
        {mobile}
      </td>
      <td
        style={{
          padding: "11px 14px",
          verticalAlign: "top",
          borderBottom: isLast ? "none" : DIVIDER,
          color: TEXT_SEC,
          lineHeight: 1.55,
        }}
      >
        {ctv}
      </td>
      <td
        style={{
          padding: "11px 14px",
          verticalAlign: "top",
          borderBottom: isLast ? "none" : DIVIDER,
          color: TEXT_SEC,
          lineHeight: 1.55,
        }}
      >
        {trust}
      </td>
    </tr>
  );
}

function BridgeCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: BORDER,
        borderRadius: RADIUS_CARD,
        padding: "2rem 2.25rem",
        background: hovered ? WHITE : "rgba(26,26,26,0.03)",
        marginTop: "1rem",
        transition: "background 0.2s",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: TEXT_MUTED,
          marginBottom: "0.75rem",
        }}
      >
        The problem this case study is about
      </div>
      <div
        style={{
          fontSize: 15,
          fontWeight: 400,
          color: TEXT_SEC,
          lineHeight: 1.75,
          maxWidth: 660,
        }}
        dangerouslySetInnerHTML={{
          __html: `Building content design infrastructure around an ad experience that is already live, already generating friction, and already affecting member trust is a different problem than designing ads from scratch. There is no blank slate. Members already have a relationship with the experience and it is not always a good one. The work is not to introduce something new carefully. It is to bring enough intentionality to an existing system that members start trusting it when they had good reason not to.
<br><br>
<strong style="color:${TEXT};font-weight:600;">Crunchyroll was that problem, solved at scale, across three surfaces, in a high-distrust environment, with measurable constraints and measurable results.</strong> The content system, the cross-surface documentation, the stakeholder decisions that had to hold under pressure: all of it is directly transferable to the next version of this problem: new ad formats, live event integrations, new markets, higher stakes.`,
        }}
      />
    </div>
  );
}

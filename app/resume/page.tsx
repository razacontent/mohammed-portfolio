import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
    <span
      style={{
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: "rgba(26,26,26,0.2)",
        flexShrink: 0,
        marginTop: 9,
      }}
    />
    <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(26,26,26,0.7)" }}>
      {children}
    </p>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.10em",
      textTransform: "uppercase",
      color: "rgba(26,26,26,0.4)",
      marginBottom: 12,
    }}
  >
    {children}
  </p>
);

const Divider = () => (
  <hr
    style={{
      border: "none",
      borderTop: "0.5px solid rgba(26,26,26,0.15)",
      margin: "0 0 32px",
    }}
  />
);

const ExperienceEntry = ({
  title,
  dates,
  bullets,
}: {
  title: string;
  dates: string;
  bullets: string[];
}) => (
  <div style={{ marginBottom: 36 }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 4,
      }}
    >
      <p style={{ fontSize: 16, fontWeight: 600 }}>{title}</p>
      <p
        style={{
          fontSize: 12,
          fontWeight: 400,
          color: "rgba(26,26,26,0.4)",
          flexShrink: 0,
        }}
      >
        {dates}
      </p>
    </div>
    <div
      style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}
    >
      {bullets.map((b, i) => (
        <BulletPoint key={i}>{b}</BulletPoint>
      ))}
    </div>
  </div>
);

export default function ResumePage() {
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
        {/* Header */}
        <h1
          style={{
            fontSize: "clamp(28px, 4.5vw, 42px)",
            fontWeight: 700,
            marginBottom: 6,
            letterSpacing: -0.5,
          }}
        >
          Mohammed Raza
        </h1>
        <p
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "rgba(26,26,26,0.6)",
            marginBottom: 8,
          }}
        >
          Content Design, Strategy, and Engineering
        </p>
        <p
          style={{
            fontSize: 13,
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgba(26,26,26,0.4)",
            marginBottom: 16,
          }}
        >
          Interests: Localization, Korean cinema, pizza, and getting bullied by my
          two daughters
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 48,
          }}
        >
          {[
            "razacontent.com",
            "linkedin.com/in/razamohammed",
            "mohammed@razacontent.com",
            "Seattle, WA",
          ].map((item) => (
            <span
              key={item}
              style={{
                fontSize: 12,
                color: "rgba(26,26,26,0.5)",
                border: "1.5px solid rgba(26,26,26,0.1)",
                borderRadius: 100,
                padding: "4px 12px",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <Divider />

        {/* About + face_pencil */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "flex-start",
            marginBottom: 48,
          }}
        >
          <div style={{ flex: 1 }}>
            <SectionLabel>About</SectionLabel>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.8,
                color: "rgba(26,26,26,0.75)",
              }}
            >
              8+ years leading content design for products reaching over a billion
              users, including Amazon Prime, TurboTax, and Crunchyroll. I architect
              AI content systems and localization frameworks that enable global teams
              to ship intelligent, human-centered experiences at scale. I believe
              content design is the canary in the coal mine. I surface what would
              break trust, compromise safety, or dilute voice in non-deterministic
              systems, then build the frameworks that stop them before they ship.
            </p>
          </div>
        </div>

        <Divider />

        {/* Experience */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.4)",
            marginBottom: 24,
          }}
        >
          Experience
        </p>

        <ExperienceEntry
          title="UX Writer, Amazon World Wide Prime"
          dates="2025–2026"
          bullets={[
            "Architected unified AI strategy for three LLM-powered personalization agents (PriME, Binoculars, Kairos) serving 200M+ members, translating frontier capabilities into scalable content frameworks that global teams use to ship consistent intelligent experiences. Defined the organizational standards for when AI communicates, how it handles uncertainty, and where human judgment remains essential\u2014directly influencing product roadmap and technical investments.",
            "Drove organizational alignment across product, engineering, marketing, and research to establish Prime\u2019s Value Communication framework as strategic initiative. Built decision-making principles that 15+ cross-functional teams now use to determine how members discover and understand benefits across lifecycle stages and cultural contexts.",
            "Solved complex challenges of non-deterministic AI systems by establishing experimentation practice and evaluation frameworks that shifted team culture from opinion-based to evidence-based content decisions. The Milestones retention program delivered +77K annualized member impact by identifying how AI should communicate at vulnerable moments.",
            "Built content ecosystem infrastructure including terminology standards, reusable content patterns, naming conventions, and evaluation criteria that enables global teams to maintain quality independently.",
          ]}
        />

        <ExperienceEntry
          title="Sr. Content Designer (Content Lead), Crunchyroll"
          dates="2022–2024"
          bullets={[
            "Led 0-1 initiative to define product vision and ship Crunchyroll\u2019s first conversational AI (Ask Hime!), navigating extreme ambiguity to establish LLM guidelines, training taxonomies, and evaluation processes for multi-step agentic workflows. Partnered with engineering to shape the AI roadmap and advocate for design-led technical investments that enabled natural, fan-first interactions across millions of conversations.",
            "Established Crunchyroll\u2019s content design practice from the ground up, rallying global teams around a shared vision by creating voice frameworks, style guides, and decision-making principles. Changed how product and engineering teams approach content by demonstrating its strategic value in shaping intelligent experiences\u2014reducing support tickets 30% through error messaging that builds trust in failure scenarios.",
            "Drove organizational alignment on ML-powered localization strategy for dozens of languages, partnering with engineering and international teams to define quality thresholds and content principles that ensured voice survived cultural adaptation. Built evaluation frameworks that enabled teams to ship localized AI experiences independently.",
          ]}
        />

        <ExperienceEntry
          title="Content Designer, Shopify"
          dates="2021"
          bullets={[
            "Led content strategy for Shopify\u2019s Marketing Analytics platform at a moment of high ambiguity. Merchants had data but lacked the language to act on it. Defined the information architecture, terminology system, and microcopy for a revamped dashboard that translated complex spend data into confident marketing decisions. Built tooltips, inline guidance, and content patterns that scaled across the platform and gave cross-functional teams a shared framework for handling data-dense surfaces consistently.",
          ]}
        />

        <ExperienceEntry
          title="Sr. Content Designer, TurboTax (Intuit)"
          dates="2021–2022"
          bullets={[
            "Led product strategy for TurboTax\u2019s first AI assistant from concept to launch, translating LLM capabilities into consumer-facing financial guidance. Established content principles for non-deterministic systems in high-trust domain, defining when AI provides answers versus when it escalates to human experts. Won innovation award; feature drove customer acquisition.",
            "Navigated deep ambiguity to define TurboTax\u2019s content approach for cryptocurrency\u2014an emerging, jargon-heavy domain where users needed clarity under pressure. Built consensus across product, legal, and engineering teams to establish a shared terminology framework, then translated it into microcopy for analytics dashboards that made complex financial data feel actionable and trustworthy. The terminology standards became the organizational model for handling specialized financial topics at scale.",
          ]}
        />

        <ExperienceEntry
          title="Sr. UX Writer, Alaska Airlines"
          dates="2019–2021"
          bullets={[
            "Led Alaska\u2019s content design practice by establishing the company\u2019s first UX style guide, creating organizational infrastructure that reduced call center volume 15-20% and enabled consistent customer experiences across digital touch points.",
          ]}
        />

        <ExperienceEntry
          title="UX Writer, Zulily"
          dates="2018–2019"
          bullets={[
            "Established content patterns for error messaging and notifications that became the standard across web and mobile, enabling consistent user experiences in a fast-paced e-commerce environment.",
          ]}
        />

        <Divider />

        {/* Skills + face_wink */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "flex-start",
            marginBottom: 48,
          }}
        >
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.4)",
                marginBottom: 20,
              }}
            >
              Skills
            </p>
            {[
              {
                label: "AI & Conversational Design",
                items:
                  "LLM prompt engineering, generative AI features, agentic workflows, multimodal interfaces, AI response strategies, training taxonomies, evaluation frameworks for non-deterministic systems",
              },
              {
                label: "Content Strategy & Systems",
                items:
                  "Information architecture, voice and tone frameworks, style guides, terminology standards, content patterns, decision-making frameworks, organizational alignment",
              },
              {
                label: "Design & Tools",
                items:
                  "Figma (journey mapping, conversation flows, prototyping), design system collaboration, cross-platform content",
              },
              {
                label: "Localization & Accessibility",
                items:
                  "International content adaptation, ML-powered translation strategies, localization best practices, accessibility standards, cultural context",
              },
              {
                label: "Languages",
                items: "English (native), Portuguese, Urdu, Hindi",
              },
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
                  {s.label}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: "rgba(26,26,26,0.6)",
                  }}
                >
                  {s.items}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Education + face_grad */}
        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "flex-start",
            marginBottom: 48,
          }}
        >
          <div style={{ flex: 1 }}>
            <SectionLabel>Education</SectionLabel>
            <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>
              University of Washington
            </p>
            <p
              style={{
                fontSize: 14,
                color: "rgba(26,26,26,0.6)",
                marginBottom: 16,
              }}
            >
              Anthropology &amp; Education, minor in Language Studies
            </p>
            <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>
              UX Writers Collective
            </p>
            <p style={{ fontSize: 14, color: "rgba(26,26,26,0.6)" }}>
              Certified UX Writer
            </p>
          </div>
        </div>

        <Divider />

        {/* Footer text */}
        <p
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: "rgba(26,26,26,0.4)",
            textAlign: "center",
          }}
        >
          Mohammed Raza &middot; Sr. Content Designer &amp; UX Writer &middot;
          razacontent.com
        </p>
      </div>
    </div>
  );
}

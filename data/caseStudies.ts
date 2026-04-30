import type { IconName } from "@/lib/icons";

export type Accent = "canary" | "coral" | "matcha" | "blue";
export type StampVariant = "featured" | "founded" | "pts" | "shipped";

export interface CaseStudy {
  slug: string;
  org: string;
  issue: number;
  readMin: number;
  dateRange: string;
  accent: Accent;
  stamp: { variant: StampVariant; label: string };
  theme: string;
  headline: { before: string; accent: string; after: string };
  hook: string;
  icons: [IconName, IconName, IconName];
  iconLabels: [string, string, string];
  trackALabel: string;
  trackAItems: string[];
  trackBLabel: string;
  trackBItems: string[];
  metricStrip?: { label: string; html: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "amazon-prime",
    org: "Amazon Prime",
    issue: 1,
    readMin: 15,
    dateRange: "2022—2025",
    accent: "canary",
    stamp: { variant: "featured", label: "Featured" },
    theme: "Membership Growth · Content Systems",
    headline: { before: "How Prime ", accent: "earns", after: " loyalty." },
    hook:
      "I led Prime's value communication framework: the research synthesis, the system architecture, and the rubric ten Membership Growth teams now ship from. Three parts: the framework, the work applied to membership growth, and the LLM-led celebration system the rubric scaled into.",
    icons: ["personalization", "aiSystems", "lifecycle"],
    iconLabels: ["Personalization", "AI systems", "Lifecycle"],
    trackALabel: "Track A · Writing",
    trackAItems: [
      "Value Communication Framework",
      "Pillars × principles × tones architecture",
      "Per-segment messaging matrix",
      "Surface-by-surface lifecycle copy",
    ],
    trackBLabel: "Track B · Systems",
    trackBItems: [
      "Rubric scorable from day one",
      "Rolled out to ten growth teams",
      "Scaled to LLM-led milestone copy",
      "Operational artifacts shipped, in use today",
    ],
    metricStrip: {
      label: "Funnel impact",
      html:
        "<strong>+77K</strong> annual lift · <strong>10+</strong> teams adopted · <strong>200M+</strong> in scope",
    },
  },
  {
    slug: "crunchyroll",
    org: "Crunchyroll",
    issue: 2,
    readMin: 14,
    dateRange: "2022—2024",
    accent: "coral",
    stamp: { variant: "founded", label: "Founded" },
    theme: "Ad Experience · Content Systems · Trust UX",
    headline: { before: "When the ad is the ", accent: "product", after: "." },
    hook:
      "Crunchyroll had always run ads. What it didn't have was content design thinking behind them. As the only content designer in the org, I founded the practice from scratch and applied it to the ad experience across CTV, mobile, and web, for 10M+ members in a high-distrust environment.",
    icons: ["brandVoice", "conversion", "streaming"],
    iconLabels: ["Trust UX", "Conversion", "Streaming"],
    trackALabel: "Writing & craft",
    trackAItems: [
      "Pre-play, core-play, post-play system",
      "Counter-as-contract pattern",
      "Member-state signal system",
      "Privacy and consent UX",
    ],
    trackBLabel: "Strategic impact",
    trackBItems: [
      "0 to 1 content practice founded",
      "10M+ members across CTV, mobile, web",
      "−30% support contacts after shipping",
      "+18 pts NPS, ad-tier members",
    ],
  },
  {
    slug: "shopify",
    org: "Shopify",
    issue: 3,
    readMin: 9,
    dateRange: "2019—2020",
    accent: "matcha",
    stamp: { variant: "pts", label: "+29%" },
    theme: "Marketing Analytics · Information Architecture",
    headline: { before: "Abandonment to ", accent: "adoption", after: "." },
    hook:
      "Twelve percent of Shopify merchants used Marketing Analytics. The rest opened the tab and closed it. The data was already there, but the interface gave merchants no reason to trust the numbers and no path to act on them. I led the content strategy that turned a reporting tool into a decision-making system.",
    icons: ["merchants", "analytics", "decisions"],
    iconLabels: ["Merchants", "Analytics", "Decisions"],
    trackALabel: "Writing & craft",
    trackAItems: [
      "Cross-platform terminology audit",
      "Twelve-merchant shadowing study",
      "Three content shifts (Feature → Task, Causation → Attribution, Builder → Analyst)",
      "Three-part tooltip pattern",
    ],
    trackBLabel: "Strategic impact",
    trackBItems: [
      "12% → 28% Marketing Analytics adoption",
      "+29% Attribution page engagement",
      "+37% Automation activation, Q1 post-launch",
      "Adopted across Marketing products",
    ],
  },
  {
    slug: "turbotax",
    org: "Intuit · TurboTax",
    issue: 4,
    readMin: 10,
    dateRange: "2018—2019",
    accent: "blue",
    stamp: { variant: "shipped", label: "Shipped" },
    theme: "Filing Completion · Compliance Content",
    headline: { before: "Making tax law feel ", accent: "human", after: "." },
    hook:
      "A high-stakes FBAR filing flow was abandoning users mid-flow because the language read like federal regulation. I built a five-phase content engineering workflow on Writer.ai that combined prompt engineering with structured legal review, then rewrote the flow line by line with every legally immovable term preserved.",
    icons: ["taxForm", "plainWords", "legalSeal"],
    iconLabels: ["Tax form", "Plain words", "Legal seal"],
    trackALabel: "Writing & craft",
    trackAItems: [
      "Five-phase content engineering workflow",
      "Four-point quality checklist",
      "Three content principles",
      "Three documented rewrites at line level",
    ],
    trackBLabel: "Strategic impact",
    trackBItems: [
      "341% FBAR adoption, year-over-year",
      "100% legal approval rate across rewrites",
      "8th-grade reading level, down from college-graduate",
      "Workflow documented for team transfer",
    ],
  },
];

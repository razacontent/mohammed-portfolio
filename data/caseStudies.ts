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
    readMin: 4,
    dateRange: "2022—2025",
    accent: "canary",
    stamp: { variant: "featured", label: "Featured" },
    theme: "Membership Growth · Content Systems",
    headline: { before: "Re-instilling the ", accent: "value", after: " behind Prime." },
    hook:
      "Prime was scaling fast and losing the emotional contract with members to new competition. I worked across two tracks: writing the value back into the membership funnel, and building the AI-powered content systems that scaled that work to every team at Prime.",
    icons: ["personalization", "aiSystems", "lifecycle"],
    iconLabels: ["Personalization", "AI systems", "Lifecycle"],
    trackALabel: "Track A · Writing",
    trackAItems: [
      "Value Communication Framework",
      "Social-proof & milestone strings",
      "Personalized lifecycle copy",
      "Regional voice & localization",
    ],
    trackBLabel: "Track B · Systems",
    trackBItems: [
      "AI content schemas & taxonomy",
      "Voice framework & design system",
      "Org-wide rollout to 15 teams",
      "3 GenAI programs running on it",
    ],
    metricStrip: {
      label: "Funnel impact",
      html:
        "<strong>+77K</strong> retained · <strong>400M</strong> personalized moments · <strong>15</strong> teams adopted",
    },
  },
  {
    slug: "crunchyroll",
    org: "Crunchyroll",
    issue: 2,
    readMin: 5,
    dateRange: "2020—2022",
    accent: "coral",
    stamp: { variant: "founded", label: "Founded" },
    theme: "Membership Growth · Monetization · Product",
    headline: { before: "Founding the content design ", accent: "craft", after: " from one." },
    hook:
      "Joined as the only content designer at a 13M+ subscriber service. Grew the craft, socialized it across the org, and partnered with PMs, brand, and growth on the writing that powered free-to-premium conversion, ad-tier launch, and the everyday product experience.",
    icons: ["brandVoice", "conversion", "streaming"],
    iconLabels: ["Brand voice", "Conversion", "Streaming"],
    trackALabel: "Writing & craft",
    trackAItems: [
      "Brand voice & product writing principles",
      "Free-to-premium upgrade flow strings",
      "Ad-tier launch copy & plan compare",
      "In-app messaging & queue copy",
    ],
    trackBLabel: "Strategic impact",
    trackBItems: [
      "Established the craft, org-wide",
      "Partner enablement: PMs, brand, growth",
      "Powered ad-tier launch funnel",
      "Embedded into 13M+ subscriber service",
    ],
  },
  {
    slug: "shopify",
    org: "Shopify",
    issue: 3,
    readMin: 4,
    dateRange: "2019—2020",
    accent: "matcha",
    stamp: { variant: "pts", label: "+18 PTS" },
    theme: "Merchant Activation · Daily Habit",
    headline: { before: "Turning analytics from intimidating into a ", accent: "daily habit", after: "." },
    hook:
      "Merchants were calling analytics \"intimidating\" and only 12% checked it weekly. I rewrote the strings, restructured the dashboard around real merchant decisions, and built patterns that turned a tool people avoided into part of how they run their store.",
    icons: ["merchants", "analytics", "decisions"],
    iconLabels: ["Merchants", "Analytics", "Decisions"],
    trackALabel: "Writing & craft",
    trackAItems: [
      "Decision-language strings",
      "Plain-English chart labels",
      "Practitioner-led research",
      "Pattern documentation",
    ],
    trackBLabel: "Strategic impact",
    trackBItems: [
      "Trust score lifted +18 points",
      "Adoption rebuilt from 12% baseline",
      "Adopted as the analytics template",
      "Influenced merchants on $200B+ GMV",
    ],
  },
  {
    slug: "turbotax",
    org: "TurboTax",
    issue: 4,
    readMin: 3,
    dateRange: "2018—2019",
    accent: "blue",
    stamp: { variant: "shipped", label: "Shipped" },
    theme: "Filing Completion · High-Stakes Forms",
    headline: { before: "Helping people ", accent: "finish", after: " the forms they were quitting on." },
    hook:
      "A high-stakes tax form was abandoning users mid-flow because the language read like a federal regulation. I rewrote it line by line with legal, built a four-point clarity standard, and turned a flow people gave up on into one they completed.",
    icons: ["taxForm", "plainWords", "legalSeal"],
    iconLabels: ["Tax form", "Plain words", "Legal seal"],
    trackALabel: "Writing & craft",
    trackAItems: [
      "Regulatory-to-plain-language strings",
      "Four-point clarity standard",
      "Legal partnership & review flow",
      "Conversion-flow recovery",
    ],
    trackBLabel: "Strategic impact",
    trackBItems: [
      "Recovered abandoned completion rate",
      "Zero legal rejections, faster ship cycle",
      "Standard adopted across compliance flows",
      "Influenced filing for 50M+ users",
    ],
  },
];

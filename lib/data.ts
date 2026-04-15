import {
  ICON_AMAZON,
  ICON_CRUNCHYROLL,
  ICON_SHOPIFY,
  ICON_TURBOTAX,
} from "./assets";

export const navItems = [
  { label: "Work", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "About Me", href: "/about" },
];

export interface CaseStudy {
  slug: string;
  company: string;
  icon: string;
  dotColor: string;
  headline: string;
  subhead: string;
  tags: string[];
  proficiencies: string[];
  summary: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "amazon-prime",
    company: "Amazon Prime",
    icon: ICON_AMAZON,
    dotColor: "#378ADD",
    headline: "Building Prime\u2019s first content strategy \u2014 and making it run without me",
    subhead:
      "Every benefit was real. Not one of them was felt. I built the content architecture, naming taxonomy, and AI schema that changed how Prime communicates value across its design system, three GenAI programs, and 200M+ members worldwide.",
    tags: [
      "Content engineering",
      "AI content systems",
      "Design systems",
      "Voice architecture",
      "Retention",
      "Localization",
    ],
    proficiencies: [
      "Content systems architecture",
      "AI content frameworks",
      "Measurement rubric design",
      "Design system content (Lumix)",
      "Research synthesis",
      "Lifecycle strategy",
      "Localization & RTL",
      "Cross-functional leadership",
    ],
    summary:
      'Built Prime\u2019s first unified content strategy \u2014 a Value Communications Playbook adopted by <strong style="color: #1a1a1a; font-weight: 500;">15+ teams</strong>, a dual-purpose naming taxonomy serving human writers and AI generation simultaneously, and the content architecture for Project Aurora (AI-powered onboarding, 2026). Led Milestones, driving <strong style="color: #1a1a1a; font-weight: 500;">+77K annualized member impact</strong> through non-incentivized emotional design. Governed <strong style="color: #1a1a1a; font-weight: 500;">400M+ AI-personalized touchpoints</strong> across PriME, Binoculars, and Kairos. The work proved that content architecture is the difference between members who use Prime and members who feel it.',
  },
  {
    slug: "turbotax-fbar",
    company: "Intuit TurboTax",
    icon: ICON_TURBOTAX,
    dotColor: "#378ADD",
    headline: "Making tax law feel human",
    subhead:
      "The FBAR filing experience was written for compliance lawyers, not for the people who actually had to file. I rebuilt the content system using prompt engineering and GenAI tooling, increasing FBAR adoption by 341%.",
    tags: [
      "FinTech",
      "Compliance content",
      "Content engineering",
      "Prompt engineering",
      "GenAI tooling",
    ],
    proficiencies: [
      "Compliance content",
      "Prompt engineering",
      "GenAI tooling (Writer.ai)",
      "Legal review navigation",
      "Readability optimization",
      "Content systems",
      "Decision logging",
    ],
    summary:
      'Rebuilt TurboTax\u2019s FBAR filing content from the ground up using a five-phase prompt engineering workflow with Writer.ai. Cut reading level from college-graduate to <strong style="color: #1a1a1a; font-weight: 500;">8th grade</strong> while maintaining 100% legal compliance. Every rewrite cleared legal review without a single failure. The work drove a <strong style="color: #1a1a1a; font-weight: 500;">341% increase in FBAR adoption</strong> year-over-year. The workflow became the organizational model for compliance-adjacent content work across TurboTax products.',
  },
  {
    slug: "crunchyroll",
    company: "Crunchyroll",
    icon: ICON_CRUNCHYROLL,
    dotColor: "#1D9E75",
    headline: "When the ad is the product",
    subhead:
      "How do you introduce advertising to 10M+ members of a deeply passionate fanbase without eroding the trust that makes them fans in the first place?",
    tags: [
      "Streaming",
      "Ad experience",
      "Consumer trust",
      "Privacy UX",
      "CTV / mobile / web",
    ],
    proficiencies: [
      "Ad experience content design",
      "Cross-surface content systems",
      "Trust and privacy language",
      "Member feedback UX",
      "Content practice creation",
    ],
    summary:
      'As sole content designer for Crunchyroll\u2019s global ad experience, I built the content system governing how members encountered advertising across <strong style="color: #1a1a1a; font-weight: 500;">CTV, mobile, and web</strong>. Internal research showed only <strong style="color: #1a1a1a; font-weight: 500;">18% of members trusted platform recommendations</strong>, meaning every ad surface was a high-stakes trust moment before a single ad ran. I designed language for ad break bridges, behavioral targeting opt-outs, ad flagging flows, and cross-surface content patterns, ensuring consistent member experience despite fundamentally different viewing contexts on each platform. The result: a <strong style="color: #1a1a1a; font-weight: 500;">30% reduction in support contacts</strong>, signaling that members could navigate the ad experience without escalating.',
  },
  {
    slug: "shopify",
    company: "Shopify",
    icon: ICON_SHOPIFY,
    dotColor: "#1D9E75",
    headline: "Abandonment to adoption",
    subhead:
      "How do you turn a 12% adoption analytics tool into a decision-making system when the data is there but the interface gives merchants no reason to trust it and no path to act on it?",
    tags: [
      "E-commerce",
      "SaaS",
      "Analytics",
      "B2B",
      "Progressive disclosure",
      "Content systems",
    ],
    proficiencies: [
      "Information architecture",
      "Cross-platform audit",
      "Progressive disclosure",
      "Merchant research",
      "Tooltip content systems",
      "Internal alignment",
    ],
    summary:
      'Led content strategy for Shopify\u2019s Marketing Analytics redesign, transforming a <strong style="color: #1a1a1a; font-weight: 500;">12% adoption</strong> reporting tool into a <strong style="color: #1a1a1a; font-weight: 500;">28% adoption</strong> decision-making system. Built three foundational artifacts that changed how the organization understood the problem, then designed three content strategy shifts and a <strong style="color: #1a1a1a; font-weight: 500;">three-part tooltip pattern adopted across 12 metrics</strong>. The work drove +29% attribution engagement, +37% automation activation, and established metric governance standards that scaled across Marketing products.',
  },
];

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
    headline: "Building Amazon Prime\u2019s content infrastructure to speak to people like they matter",
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
      "No content practice. No system. No documentation. I joined as the only content designer in the organization and built the content infrastructure governing how 10M+ members experienced advertising across CTV, mobile, and web \u2014 from scratch.",
    tags: [
      "Content systems engineering",
      "0-to-1 practice",
      "Cross-surface systems",
      "Ad experience",
      "Privacy UX",
      "Documentation",
    ],
    proficiencies: [
      "0-to-1 content practice creation",
      "Sequence flow documentation",
      "Gate taxonomy design",
      "Member state signal systems",
      "Cross-surface content systems",
      "Trust and privacy language",
      "Stakeholder alignment",
    ],
    summary:
      'Built Crunchyroll\u2019s content practice from scratch as its only content designer \u2014 architecting a <strong style="color: #1a1a1a; font-weight: 500;">full player state sequence flow</strong>, a six-gate taxonomy across four surfaces, and a member state signal system that governed skip, upsell, and counter decisions across the member lifecycle. The system drove <strong style="color: #1a1a1a; font-weight: 500;">+22% ad completion, +18pt NPS</strong>, and a <strong style="color: #1a1a1a; font-weight: 500;">30% reduction in support contacts</strong>. Every outcome traces back to a documented content architecture decision, not a copy change.',
  },
  {
    slug: "shopify",
    company: "Shopify",
    icon: ICON_SHOPIFY,
    dotColor: "#1D9E75",
    headline: "Abandonment to adoption",
    subhead:
      "Shopify Analytics was a practitioner tool that had never been designed for practitioners. I rebuilt it from the terminology up \u2014 naming decisions, progressive disclosure architecture, and a tooltip system that scaled across 12 metrics without me.",
    tags: [
      "Practitioner tools",
      "Feature naming",
      "Terminology systems",
      "E-commerce",
      "Progressive disclosure",
      "Content systems",
    ],
    proficiencies: [
      "Feature naming",
      "Terminology systems",
      "Information architecture",
      "Cross-platform audit",
      "Progressive disclosure",
      "Alignment facilitation",
      "Content system scalability",
    ],
    summary:
      'Led content strategy for Shopify\u2019s Marketing Analytics redesign, reframing a <strong style="color: #1a1a1a; font-weight: 500;">12% adoption</strong> reporting tool into a <strong style="color: #1a1a1a; font-weight: 500;">28% adoption</strong> decision-making system through naming decisions, information architecture, and a three-part tooltip pattern. Facilitated a cross-team alignment workshop that resolved a six-month definition stalemate and produced a 23-metric definition matrix. The tooltip pattern and terminology standards were <strong style="color: #1a1a1a; font-weight: 500;">adopted independently by other teams</strong> across Attribution and Automations \u2014 the same practitioner-tool content problem Figma solves with every complex feature it ships.',
  },
];

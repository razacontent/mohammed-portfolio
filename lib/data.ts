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
    slug: "crunchyroll",
    company: "Crunchyroll",
    icon: ICON_CRUNCHYROLL,
    dotColor: "#1D9E75",
    headline: "When the ad is the product",
    subhead:
      "How do you introduce advertising to 10M+ members of a deeply passionate fanbase \u2014 without eroding the trust that makes them fans in the first place?",
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
      'As sole content designer for Crunchyroll\'s global ad experience, I built the content system governing how members encountered advertising across <strong style="color: #1a1a1a; font-weight: 500;">CTV, mobile, and web</strong>. Internal research showed only <strong style="color: #1a1a1a; font-weight: 500;">18% of members trusted platform recommendations</strong> \u2014 meaning every ad surface was a high-stakes trust moment before a single ad ran. I designed language for ad break bridges, behavioral targeting opt-outs, ad flagging flows, and cross-surface content patterns \u2014 ensuring consistent member experience despite fundamentally different viewing contexts on each platform. The result: a <strong style="color: #1a1a1a; font-weight: 500;">30% reduction in support contacts</strong>, signaling that members could navigate the ad experience without escalating.',
  },
  {
    slug: "amazon",
    company: "Amazon",
    icon: ICON_AMAZON,
    dotColor: "#378ADD",
    headline: "Evidence at scale",
    subhead:
      "How do you shift a 15+ team organization from opinion-based to evidence-based content decisions \u2014 while building retention messaging that moves member behavior across 12 international markets?",
    tags: [
      "E-commerce",
      "Subscription",
      "Retention",
      "Experimentation",
      "International",
    ],
    proficiencies: [
      "Content experimentation design",
      "Cross-functional content systems",
      "Retention messaging",
      "Value communication frameworks",
      "International market content",
    ],
    summary:
      'At Amazon Prime, I built the <strong style="color: #1a1a1a; font-weight: 500;">Value Communication framework</strong> adopted across 15+ teams and led content design for the Milestones retention program \u2014 contributing to <strong style="color: #1a1a1a; font-weight: 500;">+77K annualized member impact</strong>. Alongside the retention work, I established an <strong style="color: #1a1a1a; font-weight: 500;">experimentation practice</strong> that shifted the organization from subjective content decisions to evidence-based ones, and led content for <strong style="color: #1a1a1a; font-weight: 500;">12 international market launches</strong>. The work demonstrated that content design \u2014 when grounded in research and tested rigorously \u2014 is a direct lever on business outcomes, not a support function.',
  },
  {
    slug: "shopify",
    company: "Shopify",
    icon: ICON_SHOPIFY,
    dotColor: "#1D9E75",
    headline: "Abandonment to adoption",
    subhead:
      "How do you turn a 12% adoption analytics tool into a decision-making system \u2014 when the data is there but the interface gives merchants no reason to trust it and no path to act on it?",
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
  {
    slug: "turbotax",
    company: "TurboTax / Intuit",
    icon: ICON_TURBOTAX,
    dotColor: "#378ADD",
    headline: "",
    subhead: "",
    tags: [],
    proficiencies: [],
    summary: "",
  },
];

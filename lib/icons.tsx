import type { ReactNode } from "react";

export type IconName =
  | "personalization"
  | "aiSystems"
  | "lifecycle"
  | "brandVoice"
  | "conversion"
  | "streaming"
  | "merchants"
  | "analytics"
  | "decisions"
  | "taxForm"
  | "plainWords"
  | "legalSeal";

export const icons: Record<IconName, ReactNode> = {
  personalization: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  ),
  aiSystems: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="6" cy="6" r="1.6" fill="currentColor" />
      <circle cx="18" cy="6" r="1.6" fill="currentColor" />
      <circle cx="6" cy="18" r="1.6" fill="currentColor" />
      <circle cx="18" cy="18" r="1.6" fill="currentColor" />
      <line x1="9.5" y1="10" x2="7" y2="7.5" />
      <line x1="14.5" y1="10" x2="17" y2="7.5" />
      <line x1="9.5" y1="14" x2="7" y2="16.5" />
      <line x1="14.5" y1="14" x2="17" y2="16.5" />
    </svg>
  ),
  lifecycle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="12" r="2.5" />
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="19" cy="12" r="2.5" />
      <line x1="7.5" y1="12" x2="9.5" y2="12" />
      <line x1="14.5" y1="12" x2="16.5" y2="12" />
      <path d="M16 10 L17 12 L16 14" strokeWidth="1.5" />
    </svg>
  ),
  brandVoice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10c0-3 3-6 7-6h4c4 0 7 3 7 6s-3 6-7 6h-2l-5 4 1-4c-3-1-5-3-5-6z" />
      <path d="M9 9l1.5 2" />
      <path d="M14 9l-1.5 2" />
    </svg>
  ),
  conversion: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12 L8 7 L8 10 L21 10 L21 14 L8 14 L8 17 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M3 12 L8 7 L8 10 L21 10 L21 14 L8 14 L8 17 Z" />
    </svg>
  ),
  streaming: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8l7 4-7 4z" fill="currentColor" />
    </svg>
  ),
  merchants: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8l2-3h14l2 3" />
      <path d="M3 8h18" />
      <path d="M5 8v12h14V8" />
      <path d="M9 8v12M15 8v12" />
    </svg>
  ),
  analytics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="14" width="4" height="7" />
      <rect x="10" y="9" width="4" height="12" />
      <rect x="16" y="5" width="4" height="16" />
      <path d="M3 21h18" />
    </svg>
  ),
  decisions: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="2" />
      <circle cx="6" cy="13" r="2" />
      <circle cx="18" cy="13" r="2" />
      <circle cx="6" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <line x1="11" y1="5" x2="7" y2="11" />
      <line x1="13" y1="5" x2="17" y2="11" />
      <line x1="6" y1="15" x2="6" y2="18" />
      <line x1="18" y1="15" x2="18" y2="18" />
    </svg>
  ),
  taxForm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M8 8h8M8 12h8M8 16h5" />
      <path d="M16 16l1.5 1.5 3-3" stroke="#4A7BB7" strokeWidth="2" />
    </svg>
  ),
  plainWords: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7 L20 7 M4 12 L20 12 M4 17 L14 17" />
      <path d="M17 17 L20 14 L23 17" strokeWidth="2" />
    </svg>
  ),
  legalSeal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="6" />
      <path d="M12 6l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" />
      <path d="M7 18h10v3H7z" />
    </svg>
  ),
};

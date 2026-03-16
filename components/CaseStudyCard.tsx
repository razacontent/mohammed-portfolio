"use client";

import { useState } from "react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/data";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/work/${study.slug}`} className="no-underline text-ink block">
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "#fff" : "transparent",
          border: hovered
            ? "1.5px solid rgba(26,26,26,0.15)"
            : "1.5px solid rgba(26,26,26,0.1)",
          borderRadius: 14,
          padding: "2.25rem 2.25rem 2rem",
          marginBottom: "1.25rem",
          position: "relative",
          transition: "all 0.2s ease",
        }}
      >
        {/* Company label */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            color: "rgba(26,26,26,0.4)",
            marginBottom: "0.5rem",
          }}
        >
          {study.company}
        </p>

        {/* Icon */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={study.icon}
          alt={study.company}
          style={{
            width: 100,
            height: 100,
            objectFit: "contain",
            marginBottom: "0.75rem",
          }}
        />

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 26,
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: "0.6rem",
          }}
        >
          {study.headline || "\u00A0"}
        </h2>

        {/* Subhead */}
        <p
          style={{
            fontSize: 14,
            color: "rgba(26,26,26,0.6)",
            lineHeight: 1.65,
            maxWidth: 560,
            marginBottom: "1.5rem",
          }}
        >
          {study.subhead || "\u00A0"}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 7,
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "rgba(26,26,26,0.4)",
              marginRight: 2,
            }}
          >
            Context
          </span>
          {study.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 12,
                fontWeight: 400,
                color: "rgba(26,26,26,0.6)",
                background: "rgba(26,26,26,0.03)",
                border: "0.5px solid rgba(26,26,26,0.1)",
                borderRadius: 100,
                padding: "3px 11px",
                lineHeight: 1.5,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "0.5px solid rgba(26,26,26,0.1)",
            margin: "0 0 1.5rem",
          }}
        />

        {/* Proficiencies + Summary grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.4)",
                marginBottom: "0.75rem",
              }}
            >
              Proficiencies
            </p>
            <ul style={{ listStyle: "none" }}>
              {study.proficiencies.map((p) => (
                <li
                  key={p}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    fontSize: 13,
                    color: "rgba(26,26,26,0.6)",
                    lineHeight: 1.5,
                    padding: "5px 0",
                    borderBottom: "0.5px solid rgba(26,26,26,0.1)",
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "rgba(26,26,26,0.18)",
                      flexShrink: 0,
                    }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.4)",
                marginBottom: "0.75rem",
              }}
            >
              Summary
            </p>
            <p
              style={{
                fontSize: 14,
                color: "rgba(26,26,26,0.6)",
                lineHeight: 1.8,
              }}
              dangerouslySetInnerHTML={{
                __html: study.summary || "\u00A0",
              }}
            />
          </div>
        </div>
      </article>
    </Link>
  );
}

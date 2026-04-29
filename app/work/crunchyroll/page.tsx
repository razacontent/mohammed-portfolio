import Breadcrumb from "@/components/Breadcrumb";
import ArticleHeader from "@/components/ArticleHeader";
import RoleStrip from "@/components/RoleStrip";
import ChapterSection, { BodyProse } from "@/components/ChapterSection";
import PullQuote from "@/components/PullQuote";
import TrackPanels from "@/components/TrackPanel";
import StringBlock from "@/components/StringBlock";
import ResultsHero from "@/components/ResultsHero";
import ReflectionCard from "@/components/ReflectionCard";
import NextIssue from "@/components/NextIssue";

export const metadata = {
  title: "Founding the content design craft from one · razacontent",
};

export default function CrunchyrollPage() {
  return (
    <div data-accent="coral">
      <Breadcrumb current="Issue №02 · Crunchyroll" />

      <ArticleHeader
        issueNum="Issue №02"
        org="Crunchyroll"
        meta="· 2020—2022 · 5 min read"
        theme="Membership Growth · Monetization · Product"
        headline={
          <>
            Founding the content design <span className="accent">craft</span>{" "}
            from one.
          </>
        }
        hook={
          <>
            Joined as the <strong>only content designer</strong> at a 13M+
            subscriber service. Grew the craft, socialized it across the org,
            and partnered with PMs, brand, and growth on the writing that
            powered free-to-premium conversion, ad-tier launch, and the
            everyday product experience.
          </>
        }
        stats={[
          { num: "13M+", label: "Subscribers reached", featured: true },
          { num: "0→1", label: "Content design practice founded" },
          { num: "Ad-tier", label: "Launch funnel powered end-to-end" },
          { num: "15+", label: "Cross-functional partners enabled" },
        ]}
      />

      <RoleStrip
        items={[
          { label: "My role", value: "Founding Content Designer" },
          { label: "Team", value: "Product · Brand · Growth · Monetization" },
          { label: "Duration", value: "2020 — 2022" },
          {
            label: "Surfaces shipped",
            value: "Web, mobile, TV apps · upgrade flows · in-app messaging",
          },
        ]}
      />

      <ChapterSection
        eyebrow="Chapter 01 · The problem"
        title="No content practice. No principles. No common language."
      >
        <BodyProse>
          <p>
            Crunchyroll was about to launch its ad-supported tier and roll
            out a free-to-premium upgrade flow that would carry most of its
            growth for the next two years. The product surfaces had grown
            faster than the writing that lived on them. PMs were drafting
            their own copy. Brand had a tone of voice that didn&rsquo;t
            descend cleanly to in-product strings. Localization was working
            from English source text that contradicted itself across
            screens.
          </p>
          <p>
            I joined as the <strong>only content designer</strong> in the
            company. The first job wasn&rsquo;t a feature. It was naming
            what content design even did at Crunchyroll, and giving partners
            a way to use it.
          </p>
        </BodyProse>

        <PullQuote attribution="Notes from week 4">
          &ldquo;The brand voice exists. The product voice is whatever the
          last PM wrote on a Tuesday. We need a way to bridge them.&rdquo;
        </PullQuote>
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 02 · The approach"
        title={
          <>
            Build the <span className="accent">craft</span> while shipping the
            work.
          </>
        }
      >
        <BodyProse>
          <p>
            I refused to spend the first quarter writing principles in a
            vacuum. The practice had to be born from real shipped surfaces,
            not from a deck. So I split my time: half on the upgrade flow and
            ad-tier launch copy that the business needed, half on extracting
            and codifying the principles that fell out of those decisions.
          </p>
        </BodyProse>

        <TrackPanels
          tracks={[
            {
              variant: "default",
              label: "Track A · Writing",
              title: "Ship the funnel that drove the year",
              body: (
                <>
                  Wrote the copy for free-to-premium conversion, the ad-tier
                  plan-compare and onboarding, and the in-app messaging that
                  carried members between them. Every string A/B tested
                  against PM-drafted control.
                </>
              ),
              items: [
                "Free-to-premium upgrade flow",
                "Ad-tier launch & plan compare",
                "In-app messaging & queue copy",
                "Localization-ready source strings",
              ],
            },
            {
              variant: "systems",
              label: "Track B · Craft",
              title: "Found the practice the company needed",
              body: (
                <>
                  Distilled the writing decisions into a brand-aligned product
                  voice framework. Trained PMs and designers on it. Embedded
                  it in the design system so the next ten content designers
                  inherited a working baseline instead of a blank page.
                </>
              ),
              items: [
                "Brand voice → product voice translation",
                "Product writing principles, documented",
                "PM and designer enablement",
                "Embedded in design system",
              ],
            },
          ]}
        />
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 03 · The work"
        title="The strings that carried the funnel."
      >
        <BodyProse>
          <p>
            The upgrade flow was the highest-leverage surface in the product.
            The pre-existing copy explained features. I rewrote it to
            acknowledge a relationship: what the member already loved about
            Crunchyroll that the upgrade would deepen.
          </p>
        </BodyProse>

        <StringBlock
          title="Upgrade prompt · post-trial"
          voicePrinciple="acknowledge the relationship"
          before="Your free trial has ended. Subscribe to keep watching."
          after="You've watched 14 episodes this week. Keep going — Premium gets you the rest of the season, ad-free, the day each one airs."
        />

        <BodyProse>
          <p>
            The ad-tier launch was harder. Members reading the announcement
            had to feel that an ad-supported tier was an additive option, not
            a hidden price hike. The plan-compare needed to be honest about
            trade-offs without underselling the free experience.
          </p>
        </BodyProse>

        <StringBlock
          title="Ad-tier plan compare · headline"
          voicePrinciple="honest trade-offs, no spin"
          before="Crunchyroll is now even better with our new ad-supported plan!"
          after="Two ways to watch. Free, with ads. Or Premium — same library, no ads, day-of release."
        />
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 04 · Results"
        title="The funnel shipped. The craft outlasted me."
        style={{ paddingTop: 32, paddingBottom: 32 }}
      />

      <ResultsHero
        eyebrow="Strategic impact"
        results={[
          {
            num: "13M+",
            text: (
              <>
                <strong>Subscribers</strong> on the platform when the upgrade
                flow and ad-tier launch shipped
              </>
            ),
          },
          {
            num: "0→1",
            text: (
              <>
                <strong>Content design practice</strong> founded inside an
                org that had never had one
              </>
            ),
          },
          {
            num: "15+",
            text: (
              <>
                <strong>Partner teams</strong> writing aligned product copy
                without me reviewing every string
              </>
            ),
          },
          {
            num: "100%",
            text: (
              <>
                <strong>Ad-tier launch surfaces</strong> shipped on time, on
                voice, with localization parity
              </>
            ),
          },
        ]}
      />

      <ChapterSection
        eyebrow="Chapter 05 · Reflection"
        title={<>What I&rsquo;d do differently.</>}
      >
        <ReflectionCard label="Hindsight">
          The voice framework should have lived in code, not in a Notion
          page. By the time I left, partner teams were copying examples from
          the doc and pasting them into PRs.{" "}
          <strong>
            If I&rsquo;d shipped the framework as a content schema with
            sample data and a linter from day one
          </strong>
          , the practice would have scaled even further, and the next content
          designer&rsquo;s on-ramp would have been two weeks instead of two
          months.
        </ReflectionCard>
      </ChapterSection>

      <NextIssue currentSlug="crunchyroll" />
    </div>
  );
}

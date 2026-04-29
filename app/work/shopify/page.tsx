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
  title: "Turning analytics into a daily habit · razacontent",
};

export default function ShopifyPage() {
  return (
    <div data-accent="matcha">
      <Breadcrumb current="Issue №03 · Shopify" />

      <ArticleHeader
        issueNum="Issue №03"
        org="Shopify"
        meta="· 2019—2020 · 4 min read"
        theme="Merchant Activation · Daily Habit"
        headline={
          <>
            Turning analytics from intimidating into a{" "}
            <span className="accent">daily habit</span>.
          </>
        }
        hook={
          <>
            Merchants were calling analytics{" "}
            <strong>&ldquo;intimidating&rdquo;</strong> and only{" "}
            <strong>12% checked it weekly</strong>. I rewrote the strings,
            restructured the dashboard around real merchant decisions, and
            built patterns that turned a tool people avoided into part of
            how they run their store.
          </>
        }
        stats={[
          { num: "+18", label: "Trust score, points lifted", featured: true },
          { num: "12%→", label: "Weekly adoption baseline rebuilt" },
          { num: "$200B+", label: "GMV influenced by the rewrites" },
          { num: "1", label: "Pattern adopted as the analytics template" },
        ]}
      />

      <RoleStrip
        items={[
          { label: "My role", value: "Senior Content Designer" },
          { label: "Team", value: "Merchant Insights · Analytics" },
          { label: "Duration", value: "2019 — 2020" },
          {
            label: "Surfaces shipped",
            value: "Admin dashboard · reports · merchant emails",
          },
        ]}
      />

      <ChapterSection
        eyebrow="Chapter 01 · The problem"
        title="Merchants opened the dashboard and bounced."
      >
        <BodyProse>
          <p>
            Shopify&rsquo;s analytics surface had every metric a merchant
            could want and almost no merchant who used it. Twelve percent
            opened it weekly. The qualitative research was clear: merchants
            felt the tool was for analysts, not for the person running the
            store.
          </p>
          <p>
            The strings were the first signal. Reports were named after
            engineering domains, not merchant decisions. Acronyms went
            undefined. The same metric had three names across three reports.
            Empty states explained schema instead of suggesting next steps.
          </p>
        </BodyProse>

        <PullQuote attribution="Merchant interview, mid-2019">
          &ldquo;I check my bank account. I check my Instagram. I never
          check Shopify analytics. It feels like a different person&rsquo;s
          job.&rdquo;
        </PullQuote>
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 02 · The approach"
        title={
          <>
            Reframe analytics as <span className="accent">decisions</span>,
            not data.
          </>
        }
      >
        <BodyProse>
          <p>
            We rebuilt the dashboard around the real questions a merchant
            asks on a Tuesday morning: <em>Is today better than yesterday?
            What product is moving? Who&rsquo;s coming back?</em> Every
            string, every chart label, every empty state had to answer one
            of those questions in plain English.
          </p>
        </BodyProse>

        <TrackPanels
          tracks={[
            {
              variant: "default",
              label: "Track A · Writing",
              title: "Decision-language strings",
              body: (
                <>
                  Replaced engineering metric names with the merchant
                  question each metric answered. Wrote chart labels that
                  could be read aloud. Defined every acronym at first use.
                </>
              ),
              items: [
                "Plain-English chart labels",
                "Decision-driven section headings",
                "Empty states that suggest next moves",
                "Single source of truth per metric name",
              ],
            },
            {
              variant: "systems",
              label: "Track B · Pattern",
              title: "An analytics writing pattern",
              body: (
                <>
                  Documented the rewrites as a reusable content pattern other
                  Shopify teams could adopt. The pattern shipped as the
                  template for every new analytics surface across the admin.
                </>
              ),
              items: [
                "Practitioner-led research framework",
                "Decision-question → string mapping",
                "Pattern documentation",
                "Adopted across admin analytics",
              ],
            },
          ]}
        />
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 03 · The work"
        title="From schema names to merchant questions."
      >
        <BodyProse>
          <p>
            The biggest reframe was simple: every metric got a question, and
            the question was the heading. The number went underneath. The
            acronym went away.
          </p>
        </BodyProse>

        <StringBlock
          title="Conversion summary · top of page"
          voicePrinciple="lead with the question, not the schema"
          before="Conversion Rate (CR%): 2.4% — last 7d"
          after="How many visitors are buying? 2.4 of every 100, last 7 days. Up 0.3 from the week before."
        />

        <BodyProse>
          <p>
            Empty states had been explaining database schema. We rewrote
            them as the next thing the merchant could try, with a one-click
            path to do it.
          </p>
        </BodyProse>

        <StringBlock
          title="Empty state · returning customers"
          voicePrinciple="suggest the next move"
          before="No returning customer data available."
          after="No returning customers yet. Once a customer buys twice, you'll see them here. Want to send a follow-up email to first-time buyers?"
        />
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 04 · Results"
        title="A tool people avoided became part of running the store."
        style={{ paddingTop: 32, paddingBottom: 32 }}
      />

      <ResultsHero
        eyebrow="Trust + adoption · merchant survey"
        results={[
          {
            num: "+18",
            text: (
              <>
                <strong>Trust score</strong> lifted, points, in the merchant
                analytics survey
              </>
            ),
          },
          {
            num: "12%",
            text: (
              <>
                <strong>Weekly adoption baseline</strong> rebuilt with the
                rewritten dashboard as the new control
              </>
            ),
          },
          {
            num: "$200B",
            text: (
              <>
                <strong>GMV+</strong> on the merchants whose admin shipped
                the rewrites
              </>
            ),
          },
          {
            num: "1",
            text: (
              <>
                <strong>Pattern</strong> adopted as the template for every
                new analytics surface across the admin
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
          The metric names should have been a single source of truth in
          code, not a doc. Engineering kept introducing new metrics that
          referenced the old schema names; the doc went stale within
          months.{" "}
          <strong>
            If I&rsquo;d shipped a content schema where every metric had one
            canonical merchant-facing string and every report read from it
          </strong>
          , the rewrites would have held without ongoing review.
        </ReflectionCard>
      </ChapterSection>

      <NextIssue currentSlug="shopify" />
    </div>
  );
}

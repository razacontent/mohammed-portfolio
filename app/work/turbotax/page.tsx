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
  title: "Helping people finish the forms they were quitting on · razacontent",
};

export default function TurbotaxPage() {
  return (
    <div data-accent="blue">
      <Breadcrumb current="Issue №04 · TurboTax" />

      <ArticleHeader
        issueNum="Issue №04"
        org="TurboTax"
        meta="· 2018—2019 · 3 min read"
        theme="Filing Completion · High-Stakes Forms"
        headline={
          <>
            Helping people <span className="accent">finish</span> the forms
            they were quitting on.
          </>
        }
        hook={
          <>
            A high-stakes tax form was abandoning users mid-flow because the
            language read like a federal regulation. I rewrote it line by
            line with legal, built a{" "}
            <strong>four-point clarity standard</strong>, and turned a flow
            people gave up on into one they completed.
          </>
        }
        stats={[
          {
            num: "+341%",
            label: "Abandoned-flow completion lift",
            featured: true,
          },
          { num: "0", label: "Legal rejections during review" },
          { num: "1", label: "Clarity standard, four points" },
          { num: "50M+", label: "Filers reached by the standard" },
        ]}
      />

      <RoleStrip
        items={[
          { label: "My role", value: "Senior Content Designer" },
          { label: "Team", value: "Filing Experience · Compliance partnership" },
          { label: "Duration", value: "2018 — 2019" },
          {
            label: "Surfaces shipped",
            value: "FBAR flow · adjacent compliance forms · review tooling",
          },
        ]}
      />

      <ChapterSection
        eyebrow="Chapter 01 · The problem"
        title="The form was correct. It was also unreadable."
      >
        <BodyProse>
          <p>
            The flow had been written by lawyers for lawyers. Every sentence
            was technically accurate. Most users abandoned within three
            screens. The data was unambiguous: the more compliant the
            language got, the fewer people finished filing.
          </p>
          <p>
            The team had tried softening the copy before. Each attempt
            stalled in legal review because there was no shared definition
            of <em>&ldquo;clear enough.&rdquo;</em> Writers proposed plain
            language. Lawyers asked if it was still defensible. Without a
            standard, the conversation kept restarting from scratch.
          </p>
        </BodyProse>

        <PullQuote attribution="From the project kickoff">
          &ldquo;Accurate and unusable is still unusable. We need a way to
          prove a rewrite is both.&rdquo;
        </PullQuote>
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 02 · The approach"
        title={
          <>
            Build the <span className="accent">clarity standard</span> the
            review process needed.
          </>
        }
      >
        <BodyProse>
          <p>
            Instead of debating each rewrite line by line, I worked with
            legal to build a four-point clarity standard. A rewrite passed
            review if it kept the original meaning, removed undefined jargon,
            named the user&rsquo;s situation in concrete terms, and read at
            an eighth-grade level. Every line had to clear all four. Once it
            did, legal signed off without re-reading the whole flow.
          </p>
        </BodyProse>

        <TrackPanels
          tracks={[
            {
              variant: "default",
              label: "Track A · Writing",
              title: "Regulatory-to-plain-language rewrites",
              body: (
                <>
                  Worked through the form line by line. Replaced statutory
                  references with the situation they described. Surfaced the
                  user&rsquo;s actual question at the top of each screen.
                </>
              ),
              items: [
                "Plain-language source strings",
                "Concrete situation framings",
                "Pre-screen primers for each section",
                "Confidence cues at decision points",
              ],
            },
            {
              variant: "systems",
              label: "Track B · Standard",
              title: "A four-point clarity standard with legal",
              body: (
                <>
                  Co-authored the standard with TurboTax legal. Made it the
                  contract for review: rewrites that scored four out of four
                  shipped without a lawyer rereading the whole flow.
                </>
              ),
              items: [
                "Meaning-preserving rewrite criterion",
                "Jargon definition or removal",
                "Concrete situation language",
                "Eighth-grade readability target",
              ],
            },
          ]}
        />
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 03 · The work"
        title="Naming what the user was actually doing."
      >
        <BodyProse>
          <p>
            The biggest unlock was at the top of each screen. The form had
            been asking users to confirm a statutory category. We rewrote
            those prompts to describe the situation the user might be in,
            then asked the user if it matched.
          </p>
        </BodyProse>

        <StringBlock
          title="Foreign account question · primary screen"
          voicePrinciple="situation first, statute second"
          before="Did you have signature authority over a foreign financial account exceeding $10,000 in aggregate value at any time during the tax year?"
          after="Did you have access to any non-US bank or investment accounts last year — including ones in your name, joint accounts, or accounts you could move money out of?"
        />

        <BodyProse>
          <p>
            Confidence cues were the second unlock. Users abandoning the
            flow weren&rsquo;t confused. They were second-guessing
            themselves. We added one-line primers that named the most common
            situation each screen handled.
          </p>
        </BodyProse>

        <StringBlock
          title="Confidence cue · before account-detail screen"
          voicePrinciple="reduce hesitation, name the common case"
          before="Enter the maximum value of the account during the tax year."
          after="Most people enter the highest amount they saw in the account at any point last year. You can find this on a year-end statement."
        />
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 04 · Results"
        title="The flow people quit on became one they finished."
        style={{ paddingTop: 32, paddingBottom: 32 }}
      />

      <ResultsHero
        eyebrow="Filing completion · year-over-year"
        results={[
          {
            num: "+341%",
            text: (
              <>
                <strong>Completion lift</strong> on the rewritten flow,
                year over year
              </>
            ),
          },
          {
            num: "0",
            text: (
              <>
                <strong>Legal rejections</strong> during review under the
                clarity standard
              </>
            ),
          },
          {
            num: "8th",
            text: (
              <>
                <strong>Reading level</strong>, down from college-graduate,
                without losing legal accuracy
              </>
            ),
          },
          {
            num: "50M+",
            text: (
              <>
                <strong>Filers</strong> reached as the standard rolled out
                across adjacent compliance flows
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
          The clarity standard worked because legal helped write it. The
          mistake was treating the standard as a one-time deliverable
          instead of a living rubric.{" "}
          <strong>
            If I&rsquo;d staffed a recurring clarity review with legal
            quarterly
          </strong>
          , the standard would have absorbed the next regulatory change
          automatically, and adjacent teams would have inherited the
          process, not just the document.
        </ReflectionCard>
      </ChapterSection>

      <NextIssue currentSlug="turbotax" />
    </div>
  );
}

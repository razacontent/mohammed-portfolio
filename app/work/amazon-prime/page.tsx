import Breadcrumb from "@/components/Breadcrumb";
import ArticleHeader from "@/components/ArticleHeader";
import RoleStrip from "@/components/RoleStrip";
import ChapterSection, { BodyProse } from "@/components/ChapterSection";
import PullQuote from "@/components/PullQuote";
import TrackPanels from "@/components/TrackPanel";
import Artifact from "@/components/Artifact";
import StringBlock from "@/components/StringBlock";
import ResultsHero from "@/components/ResultsHero";
import ReflectionCard from "@/components/ReflectionCard";
import NextIssue from "@/components/NextIssue";

export const metadata = {
  title: "Re-instilling the value behind Prime · razacontent",
};

export default function AmazonPrimePage() {
  return (
    <div data-accent="canary">
      <Breadcrumb current="Issue №01 · Amazon Prime" />

      <ArticleHeader
        issueNum="Issue №01"
        org="Amazon Prime"
        meta="· 2022—2025 · 4 min read"
        theme="Membership Growth · Content Systems"
        headline={
          <>
            Re-instilling the <span className="accent">value</span> behind
            Prime.
          </>
        }
        hook={
          <>
            Prime was scaling fast and losing the emotional contract with
            members to new competition. I worked across two tracks:{" "}
            <strong>
              writing the value back into the membership funnel,
            </strong>{" "}
            and{" "}
            <strong>
              building the AI-powered content systems that scaled that work to
              every team at Prime.
            </strong>
          </>
        }
        stats={[
          { num: "+77K", label: "Members retained, annualized", featured: true },
          { num: "400M", label: "Personalized moments shipped" },
          { num: "15", label: "Teams adopted org-wide" },
          { num: "3", label: "GenAI programs running on it" },
        ]}
      />

      <RoleStrip
        items={[
          { label: "My role", value: "Senior Content Designer · L5" },
          {
            label: "Team",
            value: "Prime Worldwide · Membership & Personalization",
          },
          { label: "Duration", value: "2022 — 2025" },
          {
            label: "Surfaces shipped",
            value: "22 product surfaces · 9 regions · EN, PT, ES & more",
          },
        ]}
      />

      <ChapterSection
        eyebrow="Chapter 01 · The problem"
        title="Prime had outgrown the way it talked to members."
      >
        <BodyProse>
          <p>
            By 2022, Prime had become one of the largest membership programs
            in the world. Hundreds of millions of members, dozens of benefits,
            an ad-tier launch on the way, and competition arriving from every
            direction:{" "}
            <strong>
              Walmart+, Apple One, Costco, even Netflix&rsquo;s bundled tiers.
            </strong>
          </p>
          <p>
            The growth team&rsquo;s data was clear: members couldn&rsquo;t
            articulate Prime&rsquo;s value. <em>&ldquo;What do I actually
            get?&rdquo;</em> showed up in survey after survey. Members were
            canceling not because Prime had failed them, but because they had
            stopped feeling the membership at all. The benefits were there.
            The communication wasn&rsquo;t.
          </p>
          <p>
            The retention org&rsquo;s first instinct was incentives, discounts,
            save-flow offers. I argued for something different:{" "}
            <strong>
              a content engine that could surface the right value, to the
              right member, at the right moment
            </strong>{" "}
            — across every surface they touched.
          </p>
        </BodyProse>

        <PullQuote attribution="From the research synthesis · 2023">
          &ldquo;Members weren&rsquo;t churning because Prime had failed them.
          They were churning because we&rsquo;d stopped helping them feel the
          membership.&rdquo;
        </PullQuote>

        <BodyProse>
          <p>
            Four research streams converged on the same insight: Prime&rsquo;s
            communication had grown <strong>generic and transactional</strong>{" "}
            at exactly the moment competitors were getting more{" "}
            <strong>personal and humane.</strong> The fix had to operate at
            two levels at once: the writing on the page, and the system that
            produced that writing at scale.
          </p>
        </BodyProse>
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 02 · The approach"
        title={
          <>
            Two tracks, run in <span className="accent">parallel</span>.
          </>
        }
      >
        <BodyProse>
          <p>
            The work split cleanly into two tracks that fed each other. Track
            A wrote the value back into the membership. Track B built the
            systems that let that work scale to every team at Prime, in every
            region, across every product surface.
          </p>
        </BodyProse>

        <TrackPanels
          tracks={[
            {
              variant: "default",
              label: "Track A · Writing",
              title: "The Value Communication Framework",
              body: (
                <>
                  A writing system grounded in <strong>three principles</strong>:
                  pertinence (the right benefit at the right moment), empathy
                  (acknowledging the member&rsquo;s actual life), and earned
                  proof (showing rather than telling).
                </>
              ),
              items: [
                "Social-proof & milestone strings",
                "Personalized lifecycle copy at scale",
                "Regional voice, localized end-to-end",
                "A/B-tested across 22 surfaces",
              ],
            },
            {
              variant: "systems",
              label: "Track B · Systems",
              title: "AI-powered content infrastructure",
              body: (
                <>
                  A content data model and voice framework that turned{" "}
                  <strong>one writer&rsquo;s judgment into infrastructure</strong>{" "}
                  — adopted by 15 teams without me in the room.
                </>
              ),
              items: [
                "AI content schemas & taxonomy",
                "Voice framework as design system",
                "Org-wide rollout & enablement",
                "3 GenAI programs running on it",
              ],
            },
          ]}
        />

        <Artifact
          fig="Fig. 01"
          caption="The framework as it shipped — three voice principles mapped against eight lifecycle stages and twenty-two surfaces."
          placeholder={
            <>
              [framework diagram placeholder]
              <br />
              The Value Communication Framework, mapping benefit moments
              <br />
              to member lifecycle stages, voice principles, and surface types
            </>
          }
        />
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 03 · The work"
        title="Three moments, zoomed in."
      >
        <BodyProse>
          <p>
            <strong>Moment one: the welcome that wasn&rsquo;t welcoming.</strong>{" "}
            The post-signup onboarding read like a receipt. We rewrote it as
            the start of a relationship — naming what the member had just
            joined, surfacing the first benefit relevant to them, signaling
            that someone was paying attention.
          </p>
        </BodyProse>

        <StringBlock
          title="Welcome string · Day 0"
          voicePrinciple="empathy + earned proof"
          before="Your Prime membership is now active. Enjoy free shipping, Prime Video, and more."
          after="Welcome, [Name]. Your fastest delivery option is now Same-Day on the items you ordered most last month — already on for next time."
        />

        <BodyProse>
          <p>
            <strong>Moment two: milestone moments that made the membership felt.</strong>{" "}
            Members hit invisible thresholds all the time — their tenth
            Same-Day order, their first international shipment, their fiftieth
            Prime Video episode. We built a milestone string library that
            surfaced these as small, earned acknowledgments instead of generic
            &ldquo;thanks&rdquo; copy.
          </p>
        </BodyProse>

        <StringBlock
          title="Milestone string · Tenth Same-Day order"
          voicePrinciple="social proof + earned"
          before="Thanks for shopping with Prime!"
          after="That's 10 Same-Day deliveries this year. You're in the top 8% of Prime members for fastest delivery. Worth the membership, right?"
        />

        <BodyProse>
          <p>
            <strong>Moment three: the system that wrote it for me, at scale.</strong>{" "}
            Two hundred surfaces times nine regions times eight lifecycle
            stages is a number no writer ships alone. The Track B work was the
            answer: a content schema that named every variable a string needed
            to know about, a voice framework that defined how each variable
            should sound, and a review system that let other teams write their
            own copy with confidence the brand would hold.
          </p>
        </BodyProse>

        <Artifact
          fig="Fig. 02"
          caption="The content data model that powered both human writing and AI generation, with the same voice principles enforced at every step."
          placeholder={
            <>
              [content schema diagram placeholder]
              <br />
              Schema structure: member context + benefit context + voice principle
              <br />
              → AI generation → human-in-the-loop review → ship
            </>
          }
        />
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 04 · Results"
        title="What changed for members, the business, and the org."
        style={{ paddingTop: 32, paddingBottom: 32 }}
      />

      <ResultsHero
        eyebrow="Funnel impact · annualized"
        results={[
          {
            num: "+77K",
            text: (
              <>
                <strong>Members retained</strong> annually, attributed to
                value-comm rewrites in lifecycle
              </>
            ),
          },
          {
            num: "400M",
            text: (
              <>
                <strong>Personalized moments</strong> shipped through the
                framework
              </>
            ),
          },
          {
            num: "15",
            text: (
              <>
                <strong>Teams adopted</strong> the framework across Prime,
                without me in the room
              </>
            ),
          },
          {
            num: "3",
            text: (
              <>
                <strong>GenAI programs</strong> built on the schema, including
                the next gen of personalization
              </>
            ),
          },
        ]}
      />

      <ChapterSection style={{ paddingTop: 32 }}>
        <BodyProse>
          <p>
            The retention number was the metric the business cared about. The
            org adoption was the metric I cared about. Fifteen teams shipping
            value-aligned content without my review meant the system worked:
            I&rsquo;d built infrastructure, not just artifacts.
          </p>
          <p>
            The three GenAI programs were the bonus track. Once the schema
            existed, the AI team had a structured way to generate, evaluate,
            and govern membership content at a scale no human writing process
            could match — with the voice still recognizably Prime&rsquo;s.
          </p>
        </BodyProse>
      </ChapterSection>

      <ChapterSection
        eyebrow="Chapter 05 · Reflection"
        title="What I&rsquo;d do differently."
      >
        <ReflectionCard label="Hindsight">
          I should have brought the AI team in earlier.{" "}
          <strong>Track B was originally a &ldquo;documentation&rdquo; project</strong>{" "}
          — voice guidance, naming standards, the writer&rsquo;s bench. The
          pivot to a content data model that AI could read happened when a
          partner team asked if they could &ldquo;just call an API&rdquo; for
          Prime-voice strings. The schema was already implicit in my work, I
          just hadn&rsquo;t formalized it for machines yet. If I&rsquo;d done
          that on day one, the org rollout would have been six months faster,
          and the GenAI partnership would have been a planned outcome rather
          than an emergent one.
        </ReflectionCard>
      </ChapterSection>

      <NextIssue currentSlug="amazon-prime" />
    </div>
  );
}

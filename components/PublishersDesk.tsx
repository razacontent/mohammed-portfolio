import Reveal from "./Reveal";

export default function PublishersDesk() {
  return (
    <Reveal as="section" className="publisher">
      <div className="publisher-grid">
        <div className="pub-text">
          <div className="pub-eyebrow">From the publisher&rsquo;s desk</div>
          <h2>
            Most content problems are <span className="marker">systems</span>{" "}
            problems.
          </h2>
          <p>
            Eight years across Amazon, Crunchyroll, Shopify, TurboTax, and
            Alaska Airlines. The pattern is consistent:{" "}
            <strong>bad copy is almost never the writer&rsquo;s fault.</strong>{" "}
            It&rsquo;s a missing taxonomy, a broken lifecycle, an undefended
            decision upstream.
          </p>
          <p>
            I show up to fix the writing and end up rebuilding the system the
            writing rests on. Voice frameworks. Naming systems. Lifecycle
            architectures. The language layer behind GenAI products. As AI
            writes more of the words, the writer&rsquo;s job becomes designing
            the system the model writes inside.
          </p>
          <div className="pub-thesis">
            <div className="pub-thesis-text">
              Product writers are the canary in the coal mine for AI.
              We&rsquo;re early to where the language layer is going.
            </div>
          </div>
          <div className="signature">— Mohammed</div>
          <div className="signature-meta">
            Mohammed Raza · Seattle · April 2026
          </div>
        </div>
        <div className="pub-photo">
          {/* TODO: real photo with halftone filter */}
          <div className="ph-content">
            [photo of Mohammed
            <br />
            indoor light · holding coffee]
          </div>
        </div>
      </div>
    </Reveal>
  );
}

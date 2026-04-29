import Reveal from "./Reveal";

export default function ContactBlock() {
  return (
    <Reveal as="section">
      <div className="contact-block">
        <div className="contact-grid">
          <div className="contact-text">
            <h2>
              For hire. For commissions. For{" "}
              <span className="underline">talks &amp; audits.</span>
            </h2>
            <p>
              Looking for senior IC, content design lead, or staff IC roles.
              AI-native content systems and growth-stage products preferred.
              Places where the content data model isn&rsquo;t built yet, or
              where the language layer behind a GenAI surface needs an
              architect.
            </p>
            <ul className="checklist">
              <li>Senior IC · Content design lead · Staff IC</li>
              <li>Remote, hybrid Seattle, or relocating</li>
              <li>Available for commissions, talks, &amp; audits</li>
            </ul>
          </div>
          <div className="contact-actions">
            <a className="btn" href="mailto:hello@razacontent.com">
              ✉ Email Mohammed
            </a>
            <a
              className="btn outline"
              href="https://linkedin.com/in/mohammedraza"
            >
              → LinkedIn
            </a>
            <a className="btn outline" href="/resume">
              ↗ Resume
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

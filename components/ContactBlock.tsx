import Reveal from "./Reveal";

export default function ContactBlock() {
  return (
    <Reveal as="section">
      <div className="contact-block">
        <div className="contact-grid">
          <div className="contact-text">
            <h2>Reach out.</h2>
            <p>
              Open to <strong>senior IC, content design lead, or staff IC</strong>{" "}
              roles. AI-native content systems and growth-stage products
              preferred. Remote, hybrid Seattle, or relocating.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn" href="mailto:mohammed@razacontent.com">
              ✉ Email Mohammed
            </a>
            <a
              className="btn outline"
              href="https://linkedin.com/in/razamohammed"
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

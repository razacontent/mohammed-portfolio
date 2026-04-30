/* eslint-disable @next/next/no-img-element */
import Reveal from "./Reveal";

export default function ContactBlock() {
  return (
    <Reveal as="section">
      <div className="contact-block">
        <div className="contact-grid">
          <div className="contact-text">
            <h2>Reach out.</h2>
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
          <div className="contact-image">
            <img src="/images/canary-portrait.png" alt="The razacontent canary mascot" />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

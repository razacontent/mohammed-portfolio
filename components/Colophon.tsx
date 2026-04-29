export default function Colophon() {
  return (
    <div className="colophon">
      <div className="colophon-inner">
        <div className="colophon-credits">
          <div>
            <strong>razacontent</strong> · Mohammed Raza · Seattle · 2026
          </div>
          <div className="imprint">Designing content systems since 2017</div>
        </div>
        <div className="colophon-mark">
          <svg
            className="canary-svg"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 60c0-14 10-26 26-26s30 12 30 26c0 12-10 22-22 24" />
            <path d="M56 84l-8 10" />
            <circle cx="60" cy="46" r="2.5" fill="currentColor" />
            <path d="M78 50l14-8" />
            <path d="M22 60l-8 4" />
          </svg>
          <div className="colophon-vol">vol. 01</div>
        </div>
      </div>
    </div>
  );
}

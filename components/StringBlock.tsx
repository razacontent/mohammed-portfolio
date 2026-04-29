export default function StringBlock({
  title,
  voicePrinciple,
  before,
  after,
}: {
  title: string;
  voicePrinciple: string;
  before: string;
  after: string;
}) {
  return (
    <div className="strings-block">
      <div className="strings-header">
        <span>{title}</span>
        <span className="accent-text">Voice principle: {voicePrinciple}</span>
      </div>
      <div className="strings-grid">
        <div className="string-cell before">
          <div className="string-cell-label">Before</div>
          <div className="string-cell-text">{before}</div>
        </div>
        <div className="string-cell after">
          <div className="string-cell-label">After</div>
          <div className="string-cell-text">{after}</div>
        </div>
      </div>
    </div>
  );
}

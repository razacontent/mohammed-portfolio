import Link from "next/link";

export default function Breadcrumb({
  current,
}: {
  current: string;
}) {
  return (
    <div className="crumb">
      <div className="crumb-inner">
        <Link href="/">Newsstand</Link>
        <span className="crumb-sep">→</span>
        <span>Today&rsquo;s rack</span>
        <span className="crumb-sep">→</span>
        <span className="crumb-current">{current}</span>
      </div>
    </div>
  );
}

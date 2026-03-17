import Link from "next/link";

export default function BackArrow() {
  return (
    <Link
      href="/"
      style={{
        position: "fixed",
        top: 24,
        left: 24,
        zIndex: 1000,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "rgba(26,26,26,0.5)",
        textDecoration: "none",
        fontFamily: "'Outfit', sans-serif",
        display: "flex",
        alignItems: "center",
        gap: 6,
        transition: "color 0.15s",
      }}
    >
      &larr; Back
    </Link>
  );
}

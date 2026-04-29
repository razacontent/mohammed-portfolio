import type { ReactNode } from "react";

export default function ReflectionCard({
  label = "Hindsight",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div className="reflection-card">
      <div className="reflection-label">{label}</div>
      <div className="reflection-text">{children}</div>
    </div>
  );
}

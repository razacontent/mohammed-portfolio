import { icons, type IconName } from "@/lib/icons";

export default function IconCell({ name, label }: { name: IconName; label: string }) {
  return (
    <div className="icon-cell">
      {icons[name]}
      <span className="icon-label">{label}</span>
    </div>
  );
}

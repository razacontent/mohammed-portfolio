import type { StampVariant } from "@/data/caseStudies";

const className: Record<StampVariant, string> = {
  featured: "cover-sticker stamp-featured",
  founded: "cover-sticker stamp-founded",
  pts: "cover-sticker tag-pts",
  shipped: "cover-sticker stamp-shipped",
};

export default function Stamp({
  variant,
  label,
}: {
  variant: StampVariant;
  label: string;
}) {
  return <div className={className[variant]}>{label}</div>;
}

import fs from "node:fs";
import path from "node:path";

export const metadata = {
  title: "Issue №02 · Crunchyroll · When the ad is the product · razacontent",
};

export default function CrunchyrollPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "app/work/crunchyroll/case-study.html"),
    "utf8",
  );
  return (
    <div
      className="zine"
      data-issue="crunchyroll"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

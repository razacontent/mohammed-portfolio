import fs from "node:fs";
import path from "node:path";

export const metadata = {
  title: "Issue №04 · Crunchyroll · Co-shaped a rebrand · razacontent",
};

export default function CrunchyrollLivingRoomPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "app/work/crunchyroll-living-room/case-study.html"),
    "utf8",
  );
  return (
    <div
      className="zine"
      data-issue="crunchyroll-living-room"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

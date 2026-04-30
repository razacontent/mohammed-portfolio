import fs from "node:fs";
import path from "node:path";

export const metadata = {
  title: "Issue №04 · TurboTax · Making tax law feel human · razacontent",
};

export default function TurbotaxPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "app/work/turbotax/case-study.html"),
    "utf8",
  );
  return (
    <div
      className="zine"
      data-issue="turbotax"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

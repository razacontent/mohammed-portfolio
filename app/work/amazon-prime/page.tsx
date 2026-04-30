import fs from "node:fs";
import path from "node:path";
import PrimeTabsObserver from "@/components/PrimeTabsObserver";

export const metadata = {
  title:
    "Issue №01 · Amazon Prime · Rewriting how Prime earns loyalty · razacontent",
};

const html = fs.readFileSync(
  path.join(process.cwd(), "app/work/amazon-prime/case-study.html"),
  "utf8",
);

export default function AmazonPrimePage() {
  return (
    <>
      <PrimeTabsObserver />
      <div className="prime-v2" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

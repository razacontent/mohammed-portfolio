import fs from "node:fs";
import path from "node:path";

export const metadata = {
  title:
    "Issue №03 · Shopify · Abandonment to adoption · razacontent",
};

export default function ShopifyPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "app/work/shopify/case-study.html"),
    "utf8",
  );
  return (
    <div
      className="zine"
      data-issue="shopify"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

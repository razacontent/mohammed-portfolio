# Claude Code Brief: Shopify Case Study

## What to build

A case study page at /work/shopify using the same design system as the Crunchyroll case study.

## Source files

- `shopify-case-study.html` — Full HTML with all copy and structure
- `shopify-card-update.jsx` — The updated Shopify card for the Work page (replace the placeholder)

## Images needed

The case study references these images in public/images/. The user will need to export 
these from their PDF presentation and save them:

- shopify-audit-table.png (slide 9 — the cross-platform metrics comparison table)
- shopify-workflow-map.png (slide 10 — the current state vs desired state workflow)
- shopify-alignment-workshop.png (slide 11 — the Metrics Definition Alignment tool)
- shopify-sidebar-before.png (slide 12 — previous sidebar with Marketing highlighted)
- shopify-sidebar-after.png (slide 13 — new sidebar with Attribution added)
- shopify-homepage-before.png (slide 14 — previous homepage with video tutorials)
- shopify-homepage-after.png (slide 15 — new homepage with performance data)
- shopify-tooltips.png (slide 18 — tooltip examples showing scope/boundaries/formula)

## Design system

Same as the rest of the site:
- Background: #F0D4D1
- Font: Outfit (400, 500, 600, 700)
- Max width: 860px centered
- Borders: 1.5px solid rgba(26,26,26,0.1)
- Border radius: 14px cards, 100px pills
- Cards: transparent → white on hover, 0.2s ease
- No shadows, no gradients

## Instructions

1. Build the /work/shopify page from shopify-case-study.html
2. Update the Shopify card on the Work page using shopify-card-update.jsx
3. Extract CSS to stylesheet, keep copy exactly as written
4. Don't change any copy
5. Image paths should be /images/shopify-*.png

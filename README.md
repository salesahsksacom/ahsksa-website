# Advanced Hydraulics (ahsksa.com)

Bilingual static site: Arabic at `/`, English at `/en/`. Next.js static export, hosted on Cloudflare Pages.

## Commands
- `npm install`
- `npm run dev`: local preview
- `npm run build`: builds `out/` and runs `scripts/check-site.mjs` (meta lengths, canonical, hreflang, internal links, JSON-LD, sitemap)
- Cloudflare Pages settings: build command `npm run build`, output directory `out`, Node 20+

## Where things live
- `src/config/site.ts`: every business fact (phone, address, hours, CR/VAT, GA4 ID, feature flags) and `PLACEHOLDERS`
- `src/content/entries.ts`: the 8 service pages and 7 product pages (Arabic + English)
- `src/i18n/dict.ts`: UI strings and the home, pump-testing, about and contact copy
- `public/_headers`: security headers and CSP (allows Google Analytics)

## Before publishing (the build prints this list)
1. Real CR and VAT numbers in `site.ts` (currently dummy; footer shows them)
2. GA4 Measurement ID in `gaId`; mark `whatsapp_click` and `call_click` as key events in GA4
3. Founding year in `since` (hides the "since" line while null)
4. `features.hoseCrimping`: true only if the workshop crimps hoses to size
5. `features.linkProductHouse`: owner's OK for the cross-link to producthousesa.com
6. Google Business Profile: claim it, fix the name spelling and category (see the build output)
7. Replace the schematic cylinder drawing with real workshop photos when received

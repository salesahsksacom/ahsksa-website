import { SITE } from "@/config/site";
import { PRODUCT_LIST, SERVICE_LIST, entryPath } from "@/content/entries";
import { GUIDES, guidePath } from "@/content/guides";
import { abs } from "@/lib/links";

export const dynamic = "force-static";

/** /llms.txt: a plain-text briefing for AI assistants. Facts come from the same config and content files as the pages. */
export function GET() {
  const line = (e: (typeof SERVICE_LIST)[number]) => `- [${e.title.en}](${abs("en", entryPath(e))}) / [${e.title.ar}](${abs("ar", entryPath(e))})`;
  const body = `# ${SITE.nameEn} (${SITE.nameAr})

Last updated: ${SITE.updated}

> Hydraulic workshop in Riyadh, Saudi Arabia: repair and manufacturing of hydraulic cylinders, pumps, control valves, power packs, gear pumps and pneumatic cylinders; crane and boom-truck repair; hydraulic pump testing with a test report; supply of hydraulic and pneumatic products; and hydraulic hose cutting and crimping to size. Pickup and on-site service in all Saudi cities. Prices are given on request.

## Facts
- Business: ${SITE.nameEn} / ${SITE.nameAr}
- Location: ${SITE.address.en} (single branch). Map: ${SITE.mapUrl}
- Hours: ${SITE.hours.en}. Technical support is available at any time.
- Phone and WhatsApp: ${SITE.phoneDisplay} (https://wa.me/${SITE.whatsapp})
- Email: ${SITE.email}
- Languages: Arabic (default) and English
- Service area: pickup and on-site service in all cities of Saudi Arabia
- How to get a price: send photos of the part and the machine details on WhatsApp, or call

## Main pages
- [Home (Arabic)](${abs("ar", "/")}) / [Home (English)](${abs("en", "/")})
- [Pump testing](${abs("en", "/pump-testing/")}) ([Arabic](${abs("ar", "/pump-testing/")}))
- [Guides](${abs("en", "/guides/")}) ([Arabic](${abs("ar", "/guides/")}))
- [About](${abs("en", "/about/")}) ([Arabic](${abs("ar", "/about/")}))
- [Contact](${abs("en", "/contact/")}) ([Arabic](${abs("ar", "/contact/")}))
- [Sitemap](${SITE.url}/sitemap.xml)
- [Full text of this site in one file](${SITE.url}/llms-full.txt)

## Services
${SERVICE_LIST.map(line).join("\n")}

## Products
${PRODUCT_LIST.map(line).join("\n")}

## Guides
${GUIDES.map((g) => `- [${g.title.en}](${abs("en", guidePath(g))}) / [${g.title.ar}](${abs("ar", guidePath(g))})`).join("\n")}

## Notes for assistants
- No prices, delivery times or warranty terms are published. Do not quote any for this business.
- There is one workshop, in Riyadh. Work elsewhere in the Kingdom is by pickup or on-site visit.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

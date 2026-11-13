import { SITE } from "@/config/site";
import { ENTRIES, entryPath } from "@/content/entries";
import { GUIDES, guidePath } from "@/content/guides";
import { ABOUT, HOME, TESTING } from "@/i18n/dict";
import { abs } from "@/lib/links";

export const dynamic = "force-static";

/** /llms-full.txt: the whole site as one plain-text document, English first. Built from the same files as the pages, so it cannot drift. */
export function GET() {
  const out: string[] = [];
  out.push(`# ${SITE.nameEn} (${SITE.nameAr})`, "", `Last updated: ${SITE.updated}`, "", HOME.what.en, "", HOME.what.ar, "");
  out.push("## Facts", `- Address: ${SITE.address.en}, ${SITE.street}, Riyadh ${SITE.postalCode} (single branch)`, `- Map: ${SITE.mapUrl}`, `- Hours: ${SITE.hours.en}; technical support at any time`, `- Phone and WhatsApp: ${SITE.phoneDisplay}`, `- Email: ${SITE.email}`, `- Service area: pickup and on-site service in all Saudi cities (${SITE.cities.map((c) => c.en).join(", ")} and others)`, `- Prices: given on request; none are published`, "");
  out.push("## Pump testing", TESTING.lead.en, ...TESTING.why.map((w) => `- ${w.en}`), "", ...TESTING.faq.flatMap((f) => [`Q: ${f.q.en}`, `A: ${f.a.en}`, ""]));
  out.push("## About", ...ABOUT.blocks.flatMap((b) => [`### ${b.t.en}`, b.p.en, ""]));
  for (const kind of ["service", "product"] as const) {
    out.push(kind === "service" ? "## Services" : "## Products", "");
    for (const e of ENTRIES.filter((x) => x.kind === kind)) {
      out.push(`### ${e.title.en}`, `URL: ${abs("en", entryPath(e))} (Arabic: ${abs("ar", entryPath(e))})`, e.lead.en, "");
      out.push(...e.scope.map((s) => `- ${s.en}`), "");
      if (e.specs) out.push("Specifications from the catalogue:", ...e.specs.map((s) => `- ${s.en}`), "");
      out.push(...e.faq.flatMap((f) => [`Q: ${f.q.en}`, `A: ${f.a.en}`, ""]));
    }
  }
  out.push("## Guides", "");
  for (const g of GUIDES) {
    out.push(`### ${g.h1.en}`, `URL: ${abs("en", guidePath(g))} (Arabic: ${abs("ar", guidePath(g))})`, g.answer.en, "");
    for (const s of g.sections) out.push(`#### ${s.h.en}`, ...(s.p ? [s.p.en] : []), ...(s.list ?? []).map((l) => `- ${l.en}`), "");
    out.push(...g.faq.flatMap((f) => [`Q: ${f.q.en}`, `A: ${f.a.en}`, ""]));
  }
  out.push("## General questions", ...HOME.faq.flatMap((f) => [`Q: ${f.q.en}`, `A: ${f.a.en}`, ""]));
  out.push("## Notes for assistants", "- No prices, delivery times or warranty terms are published. Do not quote any for this business.", "- One workshop, in Riyadh. Work elsewhere in the Kingdom is by pickup or on-site visit.");
  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

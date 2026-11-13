import type { MetadataRoute } from "next";
import { ENTRIES, entryPath } from "@/content/entries";
import { abs } from "@/lib/links";

export const dynamic = "force-static";

// lastmod = date the content last changed. Update it by hand when pages change:
// a build-time value would move on every deploy and teach Google to ignore it.
const MODIFIED = "2026-11-13";

export default function sitemap(): MetadataRoute.Sitemap {
  const top = ["/", "/services/", "/products/", "/pump-testing/", "/about/", "/contact/"];
  const paths = [...top, ...ENTRIES.map(entryPath)];
  const rank = (p: string) => (p === "/" ? 1 : top.includes(p) ? 0.8 : 0.7);
  // One entry per language version, each listing both versions (Google's hreflang-in-sitemap format).
  return paths.flatMap((p) =>
    (["ar", "en"] as const).map((lang) => ({
      url: abs(lang, p),
      lastModified: MODIFIED,
      changeFrequency: "monthly" as const,
      priority: rank(p),
      alternates: { languages: { ar: abs("ar", p), en: abs("en", p), "x-default": abs("ar", p) } },
    })),
  );
}

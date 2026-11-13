// Post-build checks on the static export in ./out. Prints a verdict; exits 1 on any hard failure.
// Placeholders (dummy CR/VAT, empty GA4 ID ...) are listed separately: they block "ready to publish", not the build.
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const OUT = "out";
const SITE = "https://ahsksa.com";
if (!existsSync(OUT)) { console.error("check-site: run `next build` first"); process.exit(1); }

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const files = walk(OUT);
// 404 pages are deliberately noindex and are not in the sitemap.
const htmls = files.filter((f) => f.endsWith(".html") && !/(^|[\\/])(404|_not-found)([\\/]|\.html$)/.test(relative(OUT, f)));
const fileSet = new Set(files.map((f) => "/" + relative(OUT, f).replace(/\\/g, "/")));

const errors = [];
const warns = [];
const err = (p, m) => errors.push(`${p}: ${m}`);
const warn = (p, m) => warns.push(`${p}: ${m}`);
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const meta = (h, re) => { const m = h.match(re); return m ? decode(m[1]) : null; };

const urlOf = (f) => "/" + relative(OUT, f).replace(/\\/g, "/").replace(/index\.html$/, "");
const titles = new Map(); const descs = new Map(); const h1s = new Map();
let pageCount = 0;

for (const f of htmls) {
  const h = readFileSync(f, "utf8");
  const url = urlOf(f);
  pageCount++;
  const title = meta(h, /<title>([^<]*)<\/title>/);
  const desc = meta(h, /<meta name="description" content="([^"]*)"/);
  const canon = meta(h, /<link rel="canonical" href="([^"]*)"/);
  const robots = meta(h, /<meta name="robots" content="([^"]*)"/);
  const lang = meta(h, /<html[^>]*lang="([^"]*)"/);

  if (!title) err(url, "missing <title>"); else {
    if (title.length > 70) warn(url, `title ${title.length} chars (>70): ${title}`);
    (titles.get(title) ?? titles.set(title, []).get(title)).push(url);
  }
  if (!desc) err(url, "missing meta description"); else {
    if (desc.length < 100 || desc.length > 160) err(url, `meta description ${desc.length} chars (needs 100-160): ${desc}`);
    (descs.get(desc) ?? descs.set(desc, []).get(desc)).push(url);
  }
  if (!canon) err(url, "missing canonical"); else if (canon !== SITE + url) err(url, `canonical ${canon} != ${SITE + url}`);
  if (robots && /noindex/.test(robots)) err(url, `unexpected noindex (${robots})`);
  const alts = [...h.matchAll(/<link rel="alternate" hrefLang="([^"]*)" href="([^"]*)"/g)].map((m) => m[1]);
  if (!(alts.includes("ar") && alts.includes("en") && alts.includes("x-default"))) err(url, `hreflang incomplete: [${alts.join(",")}]`);
  const h1 = [...h.matchAll(/<h1[ >]/g)].length;
  if (h1 !== 1) err(url, `${h1} <h1> tags`);
  const h1t = meta(h, /<h1[^>]*>([\s\S]*?)<\/h1>/)?.replace(/<[^>]+>/g, "");
  if (h1t) (h1s.get(h1t) ?? h1s.set(h1t, []).get(h1t)).push(url);
  if (url.startsWith("/en/") !== (lang === "en") && url !== "/en/") err(url, `html lang=${lang} does not match the path`);

  // JSON-LD parses
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1].replace(/\\u003c/g, "<")); } catch (e) { err(url, "invalid JSON-LD: " + e.message); }
  }
  // AEO / GEO: visible last-updated date, one JSON-LD graph with this page's dateModified, no empty-answer FAQ
  if (!/<time dateTime="\d{4}-\d{2}-\d{2}"/.test(h)) err(url, "no visible <time> last-updated date");
  const graphs = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => { try { return JSON.parse(m[1].replace(/\\u003c/g, "<")); } catch { return null; } }).filter(Boolean);
  const nodes = graphs.flatMap((g) => g["@graph"] ?? [g]);
  const types = nodes.map((n) => n["@type"]);
  if (!nodes.some((n) => n.dateModified)) err(url, "JSON-LD: no WebPage with dateModified");
  if (!types.includes("LocalBusiness")) err(url, "JSON-LD: no LocalBusiness node");
  const ids = nodes.map((n) => n["@id"]).filter(Boolean);
  if (new Set(ids).size !== ids.length) err(url, "JSON-LD: duplicate @id in graph");
  if (url !== "/" && url !== "/en/" && !types.includes("BreadcrumbList")) err(url, "JSON-LD: no BreadcrumbList");
  const answer = h.match(/class="answer"[\s\S]*?<p>([^<]*)<\/p>/);
  if (answer) { const n = decode(answer[1]).trim().split(/\s+/).length; if (lang === "en" && (n < 35 || n > 70)) warn(url, `answer block is ${n} words (aim for 40-60)`); }
  // images without alt
  for (const m of h.matchAll(/<img\b[^>]*>/g)) if (!/\balt=/.test(m[0])) err(url, "<img> without alt");

  // internal links
  for (const m of h.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
    let href = decode(m[1]);
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    href = href.split("#")[0].split("?")[0];
    if (!href) continue;
    const ok = fileSet.has(href) || fileSet.has(href.endsWith("/") ? href + "index.html" : href + "/index.html");
    if (!ok) err(url, `broken internal link ${href}`);
    else if (!href.endsWith("/") && !/\.[a-z0-9]+$/i.test(href)) warn(url, `link without trailing slash ${href}`);
  }
}

for (const [k, v] of titles) if (v.length > 1) err(v.join(", "), `duplicate title: ${k}`);
for (const [k, v] of descs) if (v.length > 1) err(v.join(", "), `duplicate description: ${k}`);
for (const [k, v] of h1s) if (v.length > 1) warn(v.join(", "), `duplicate h1: ${k}`);

// sitemap, robots, llms, headers, og image, icons
const need = ["/sitemap.xml", "/robots.txt", "/llms.txt", "/llms-full.txt", "/_headers", "/img/og.jpg", "/logo/icon.png", "/favicon.ico", "/404.html", "/manifest.webmanifest"];
for (const n of need) if (!fileSet.has(n)) err("export", `missing ${n}`);
if (fileSet.has("/sitemap.xml")) {
  const sm = readFileSync(join(OUT, "sitemap.xml"), "utf8");
  const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const expected = htmls.map((f) => SITE + urlOf(f));
  for (const e of expected) if (!locs.includes(e)) err("sitemap.xml", `missing ${e}`);
  for (const l of locs) if (!expected.includes(l)) err("sitemap.xml", `lists a page that is not built: ${l}`);
}

const robotsTxt = fileSet.has("/robots.txt") ? readFileSync(join(OUT, "robots.txt"), "utf8") : "";
for (const bot of ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]) if (!new RegExp(`User-Agent: ${bot}\\s+Allow: /`, "i").test(robotsTxt)) err("robots.txt", `${bot} is not explicitly allowed`);
if (/Disallow:\s*\/\s*$/m.test(robotsTxt)) err("robots.txt", "site-wide Disallow found");
// Fonts: only the two site fonts may be referenced, and the raw TTFs must not be in the export
for (const f of files) if (/\.(ttf|otf)$/i.test(f)) err("export", `raw font file would be deployed: ${relative(OUT, f)}`);
// Placeholders still in the source config
const cfg = readFileSync("src/config/site.ts", "utf8");
const todo = [];
if (/cr: "0000000000"/.test(cfg)) todo.push("Commercial registration number is a dummy (0000000000)");
if (/vat: "000000000000000"/.test(cfg)) todo.push("VAT number is a dummy (000000000000000)");
if (/gaId: ""/.test(cfg)) todo.push("GA4 Measurement ID is empty: analytics is off");
if (/since: null/.test(cfg)) todo.push("Founding year not set: the 'since' line is hidden");
if (/hoseCrimping: false/.test(cfg)) todo.push("Hose crimping not confirmed: hose page makes no crimping claim");
if (/linkProductHouse: true/.test(cfg)) todo.push("Product House cross-link is ON: needs the owner's OK");
todo.push("Google Business Profile: claim it, fix the name spelling (النضام -> النظام) and the category (now Auto repair shop)");

console.log(`\ncheck-site: ${pageCount} pages checked`);
if (warns.length) { console.log(`\nWarnings (${warns.length})`); warns.forEach((w) => console.log("  - " + w)); }
if (errors.length) { console.log(`\nERRORS (${errors.length})`); errors.forEach((e) => console.log("  x " + e)); }
console.log(`\nStill to do before publishing (${todo.length})`); todo.forEach((t) => console.log("  ! " + t));
console.log(errors.length ? "\nVERDICT: FAIL" : "\nVERDICT: structure OK" + (todo.length ? " (placeholders remain)" : ""));
process.exit(errors.length ? 1 : 0);

import type { ReactNode } from "react";
import { SITE, type Lang } from "@/config/site";
import type { Faq as FaqT } from "@/content/entries";
import { UI } from "@/i18n/dict";
import { href } from "@/lib/links";
import { jsonLdScript } from "@/lib/seo";
import Faq from "./Faq";
import { Ui } from "./Icon";

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(data)} />;
}

export function Crumbs({ lang, items }: { lang: Lang; items: { name: string; path?: string }[] }) {
  const all = [{ name: UI.breadcrumbHome[lang], path: "/" }, ...items];
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {all.map((it, i) => (
          <li key={i}>
            {it.path && i < all.length - 1 ? <a href={href(lang, it.path)}>{it.name}</a> : <span aria-current="page">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** One small "last updated" line, in the footer of every page. Same value goes into dateModified in the structured data. */
export function Updated({ lang }: { lang: Lang }) {
  const d = new Date(`${SITE.updated}T00:00:00Z`);
  const text = d.toLocaleDateString(lang === "ar" ? "ar-SA-u-ca-gregory-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  return (
    <span>
      {UI.updated[lang]}: <time dateTime={SITE.updated}>{text}</time>
    </span>
  );
}

/** A self-contained 40 to 60 word answer. Placed first on a page so a reader, a search snippet or an AI assistant can lift it whole. */
export function Answer({ lang, title, text }: { lang: Lang; title?: string; text: string }) {
  return (
    <div className="answer">
      {title && <h2 className="h2">{title}</h2>}
      <p>{text}</p>
    </div>
  );
}

export function KeyFacts({ items }: { items: { k: string; v: ReactNode }[] }) {
  return (
    <dl className="kv">
      {items.map((it, i) => (
        <div key={i}>
          <dt>{it.k}</dt>
          <dd>{it.v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function FaqList({ lang, faq, title, tone, cta }: { lang: Lang; faq: FaqT[]; title?: string; tone?: "paper"; cta?: ReactNode }) {
  return (
    <section className={`section ${tone === "paper" ? "section-paper" : ""}`} aria-labelledby="faq-title">
      <div className="wrap split split-sticky">
        <div className="section-head">
          <span className="eyebrow">{UI.faq[lang]}</span>
          <h2 id="faq-title" className="h1">{title ?? UI.faq[lang]}</h2>
          {cta}
        </div>
        <Faq items={faq.map((f) => ({ q: f.q[lang], a: f.a[lang] }))} />
      </div>
    </section>
  );
}

export function Check({ children }: { children: ReactNode }) {
  return (
    <li>
      <Ui.Check size={20} weight="bold" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export function Arrow({ lang, size = 18 }: { lang: Lang; size?: number }) {
  return lang === "ar" ? <Ui.ArrowLeft size={size} weight="bold" aria-hidden="true" /> : <Ui.ArrowRight size={size} weight="bold" aria-hidden="true" />;
}

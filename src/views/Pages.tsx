import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE, type Lang } from "@/config/site";
import {
  PRODUCT_LIST,
  SERVICE_LIST,
  entryBySlug,
  entryPath,
  slugPath,
  slugTitle,
  type Entry,
} from "@/content/entries";
import { GUIDES, guideBySlug, guidePath, type Guide } from "@/content/guides";
import { ABOUT, CONTACT, HOME, TESTING, UI } from "@/i18n/dict";
import { abs, href, mailLink, telLink, waLink } from "@/lib/links";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  businessJsonLd,
  collectionJsonLd,
  faqJsonLd,
  graph,
  pageMeta,
  serviceJsonLd,
  titled,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { Answer, Arrow, Check, Crumbs, FaqList, JsonLd, KeyFacts } from "@/components/Bits";
import CylinderDiagram from "@/components/CylinderDiagram";
import { Ui, WhatsAppIcon } from "@/components/Icon";
import QuoteForm from "@/components/QuoteForm";
import OpenStatus from "@/components/OpenStatus";

/* ---------- shared pieces ---------- */

function Cta({ lang, text, label }: { lang: Lang; text?: string; label?: string }) {
  return (
    <div className="btn-row" data-cta>
      <a className="btn btn-wa btn-lg" href={waLink(text ?? UI.waGeneral[lang])} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon size={22} />
        {label ?? UI.quote[lang]}
      </a>
      <a className="btn btn-line btn-lg" href={telLink()}>
        <Ui.Phone size={20} weight="bold" aria-hidden="true" />
        <span dir="ltr" className="num">{SITE.phoneDisplay}</span>
      </a>
    </div>
  );
}

/** A numbered, ruled list. Replaces the card grid: easier to scan, and every row is one big tap target. */
function IndexList({ lang, items, cols = 1, offset = 0 }: { lang: Lang; items: { path: string; title: string; text: string }[]; cols?: 1 | 2; offset?: number }) {
  return (
    <ul className={`index ${cols === 2 ? "index-2" : ""}`}>
      {items.map((it, i) => (
        <li key={it.path}>
          <a href={href(lang, it.path)}>
            <span className="n num">{String(i + 1 + offset).padStart(2, "0")}</span>
            <span className="t">
              <strong>{it.title}</strong>
              <span>{it.text}</span>
            </span>
            <span className="go"><Arrow lang={lang} /></span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const guideRows = (lang: Lang, list: Guide[]) => list.map((g) => ({ path: guidePath(g), title: g.title[lang], text: g.card[lang] }));
const rows = (lang: Lang, list: Entry[]) => list.map((e) => ({ path: entryPath(e), title: e.title[lang], text: e.card[lang] }));

function Related({ lang, slugs }: { lang: Lang; slugs: string[] }) {
  const items = slugs.map((s) => {
    const e = entryBySlug(s);
    return { path: slugPath(s), title: slugTitle(s)[lang], text: e ? e.card[lang] : TESTING.desc[lang] };
  });
  return (
    <section className="section section-paper" aria-labelledby="rel-title">
      <div className="wrap split split-sticky">
        <div className="section-head">
          <span className="eyebrow">{UI.more[lang]}</span>
          <h2 id="rel-title" className="h1">{UI.related[lang]}</h2>
        </div>
        <IndexList lang={lang} items={items} />
      </div>
    </section>
  );
}

/** Guides that mention this service or product. Renders nothing when there are none. */
function GuideLinks({ lang, slug }: { lang: Lang; slug: string }) {
  const list = GUIDES.filter((g) => g.related.includes(slug));
  if (list.length === 0) return null;
  return (
    <section className="section" aria-labelledby="gl-title">
      <div className="wrap split split-sticky">
        <div className="section-head">
          <span className="eyebrow">{UI.nav.guides[lang]}</span>
          <h2 id="gl-title" className="h1">{UI.guidesRelated[lang]}</h2>
        </div>
        <IndexList lang={lang} items={guideRows(lang, list)} />
      </div>
    </section>
  );
}

function ServiceArea({ lang }: { lang: Lang }) {
  return (
    <section className="section-tight" aria-labelledby="area-title">
      <div className="wrap split split-sticky">
        <div className="section-head">
          <span className="eyebrow">{UI.area[lang]}</span>
          <h2 id="area-title" className="h1">{HOME.areaTitle[lang]}</h2>
        </div>
        <div style={{ display: "grid", gap: 24 }}>
          <p className="lead">{HOME.areaText[lang]}</p>
          <ul className="chips">
            {SITE.cities.map((c) => <li key={c.en}>{c[lang]}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactBand({ lang }: { lang: Lang }) {
  return (
    <section className="band band-cta on-dark" aria-labelledby="cb-title">
      <div className="wrap band-grid">
        <div style={{ display: "grid", gap: 16 }}>
          <h2 id="cb-title" className="h1">{UI.quote[lang]}</h2>
          <p className="lead" style={{ color: "var(--on-navy)" }}>{UI.quoteNote[lang]}</p>
          <p className="small" style={{ color: "var(--on-navy-2)" }}>{SITE.address[lang]} · {SITE.hours[lang]}</p>
        </div>
        <Cta lang={lang} />
      </div>
    </section>
  );
}

function PageHead({ lang, crumbs, title, lead, children, art }: { lang: Lang; crumbs: { name: string; path?: string }[]; title: string; lead: string; children?: ReactNode; art?: ReactNode }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <Crumbs lang={lang} items={crumbs} />
        <div className={art ? "head-grid" : undefined}>
          <div className="head-copy">
            <h1 className="h1" style={{ maxWidth: "22ch" }}>{title}</h1>
            <p className="lead">{lead}</p>
            {children}
          </div>
          {art}
        </div>
      </div>
    </section>
  );
}

const factsOf = (lang: Lang) => [
  { k: UI.workshop[lang], v: SITE.address[lang] },
  { k: UI.hoursLabel[lang], v: SITE.hours[lang] },
  { k: UI.area[lang], v: UI.coverage[lang] },
  { k: UI.quoteLabel[lang], v: UI.quoteValue[lang] },
  { k: UI.phoneLabel[lang], v: <a href={telLink()} dir="ltr" className="num">{SITE.phoneDisplay}</a> },
];

/* ---------- home ---------- */

export const homeMeta = (lang: Lang): Metadata =>
  pageMeta({ lang, path: "/", title: titled(lang, HOME.metaTitle[lang]), description: HOME.desc[lang] });

export function HomeView({ lang }: { lang: Lang }) {
  const faq = HOME.faq;
  return (
    <>
      <JsonLd
        data={graph(
          businessJsonLd(lang),
          websiteJsonLd(lang),
          webPageJsonLd(lang, { path: "/", name: titled(lang, HOME.metaTitle[lang]), description: HOME.desc[lang], crumbs: false, mainId: `${SITE.url}/#business` }),
          faqJsonLd(lang, faq),
        )}
      />

      <section className="hero on-dark">
        <div className="wrap hero-inner">
          <div className="hero-main">
            <div className="hero-copy">
              <span className="eyebrow">{HOME.eyebrow[lang]}</span>
              <h1 className="display">{HOME.h1[lang]}</h1>
              <p className="lead">{HOME.lead[lang]}</p>
              <Cta lang={lang} />
              {SITE.since && <p className="small" style={{ color: "var(--on-navy-2)" }}>{UI.since(SITE.since)[lang]}</p>}
            </div>
            <div className="hero-art">
              <CylinderDiagram lang={lang} />
            </div>
          </div>
          <ul className="facts">
            {HOME.facts.map((f, i) => (
              <li key={i}>
                <strong>{f.t[lang]}</strong>
                <span>{f.d[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="what-title">
        <div className="wrap split split-sticky">
          <Answer lang={lang} title={HOME.whatTitle[lang]} text={HOME.what[lang]} />
          <div>
            <h2 className="h3" style={{ marginBlockEnd: 16 }}>{UI.keyFacts[lang]}</h2>
            <KeyFacts items={factsOf(lang)} />
          </div>
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="svc-title">
        <div className="wrap split split-sticky">
          <div className="section-head">
            <span className="eyebrow">{UI.nav.services[lang]}</span>
            <h2 id="svc-title" className="h1">{HOME.servicesTitle[lang]}</h2>
            <p className="muted">{HOME.servicesLead[lang]}</p>
          </div>
          <IndexList lang={lang} items={rows(lang, SERVICE_LIST)} />
        </div>
      </section>

      <section className="band on-dark" aria-labelledby="test-title">
        <div className="wrap band-grid">
          <div style={{ display: "grid", gap: 24, justifyItems: "start" }}>
            <span className="eyebrow" style={{ color: "var(--cyan)" }}>{UI.nav.testing[lang]}</span>
            <h2 id="test-title" className="h1">{HOME.testTitle[lang]}</h2>
            <p className="lead" style={{ color: "var(--on-navy)" }}>{HOME.testText[lang]}</p>
            <a className="btn btn-white btn-lg" href={href(lang, "/pump-testing/")}>
              {UI.nav.testing[lang]} <Arrow lang={lang} />
            </a>
          </div>
          <div className="report" aria-hidden="false">
            <div className="report-title">
              <span>{lang === "ar" ? "تقرير الفحص" : "Test report"}</span>
              <span>{lang === "ar" ? "مضخة هيدروليكية" : "Hydraulic pump"}</span>
            </div>
            <ul>
              {TESTING.why.map((w, i) => (
                <li key={i}>
                  <Ui.Check size={18} weight="bold" aria-hidden="true" />
                  <span>{w[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="prod-title">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{UI.nav.products[lang]}</span>
            <h2 id="prod-title" className="h1">{HOME.productsTitle[lang]}</h2>
            <p className="muted">{HOME.productsLead[lang]}</p>
          </div>
          <IndexList lang={lang} items={rows(lang, PRODUCT_LIST)} cols={2} />
        </div>
      </section>

      <section className="section section-paper" aria-labelledby="steps-title">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{lang === "ar" ? "الخطوات" : "Process"}</span>
            <h2 id="steps-title" className="h1">{HOME.stepsTitle[lang]}</h2>
          </div>
          <ol className="steps">
            {HOME.steps.map((s, i) => (
              <li key={i}>
                <span className="step-n num">{i + 1}</span>
                <div>
                  <strong>{s.t[lang]}</strong>
                  <p>{s.d[lang]}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="guides-title">
        <div className="wrap split split-sticky">
          <div className="section-head">
            <span className="eyebrow">{UI.nav.guides[lang]}</span>
            <h2 id="guides-title" className="h1">{UI.guidesTitle[lang]}</h2>
            <p className="muted">{UI.guidesLead[lang]}</p>
          </div>
          <IndexList lang={lang} items={guideRows(lang, GUIDES)} />
        </div>
      </section>

      <ServiceArea lang={lang} />
      <FaqList lang={lang} faq={faq} title={HOME.faqTitle[lang]} tone="paper" />
      <ContactBand lang={lang} />
    </>
  );
}

/* ---------- services / products index ---------- */

export const servicesMeta = (lang: Lang): Metadata =>
  pageMeta({
    lang,
    path: "/services/",
    title: titled(lang, lang === "ar" ? "خدمات الصيانة والتصنيع الهيدروليكي" : "Hydraulic Repair & Manufacturing Services"),
    description:
      lang === "ar"
        ? "صيانة وتصنيع السلندرات والمضخات والصمامات ووحدات القدرة والسلندرات الهوائية، وصيانة الرافعات في الرياض وجميع مدن المملكة."
        : "Repair and manufacturing of hydraulic cylinders, pumps, valves, power packs and pneumatic cylinders, plus crane repair, in Riyadh and all Saudi cities.",
  });

export function ServicesIndex({ lang }: { lang: Lang }) {
  const name = lang === "ar" ? "الخدمات" : "Services";
  const desc = lang === "ar" ? "خدمات الصيانة والتصنيع الهيدروليكي" : "Hydraulic repair and manufacturing services";
  const title = lang === "ar" ? "خدمات الصيانة والتصنيع الهيدروليكي في الرياض" : "Hydraulic repair and manufacturing services in Riyadh";
  const crumbs = [{ name: UI.breadcrumbHome[lang], path: "/" }, { name }];
  const items = [...rows(lang, SERVICE_LIST), { path: "/pump-testing/", title: UI.nav.testing[lang], text: TESTING.desc[lang] }];
  return (
    <>
      <JsonLd
        data={graph(
          businessJsonLd(lang),
          websiteJsonLd(lang),
          webPageJsonLd(lang, { path: "/services/", name: title, description: desc, type: "CollectionPage" }),
          breadcrumbJsonLd(lang, crumbs, "/services/"),
          collectionJsonLd(lang, { name, description: desc, path: "/services/", items: items.map((it) => ({ name: it.title, path: it.path })) }),
        )}
      />
      <PageHead lang={lang} crumbs={[{ name }]} title={title} lead={`${HOME.servicesLead[lang]} ${UI.pickup[lang]}.`}>
      </PageHead>
      <section className="section">
        <div className="wrap">
          <IndexList lang={lang} items={items} />
        </div>
      </section>
      <ContactBand lang={lang} />
    </>
  );
}

export const productsMeta = (lang: Lang): Metadata =>
  pageMeta({
    lang,
    path: "/products/",
    title: titled(lang, lang === "ar" ? "منتجات هيدروليك ونيوماتيك في الرياض" : "Hydraulic & Pneumatic Products, Riyadh"),
    description:
      lang === "ar"
        ? "ليات وأختام وماسورة مصقولة وأعمدة كروم ووحدات PTO ومقاييس ضغط ومنتجات هوائية، نبيعها في الرياض لزبائن الورشة والمحال."
        : "Hoses, seals, honed tube, chrome rods, PTO units, pressure gauges and pneumatic products, sold in Riyadh to walk-in and phone customers.",
  });

export function ProductsIndex({ lang }: { lang: Lang }) {
  const name = lang === "ar" ? "المنتجات" : "Products";
  const desc = lang === "ar" ? "منتجات هيدروليك ونيوماتيك" : "Hydraulic and pneumatic products";
  const title = lang === "ar" ? "منتجات هيدروليك ونيوماتيك للبيع في الرياض" : "Hydraulic and pneumatic products for sale in Riyadh";
  const crumbs = [{ name: UI.breadcrumbHome[lang], path: "/" }, { name }];
  return (
    <>
      <JsonLd
        data={graph(
          businessJsonLd(lang),
          websiteJsonLd(lang),
          webPageJsonLd(lang, { path: "/products/", name: title, description: desc, type: "CollectionPage" }),
          breadcrumbJsonLd(lang, crumbs, "/products/"),
          collectionJsonLd(lang, { name, description: desc, path: "/products/", items: PRODUCT_LIST.map((e) => ({ name: e.title[lang], path: entryPath(e) })) }),
        )}
      />
      <PageHead lang={lang} crumbs={[{ name }]} title={title} lead={HOME.productsLead[lang]}>
      </PageHead>
      <section className="section">
        <div className="wrap">
          <IndexList lang={lang} items={rows(lang, PRODUCT_LIST)} cols={2} />
        </div>
      </section>
      <ContactBand lang={lang} />
    </>
  );
}

/* ---------- one service or product ---------- */

export const servicesParams = () => SERVICE_LIST.map((e) => ({ slug: e.slug }));
export const productsParams = () => PRODUCT_LIST.map((e) => ({ slug: e.slug }));

export function entryMeta(lang: Lang, slug: string): Metadata {
  const e = entryBySlug(slug)!;
  return pageMeta({ lang, path: entryPath(e), title: titled(lang, e.metaTitle[lang]), description: e.desc[lang] });
}

export function EntryView({ lang, slug }: { lang: Lang; slug: string }) {
  const e = entryBySlug(slug)!;
  const isService = e.kind === "service";
  const parent = isService ? { name: UI.nav.services[lang], path: "/services/" } : { name: UI.nav.products[lang], path: "/products/" };
  const crumbs = [{ name: UI.breadcrumbHome[lang], path: "/" }, parent, { name: e.title[lang], path: entryPath(e) }];
  const msg = `${UI.waGeneral[lang]} ${e.title[lang]}`;
  const facts = [
    { k: UI.type[lang], v: isService ? UI.typeService[lang] : UI.typeProduct[lang] },
    { k: UI.workshop[lang], v: SITE.address[lang] },
    { k: UI.area[lang], v: UI.coverage[lang] },
    { k: UI.quoteLabel[lang], v: UI.quoteValue[lang] },
    { k: UI.supportLabel[lang], v: UI.supportValue[lang] },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          businessJsonLd(lang),
          websiteJsonLd(lang),
          webPageJsonLd(lang, { path: entryPath(e), name: titled(lang, e.metaTitle[lang]), description: e.desc[lang], mainId: `${abs(lang, entryPath(e))}#main` }),
          breadcrumbJsonLd(lang, crumbs, entryPath(e)),
          serviceJsonLd(lang, e),
          faqJsonLd(lang, e.faq),
        )}
      />

      <PageHead
        lang={lang}
        crumbs={[parent, { name: e.title[lang] }]}
        title={e.h1[lang]}
        lead={e.lead[lang]}
        art={slug === "hydraulic-cylinder" ? <div className="head-art"><CylinderDiagram lang={lang} tone="light" /></div> : undefined}
      >
        <Cta lang={lang} text={msg} />
        <p className="small muted">{UI.pickup[lang]}. {UI.quoteNote[lang]}</p>
      </PageHead>

      <section className="section">
        <div className="wrap split split-sticky">
          <div style={{ display: "grid", gap: 48 }}>
            <div style={{ display: "grid", gap: 24 }}>
              <h2 className="h1">{isService ? UI.scope[lang] : UI.scopeProduct[lang]}</h2>
              <ul className="ticks">
                {e.scope.map((s, i) => <Check key={i}>{s[lang]}</Check>)}
              </ul>
            </div>
            {e.specs && (
              <div style={{ display: "grid", gap: 24 }}>
                <h2 className="h2">{UI.specs[lang]}</h2>
                <ul className="ticks">
                  {e.specs.map((s, i) => <Check key={i}>{s[lang]}</Check>)}
                </ul>
              </div>
            )}
          </div>
          <div style={{ display: "grid", gap: 48 }}>
            <div style={{ display: "grid", gap: 16 }}>
              <h2 className="h3">{UI.keyFacts[lang]}</h2>
              <KeyFacts items={facts} />
            </div>
            {e.signs && (
              <div style={{ display: "grid", gap: 16 }}>
                <h2 className="h3">{UI.signs[lang]}</h2>
                <ul className="signs">
                  {e.signs.map((s, i) => <li key={i}>{s[lang]}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <GuideLinks lang={lang} slug={slug} />
      <FaqList lang={lang} faq={e.faq} tone="paper" />
      <Related lang={lang} slugs={e.related} />
      <section className="section">
        <div className="wrap-narrow">
          <QuoteForm lang={lang} preset={slug} />
        </div>
      </section>
    </>
  );
}

/* ---------- pump testing ---------- */

export const testingMeta = (lang: Lang): Metadata =>
  pageMeta({ lang, path: "/pump-testing/", title: titled(lang, TESTING.metaTitle[lang]), description: TESTING.desc[lang] });

export function TestingView({ lang }: { lang: Lang }) {
  const name = UI.nav.testing[lang];
  const crumbs = [{ name: UI.breadcrumbHome[lang], path: "/" }, { name, path: "/pump-testing/" }];
  const svc = {
    "@type": "Service",
    "@id": `${abs(lang, "/pump-testing/")}#main`,
    name: TESTING.h1[lang],
    description: TESTING.desc[lang],
    serviceType: "Hydraulic pump testing",
    url: abs(lang, "/pump-testing/"),
    inLanguage: lang,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
  };
  return (
    <>
      <JsonLd
        data={graph(
          businessJsonLd(lang),
          websiteJsonLd(lang),
          webPageJsonLd(lang, { path: "/pump-testing/", name: titled(lang, TESTING.metaTitle[lang]), description: TESTING.desc[lang], mainId: `${abs(lang, "/pump-testing/")}#main` }),
          breadcrumbJsonLd(lang, crumbs, "/pump-testing/"),
          svc,
          faqJsonLd(lang, TESTING.faq),
        )}
      />
      <PageHead
        lang={lang}
        crumbs={[{ name }]}
        title={TESTING.h1[lang]}
        lead={TESTING.lead[lang]}
      >
        <Cta lang={lang} text={`${UI.waGeneral[lang]} ${name}`} />
      </PageHead>
      <section className="section">
        <div className="wrap split split-sticky">
          <div className="section-head">
            <span className="eyebrow">{name}</span>
            <h2 className="h1">{lang === "ar" ? "ما الذي تستفيده" : "What you get"}</h2>
          </div>
          <ul className="ticks">
            {TESTING.why.map((w, i) => <Check key={i}>{w[lang]}</Check>)}
          </ul>
        </div>
      </section>
      <GuideLinks lang={lang} slug="pump-testing" />
      <FaqList lang={lang} faq={TESTING.faq} tone="paper" />
      <Related lang={lang} slugs={["hydraulic-pump", "gear-pump", "power-pack"]} />
      <section className="section">
        <div className="wrap-narrow">
          <QuoteForm lang={lang} preset="pump-testing" />
        </div>
      </section>
    </>
  );
}

/* ---------- about ---------- */

export const aboutMeta = (lang: Lang): Metadata =>
  pageMeta({ lang, path: "/about/", title: titled(lang, ABOUT.metaTitle[lang]), description: ABOUT.desc[lang] });

export function AboutView({ lang }: { lang: Lang }) {
  const name = UI.nav.about[lang];
  const crumbs = [{ name: UI.breadcrumbHome[lang], path: "/" }, { name, path: "/about/" }];
  return (
    <>
      <JsonLd
        data={graph(
          businessJsonLd(lang),
          websiteJsonLd(lang),
          webPageJsonLd(lang, { path: "/about/", name: titled(lang, ABOUT.metaTitle[lang]), description: ABOUT.desc[lang], type: "AboutPage", mainId: `${SITE.url}/#business` }),
          breadcrumbJsonLd(lang, crumbs, "/about/"),
        )}
      />
      <PageHead lang={lang} crumbs={[{ name }]} title={ABOUT.h1[lang]} lead={ABOUT.lead[lang]}>
        {SITE.since && <p className="small muted">{UI.since(SITE.since)[lang]}</p>}
      </PageHead>
      <section className="section">
        <div className="wrap" style={{ display: "grid", gap: 48 }}>
          <div className="rows">
            {ABOUT.blocks.map((b, i) => (
              <div key={i}>
                <h2 className="h2">{b.t[lang]}</h2>
                <p>{b.p[lang]}</p>
              </div>
            ))}
          </div>
          {SITE.features.linkProductHouse && (
            <div className="callout">
              <div style={{ display: "grid", gap: 8 }}>
                <h3 className="h3">{ABOUT.sisterTitle[lang]}</h3>
                <p className="muted">{ABOUT.sisterText[lang]}</p>
              </div>
              <a className="btn btn-line" href={SITE.productHouse.url} target="_blank" rel="noopener">{ABOUT.sisterLink[lang]} <Arrow lang={lang} /></a>
            </div>
          )}
        </div>
      </section>
      <ContactBand lang={lang} />
    </>
  );
}

/* ---------- contact ---------- */

export const contactMeta = (lang: Lang): Metadata =>
  pageMeta({ lang, path: "/contact/", title: titled(lang, CONTACT.metaTitle[lang]), description: CONTACT.desc[lang] });

export function ContactView({ lang }: { lang: Lang }) {
  const name = UI.nav.contact[lang];
  const crumbs = [{ name: UI.breadcrumbHome[lang], path: "/" }, { name, path: "/contact/" }];
  return (
    <>
      <JsonLd
        data={graph(
          businessJsonLd(lang),
          websiteJsonLd(lang),
          webPageJsonLd(lang, { path: "/contact/", name: titled(lang, CONTACT.metaTitle[lang]), description: CONTACT.desc[lang], type: "ContactPage", mainId: `${SITE.url}/#business` }),
          breadcrumbJsonLd(lang, crumbs, "/contact/"),
        )}
      />
      <PageHead lang={lang} crumbs={[{ name }]} title={CONTACT.h1[lang]} lead={CONTACT.lead[lang]}>
      </PageHead>
      <section className="section">
        <div className="wrap split split-even">
          <ul className="contact-list">
            <li>
              <Ui.Phone size={26} weight="regular" aria-hidden="true" />
              <div><span>{UI.phoneLabel[lang]}</span><a href={telLink()} dir="ltr" className="num">{SITE.phoneDisplay}</a></div>
            </li>
            <li>
              <WhatsAppIcon size={26} />
              <div><span>{UI.whatsapp[lang]}</span><a href={waLink(UI.waGeneral[lang])} target="_blank" rel="noopener noreferrer">{UI.quote[lang]}</a></div>
            </li>
            <li>
              <Ui.Envelope size={26} weight="regular" aria-hidden="true" />
              <div><span>{UI.emailLabel[lang]}</span><a href={mailLink()} dir="ltr">{SITE.email}</a></div>
            </li>
            <li>
              <Ui.MapPin size={26} weight="regular" aria-hidden="true" />
              <div><span>{UI.address[lang]}</span><b>{SITE.address[lang]}</b><a href={SITE.mapUrl} target="_blank" rel="noopener" className="small">{UI.openMap[lang]}</a></div>
            </li>
            <li>
              <Ui.Clock size={26} weight="regular" aria-hidden="true" />
              <div><span>{UI.hoursLabel[lang]}</span><b>{SITE.hours[lang]}</b><OpenStatus lang={lang} /><em>{UI.supportAnytime[lang]}</em></div>
            </li>
          </ul>
          <QuoteForm lang={lang} />
        </div>
      </section>
    </>
  );
}

/* ---------- guides ---------- */

export const guidesParams = () => GUIDES.map((g) => ({ slug: g.slug }));

export const guidesMeta = (lang: Lang): Metadata =>
  pageMeta({
    lang,
    path: "/guides/",
    title: titled(lang, lang === "ar" ? "أدلة هيدروليك: أعطال السلندرات والمضخات" : "Hydraulic Guides: Cylinder & Pump Faults"),
    description:
      lang === "ar"
        ? "أدلة عملية عن تسريب السلندرات وضعف ضغط المضخات وصوتها وحرارة الزيت، وكيف تطلب عرض سعر صيانة من ورشتنا في الرياض."
        : "Practical guides on cylinder leaks, low pump pressure, pump noise and oil heat, and how to request a repair quote from our Riyadh workshop.",
  });

export function GuidesIndex({ lang }: { lang: Lang }) {
  const name = UI.nav.guides[lang];
  const title = lang === "ar" ? "أدلة هيدروليك: أعطال السلندرات والمضخات وطريقة الفحص" : "Hydraulic guides: cylinder and pump faults and how to check them";
  const desc = UI.guidesLead[lang];
  const crumbs = [{ name: UI.breadcrumbHome[lang], path: "/" }, { name }];
  return (
    <>
      <JsonLd
        data={graph(
          businessJsonLd(lang),
          websiteJsonLd(lang),
          webPageJsonLd(lang, { path: "/guides/", name: title, description: desc, type: "CollectionPage" }),
          breadcrumbJsonLd(lang, crumbs, "/guides/"),
          collectionJsonLd(lang, { name, description: desc, path: "/guides/", items: GUIDES.map((g) => ({ name: g.title[lang], path: guidePath(g) })) }),
        )}
      />
      <PageHead lang={lang} crumbs={[{ name }]} title={title} lead={desc} />
      <section className="section">
        <div className="wrap">
          <IndexList lang={lang} items={guideRows(lang, GUIDES)} />
        </div>
      </section>
      <ContactBand lang={lang} />
    </>
  );
}

export function guideMeta(lang: Lang, slug: string): Metadata {
  const g = guideBySlug(slug)!;
  return pageMeta({ lang, path: guidePath(g), title: titled(lang, g.metaTitle[lang]), description: g.desc[lang] });
}

export function GuideView({ lang, slug }: { lang: Lang; slug: string }) {
  const g = guideBySlug(slug)!;
  const path = guidePath(g);
  const parent = { name: UI.nav.guides[lang], path: "/guides/" };
  const crumbs = [{ name: UI.breadcrumbHome[lang], path: "/" }, parent, { name: g.title[lang], path }];
  return (
    <>
      <JsonLd
        data={graph(
          businessJsonLd(lang),
          websiteJsonLd(lang),
          webPageJsonLd(lang, { path, name: titled(lang, g.metaTitle[lang]), description: g.desc[lang], mainId: `${abs(lang, path)}#main` }),
          breadcrumbJsonLd(lang, crumbs, path),
          articleJsonLd(lang, g),
          faqJsonLd(lang, g.faq),
        )}
      />
      <PageHead lang={lang} crumbs={[parent, { name: g.title[lang] }]} title={g.h1[lang]} lead={g.answer[lang]}>
        <Cta lang={lang} text={g.ask[lang]} />
        <p className="small muted">{UI.pickup[lang]}. {UI.quoteNote[lang]}</p>
      </PageHead>

      <article className="section">
        <div className="wrap" style={{ display: "grid", gap: 40 }}>
          {g.note && <p className="note">{g.note[lang]}</p>}
          <div className="rows">
            {g.sections.map((s, i) => (
              <div key={i}>
                <h2 className="h2">{s.h[lang]}</h2>
                <div style={{ display: "grid", gap: 16 }}>
                  {s.p && <p>{s.p[lang]}</p>}
                  {s.list && (
                    <ul className="signs">
                      {s.list.map((li, j) => <li key={j}>{li[lang]}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <FaqList lang={lang} faq={g.faq} tone="paper" />
      <Related lang={lang} slugs={g.related} />
      <section className="section">
        <div className="wrap-narrow">
          <QuoteForm lang={lang} preset={g.related[0]} />
        </div>
      </section>
    </>
  );
}

/* ---------- 404 ---------- */

export function NotFoundView({ lang }: { lang: Lang }) {
  return (
    <section className="page-head">
      <div className="wrap-narrow" style={{ display: "grid", gap: 24 }}>
        <h1 className="h1">{UI.notFoundTitle[lang]}</h1>
        <p className="lead">{UI.notFoundText[lang]}</p>
        <div className="btn-row">
          <a className="btn btn-ink btn-lg" href={href(lang)}>{UI.home[lang]}</a>
          <a className="btn btn-line btn-lg" href={telLink()}><span dir="ltr" className="num">{SITE.phoneDisplay}</span></a>
        </div>
      </div>
    </section>
  );
}

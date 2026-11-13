import type { Metadata } from "next";
import { PLACEHOLDERS, SITE, type Lang, type T } from "@/config/site";
import { abs, href } from "@/lib/links";
import { PRODUCT_LIST, SERVICE_LIST, entryPath, type Entry, type Faq } from "@/content/entries";
import { guidePath, type Guide } from "@/content/guides";

export const BRAND = { ar: "النظام المتطور للهيدروليك", en: "Advanced Hydraulics" } as const;
/** Browser, home-screen and search-result icons. Files live in /public; the manifest is /site.webmanifest. */
export const ICONS: Metadata = {
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};
export const titled = (lang: Lang, page: string) => `${page} | ${BRAND[lang]}`;

const ID = { business: `${SITE.url}/#business`, site: `${SITE.url}/#website` };

export function pageMeta(o: { lang: Lang; path: string; title: string; description: string; noindex?: boolean }): Metadata {
  const url = abs(o.lang, o.path);
  const img = `${SITE.url}/img/og.jpg`;
  const name = o.lang === "ar" ? SITE.nameAr : SITE.nameEn;
  return {
    metadataBase: new URL(SITE.url),
    title: { absolute: o.title },
    description: o.description,
    alternates: {
      canonical: url,
      languages: { ar: abs("ar", o.path), en: abs("en", o.path), "x-default": abs("ar", o.path) },
    },
    robots: o.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      url,
      title: o.title,
      description: o.description,
      siteName: name,
      locale: o.lang === "ar" ? "ar_SA" : "en_US",
      alternateLocale: o.lang === "ar" ? ["en_US"] : ["ar_SA"],
      images: [{ url: img, width: 1200, height: 630, alt: name }],
    },
    twitter: { card: "summary_large_image", title: o.title, description: o.description, images: [img] },
  };
}

const KNOWS = {
  ar: ["صيانة السلندرات الهيدروليكية", "صيانة المضخات الهيدروليكية", "صمامات التحكم", "وحدات القدرة الهيدروليكية", "السلندرات الهوائية", "صيانة الرافعات", "هيدروليك المعدات الثقيلة", "كبس الليات الهيدروليكية", "فحص المضخات"],
  en: ["Hydraulic cylinder repair", "Hydraulic pump repair", "Control valves", "Hydraulic power packs", "Pneumatic cylinders", "Crane repair", "Heavy equipment hydraulics", "Hydraulic hose crimping", "Pump testing"],
} as const;

export function businessJsonLd(lang: Lang) {
  return {
    "@type": "LocalBusiness",
    "@id": ID.business,
    name: lang === "ar" ? SITE.nameAr : SITE.nameEn,
    alternateName: lang === "ar" ? SITE.nameEn : SITE.nameAr,
    url: abs(lang, "/"),
    description:
      lang === "ar"
        ? "ورشة صيانة وتصنيع السلندرات والمضخات والصمامات ووحدات القدرة الهيدروليكية في الرياض، مع استلام وخدمة موقعية في جميع مدن المملكة."
        : "Workshop for repair and manufacturing of hydraulic cylinders, pumps, valves and power packs in Riyadh, with pickup and on-site service in all Saudi cities.",
    image: `${SITE.url}/img/og.jpg`,
    logo: `${SITE.url}/logo/icon.png`,
    telephone: `+${SITE.whatsapp}`,
    email: SITE.email,
    // Legal identifiers are published only once they are real (see PLACEHOLDERS in config/site.ts).
    ...(PLACEHOLDERS.vat ? {} : { vatID: SITE.vat, taxID: SITE.vat }),
    ...(PLACEHOLDERS.cr ? {} : { identifier: { "@type": "PropertyValue", name: "Commercial registration", value: SITE.cr } }),
    ...(SITE.since ? { foundingDate: String(SITE.since) } : {}),
    contactPoint: [
      { "@type": "ContactPoint", contactType: "sales", telephone: `+${SITE.whatsapp}`, email: SITE.email, areaServed: "SA", availableLanguage: ["Arabic", "English"] },
    ],
    address: { "@type": "PostalAddress", streetAddress: `${SITE.street}, Al Sina'iyah`, addressLocality: "Riyadh", addressRegion: "Riyadh", postalCode: SITE.postalCode, addressCountry: "SA" },
    geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.mapUrl,
    // Add the Google Business Profile link, Facebook, Instagram and LinkedIn pages here once they exist and are owned by the business.
    sameAs: [SITE.mapUrl],
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: SITE.open.days, opens: SITE.open.opens, closes: SITE.open.closes }],
    areaServed: [{ "@type": "Country", name: "Saudi Arabia" }, ...SITE.cities.map((c) => ({ "@type": "City", name: c[lang] }))],
    knowsAbout: KNOWS[lang],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "ar" ? "الخدمات والمنتجات" : "Services and products",
      itemListElement: [
        { "@type": "OfferCatalog", name: lang === "ar" ? "خدمات الصيانة والتصنيع" : "Repair and manufacturing services", itemListElement: SERVICE_LIST.map((e) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: e.title[lang], url: abs(lang, entryPath(e)) } })) },
        { "@type": "OfferCatalog", name: lang === "ar" ? "المنتجات" : "Products", itemListElement: PRODUCT_LIST.map((e) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: e.title[lang], url: abs(lang, entryPath(e)) } })) },
      ],
    },
    slogan: lang === "ar" ? "صيانة وتصنيع هيدروليك في الرياض" : "Hydraulic repair and manufacturing in Riyadh",
  };
}

export function websiteJsonLd(lang: Lang) {
  return {
    "@type": "WebSite",
    "@id": ID.site,
    url: abs(lang, "/"),
    name: lang === "ar" ? SITE.nameAr : SITE.nameEn,
    inLanguage: lang,
    publisher: { "@id": ID.business },
  };
}

/**
 * Products are sold by quote, so there is no price or review to publish. Google's Product rich results need an
 * offer with a price, a review or a rating; without one the item is reported as an error in Search Console.
 * Both kinds of page are therefore marked as a Service (supply, repair or manufacture on request).
 */
export function serviceJsonLd(lang: Lang, e: Entry) {
  return {
    "@type": "Service",
    "@id": `${abs(lang, entryPath(e))}#main`,
    name: e.h1[lang],
    description: e.desc[lang],
    url: abs(lang, entryPath(e)),
    inLanguage: lang,
    serviceType: e.kind === "service" ? e.title.en : `Supply of ${e.title.en}`,
    category: e.title.en,
    provider: { "@id": ID.business },
    areaServed: { "@type": "Country", name: "Saudi Arabia" },
    availableChannel: { "@type": "ServiceChannel", serviceUrl: `https://wa.me/${SITE.whatsapp}`, servicePhone: { "@type": "ContactPoint", telephone: `+${SITE.whatsapp}` } },
  };
}

/** A guide is an Article published by the business itself: no named author, so the business is author and publisher. */
export function articleJsonLd(lang: Lang, g: Guide) {
  const url = abs(lang, guidePath(g));
  return {
    "@type": "Article",
    "@id": `${url}#main`,
    headline: g.h1[lang],
    description: g.desc[lang],
    url,
    inLanguage: lang,
    datePublished: g.published,
    dateModified: SITE.updated,
    image: `${SITE.url}/img/og.jpg`,
    author: { "@id": ID.business },
    publisher: { "@id": ID.business },
    isPartOf: { "@id": ID.site },
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
}

export const faqJsonLd = (lang: Lang, faq: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q[lang], acceptedAnswer: { "@type": "Answer", text: f.a[lang] } })),
});

export const breadcrumbJsonLd = (lang: Lang, items: { name: string; path?: string }[], path: string) => ({
  "@type": "BreadcrumbList",
  "@id": `${abs(lang, path)}#breadcrumb`,
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, ...(it.path ? { item: abs(lang, it.path) } : {}) })),
});

export const collectionJsonLd = (lang: Lang, o: { name: string; description: string; path: string; items: { name: string; path: string }[] }) => ({
  "@type": "CollectionPage",
  name: o.name,
  description: o.description,
  url: abs(lang, o.path),
  inLanguage: lang,
  isPartOf: { "@id": ID.site },
  about: { "@id": ID.business },
  mainEntity: { "@type": "ItemList", numberOfItems: o.items.length, itemListElement: o.items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: abs(lang, it.path) })) },
});

/** One page, one graph: business, site, this page, breadcrumbs and whatever the page is about. */
export function webPageJsonLd(lang: Lang, o: { path: string; name: string; description: string; type?: string; mainId?: string; crumbs?: boolean }) {
  const url = abs(lang, o.path);
  return {
    "@type": o.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: o.name,
    description: o.description,
    inLanguage: lang,
    isPartOf: { "@id": ID.site },
    about: { "@id": ID.business },
    dateModified: SITE.updated,
    ...(o.mainId ? { mainEntity: { "@id": o.mainId } } : {}),
    ...(o.crumbs === false ? {} : { breadcrumb: { "@id": `${url}#breadcrumb` } }),
  };
}

export const graph = (...nodes: unknown[]) => ({ "@context": "https://schema.org", "@graph": nodes.filter(Boolean) });

export const jsonLdScript = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
export { href };
export type { T };

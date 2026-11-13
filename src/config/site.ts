// Every business fact on the site lives here.
// PLACEHOLDERS lists values that are still dummy: `npm run check` prints them and the build checker fails the
// "ready" verdict until each one is real. Never publish while any is true.

export const SITE = {
  url: "https://ahsksa.com",

  nameAr: "مركز النظام المتطور للهيدروليك", // Advanced System Center for Hydraulics (spelling checked against the catalogue and business card)
  nameEn: "Advanced Hydraulics",

  // Confirmed by the owner (Nov 12 2026): same number for calls and WhatsApp.
  whatsapp: "966591355137",
  phoneDisplay: "+966 59 135 5137",
  phoneLocal: "059 135 5137",
  email: "sales@ahsksa.com",
  mapUrl: "https://maps.app.goo.gl/LQxhbwVKAAvkMPiU9",

  // Google Analytics 4 Measurement ID (G-XXXXXXXXXX). Empty = analytics off. Create a NEW GA4 property for this site.
  gaId: "",

  // Address as Google Maps lists it (checked Nov 13 2026): 4023 Hamad Al Tamimi, Al Sina'iyah district, Riyadh 12872.
  // The business card also prints "Al owaidha"; that sub-area name is not on the Google listing, so the site leaves it out.
  address: {
    ar: "الصناعية القديمة، الرياض", // Old Industrial Area (As-Sinaiyah), Riyadh
    en: "As-Sinaiyah (Old Industrial Area), Riyadh",
  },
  street: "4023 Hamad Al Tamimi",
  postalCode: "12872",
  geo: { lat: 24.6350774, lng: 46.7563761 }, // from the Google Maps listing
  hours: {
    ar: "السبت – الخميس، 7:30 ص – 6:30 م (الجمعة إجازة)", // Saturday to Thursday, 7:30 AM to 6:30 PM (Friday off)
    en: "Saturday – Thursday, 7:30 AM – 6:30 PM (closed Friday)",
  },
  open: { days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:30", closes: "18:30" },

  // DUMMY until the client sends the documents.
  cr: "0000000000",
  vat: "000000000000000",

  // Year the workshop started. null = the "since" line and any "years in business" text stay hidden.
  since: null as number | null,

  /** Date of the last content change. Shown on pages and in structured data. Update it whenever copy changes. */
  updated: "2026-11-13",
  cities: [
    { ar: "الرياض", en: "Riyadh" }, { ar: "جدة", en: "Jeddah" }, { ar: "الدمام", en: "Dammam" }, { ar: "الخبر", en: "Al Khobar" },
    { ar: "مكة المكرمة", en: "Makkah" }, { ar: "المدينة المنورة", en: "Madinah" }, { ar: "الجبيل", en: "Jubail" }, { ar: "ينبع", en: "Yanbu" },
    { ar: "الطائف", en: "Taif" }, { ar: "تبوك", en: "Tabuk" }, { ar: "أبها", en: "Abha" }, { ar: "بريدة", en: "Buraidah" },
    { ar: "حائل", en: "Hail" }, { ar: "جازان", en: "Jazan" }, { ar: "نجران", en: "Najran" },
  ],
  features: {
    // Turn on only after the client confirms they crimp hoses to size for customers (see /products/hydraulic-hoses/).
    hoseCrimping: false,
    // Link to the sister business (concrete pump spare parts shop). Remove if the owner prefers the two sites unlinked.
    linkProductHouse: true,
  },
  productHouse: { name: { ar: "مؤسسة بيت المنتج للتجارة", en: "Product House Trading Est." }, url: "https://producthousesa.com" },
} as const;

export const PLACEHOLDERS = {
  cr: SITE.cr === "0000000000",
  vat: SITE.vat === "000000000000000",
  gaId: SITE.gaId === "",
  since: SITE.since === null,
  geo: false,
};

export const LANGS = ["ar", "en"] as const;
export type Lang = (typeof LANGS)[number];
export type T = { ar: string; en: string };

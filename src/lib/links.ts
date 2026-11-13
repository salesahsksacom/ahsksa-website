import { SITE, type Lang } from "@/config/site";

/** Arabic lives at the site root, English under /en. Every path ends with a slash. */
export const href = (lang: Lang, path = "/") => {
  const p = path.startsWith("/") ? path : `/${path}`;
  return lang === "ar" ? p : p === "/" ? "/en/" : `/en${p}`;
};
export const abs = (lang: Lang, path = "/") => `${SITE.url}${href(lang, path)}`;

export const waLink = (text: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
export const telLink = () => `tel:+${SITE.whatsapp}`;
export const mailLink = () => `mailto:${SITE.email}`;

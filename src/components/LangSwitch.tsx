"use client";

import { usePathname } from "next/navigation";
import type { Lang } from "@/config/site";
import { UI } from "@/i18n/dict";

/** Links to the same page in the other language. Arabic is the site root, English lives under /en. */
export default function LangSwitch({ lang }: { lang: Lang }) {
  const path = usePathname() || "/";
  const other = lang === "ar" ? (path === "/" ? "/en/" : `/en${path}`) : path.replace(/^\/en/, "") || "/";
  return (
    <a href={other} hrefLang={lang === "ar" ? "en" : "ar"} lang={lang === "ar" ? "en" : "ar"} className="lang-switch" aria-label={UI.langLabel[lang]}>
      {UI.langName[lang]}
    </a>
  );
}

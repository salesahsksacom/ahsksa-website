import "../app/globals.css";

import type { ReactNode } from "react";
import { preload } from "react-dom";
import type { Lang } from "@/config/site";
import { UI } from "@/i18n/dict";
import { telLink, waLink } from "@/lib/links";
import Analytics from "./Analytics";
import Footer from "./Footer";
import Header from "./Header";
import MobileBar from "./MobileBar";
import Motion from "./Motion";
import { Ui } from "./Icon";

export default function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  // The fonts every first paint needs start downloading with the HTML, not after the stylesheet is parsed.
  const font = (f: string) => preload(`/fonts/${f}.woff2`, { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  font(lang === "ar" ? "hacen-algeria-400" : "alte-haas-400");
  if (lang === "ar") { font("pointart-bold-700"); font("alte-haas-400"); } // Arabic headings; numerals and Latin names
  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body>
        <a href="#main" className="skip-link">{UI.skip[lang]}</a>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />

        {/* Mobile: one-tap call and WhatsApp, the two actions that matter for this business. */}
        <MobileBar>
          <a href={telLink()} className="btn btn-ink" aria-label={UI.call[lang]}>
            <Ui.Phone size={20} weight="bold" aria-hidden="true" />
            {UI.call[lang]}
          </a>
          <a href={waLink(UI.waGeneral[lang])} target="_blank" rel="noopener noreferrer" className="btn btn-wa" aria-label={UI.waFloat[lang]}>
            <Ui.WhatsappLogo size={20} aria-hidden="true" />
            {UI.whatsapp[lang]}
          </a>
        </MobileBar>
        <noscript><style>{".mobile-bar{transform:none!important;opacity:1!important;visibility:visible!important}"}</style></noscript>

        {/* Desktop: floating WhatsApp button. */}
        <a href={waLink(UI.waGeneral[lang])} target="_blank" rel="noopener noreferrer" className="fab-wa" aria-label={UI.waFloat[lang]}>
          <Ui.WhatsappLogo size={32} aria-hidden="true" />
        </a>
        <Motion />
        <Analytics />
      </body>
    </html>
  );
}

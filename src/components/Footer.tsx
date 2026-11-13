import { SITE, type Lang } from "@/config/site";
import { SERVICE_LIST, PRODUCT_LIST, entryPath } from "@/content/entries";
import { UI } from "@/i18n/dict";
import { href, mailLink, telLink, waLink } from "@/lib/links";
import { Updated } from "./Bits";
import { Ui } from "./Icon";

export default function Footer({ lang }: { lang: Lang }) {
  const n = UI.nav;
  return (
    <footer className="site-footer on-dark">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-brand">
            <span className="tile"><img src="/logo/icon.svg" alt="" width={36} height={35} /></span>
            <strong>{lang === "ar" ? SITE.nameAr : SITE.nameEn}</strong>
          </div>
          <ul className="contact-f">
            <li>
              <Ui.MapPin size={18} weight="regular" aria-hidden="true" />
              <a href={SITE.mapUrl} target="_blank" rel="noopener">{SITE.address[lang]}</a>
            </li>
            <li>
              <Ui.Phone size={18} weight="regular" aria-hidden="true" />
              <a href={telLink()} dir="ltr" className="num">{SITE.phoneDisplay}</a>
            </li>
            <li>
              <Ui.WhatsappLogo size={18} aria-hidden="true" />
              <a href={waLink(UI.waGeneral[lang])} target="_blank" rel="noopener noreferrer">{UI.whatsapp[lang]}</a>
            </li>
            <li>
              <Ui.Envelope size={18} weight="regular" aria-hidden="true" />
              <a href={mailLink()} dir="ltr">{SITE.email}</a>
            </li>
            <li>
              <Ui.Clock size={18} weight="regular" aria-hidden="true" />
              <span>{SITE.hours[lang]}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-h">{n.services[lang]}</h2>
          <ul className="footer-links">
            {SERVICE_LIST.map((e) => (
              <li key={e.slug}><a href={href(lang, entryPath(e))}>{e.title[lang]}</a></li>
            ))}
            <li><a href={href(lang, "/pump-testing/")}>{n.testing[lang]}</a></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-h">{n.products[lang]}</h2>
          <ul className="footer-links">
            {PRODUCT_LIST.map((e) => (
              <li key={e.slug}><a href={href(lang, entryPath(e))}>{e.title[lang]}</a></li>
            ))}
          </ul>
          <h2 className="footer-h footer-sub">{n.about[lang]}</h2>
          <ul className="footer-links">
            <li><a href={href(lang, "/guides/")}>{n.guides[lang]}</a></li>
            <li><a href={href(lang, "/about/")}>{n.about[lang]}</a></li>
            <li><a href={href(lang, "/contact/")}>{n.contact[lang]}</a></li>
            {SITE.features.linkProductHouse && (
              <li><a href={SITE.productHouse.url} target="_blank" rel="noopener">{SITE.productHouse.name[lang]}</a></li>
            )}
          </ul>
        </div>
      </div>
      <div className="wrap footer-bar">
        <span>
          © {new Date().getFullYear()} {lang === "ar" ? SITE.nameAr : SITE.nameEn}. {UI.rights[lang]}.
          {SITE.since ? ` ${UI.since(SITE.since)[lang]}.` : ""}
        </span>
        <span>
          {UI.cr[lang]}: <bdi className="num">{SITE.cr}</bdi> · {UI.vat[lang]}: <bdi className="num">{SITE.vat}</bdi>
        </span>
        <Updated lang={lang} />
      </div>
    </footer>
  );
}

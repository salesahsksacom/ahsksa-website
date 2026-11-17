import { SITE, type Lang } from "@/config/site";
import { UI } from "@/i18n/dict";
import { href, telLink, waLink } from "@/lib/links";
import { Ui } from "./Icon";
import LangSwitch from "./LangSwitch";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Header({ lang }: { lang: Lang }) {
  const n = UI.nav;
  const name = lang === "ar" ? SITE.nameAr : SITE.nameEn;
  const links = [
    { h: href(lang, "/services/"), l: n.services[lang] },
    { h: href(lang, "/products/"), l: n.products[lang] },
    { h: href(lang, "/pump-testing/"), l: n.testing[lang] },
    { h: href(lang, "/guides/"), l: n.guides[lang] },
    { h: href(lang, "/about/"), l: n.about[lang] },
    { h: href(lang, "/contact/"), l: n.contact[lang] },
  ];
  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a href={href(lang)} className="brand" aria-label={`${name} - ${UI.home[lang]}`}>
          <img src="/logo/icon.svg" alt="" width={40} height={39} className="brand-icon" />
          <span className="brand-name">{name}</span>
        </a>

        <NavLinks links={links} label={n.menu[lang]} />

        <div className="header-actions">
          <LangSwitch lang={lang} />
          <a href={telLink()} className="btn btn-ink btn-sm call-btn" aria-label={`${UI.call[lang]} ${SITE.phoneDisplay}`}>
            <Ui.Phone size={18} weight="bold" aria-hidden="true" />
            <span dir="ltr" className="num call-num">{SITE.phoneDisplay}</span>
          </a>
          <MobileMenu
            rtl={lang === "ar"}
            links={links}
            menuLabel={n.menu[lang]}
            closeLabel={UI.close[lang]}
            callLabel={UI.call[lang]}
            waLabel={UI.whatsapp[lang]}
            tel={telLink()}
            wa={waLink(UI.waGeneral[lang])}
            phone={SITE.phoneDisplay}
            directionsLabel={UI.directions[lang]}
            lang={lang}
            meta={[SITE.hours[lang], SITE.address[lang]]}
          />
        </div>
      </div>
    </header>
  );
}

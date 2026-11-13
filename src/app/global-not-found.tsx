import "./globals.css";
import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { telLink } from "@/lib/links";
import { ICONS } from "@/lib/seo";

export const metadata: Metadata = { ...ICONS, title: "الصفحة غير موجودة | Page not found", robots: { index: false, follow: true } };

/** Shown by Cloudflare for any address that does not exist. Both languages. */
export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <main className="page-head">
          <div className="wrap-narrow" style={{ display: "grid", gap: 24 }}>
            <h1 className="h1">الصفحة غير موجودة</h1>
            {/* This page does not exist */}
            <p className="lead">ربما تغيّر الرابط. ارجع إلى الرئيسية أو اتصل بنا مباشرة.</p>
            {/* The link may have changed. Go back to the home page or call us directly. */}
            <div dir="ltr" className="nf-en">
              <h2 className="h2">Page not found</h2>
              <p className="muted">The link may have changed. Go back home or call us directly.</p>
            </div>
            <div className="btn-row">
              <a href="/" className="btn btn-ink btn-lg">الرئيسية / Home</a>
              <a href="/en/" className="btn btn-line btn-lg">English site</a>
              <a href={telLink()} className="btn btn-line btn-lg"><span dir="ltr">{SITE.phoneDisplay}</span></a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

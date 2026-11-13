"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE } from "@/config/site";
import { Ui, WhatsAppIcon } from "./Icon";
import OpenStatus from "./OpenStatus";

type Props = {
  rtl: boolean;
  links: { h: string; l: string }[];
  menuLabel: string;
  closeLabel: string;
  callLabel: string;
  waLabel: string;
  tel: string;
  wa: string;
  phone: string;
  directionsLabel: string;
  lang: "ar" | "en";
  meta: string[];
};

/**
 * Mobile and tablet menu: a sheet that slides in from the inline-end edge.
 * Locks page scroll while open, closes on Escape, backdrop tap, link tap and when the viewport grows to desktop.
 * Focus moves into the sheet, is trapped there, and returns to the button on close.
 */
export default function MobileMenu({ rtl, links, menuLabel, closeLabel, callLabel, waLabel, tel, wa, phone, directionsLabel, lang, meta }: Props) {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const sheet = useRef<HTMLDivElement>(null);
  const path = usePathname() || "/";
  const here = path.replace(/^\/en(?=\/)/, "");

  const close = useCallback(() => {
    setOpen(false);
    btn.current?.focus({ preventScroll: true });
  }, []);

  // Scroll lock without touching layout: touches and wheel that start outside the sheet are cancelled, and the sheet itself
  // uses `overscroll-behavior: contain`. (Toggling overflow on html/body forced a full-page relayout while the sheet animated.)
  useEffect(() => {
    if (!open) return;
    const stop = (e: TouchEvent | WheelEvent) => {
      const t = e.target as HTMLElement | null;
      const s = sheet.current;
      if (!s || !t || !s.contains(t)) return e.preventDefault();
      // inside the sheet: allow scrolling only if it actually overflows
      if (s.scrollHeight <= s.clientHeight) e.preventDefault();
    };
    document.addEventListener("touchmove", stop, { passive: false });
    document.addEventListener("wheel", stop, { passive: false });
    return () => {
      document.removeEventListener("touchmove", stop);
      document.removeEventListener("wheel", stop);
    };
  }, [open]);

  // Keyboard: Escape closes, Tab stays inside the sheet.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab" || !sheet.current) return;
      const f = Array.from(sheet.current.querySelectorAll<HTMLElement>("a[href],button:not([disabled])"));
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    // Focus moves into the sheet only after the slide has finished, so no work lands in the middle of the animation.
    const t = window.setTimeout(() => sheet.current?.focus({ preventScroll: true }), 480);
    return () => { document.removeEventListener("keydown", onKey); window.clearTimeout(t); };
  }, [open, close]);

  // Resizing up to the desktop layout closes the sheet.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1100px)");
    const on = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const Arrow = rtl ? Ui.ArrowLeft : Ui.ArrowRight;

  return (
    <div className="menu" data-open={open}>
      <button
        ref={btn}
        type="button"
        className="menu-btn"
        aria-label={menuLabel}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <i /><i />
      </button>

      <div className="drawer-backdrop" onClick={close} aria-hidden="true" />
      <div
        id="site-menu"
        ref={sheet}
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label={menuLabel}
        aria-hidden={!open}
        inert={!open}
        tabIndex={-1}
      >
        <div className="drawer-top">
          <span className="drawer-title">{menuLabel}</span>
          <button type="button" className="drawer-close" aria-label={closeLabel} onClick={close}>
            <Ui.X size={20} weight="bold" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label={menuLabel}>
          <ul className="drawer-links">
            {links.map((x, i) => {
              const target = x.h.replace(/^\/en(?=\/)/, "");
              const on = here === target || here.startsWith(target);
              return (
                <li key={x.h} style={{ ["--i" as string]: i }}>
                  <a href={x.h} aria-current={on ? "page" : undefined} onClick={() => setOpen(false)}>
                    <span>{x.l}</span>
                    <Arrow size={18} weight="bold" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="drawer-actions">
          <a href={tel} className="btn btn-ink btn-lg btn-block" aria-label={`${callLabel}: ${phone}`} style={{ ["--i" as string]: links.length }}>
            <Ui.Phone size={20} weight="bold" aria-hidden="true" />
            <span dir="ltr" className="num">{phone}</span>
          </a>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg btn-block" style={{ ["--i" as string]: links.length + 1 }}>
            <WhatsAppIcon size={22} />
            <span>{waLabel}</span>
          </a>
        </div>

        <div className="drawer-meta" style={{ ["--i" as string]: links.length + 2 }}>
          <OpenStatus lang={lang} />
          {meta.map((m) => <span key={m}>{m}</span>)}
          <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="drawer-dir" onClick={() => setOpen(false)}>
            <Ui.MapPin size={18} weight="bold" aria-hidden="true" />
            <span>{directionsLabel}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

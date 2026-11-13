"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * The phone bar (call + WhatsApp). It slides in only when none of the page's own call/WhatsApp
 * buttons (marked data-cta) are on screen, so the same two buttons never show twice at once.
 * A page with no data-cta block keeps the bar visible.
 */
export default function MobileBar({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-cta]"));
    if (!targets.length || !("IntersectionObserver" in window)) { setShow(true); return; }
    const seen = new Set<Element>();
    // The margins ignore the strip under the header pill and the strip the bar itself covers.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) { if (e.isIntersecting) seen.add(e.target); else seen.delete(e.target); }
        setShow(seen.size === 0);
      },
      { rootMargin: "-64px 0px -72px 0px" },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return <div className="mobile-bar" data-show={show}>{children}</div>;
}

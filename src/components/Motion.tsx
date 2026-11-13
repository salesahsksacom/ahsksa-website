"use client";

import { useEffect } from "react";

/** Blocks that glide in the first time they scroll into view. Only ones that start below the fold are touched. */
const REVEAL = [
  ".section-head", ".answer", ".kv", ".rows > div", ".index li", ".steps li", ".ticks > li", ".signs",
  ".callout", ".report", ".faq", ".chips", ".quote-form", ".contact-list li", ".band-grid > *", ".facts li",
].join(",");

/**
 * Two small jobs, both with IntersectionObserver (no scroll listener):
 * 1. marks <html data-scrolled> once the page has left the top, so the header can show its hairline;
 * 2. reveals blocks as they enter the viewport.
 * Nothing is hidden unless this runs, so no-JS visitors and crawlers always get the full page.
 */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const cleanup: Array<() => void> = [];

    // 1. scrolled flag
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:12px;pointer-events:none;visibility:hidden";
    document.body.prepend(sentinel);
    const top = new IntersectionObserver(([e]) => { root.dataset.scrolled = e.isIntersecting ? "false" : "true"; });
    top.observe(sentinel);
    cleanup.push(() => { top.disconnect(); sentinel.remove(); });

    // 2. reveal
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const vh = window.innerHeight;
      const pending: HTMLElement[] = [];
      document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
        if (el.closest("[data-reveal]") && !el.matches("[data-reveal]")) return; // never nest
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9) return; // already on screen at load: leave it alone
        const idx = Array.from(el.parentElement?.children ?? []).indexOf(el);
        el.style.transitionDelay = `${Math.min(idx % 5, 4) * 70}ms`;
        el.dataset.reveal = "pending";
        pending.push(el);
      });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            el.dataset.reveal = "in";
            io.unobserve(el);
            window.setTimeout(() => { el.style.transitionDelay = ""; }, 1200);
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.04 },
      );
      pending.forEach((el) => io.observe(el));
      cleanup.push(() => io.disconnect());
    }
    return () => cleanup.forEach((f) => f());
  }, []);
  return null;
}

"use client";

import { useId, useState } from "react";

/** Disclosure list. Each answer opens and closes on its own, so tapping one never moves another (no layout jump); see .faq-* in globals.css. */
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const uid = useId();
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set([0]));
  const toggle = (i: number) => setOpen((prev) => { const n = new Set(prev); if (n.has(i)) n.delete(i); else n.add(i); return n; });
  return (
    <div className="faq">
      {items.map((it, i) => {
        const on = open.has(i);
        const bid = `${uid}-b${i}`;
        const pid = `${uid}-p${i}`;
        return (
          <div key={i} className="faq-item" data-open={on}>
            <h3 className="faq-h">
              <button type="button" id={bid} className="faq-q" aria-expanded={on} aria-controls={pid} onClick={() => toggle(i)}>
                <span>{it.q}</span>
                <span className="faq-ic" aria-hidden="true" />
              </button>
            </h3>
            <div id={pid} role="region" aria-labelledby={bid} className="faq-a">
              <div className="faq-a-in">
                <p>{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

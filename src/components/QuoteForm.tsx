"use client";

import { useId, useMemo, useRef, useState, type MouseEvent } from "react";
import { SITE, type Lang } from "@/config/site";
import { SERVICE_LIST, PRODUCT_LIST } from "@/content/entries";
import { UI } from "@/i18n/dict";
import { WhatsAppIcon } from "./Icon";

/** Field rules. Edit the numbers here; the inputs, the counter and the message builder all read them. */
const LIMITS = { city: 40, name: 60, machine: 80, details: 400 } as const;
/** wa.me links carry the message in the URL. Arabic costs 6 characters per letter once encoded, so the whole link is capped. */
const MAX_ENCODED = 3000;

/** Single-line text: no control characters, collapsed spaces, trimmed, capped. */
const line = (v: string, max: number) => v.replace(/[\u0000-\u001F\u007F‎‏‪-‮]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
/** Multi-line text: keeps line breaks, drops the rest of the control characters. */
const para = (v: string, max: number) => v.replace(/\r\n?/g, "\n").replace(/[\u0000-\u0009\u000B-\u001F\u007F‎‏‪-‮]/g, "").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim().slice(0, max);

/** Builds a ready WhatsApp message from a few fields. No server: the visitor taps the link and WhatsApp opens. */
export default function QuoteForm({ lang, preset = "" }: { lang: Lang; preset?: string }) {
  const f = UI.form;
  const uid = useId();
  const [need, setNeed] = useState(preset);
  const [city, setCity] = useState("");
  const [machine, setMachine] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [tried, setTried] = useState(false);
  const needRef = useRef<HTMLSelectElement>(null);
  const detailsRef = useRef<HTMLTextAreaElement>(null);

  const label = useMemo(() => {
    if (need === "pump-testing") return `${f.kindService[lang]}: ${f.testing[lang]}`;
    if (need === "other") return f.other[lang];
    const s = SERVICE_LIST.find((e) => e.slug === need);
    if (s) return `${f.kindService[lang]}: ${s.title[lang]}`;
    const p = PRODUCT_LIST.find((e) => e.slug === need);
    return p ? `${f.kindProduct[lang]}: ${p.title[lang]}` : "";
  }, [need, lang, f]);

  const errors = {
    need: !need,
    details: line(details, LIMITS.details).length < 3,
  };
  const valid = !errors.need && !errors.details;

  const link = useMemo(() => {
    const build = (d: string) =>
      [
        f.hi[lang],
        label && `${f.need[lang]} ${label}`,
        line(machine, LIMITS.machine) && `${f.machine[lang]}: ${line(machine, LIMITS.machine)}`,
        d && `${f.details[lang]}: ${d}`,
        line(city, LIMITS.city) && `${f.city[lang]}: ${line(city, LIMITS.city)}`,
        line(name, LIMITS.name) && `${f.name[lang]}: ${line(name, LIMITS.name)}`,
      ].filter(Boolean).join("\n");
    let d = para(details, LIMITS.details);
    let url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(build(d))}`;
    while (url.length > MAX_ENCODED && d.length > 20) {
      d = d.slice(0, Math.floor(d.length * 0.9)).trim();
      url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(build(d))}`;
    }
    return url;
  }, [label, city, machine, details, name, lang, f]);

  const onSend = (e: MouseEvent<HTMLAnchorElement>) => {
    if (valid) return;
    e.preventDefault();
    setTried(true);
    (errors.need ? needRef : detailsRef).current?.focus();
  };

  const cities = SITE.cities.map((c) => c[lang]);

  return (
    <form className="quote-form" onSubmit={(e) => e.preventDefault()} noValidate aria-labelledby="qf-title">
      <h2 id="qf-title" className="h3">{f.title[lang]}</h2>
      <p className="muted">{f.help[lang]}</p>

      <label data-invalid={tried && errors.need}>
        <span>{f.need[lang]}</span>
        <select ref={needRef} value={need} onChange={(e) => setNeed(e.target.value)} required aria-invalid={tried && errors.need} aria-describedby={`${uid}-need`} autoComplete="off">
          <option value="">{f.pick[lang]}</option>
          <optgroup label={UI.nav.services[lang]}>
            <option value="pump-testing">{f.testing[lang]}</option>
            {SERVICE_LIST.map((e) => <option key={e.slug} value={e.slug}>{e.title[lang]}</option>)}
          </optgroup>
          <optgroup label={UI.nav.products[lang]}>
            {PRODUCT_LIST.map((e) => <option key={e.slug} value={e.slug}>{e.title[lang]}</option>)}
          </optgroup>
          <option value="other">{f.other[lang]}</option>
        </select>
        <em id={`${uid}-need`} className="err" role="alert">{f.needError[lang]}</em>
      </label>

      <label>
        <span>{f.machine[lang]} <small className="opt">{f.optional[lang]}</small></span>
        <input value={machine} onChange={(e) => setMachine(e.target.value)} maxLength={LIMITS.machine} autoComplete="off" enterKeyHint="next" />
      </label>

      <label data-invalid={tried && errors.details}>
        <span>
          <span>{f.details[lang]}</span>
          <small className="count" aria-hidden="true"><bdi>{details.length}/{LIMITS.details}</bdi></small>
        </span>
        <textarea ref={detailsRef} rows={4} value={details} onChange={(e) => setDetails(e.target.value)} maxLength={LIMITS.details} required aria-invalid={tried && errors.details} aria-describedby={`${uid}-details`} />
        <em id={`${uid}-details`} className="err" role="alert">{f.detailsError[lang]}</em>
      </label>

      <div className="two">
        <label>
          <span>{f.city[lang]} <small className="opt">{f.optional[lang]}</small></span>
          <input value={city} onChange={(e) => setCity(e.target.value)} maxLength={LIMITS.city} list={`${uid}-cities`} autoComplete="address-level2" enterKeyHint="next" aria-label={`${f.city[lang]}. ${f.cityHint[lang]}`} />
          <datalist id={`${uid}-cities`}>{cities.map((c) => <option key={c} value={c} />)}</datalist>
        </label>
        <label>
          <span>{f.name[lang]} <small className="opt">{f.optional[lang]}</small></span>
          <input value={name} onChange={(e) => setName(e.target.value)} maxLength={LIMITS.name} autoComplete="name" enterKeyHint="done" />
        </label>
      </div>

      <a className="btn btn-wa btn-lg btn-block" href={link} target="_blank" rel="noopener noreferrer" onClick={onSend}>
        <WhatsAppIcon size={22} />
        <span>{f.send[lang]}</span>
      </a>
      <p className="hint">{f.sendHint[lang]}</p>
    </form>
  );
}

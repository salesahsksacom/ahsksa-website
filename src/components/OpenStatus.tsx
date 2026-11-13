"use client";

import { useEffect, useState } from "react";
import { SITE, type Lang } from "@/config/site";
import { UI } from "@/i18n/dict";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const toMin = (hhmm: string) => Number(hhmm.slice(0, 2)) * 60 + Number(hhmm.slice(3, 5));

/** Current weekday (0 = Sunday) and minutes since midnight in Riyadh, whatever the visitor's own time zone is. */
function riyadhNow(d = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Riyadh", weekday: "long", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(d);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  return { day: DAY_NAMES.indexOf(get("weekday")), min: Number(get("hour")) * 60 + Number(get("minute")) };
}

export function computeStatus(d = new Date()) {
  const { days, opens, closes } = SITE.open;
  const openDays = days.map((n) => DAY_NAMES.indexOf(n));
  const { day, min } = riyadhNow(d);
  if (openDays.includes(day) && min >= toMin(opens) && min < toMin(closes)) return { open: true, text: UI.status.closesAt };
  if (openDays.includes(day) && min < toMin(opens)) return { open: false, text: UI.status.opensToday };
  for (let i = 1; i <= 7; i++) {
    const next = (day + i) % 7;
    if (!openDays.includes(next)) continue;
    return { open: false, text: i === 1 ? UI.status.opensTomorrow : UI.status.opensOn(UI.status.days[next]) };
  }
  return { open: false, text: UI.status.closed };
}

/** "Open now / Closed" pill. Renders nothing on the server (the page is static), then fills in on the client and refreshes each minute. */
export default function OpenStatus({ lang, className = "" }: { lang: Lang; className?: string }) {
  const [s, setS] = useState<ReturnType<typeof computeStatus> | null>(null);
  useEffect(() => {
    const tick = () => setS(computeStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);
  if (!s) return <span className={`status ${className}`} aria-hidden="true" />;
  return (
    <span className={`status ${className}`} data-open={s.open} role="status">
      <i aria-hidden="true" />
      <b>{s.open ? UI.status.open[lang] : UI.status.closed[lang]}</b>
      <span>{s.text[lang]}</span>
    </span>
  );
}

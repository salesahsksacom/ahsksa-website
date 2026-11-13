"use client";

import { usePathname } from "next/navigation";

/** Desktop navigation. Client-side only to mark the current section for assistive tech and sighted users. */
export default function NavLinks({ links, label, className }: { links: { h: string; l: string }[]; label: string; className?: string }) {
  const path = usePathname() || "/";
  const norm = (s: string) => s.replace(/^\/en(?=\/)/, "");
  const here = norm(path);
  return (
    <nav className={className ?? "nav"} aria-label={label}>
      {links.map((x) => {
        const target = norm(x.h);
        const on = here === target || here.startsWith(target);
        return (
          <a key={x.h} href={x.h} aria-current={on ? "page" : undefined}>
            {x.l}
          </a>
        );
      })}
    </nav>
  );
}

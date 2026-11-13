import type { Lang } from "@/config/site";

const L = {
  ar: { port: "منفذ الزيت", seals: "الأختام", piston: "المكبس", barrel: "الماسورة", rod: "عمود الكروم", stroke: "شوط السلندر" },
  en: { port: "Oil port", seals: "Seals", piston: "Piston", barrel: "Barrel", rod: "Chrome rod", stroke: "Stroke" },
} as const;

/**
 * Hydraulic cylinder in section, drawn as a technical drawing. Code-drawn, so it carries no photo claims.
 * The piston and rod travel back and forth with a CSS transform only (off under prefers-reduced-motion).
 */
export default function CylinderDiagram({ lang, tone = "dark" }: { lang: Lang; tone?: "dark" | "light" }) {
  const l = L[lang];
  return (
    <svg
      viewBox="0 0 660 360"
      role="img"
      aria-label={lang === "ar" ? "مقطع تخطيطي لسلندر هيدروليكي" : "Schematic section of a hydraulic cylinder"}
      className={`bp ${tone === "light" ? "bp-light" : ""}`}
    >
      {/* bore */}
      <rect x="90" y="132" width="340" height="96" className="fill-soft" />

      {/* moving assembly: piston + rod + eye */}
      <g className="stroke-group">
        <rect x="262" y="136" width="30" height="88" className="fill-acc" />
        <rect x="292" y="162" width="318" height="36" className="fill-rod ln" />
        <line x1="292" y1="172" x2="610" y2="172" className="ln" opacity=".35" />
        <circle cx="632" cy="180" r="22" className="ln ln-strong" />
        <circle cx="632" cy="180" r="7" className="fill-acc" />
        <line x1="610" y1="180" x2="610" y2="180" className="ln" />
      </g>

      {/* oil moving into the cap-side chamber */}
      <g className="fill-acc">
        <circle cx="120" cy="150" r="3" className="oil" />
        <circle cx="120" cy="180" r="3" className="oil" style={{ animationDelay: "-0.7s" }} />
        <circle cx="120" cy="210" r="3" className="oil" style={{ animationDelay: "-1.4s" }} />
      </g>

      {/* barrel wall */}
      <rect x="90" y="120" width="340" height="12" className="ln ln-strong" />
      <rect x="90" y="228" width="340" height="12" className="ln ln-strong" />
      {/* cap */}
      <rect x="66" y="120" width="24" height="120" className="ln ln-strong" />
      <line x1="66" y1="132" x2="90" y2="132" className="ln" />
      {/* gland, split around the rod */}
      <rect x="430" y="120" width="26" height="42" className="ln ln-strong" />
      <rect x="430" y="198" width="26" height="42" className="ln ln-strong" />
      <rect x="426" y="150" width="8" height="12" className="fill-acc" />
      <rect x="426" y="198" width="8" height="12" className="fill-acc" />
      {/* ports */}
      <rect x="130" y="92" width="34" height="28" className="ln ln-strong" />
      <rect x="360" y="92" width="34" height="28" className="ln ln-strong" />

      {/* centre line */}
      <line x1="40" y1="180" x2="660" y2="180" stroke="currentColor" strokeDasharray="14 6 2 6" className="lead-ln" />

      {/* callouts */}
      <g>
        <line x1="147" y1="92" x2="147" y2="56" className="lead-ln" /><circle cx="147" cy="92" r="3" className="dot" />
        <text x="147" y="42" textAnchor="middle" className="lbl">{l.port}</text>

        <line x1="428" y1="124" x2="520" y2="70" className="lead-ln" /><circle cx="428" cy="124" r="3" className="dot" />
        <text x="520" y="56" textAnchor="middle" className="lbl">{l.seals}</text>

        <line x1="277" y1="228" x2="277" y2="296" className="lead-ln" /><circle cx="277" cy="228" r="3" className="dot" />
        <text x="277" y="318" textAnchor="middle" className="lbl">{l.piston}</text>

        <line x1="380" y1="240" x2="380" y2="296" className="lead-ln" /><circle cx="380" cy="240" r="3" className="dot" />
        <text x="380" y="318" textAnchor="middle" className="lbl">{l.barrel}</text>

        <line x1="530" y1="198" x2="530" y2="296" className="lead-ln" /><circle cx="530" cy="198" r="3" className="dot" />
        <text x="530" y="318" textAnchor="middle" className="lbl">{l.rod}</text>
      </g>

      {/* stroke dimension */}
      <g className="lead-ln">
        <line x1="132" y1="262" x2="262" y2="262" />
        <line x1="132" y1="254" x2="132" y2="270" /><line x1="262" y1="254" x2="262" y2="270" />
      </g>
      <text x="197" y="284" textAnchor="middle" className="lbl lbl-sm" style={{ fontSize: 14, opacity: 0.8 }}>{l.stroke}</text>
    </svg>
  );
}

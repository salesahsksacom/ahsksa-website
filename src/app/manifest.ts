import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.nameEn,
    short_name: SITE.nameEn,
    lang: "ar",
    dir: "rtl",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0A1B33",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

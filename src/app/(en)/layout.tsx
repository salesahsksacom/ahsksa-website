import type { Viewport } from "next";
import Shell from "@/components/Shell";

export const viewport: Viewport = { viewportFit: "cover", themeColor: "#0A1B33" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}

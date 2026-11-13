import type { NextConfig } from "next";

// Static export: the whole site is plain files, hosted free on Cloudflare Pages.
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*", "*.local"],
  experimental: { prefetchInlining: true, globalNotFound: true },
};

export default config;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Generates static HTML for Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
};

export default nextConfig;

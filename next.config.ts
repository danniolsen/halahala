import type { NextConfig } from "next";
import { version } from "./package.json";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    version,
  },
  /* config options here */
  images: {
    domains: ["assets.laliga.com"],
    remotePatterns: [
      { hostname: "assets.laliga.com" },
      { hostname: "d2bk74em32frqb.cloudfront.net" },
    ],
  },
};

export default nextConfig;

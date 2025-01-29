import type { NextConfig } from "next";
import { version } from "./package.json";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    version,
  },
  /* config options here */
  images: {
    domains: ["assets.laliga.com"],
    remotePatterns: [{ hostname: "assets.laliga.com" }],
  },
};

export default nextConfig;

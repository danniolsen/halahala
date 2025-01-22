import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["assets.laliga.com", "hala-fec0c.firebaseapp.com"],
    remotePatterns: [
      { hostname: "assets.laliga.com" },
      { hostname: "hala-fec0c.firebaseapp.com/" },
    ],
  },
};

export default nextConfig;

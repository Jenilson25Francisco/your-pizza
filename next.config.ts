import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "https://s2-receitas.glbimg.com"
      }
    ]
  }
};

export default nextConfig;

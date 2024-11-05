import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "s2-receitas.glbimg.com"
      },
      {
        hostname: "encrypted-tbn0.gstatic.com"
      },
      {
        hostname: "img.freepik.com"
      },
      {
        hostname: "st.depositphotos.com"
      }
    ]
  }
};

export default nextConfig;

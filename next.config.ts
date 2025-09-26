import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    // localPatterns: [
    //   {
    //     pathname: "/**"
    //   }
    // ],
    remotePatterns: [
      {
        hostname: "localhost"
      }
    ]
  }
};

export default nextConfig;

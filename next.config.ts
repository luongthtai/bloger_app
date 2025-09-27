import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    localPatterns: [
      {
        pathname: "/**"
      }
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.1.3",
      }
    ]
  }
};

export default nextConfig;

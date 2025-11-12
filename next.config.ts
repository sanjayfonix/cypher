import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,

  async rewrites() {
    return [
      {
        source: "/", // Frontend path
        destination: "https://api.osint.industries/v2/request", // Actual backend endpoint
      },
    ];
  },
};

export default nextConfig;


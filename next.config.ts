import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: false, // This will send a 302 redirect
      },
    ];
  },
};

export default nextConfig;

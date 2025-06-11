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
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
  },
};

export default nextConfig;

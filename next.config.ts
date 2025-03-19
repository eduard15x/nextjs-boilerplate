import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/home",
      permanent: true, // true = 301 Redirect
    },
  ],
};

export default nextConfig;

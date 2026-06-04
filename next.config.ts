import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  serverExternalPackages: [
    "mongodb",
    "kysely",
    "@better-auth/kysely-adapter",
  ],
};

export default nextConfig;
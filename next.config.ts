import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/sequoia-fe",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

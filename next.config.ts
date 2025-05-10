import type { NextConfig } from "next";

const path = process.env.NODE_ENV === "production" ? "/sequoia-fe" : "";

const nextConfig: NextConfig = {
  basePath: path,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

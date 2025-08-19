import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate a static site in the `out/` directory on build
  output: "export",
  // Allow using `next/image` without the image optimizer when exporting
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

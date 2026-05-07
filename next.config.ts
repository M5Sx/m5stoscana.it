import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
  },
  // If repo is not served from root on GitHub Pages, uncomment and set:
  // basePath: '/m5stoscana.it',
};

export default nextConfig;

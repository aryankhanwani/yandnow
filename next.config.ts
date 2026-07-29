import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* DEMO PHASE: images are served unoptimized so remote placeholder
       photos render without the sharp-based optimizer. When real,
       locally-hosted brand photography is added, remove `unoptimized`
       to re-enable Next's image optimization. */
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;

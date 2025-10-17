/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Core behaviour
  reactStrictMode: true,
  swcMinify: true,

  // ✅ Image optimisation (Cloudinary + Unsplash + Vercel)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dnmoy5wua/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  // ✅ Experimental optimisations (compatible with Next.js 13.5)
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },

  // ✅ Performance and security headers
  compress: true,
  poweredByHeader: false,

  // ✅ SEO: canonical base (used internally for OG and sitemaps)
  // NOTE: “metadataBase” is not recognised in next.config for 13.x,
  // so we use env or app metadata instead.
  env: {
    SITE_URL: "https://www.lightningdeco.com",
  },

  // ✅ Optional: redirect www → non-www (or vice versa)
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "lightningdeco.vercel.app" }],
        destination: "https://www.lightningdeco.com",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    // ✅ Remote images allowed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dnmoy5wua/**", // restrict to your Cloudinary account
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // optional (if you ever use Unsplash)
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com", // optional (Vercel-hosted images)
      },
    ],
    // ✅ You can also set image formats
    formats: ["image/avif", "image/webp"], // smaller, faster
  },

  experimental: {
    // ✅ Future-proof for app router
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react"], // tree-shaking
  },
};

module.exports = nextConfig;
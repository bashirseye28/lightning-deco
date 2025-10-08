/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

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

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },

  // ⚙️ Fix for the console warning:
  // This ensures all social preview images resolve correctly
  metadataBase: new URL("https://lightningdeco.com"),

  // ⚡ Performance and security
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
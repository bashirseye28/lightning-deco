import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://lightningdeco.com"), // ✅ Ensures proper absolute URLs
  title: {
    default: "Lightning Deco | The Art of Shadow and Light",
    template: "%s | Lightning Deco",
  },
  description:
    "Luxury interior design studio that designs with light itself. From kitchens to living rooms, bedrooms to outdoor retreats — timeless sanctuaries of elegance.",
  keywords: [
    "Lightning Deco",
    "Luxury Interior Design",
    "Modern Architecture",
    "Lighting Concepts",
    "Space Planning",
    "Luxury Homes",
    "Bespoke Interiors",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://lightningdeco.com",
    siteName: "Lightning Deco",
    title: "Lightning Deco | The Art of Shadow and Light",
    description:
      "A luxury interior design studio crafting timeless, bespoke spaces defined by light, texture, and sophistication.",
    images: [
      {
        url: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png",
        width: 1200,
        height: 630,
        alt: "Lightning Deco Luxury Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightning Deco | The Art of Shadow and Light",
    description:
      "Luxury interior design studio illuminating spaces through bespoke lighting and architectural harmony.",
    images: [
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png",
    ],
  },
  authors: [{ name: "Lightning Deco", url: "https://lightningdeco.com" }],
  themeColor: "#D4AF37", // Gold accent on mobile browsers
  alternates: {
    canonical: "https://lightningdeco.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lightning Deco",
    url: "https://lightningdeco.com",
    logo:
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759286481/EvaLogo_oqkhvm.jpg",
    description:
      "Luxury interior design studio specialising in bespoke lighting concepts, modern architecture, and timeless interiors.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manchester",
      addressCountry: "UK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44 1234 567890",
      contactType: "Customer Service",
      areaServed: "GB",
      availableLanguage: ["English", "French"],
    },
    sameAs: [
      "https://www.instagram.com/lightning.deco",
      "https://www.tiktok.com/@lightning.deco",
      "https://www.linkedin.com/company/lightningdeco",
    ],
  }

  return (
    <html lang="en">
      <head>
        {/* ✅ Mobile & Browser Settings */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#D4AF37" /> {/* Gold theme color */}
      </head>

      <body className="bg-black text-white font-body antialiased">
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Main Content */}
        <main className="relative min-h-screen">{children}</main>

        {/* ✅ Footer */}
        <Footer />

        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  )
}
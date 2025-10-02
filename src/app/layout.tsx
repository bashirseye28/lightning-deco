import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

export const metadata: Metadata = {
  title: {
    default: "Lightning Deco | The Art of Shadow and Light",
    template: "%s | Lightning Deco",
  },
  description:
    "Luxury interior design studio that designs with light itself. From kitchens to living rooms, bedrooms to outdoor retreats — timeless sanctuaries of elegance.",
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
      "Luxury interior design studio specialising in kitchens, living rooms, bedrooms and lighting design. We design with light itself.",
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
      "https://www.pinterest.com/lightningdeco",
      "https://www.linkedin.com/company/lightningdeco",
    ],
  }

  return (
    <html lang="en">
      <head>
        {/* iOS & Mobile Safe-Area Handling */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-black text-white font-body antialiased">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />

        {/* JSON-LD Schema.org for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  )
}
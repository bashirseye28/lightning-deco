import Hero from "@/components/Home/Hero"
import Intro from "@/components/Home/Intro"
import AboutPreview from "@/components/Home/AboutPreview"
import Philosophy from "@/components/Home/Philosophy"
import FeaturedProjects from "@/components/Home/FeaturedProjects"
import Testimonials from "@/components/Home/Testimonials"
import GalleryPreview from "@/components/Home/GalleryPreview"
import ConsultationCTA from "@/components/Home/ConsultationCTA"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lightning Deco | The Art of Shadow and Light",
  description:
    "Luxury interior design studio that designs with light itself. Transforming kitchens, living rooms, bedrooms, and outdoor retreats into timeless sanctuaries of elegance.",
  keywords: [
    "Lightning Deco",
    "Interior Design",
    "Luxury Interiors",
    "Modern Kitchens",
    "Living Room Design",
    "Bedroom Interiors",
    "Interior Decor UK",
    "Architecture and Design",
  ],
  authors: [{ name: "Lightning Deco" }],
  openGraph: {
    title: "Lightning Deco | The Art of Shadow and Light",
    description:
      "We craft interiors with the duality of light and shadow — elegant, timeless, and unforgettable.",
    url: "https://lightningdeco.com",
    siteName: "Lightning Deco",
    images: [
      {
        url: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279442/IMG_0643_dzasll.jpg",
        width: 1200,
        height: 630,
        alt: "Lightning Deco Interior Design",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lightning Deco | The Art of Shadow and Light",
    description:
      "Luxury interior design studio that designs with light itself.",
    images: [
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279442/IMG_0643_dzasll.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Intro Section */}
      <Intro />
      {/* <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair italic font-semibold text-gold mb-4">
          Welcome to Lightning Deco
        </h2>
        <p className="text-lg md:text-xl font-lato text-gray-300 max-w-3xl mx-auto">
          We design with light itself. From kitchens to living rooms, bedrooms
          to outdoor retreats, our philosophy transforms spaces into timeless
          sanctuaries of elegance and harmony.
        </p>
      </section> */}

      {/* About Preview Section */}
      <AboutPreview />
      {/* Philosophy Section */}
      <Philosophy />
      {/* Featured Projects Section */}
      <FeaturedProjects />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Gallery Preview Section */}
      <GalleryPreview />
      {/* Consultation CTA Section */}
      <ConsultationCTA />
    </main>
  )
}
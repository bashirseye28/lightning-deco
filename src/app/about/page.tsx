import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lightning Deco — our mission, vision, and values in luxury interior design.",
}

export default function AboutPage() {
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-playfair text-gold mb-6">
        About Lightning Deco
      </h1>
      <p className="max-w-3xl mx-auto text-lg font-lato text-gray-300">
        At Lightning Deco, we design beyond walls and furniture. We design with
        light itself, curating interiors that are immersive, timeless, and
        unforgettable.
      </p>
    </section>
  )
}
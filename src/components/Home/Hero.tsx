"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    type: "video",
    src: "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759279505/export_1749305387713_gcr4ma.mov",
    title: "Lightning Deco",
    description: "Luxury interior design studio. We design with light itself.",
    buttonText: "About Us",
    buttonLink: "/about",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279442/IMG_0643_dzasll.jpg",
    title: "Refined Bedroom",
    description: "A sanctuary of calm and timeless design.",
    buttonText: "View Project",
    buttonLink: "/projects",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759279376/955a722d-af4f-41bd-9f84-182abdcbab16_feubjw.mp4",
    title: "Modern Living Room",
    description: "Elegant open spaces that invite warmth and light.",
    buttonText: "View Project",
    buttonLink: "/projects",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279494/IMG_0673_ogyooy.jpg",
    title: "Luxury Kitchen",
    description: "Crafted with detail, blending form and function.",
    buttonText: "View Project",
    buttonLink: "/projects",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background */}
          {slides[current].type === "video" ? (
            <video
              src={slides[current].src}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slides[current].src}
              alt={slides[current].title}
              fill
              className="object-cover"
            />
          )}

          {/* Overlay */}
          <div className="absolute bottom-20 left-12 text-white max-w-lg">
            <h2 className="text-4xl font-playfair italic font-semibold mb-2">
              {slides[current].title}
            </h2>
            <p className="text-lg font-lato mb-6">{slides[current].description}</p>
            <a
              href={slides[current].buttonLink}
              className="inline-block px-6 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition"
            >
              {slides[current].buttonText}
            </a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrows Bottom Right */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/50 text-white hover:bg-gold hover:text-black transition"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/50 text-white hover:bg-gold hover:text-black transition"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  )
}
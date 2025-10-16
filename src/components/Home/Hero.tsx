"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    type: "video",
    src: "https://res.cloudinary.com/dnmoy5wua/video/upload/v1759318627/5406481a-e75d-4138-b043-19a56e52674e_qn9bhu.mp4",
    title: "Lightning Deco",
    description: "Luxury interior design studio. We design with light itself.",
    buttonText: "About Us",
    buttonLink: "/about",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279434/IMG_0162_jnuri5.jpg",
    title: "Refined Bedroom",
    description: "A sanctuary of calm and timeless design.",
    buttonText: "View Project",
    buttonLink: "/projects",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318624/IMG_0920_pdalfs.png",
    title: "Modern Living Room",
    description: "Elegant open spaces that invite warmth and light.",
    buttonText: "View Project",
    buttonLink: "/projects",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png",
    title: "Luxury Kitchen",
    description: "Crafted with detail, blending form and function.",
    buttonText: "View Project",
    buttonLink: "/projects",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  // ✅ Auto-play every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [current])

  // ✅ Swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) nextSlide()
    if (distance < -50) prevSlide()
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slides[current].src}
              alt={slides[current].title}
              fill
              priority
              className="object-cover"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end pb-40 md:pb-56 px-6 md:pl-12 text-white">
            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-playfair italic font-semibold mb-3 text-left">
              {slides[current].title}
            </h2>

            {/* Description + Button (Desktop only) */}
            <div className="hidden md:block max-w-lg">
              <p className="text-lg font-lato mb-6">
                {slides[current].description}
              </p>
              <a
                href={slides[current].buttonLink}
                className="inline-block px-6 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition"
              >
                {slides[current].buttonText}
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dots — now directly below title on mobile */}
      <div className="absolute bottom-32 md:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-gold scale-110" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Arrows - Desktop only */}
      <div className="hidden md:flex absolute bottom-20 right-6 space-x-4">
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
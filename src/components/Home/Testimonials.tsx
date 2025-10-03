"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    text:
      "Lightning Deco transformed our home with sensitivity and precision. The way they shape light made every room feel intentional and alive.",
    name: "Sarah M.",
    role: "London Homeowner",
  },
  {
    text:
      "From concept to completion, the process was effortless. Our kitchen is now both elegant and deeply functional — exactly what we hoped for.",
    name: "James & Anna",
    role: "Manchester Renovation",
  },
  {
    text:
      "Their mastery of atmosphere — balancing shadow and radiance — turns interiors into experiences. Truly exceptional work.",
    name: "Omar A.",
    role: "Dubai Client",
  },
  {
    text:
      "Refinement in every detail. The materials, the lighting, the flow — everything carries intention and calm luxury.",
    name: "Isabella R.",
    role: "Cheshire Project",
  },
]

export default function AboutTestimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((p) => (p + 1) % testimonials.length)
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)

  // Autoplay every 6s
  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [current])

  // Swipe handler
  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    if (offset < -100 || velocity < -500) {
      next() // swipe left → next
    } else if (offset > 100 || velocity > 500) {
      prev() // swipe right → prev
    }
  }

  return (
    <section className="bg-[#F9F7F1] text-black py-24 px-6 lg:px-20 relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic font-bold text-[#D4AF37] mb-4"
        >
          What Our Clients Say
        </motion.h2>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-1 w-24 mx-auto mb-10 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[#222831]/80 max-w-2xl mx-auto mb-12"
        >
          Trusted by homeowners and businesses across the UK, Dubai, and beyond.
        </motion.p>

        {/* Carousel with swipe */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              className="cursor-grab active:cursor-grabbing"
            >
              <div className="relative bg-white rounded-2xl border border-[#D4AF37]/25 shadow-sm px-7 py-10 md:px-12 md:py-12">
                {/* Soft quote icon */}
                <Quote className="absolute -top-4 -left-1 md:top-6 md:left-6 w-10 h-10 md:w-12 md:h-12 text-[#D4AF37]/15" />

                <p className="text-lg md:text-xl italic leading-relaxed text-[#222831]">
                  “{testimonials[current].text}”
                </p>

                <div className="mt-6 md:mt-8">
                  <p className="font-semibold text-black">{testimonials[current].name}</p>
                  <p className="text-sm text-[#222831]/70">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-6 flex justify-center items-center space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === current ? "w-7 bg-[#D4AF37]" : "w-2.5 bg-black/20 hover:bg-black/30"
                }`}
              />
            ))}
          </div>

          {/* Arrows (desktop only) */}
          <div className="hidden md:flex items-center justify-between mt-0">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="group absolute -left-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/5 hover:bg-black/10 border border-black/10"
            >
              <ChevronLeft className="w-5 h-5 text-black/70 group-hover:text-black" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="group absolute -right-5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/5 hover:bg-black/10 border border-black/10"
            >
              <ChevronRight className="w-5 h-5 text-black/70 group-hover:text-black" />
            </button>
          </div>
        </div>

        {/* Optional CTA */}
        {/* <div className="mt-12">
          <a
            href="/#testimonials"
            className="inline-block px-6 py-2.5 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
          >
            View More Stories
          </a>
        </div> */}
      </div>
    </section>
  )
}
"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

type GalleryItem = {
  src: string
  title: string
  category: string
}

const items: GalleryItem[] = [
  {
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png",
    title: "Luxury Kitchen",
    category: "Kitchen",
  },
  {
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318594/IMG_0880_mzqch7.png",
    title: "Modern Living",
    category: "Living Room",
  },
  {
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279434/IMG_0162_jnuri5.jpg",
    title: "Refined Bedroom",
    category: "Bedroom",
  },
  {
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318633/9795CABC-ADE1-4CD1-A5C9-0A984C67C91A_azplba.png",
    title: "Warm Textures",
    category: "Living Room",
  },
  {
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318624/IMG_0920_pdalfs.png",
    title: "Ambient Light",
    category: "Lounge",
  },
  {
    src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318910/IMG_0130_ko5kss.jpg",
    title: "Stone & Brass",
    category: "Kitchen",
  },
]

export default function GalleryPreview() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const nudge = (dir: "left" | "right") => {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth * 0.9 // scroll nearly a full view width
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section className="relative bg-ivory text-black py-28 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading italic font-bold text-gold mb-4">
            Crafted Spaces
          </h2>

          {/* Animated Gold Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 w-24 mx-auto mb-8 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full"
          />

          <p className="text-gray-700 text-lg max-w-2xl mx-auto font-body">
            A glimpse into the atmospheres we create — where light, shadow, and
            materials shape timeless interiors.
          </p>
        </motion.div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ivory to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ivory to-transparent" />

        {/* Track */}
        <div className="relative">
          <div
            ref={trackRef}
            className="
              flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden
              pb-2
            "
          >
            {items.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="
                  group relative snap-start shrink-0
                  w-[85vw] h-[60vw]
                  sm:w-[48vw] sm:h-[32vw]
                  md:w-[30vw] md:h-[20vw]
                  lg:w-[28vw] lg:h-[18vw]
                  rounded-2xl overflow-hidden border border-gold/20 bg-black
                "
              >
                <Image
                  src={item.src}
                  alt={`${item.title} – ${item.category}`}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 30vw, 28vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  priority={i < 2}
                />

                {/* Soft overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <div className="inline-flex items-center gap-3 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                    <span className="text-xs uppercase tracking-wide text-white/80">
                      {item.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span className="text-white font-medium">{item.title}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Nudges (desktop only) */}
          <div className="hidden md:flex items-center gap-3 absolute -bottom-8 right-0">
            <button
              onClick={() => nudge("left")}
              aria-label="Scroll left"
              className="rounded-full border border-gold/30 bg-white/60 hover:bg-white px-3 py-2 shadow-sm transition"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
            <button
              onClick={() => nudge("right")}
              aria-label="Scroll right"
              className="rounded-full border border-gold/30 bg-white/60 hover:bg-white px-3 py-2 shadow-sm transition"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link
            href="/gallery"
            className="inline-block px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition-colors duration-300"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
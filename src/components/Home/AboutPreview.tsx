"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutPreview() {
  const images = [
    {
      src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760552107/bathroom001_lsdfuv.png",
      alt: "Kitchen project",
      caption: "Kitchen Design",
    },
    {
      src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1760552451/bathroom_llncm8.jpg",
      alt: "Bathroom project",
      caption: "Bathroom Elegance",
    },
    {
      src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318603/IMG_1006_y8yv99.jpg",
      alt: "Living room project",
      caption: "Living Room Atmosphere",
    },
    {
      src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318582/IMG_0070_cg8ejx.jpg",
      alt: "Living room decor",
      caption: "Modern Living Spaces",
    },
    {
      src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279433/IMG_0028_tgxoc2.jpg",
      alt: "Bedroom project",
      caption: "Bedroom Serenity",
    },
    {
      src: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759374887/1000066537_ysddkj.png",
      alt: "Coffee shop project",
      caption: "Coffee Shop Ambience",
    },
  ]

  return (
    <section className="bg-white py-28 px-4 sm:px-10 lg:px-32">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* LEFT COLUMN – Scrollable images */}
        <div className="space-y-12">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                className="object-cover object-center w-full h-[45vh] sm:h-[55vh] lg:h-[70vh] transform group-hover:scale-105 transition duration-700"
              />
              {/* Overlay caption */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                <p className="text-lg font-semibold">{img.caption}</p>
                <Link
                  href="/projects"
                  className="inline-block mt-2 text-gold border-b border-gold hover:text-white hover:border-white transition"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN – Sticky text */}
        <div className="md:sticky md:top-28 self-start flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-playfair italic font-bold text-gold mb-6"
          >
            About Lightning Deco
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-800 text-lg leading-relaxed mb-10"
          >
            At <span className="font-semibold">Lightning Deco</span>, we design with{" "}
            <span className="italic text-gold">light itself</span>.  
            Each room — kitchens, bathrooms, living spaces, bedrooms, and even coffee shops — 
            is shaped to balance shadow and radiance, elegance and function.  
            Our mission is to transform ordinary spaces into timeless sanctuaries
            of beauty and harmony.
          </motion.p>
          <Link
            href="/about"
            className="px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition text-lg font-medium"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
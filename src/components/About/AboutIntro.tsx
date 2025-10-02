"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function AboutIntro() {
  return (
    <section className="bg-white py-32 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT – Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-lg group"
        >
          <Image
            src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png"
            alt="Lightning Deco Interior"
            width={1200}
            height={900}
            className="object-cover w-full h-[65vh] md:h-[80vh] group-hover:scale-105 transition duration-700"
          />
        </motion.div>

        {/* RIGHT – Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <span className="uppercase tracking-widest text-gold font-semibold text-sm mb-4 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair italic font-bold text-gold mb-4">
            Designing with Light Itself
          </h2>

          {/* Animated gold line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full mb-8"
          />

          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            At <span className="font-semibold text-black">Lightning Deco</span>, we 
            believe that design begins with <span className="italic text-gold">light</span>.  
            Every project is crafted to balance radiance and shadow, elegance and function — 
            creating immersive atmospheres that are not just seen, but deeply felt.  
            Our mission is to transform ordinary spaces into sanctuaries of timeless beauty and harmony.
          </p>
          <Link
            href="/about#philosophy"
            className="inline-block px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition text-lg font-medium"
          >
            Discover Our Philosophy
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
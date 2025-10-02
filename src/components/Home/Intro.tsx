"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Intro() {
  return (
    <section className="bg-ivory text-center py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading italic font-bold text-gold mb-6"
        >
          Welcome to Lightning Deco
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-charcoal leading-relaxed font-body max-w-3xl mx-auto mb-10"
        >
          We are a luxury interior design studio that shapes atmospheres with the 
          power of light and shadow. From elegant kitchens to serene retreats, 
          our philosophy transforms living spaces into timeless sanctuaries of beauty and harmony.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/about"
            className="inline-block px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition-colors duration-300"
          >
            Discover Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
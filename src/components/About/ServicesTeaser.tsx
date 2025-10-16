"use client"

import { motion } from "framer-motion"
import { LampDesk, Ruler, Layout, Gem } from "lucide-react"

export default function AboutServices() {
  const services = [
    {
      title: "Interior Design",
      text: "Bespoke interiors crafted with elegance, blending your lifestyle with timeless aesthetics.",
      icon: Layout,
    },
    {
      title: "Lighting Concepts",
      text: "Harnessing light and shadow to sculpt spaces with atmosphere, depth, and sophistication.",
      icon: LampDesk,
    },
    {
      title: "Space Planning",
      text: "Maximising functionality while preserving flow, balance, and premium design harmony.",
      icon: Ruler,
    },
    {
      title: "Bespoke Finishes",
      text: "From luxurious materials to custom-made furnishings, every detail speaks refinement.",
      icon: Gem,
    },
  ]

  return (
    <section className="bg-black py-28 px-6 lg:px-20 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic font-bold text-gold mb-6"
        >
          Our Services
        </motion.h2>

        {/* Animated Gold Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-1 w-24 mx-auto mb-12 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full animate-pulse"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg max-w-3xl mx-auto mb-16"
        >
          From lighting concepts to full-home transformations, our expertise brings
          timeless elegance into every detail of your space.
        </motion.p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-gold/40 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:shadow-gold/20 transition group"
            >
              <service.icon className="w-10 h-10 text-gold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="/projects"
            className="px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition text-lg font-medium"
          >
            View Our Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}
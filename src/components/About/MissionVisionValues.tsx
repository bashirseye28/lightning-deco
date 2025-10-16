"use client"

import { motion } from "framer-motion"
import { Lightbulb, Eye, Star } from "lucide-react"

export default function AboutMission() {
  const values = [
    {
      title: "Elegance",
      text: "Every project reflects refined aesthetics, timeless style, and premium detail.",
      icon: Star,
    },
    {
      title: "Harmony",
      text: "We balance shadow and radiance to create immersive, serene atmospheres.",
      icon: Lightbulb,
    },
    {
      title: "Innovation",
      text: "Pushing creative boundaries while staying rooted in craftsmanship.",
      icon: Eye,
    },
  ]

  return (
    <section className="bg-gradient-to-b from-[#F9F7F1] to-white py-32 px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic font-bold text-gold mb-6"
        >
          Mission, Vision & Values
        </motion.h2>

        {/* Animated Gold Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-1 w-24 mx-auto mb-16 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full animate-pulse"
        />

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md border border-gold/30 p-10 mb-10 hover:shadow-lg hover:shadow-gold/20 transition"
        >
          <h3 className="text-2xl font-semibold text-gold mb-4">Our Mission</h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            To design with <span className="italic text-gold">light itself</span>, transforming
            ordinary rooms into timeless sanctuaries where elegance, functionality, and atmosphere coexist.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md border border-gold/30 p-10 mb-20 hover:shadow-lg hover:shadow-gold/20 transition"
        >
          <h3 className="text-2xl font-semibold text-gold mb-4">Our Vision</h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            To be recognised as a leader in luxury interior design, creating spaces
            that inspire, uplift, and endure through generations.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-md border border-gold/30 p-10 hover:shadow-xl hover:shadow-gold/20 transition relative overflow-hidden"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <value.icon className="text-gold w-12 h-12 group-hover:scale-110 transition-transform" />
              </div>
              {/* Title */}
              <h4 className="text-xl font-semibold text-black mb-3">
                {value.title}
              </h4>
              {/* Text */}
              <p className="text-gray-600 text-base leading-relaxed">
                {value.text}
              </p>
              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
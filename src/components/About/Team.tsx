"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Eva Gueye",
    role: "Creative Director",
    image:
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1749318404/icon_u6qd4c.png",
    quote: "Design is where light becomes emotion.",
  },
  {
    name: "John Smith",
    role: "Lead Architect",
    image:
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1749318404/icon_u6qd4c.png",
    quote: "Spaces should inspire harmony and purpose.",
  },
  {
    name: "Sophia Lee",
    role: "Interior Stylist",
    image:
      "https://res.cloudinary.com/dnmoy5wua/image/upload/v1749318404/icon_u6qd4c.png",
    quote: "Elegance lies in the details.",
  },
]

export default function Team() {
  return (
    <section
      className="relative py-28 px-6 lg:px-20 text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318594/IMG_0880_mzqch7.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic font-bold text-gold mb-6"
        >
          The Faces Behind the Brand
        </motion.h2>

        {/* Gold Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-1 w-24 mx-auto mb-12 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full animate-pulse"
        />

        <p className="text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          Meet the visionaries and creators who bring Lightning Deco’s philosophy of
          shadow and light to life.
        </p>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-gold/30 transition"
            >
              {/* Image */}
              <div className="relative w-full h-[400px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Info */}
              <div className="bg-black/70 backdrop-blur-sm text-left p-6">
                <h3 className="text-xl font-semibold text-gold mb-1">{member.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 italic text-sm leading-relaxed">
                  “{member.quote}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
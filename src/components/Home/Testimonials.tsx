"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    text: "Lightning Deco transformed our living room into a sanctuary of elegance. Their mastery of light made every detail come alive.",
    name: "Sarah M.",
    role: "London Homeowner",
  },
  {
    text: "From the first consultation to the final reveal, the process was seamless. Our kitchen is now both luxurious and functional.",
    name: "James & Anna",
    role: "Manchester Renovation Project",
  },
  {
    text: "Their philosophy of light and shadow creates more than interiors – it creates experiences.",
    name: "Omar A.",
    role: "Dubai Client",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white text-black py-28 px-6 lg:px-20 relative">
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
            What Our Clients Say
          </h2>
          <p className="text-[#222831] text-lg max-w-2xl mx-auto font-body">
            A few words from the people who trusted <span className="font-semibold">Lightning Deco </span> 
            to bring light, shadow, and elegance into their homes.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white rounded-2xl shadow-md border border-gold/90 p-8 
                         hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-transform duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-gold w-10 h-10 opacity-50" />

              {/* Testimonial Text */}
              <p className="text-[#222831] italic mb-6 leading-relaxed font-body">
                “{t.text}”
              </p>

              {/* Client Info */}
              <div>
                <p className="font-semibold text-black">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We start with in-depth conversations to understand your vision, lifestyle, and inspirations. Every project begins with listening.",
    bg: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279434/IMG_0162_jnuri5.jpg",
  },
  {
    number: "02",
    title: "Concept & Design",
    text: "Ideas are translated into bespoke design concepts, moodboards, and visualisations — capturing elegance and harmony in every detail.",
    bg: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318594/IMG_0880_mzqch7.png",
  },
  {
    number: "03",
    title: "Execution",
    text: "From fine materials to skilled craftsmanship, we oversee every step with precision to deliver exceptional quality and timeless results.",
    bg: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png",
  },
  {
    number: "04",
    title: "Delivery",
    text: "The final reveal: a space transformed into a sanctuary of beauty, refinement, and light — ready to be lived and loved for years to come.",
    bg: "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279490/IMG_0970_nn3j2w.png",
  },
]

export default function AboutApproach() {
  return (
    <section className="bg-gradient-to-b from-[#FAF9F6] to-white py-32 px-6 lg:px-20 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-playfair italic font-bold text-gold mb-6"
        >
          Our Approach
        </motion.h2>

        {/* Gold line under heading */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-1 w-24 mx-auto mb-20 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full"
        />

        {/* Timeline container */}
        <div className="relative">
          {/* Animated vertical gold line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/90 to-gold/10 transform -translate-x-1/2 origin-top hidden md:block"
          />

          <div className="space-y-28">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center md:items-start ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Subtle parallax background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 rounded-2xl overflow-hidden hidden md:block"
                  style={{
                    backgroundImage: `url(${step.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Step card */}
                <div className="relative md:w-1/2 p-10 bg-white/95 backdrop-blur-md border border-gold/30 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-gold/10 transition group z-10">
                  <span className="block text-6xl font-bold text-gold/20 mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-semibold text-gold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {/* Connector circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold rounded-full border-4 border-white shadow-md hidden md:block z-20"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <a
            href="/contact"
            className="px-10 py-4 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition text-lg font-medium shadow-sm hover:shadow-md"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
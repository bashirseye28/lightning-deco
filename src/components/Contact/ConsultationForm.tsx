"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    city: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.send(
        "service_xxxxxx", // 🔸 Your EmailJS service ID
        "template_xxxxxx", // 🔸 Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          city: formData.city,
          message: formData.message,
        },
        "public_xxxxxx" // 🔸 Your EmailJS public key
      )
      setIsSent(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        city: "",
        message: "",
      })
    } catch (error) {
      console.error("Email sending failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="consultation" className="relative bg-[#F9F7F1] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair italic font-semibold text-[#D4AF37] mb-6"
          >
            Consultation Request
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-[2.5px] w-24 mx-auto mb-10 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full"
          />

          <p className="text-[#1E3A5F]/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Let’s begin a conversation. Whether you’re crafting a private residence, a boutique,
            or a commercial environment — our studio brings design, light, and emotion into harmony.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-[#1E3A5F]/90 text-lg leading-relaxed">
              Each collaboration begins with understanding. We value precision, emotion, and clarity.
              Please share a few details about your project — and our design team will be in touch.
            </p>

            <div className="border-l-4 border-[#D4AF37] pl-6 text-[#1E3A5F]/80 italic text-base leading-relaxed">
              “Design is not just what you see — it’s how light, material, and silence speak together.”
            </div>

            <p className="text-[#1E3A5F] font-semibold text-sm tracking-wide uppercase pt-6">
              * All fields are required
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-[#E5CDA5]/50 p-10 lg:p-12 relative z-10"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {[
                { label: "Name", name: "name", type: "text" },
                { label: "Email", name: "email", type: "email" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-[#1E3A5F] font-medium mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D4AF37]/40 rounded-lg focus:outline-none focus:border-[#D4AF37] bg-[#FCFCFA] text-[#1E3A5F] transition"
                  />
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#1E3A5F] font-medium mb-2">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#D4AF37]/40 rounded-lg focus:outline-none focus:border-[#D4AF37] bg-[#FCFCFA] text-[#1E3A5F] transition"
                />
              </div>

              <div>
                <label className="block text-[#1E3A5F] font-medium mb-2">City / Location</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#D4AF37]/40 rounded-lg focus:outline-none focus:border-[#D4AF37] bg-[#FCFCFA] text-[#1E3A5F] transition"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#1E3A5F] font-medium mb-2">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#D4AF37]/40 rounded-lg focus:outline-none focus:border-[#D4AF37] bg-[#FCFCFA] text-[#1E3A5F] transition"
              >
                <option value="">Select Project Type</option>
                <option>Residential Interior</option>
                <option>Commercial / Office</option>
                <option>Retail / Boutique</option>
                <option>Lighting Design</option>
                <option>Custom Project</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-[#1E3A5F] font-medium mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us briefly about your project..."
                className="w-full px-4 py-3 border border-[#D4AF37]/40 rounded-lg focus:outline-none focus:border-[#D4AF37] bg-[#FCFCFA] text-[#1E3A5F] transition"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-lg font-medium border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>

            {isSent && (
              <p className="text-center text-[#1E3A5F] mt-6 font-medium">
                ✅ Thank you! Your message has been sent successfully.
              </p>
            )}
          </motion.form>
        </div>
      </div>

      {/* Subtle Background Layer */}
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1759400000/paper-texture_ivory.png')] opacity-10 bg-cover bg-center pointer-events-none" />
    </section>
  )
}
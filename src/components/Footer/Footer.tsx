"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUp, Instagram, Linkedin } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="relative overflow-hidden text-white">
      {/* 🖼️ Parallax Architectural Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279433/IMG_0028_tgxoc2.jpg')",
        }}
      />

      {/* 🌌 Dark Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/50 backdrop-blur-3xl" />

      {/* ✨ Diagonal Gold Shimmer */}
      <motion.div
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(130deg,rgba(212,175,55,0.15)_0%,transparent_25%,transparent_75%,rgba(212,175,55,0.1)_100%)]"
      />

      {/* ✳️ Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12"
      >
        {/* Logo + Studio Tagline */}
        <div className="text-center mb-16">
          <Image
            src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png"
            alt="Lightning Deco Logo"
            width={180}
            height={60}
            className="mx-auto mb-6"
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-lato leading-relaxed">
            <span className="text-[#D4AF37]">Lightning Deco</span> — crafting spaces where light and
            form reveal timeless serenity.
          </p>
        </div>

        {/* Grid Navigation */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 border-b py-12">
          {/* Navigation */}
          <div>
            <h3 className="text-[#D4AF37] font-playfair text-xl mb-5">Navigation</h3>
            <ul className="space-y-2 text-gray-400 font-lato">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Details */}
          <div>
            <h3 className="text-[#D4AF37] font-playfair text-xl mb-5">Studio</h3>
            <ul className="space-y-2 text-gray-400 font-lato">
              <li>0757 874 2523</li>
              <li>lightning.inquiriess@gmail.com</li>
              <li>Mon – Sat  9 AM – 6 PM</li>
              <li>Sun  10 AM – 5 PM</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#D4AF37] font-playfair text-xl mb-5">Connect</h3>
            <div className="flex space-x-6 text-gray-400">
              <Link
                href="https://www.instagram.com/lightning.deco"
                target="_blank"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Instagram size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/lightningdeco"
                target="_blank"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Linkedin size={22} />
              </Link>
              <Link
                href="https://www.tiktok.com/@lightningdeco"
                target="_blank"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                <SiTiktok size={22} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-xs font-lato">
          © {new Date().getFullYear()} Lightning Deco · All Rights Reserved
        </div>
      </motion.div>

      {/* 🔝 Back-to-Top Button */}
      {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#D4AF37] text-black shadow-lg hover:bg-white hover:text-black transition-colors"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  )
}
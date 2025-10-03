"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // ✅ Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-5 flex items-center justify-between">
        {/* Logo (hidden when menu open) */}
        {!isMenuOpen && (
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png"
              alt="Lightning Deco Logo"
              width={140}
              height={40}
              priority
              className="w-[110px] h-[30px] md:w-[140px] md:h-[40px] object-contain"
            />
          </Link>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/gallery", label: "Gallery" },
            { href: "/contact", label: "Contact" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-white hover:text-[#D4AF37] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="px-5 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition"
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center space-x-2 text-gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Fullscreen Fade-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-[9999] flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gold/30">
              <span className="text-lg font-semibold text-gold">Menu</span>
              <button
                className="flex items-center space-x-1 text-gold hover:text-[#D4AF37] transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm">Close</span>
                <X size={22} />
              </button>
            </div>

            {/* Links with dividing lines */}
            <div className="flex flex-col flex-grow mt-2 divide-y divide-white/30">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-light text-gold px-6 py-4 hover:text-[#D4AF37] transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ✅ Outline CTA Button (bottom) */}
            <div className="px-6 py-6 border-t border-white/20">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
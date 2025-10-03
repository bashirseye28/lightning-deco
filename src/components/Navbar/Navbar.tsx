"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 md:py-4 flex items-center justify-between safe-area-inset-top">
        {/* Logo (hidden when menu open) */}
        {!isMenuOpen && (
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dnmoy5wua/image/upload/v1759279277/EvaLogo-removebg-preview_ezq6ff.png"
              alt="Lightning Deco Logo"
              width={120}
              height={35}
              priority
              className="md:w-[140px] md:h-[40px] w-[110px] h-[30px] object-contain"
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

          <Link
            href="/contact"
            className="px-5 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center space-x-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-sm">{isMenuOpen ? "Close" : "Menu"}</span>
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-red backdrop-blur-md flex flex-col z-40"
          >
            {/* Top bar with Close button */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
              <span className="text-lg text-[#D4AF37]">Menu</span>
              <button
                className="flex items-center space-x-1 text-[#D4AF37] hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-sm">Close</span>
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col w-full mt-6">
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
                  className="text-lg font-light text-[#D4AF37] px-6 py-4 border-b border-white/10 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button */}
              <div className="px-6 py-6">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
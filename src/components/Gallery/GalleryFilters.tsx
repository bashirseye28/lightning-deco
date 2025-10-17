"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type GalleryFiltersProps = {
  categories?: string[]; // 🧩 optional to prevent runtime error
  active: string;
  setActive: (cat: string) => void;
};

export default function GalleryFilters({
  categories = [], // ✅ default empty array to prevent .map crash
  active,
  setActive,
}: GalleryFiltersProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 🧠 Return nothing if categories still empty (avoids flicker)
  if (!categories.length) return null;

  return (
    <section className="bg-[#F9F7F1] py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* 🖥 Desktop Tabs */}
        <div className="hidden md:flex justify-center gap-6 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all ${
                active === cat
                  ? "bg-gold text-black border-gold shadow-md"
                  : "border-gold text-gold hover:bg-gold/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* 📱 Mobile Dropdown */}
        <div className="relative md:hidden mt-2">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-5 py-3 border border-gold text-gold rounded-lg bg-white shadow-sm"
          >
            <span className="font-medium">{active}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-20 mt-2 w-full bg-white border border-gold rounded-lg shadow-lg overflow-hidden"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActive(cat);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 text-sm transition-colors ${
                      active === cat
                        ? "bg-gold text-black"
                        : "text-gold hover:bg-gold/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
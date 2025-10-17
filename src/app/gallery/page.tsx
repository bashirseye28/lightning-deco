"use client";

import { useState, useMemo } from "react";
import GalleryHero from "@/components/Gallery/GalleryHero";
import GalleryIntro from "@/components/Gallery/GalleryIntro";
import GalleryFilters from "@/components/Gallery/GalleryFilters";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import { galleryData } from "@/data/galleryData";
import CTA from "@/components/Gallery/CTA";

export default function GalleryPage() {
  // 🧠 Dynamically extract unique categories from galleryData
  const categories = useMemo(() => {
    const unique = Array.from(new Set(galleryData.map((item) => item.category)));
    return ["All", ...unique];
  }, []);

  // 🎯 Active filter state
  const [activeCategory, setActiveCategory] = useState("All");

  // 🪄 Filter gallery items based on category
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-ivory text-black">
      <GalleryHero />
      <GalleryIntro />
      <GalleryFilters
        categories={categories}
        active={activeCategory}
        setActive={setActiveCategory}
      />
      <GalleryGrid items={filteredItems} />
      <CTA />
    </main>
  );
}
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

type ProjectsHeroProps = {
  imageSrc?: string;
  videoSrc?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function ProjectsHero({
  imageSrc = "https://res.cloudinary.com/dnmoy5wua/image/upload/v1759318911/IMG_0973_soansb.png",
  videoSrc,
  eyebrow = "PROJECTS",
  title = "The Art of Spatial Storytelling",
  subtitle = "Each space is a dialogue between shadow, structure, and serenity.",
  align = "left",
}: ProjectsHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // ✅ Prevents hydration mismatches (important for dynamic import pages)
  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // ✅ Smooth parallax effects
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.55]);

  const isCenter = align === "center";

  // ✅ Avoid rendering until mounted (prevents motion warnings)
  if (!mounted) return null;

  return (
    <section
      ref={ref}
      className="relative h-[88vh] min-h-[560px] w-full overflow-hidden"
    >
      {/* 🔹 Background Layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {videoSrc ? (
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={imageSrc}
            alt="Project background"
            fill
            priority
            className="object-cover"
          />
        )}
      </motion.div>

      {/* 🔹 Gradient Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/85 backdrop-blur-[1.5px]"
        aria-hidden="true"
      />

      {/* 🔹 Content */}
      <motion.div
        style={{ y: contentY }}
        className={clsx(
          "relative z-[1] h-full max-w-7xl mx-auto px-6",
          isCenter
            ? "flex items-center justify-center text-center"
            : "flex items-end pb-24"
        )}
      >
        <div
          className={clsx(
            "w-full",
            isCenter ? "max-w-3xl" : "max-w-2xl md:pl-2"
          )}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="tracking-[0.22em] text-[12px] md:text-[13px] text-[#D4AF37] uppercase"
          >
            {eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className={clsx(
              "font-playfair italic font-semibold text-white leading-[1.05]",
              "text-4xl md:text-6xl"
            )}
          >
            {title}
          </motion.h1>

          {/* Gold underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className={clsx(
              "origin-left h-[3px] w-24 bg-gradient-to-r from-yellow-400 via-[#D4AF37] to-yellow-500 rounded-full",
              isCenter ? "mx-auto my-6" : "my-5"
            )}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
            className={clsx(
              "text-[#F9F7F1]/85 font-lato",
              "text-base md:text-lg",
              isCenter ? "mx-auto max-w-2xl" : "max-w-xl"
            )}
          >
            {subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* 🔹 Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center select-none"
        >
          <span className="text-[11px] tracking-[0.3em] text-[#D4AF37]/90 uppercase">
            Scroll
          </span>
          <span className="mt-2 h-8 w-px bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
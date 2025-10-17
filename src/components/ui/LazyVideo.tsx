"use client";

import React, { useRef, useEffect, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  alt?: string;
  className?: string;
}

export default function LazyVideo({ src, poster, alt, className }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // 👁️ Detect when video enters the viewport
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.5 } // play when at least 50% visible
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  // 🎬 Control playback
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isVisible) {
      videoEl.play().catch(() => {}); // silently ignore autoplay restrictions
    } else {
      videoEl.pause();
    }
  }, [isVisible]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:shadow-gold/20 transition-all duration-700 ${className || ""}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* 🎨 Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>

      {/* ▶️ Decorative hover icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition">
        <svg
          className="w-12 h-12 text-white/90"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}
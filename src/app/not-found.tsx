"use client"

import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold text-gold mb-6">404</h1>
      <p className="text-lg text-gray-300 mb-8">
        Oops! The page you are looking for could not be found.
      </p>
      <Link
        href="/"
        className="px-6 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-black transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}
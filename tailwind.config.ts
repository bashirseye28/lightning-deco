/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37", // brand gold
        black: "#000000",
        white: "#ffffff",
        charcoal: "#1E1E1E", // deep gray for sections
        ivory: "#f9f7f1",   // soft background
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"], // elegant serif
        body: ["Lato", "sans-serif"],           // clean sans-serif
      },
      boxShadow: {
        glow: "0 0 10px rgba(212, 175, 55, 0.5)", // subtle golden glow
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>, variants?: string[]) => void }) {
      const newUtilities = {
        ".font-heading-italic-bold": {
          fontFamily: "Playfair Display, serif",
          fontWeight: "700", // bold
          fontStyle: "italic", // italic
        },
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    },
  ],
}
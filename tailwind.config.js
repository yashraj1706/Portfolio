/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Old theme (commented out for green overhaul):
        // primary: "#050816",
        // secondary: "#aaa6c3",
        // tertiary: "#151030",
        // "black-100": "#100d25",
        // "black-200": "#090325",
        // "white-100": "#f3f3f3",

        // New base for green theme:
        primary: "#000000", // site background (was #050816)
        secondary: "#94a3b8", // neutral text on dark (slate-400)
        tertiary: "#0b1a1c", // subtle deep green-tinted surface
        "black-100": "#0a0a0a",
        "black-200": "#050505",
        "white-100": "#f3f3f3",

        // Brand tokens (greens/teal)
        brand: "#00beb5", // Primary (A)
        "brand-strong": "#00a66d",
        "brand-foreground": "#ccf6c8",
        "brand-dark": "#1e6139",
        "brand-deep": "#00383c",
      },
      boxShadow: {
        // card: "0px 35px 120px -15px #211e35", // old purple shadow
        card: "0 35px 120px -15px rgba(0, 190, 181, 0.12)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/herobg1.png')",
      },
      animation: {
        "marquee-horizontal":
          "marquee-horizontal var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "loader-4": "loader-4 1.2s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        orbit: "orbit calc(var(--duration) * 1s) linear infinite",
      },
      keyframes: {
        "marquee-horizontal": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "loader-4": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
          shimmer: {
            from: {
              backgroundPosition: "0 0",
            },
            to: {
              backgroundPosition: "-200% 0",
            },
          },
          orbit: {
            "0%": {
              transform:
                "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
            },
            "100%": {
              transform:
                "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
            },
          },
        },
      },
    },
  },
  plugins: [],
};

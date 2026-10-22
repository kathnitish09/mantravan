import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        van: {
          green: {
            950: "#05130d",
            900: "#071a13",
            800: "#0b2b1e",
            700: "#113c2a",
            600: "#1a533b",
            500: "#246e4f",
          },
          charcoal: {
            950: "#060807",
            900: "#0a0d0b",
            800: "#111613",
            700: "#1a211d",
            600: "#27312c",
          },
          gold: {
            900: "#59430c",
            800: "#806013",
            700: "#ad831e",
            600: "#cda02c",
            500: "#dfb542",
            400: "#ecd078",
            300: "#f5e3a5",
            200: "#faefcf",
            100: "#fdf8ec",
          },
          orange: {
            900: "#4d1a06",
            800: "#7c2d12",
            700: "#9a3412",
            600: "#c2410c",
            500: "#ea580c",
          },
          maroon: {
            900: "#2e0d12",
            800: "#48151c",
            700: "#651d27",
            600: "#822632",
          },
          parchment: {
            900: "#44392a",
            800: "#736248",
            700: "#9f8a69",
            300: "#d7ccb6",
            200: "#e9e1cd",
            100: "#f4ede0",
            50: "#faf6ef",
          },
        },
      },
      fontFamily: {
        serif: ["'Cinzel'", "'Playfair Display'", "Georgia", "serif"],
        devanagari: ["'Rozha One'", "'Noto Serif Devanagari'", "'Mangal'", "serif"],
        body: ["'Plus Jakarta Sans'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        'diya': '0 0 45px -5px rgba(223, 181, 66, 0.35)',
        'diya-lg': '0 0 70px 10px rgba(223, 181, 66, 0.45)',
        'mystic': '0 10px 40px -10px rgba(0, 0, 0, 0.7)',
        'parchment': '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 100px rgba(90, 65, 30, 0.15)',
      },
      backgroundImage: {
        'forest-vignette': 'radial-gradient(circle at center, transparent 40%, rgba(7, 26, 19, 0.85) 90%, rgba(6, 8, 7, 0.98) 100%)',
        'parchment-texture': 'linear-gradient(to bottom, #fdf9f0, #f4ecd9, #ebdcc0, #dfcdab)',
      },
      animation: {
        'flicker': 'flicker 3s infinite alternate ease-in-out',
        'float-slow': 'float 8s infinite ease-in-out',
        'pulse-glow': 'pulseGlow 4s infinite ease-in-out',
        'mist': 'mistMove 25s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '25%': { opacity: '0.75', transform: 'scale(0.97)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
          '75%': { opacity: '0.85', transform: 'scale(0.99)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', filter: 'drop-shadow(0 0 8px rgba(223, 181, 66, 0.3))' },
          '50%': { opacity: '0.7', filter: 'drop-shadow(0 0 20px rgba(223, 181, 66, 0.7))' },
        },
        mistMove: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

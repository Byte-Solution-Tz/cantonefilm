import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9D5",
        gold: "#BD8018",
        brown: "#7A5C4A",
        navy: "#050A30",
      },
    },
  },

  plugins: [],
} satisfies Config;

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 30px rgba(251, 191, 36, 0.35)",
      },
      colors: {
        blush: "#f472b6",
        plum: "#4c1d95",
        sand: "#fef3c7",
      },
      backgroundImage: {
        "dream-gradient": "radial-gradient(circle at top, rgba(168, 85, 247, 0.25), rgba(15, 23, 42, 0.9) 52%, rgba(2, 6, 23, 1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

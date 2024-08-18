import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: { DEFAULT: "#1b1b1b", 100: "#2e2e2e" },
        primary: {
          100: "#c3e3e0",
          200: "#a2c1be",
          300: "#82a09e",
          400: "#63807e",
          500: "#466260",
        },
        blue: {
          100: "#DDE6ED",
          200: "#9DB2BF",
          300: "#526D82",
          400: "#27374D",
        },
      },
    },
    screens: {
      sm: "376px",
      md: "834px",
      lg: "1080px",
      xl: "1332px",
    },
  },
  plugins: [],
};
export default config;

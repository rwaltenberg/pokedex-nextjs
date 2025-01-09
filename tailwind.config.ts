import tailwindContainerQueries from "@tailwindcss/container-queries"
import type { Config } from "tailwindcss"
import tailwindAnimate from "tailwindcss-animate"

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: "hsl(210 40% 98%)",
          100: "hsl(210 40% 96.1%)",
          200: "hsl(214.3 31.8% 91.4%)",
          300: "hsl(212.7 26.8% 83.9%)",
          400: "hsl(215 20.2% 65.1%)",
          500: "hsl(215.4 16.3% 46.9%)",
          600: "hsl(215.3 19.3% 34.5%)",
          700: "hsl(215.3 25% 26.7%)",
          800: "hsl(217.2 32.6% 17.5%)",
          900: "hsl(222.2 47.4% 11.2%)",
          950: "hsl(222.2 84% 4.9%)",
        },
      },
      fontFamily: {
        inter: "var(--font-inter), sans-serif",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindAnimate, tailwindContainerQueries],
}
export default config

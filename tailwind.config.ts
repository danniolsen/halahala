import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "la-liga": "var(--la-liga)",
        "champions-league": "var(--champions-league)",
        "copa-del-rey": "var(--copa-del-rey)",
        "super-copa-espana": "var(--super-copa)",
        "fifa-club": "var(--fifa-club)",
      },
    },
  },
  plugins: [],
} satisfies Config;

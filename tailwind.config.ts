import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
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
        "mundial-clubes": "var(--mundial-clubes)"
      }
    }
  },
  // Ensure that dynamic colors not purged
  safelist: [
    "bg-la-liga",
    "bg-champions-league",
    "bg-copa-del-rey",
    "bg-super-copa-espana",
    "bg-fifa-club",
    "bg-mundial-clubes",
    "border-sky-500",
    "border-amber-500",
    "border-emerald-500",
    "border-red-400",
    "border-transparent"
  ],
  plugins: []
} satisfies Config;

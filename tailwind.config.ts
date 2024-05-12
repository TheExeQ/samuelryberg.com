import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F1116",
        secondary: "#161413",
      },
    },
  },
  plugins: [],
};
export default config;

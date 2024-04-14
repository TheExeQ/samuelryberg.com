import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: "#0F1116",
      secondary: "#161413",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
export default config;

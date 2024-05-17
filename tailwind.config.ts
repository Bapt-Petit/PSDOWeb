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
        custom_yellow: "#F4D03F",
        custom_green: "#D2EC60",
        custom_blue_black: "#161D25"
      },
    },
  },
  plugins: [],
};
export default config;

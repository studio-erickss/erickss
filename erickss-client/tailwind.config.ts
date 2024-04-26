import type { Config } from "tailwindcss";


const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#EF820D",
          'primary-content': 'white',
          secondary: '#65BC7B',
          'secondary-content': 'white',
          accent: '#D3D3D3',
          // 'base-100': '#e6e6e6', // affects some components. e.g. skeletons are not visible in light mode.
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#EF820D",
          'primary-content': 'white',
          secondary: '#65BC7B',
          'secondary-content': 'white',
          accent: '#D3D3D3',
        },
      },
    ],
  },
};
export default config;

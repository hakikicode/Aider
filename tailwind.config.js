module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_orange: { 100: "#ffbda7", 200: "#ffa8a7", A100: "#f0997a" },
        blue: { A400: "#1877f2", A200: "#4285f4" },
        red: {
          200: "#f28f8f",
          300: "#b16668",
          500: "#ea4335",
          A700: "#ff0000",
        },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        green: { 600: "#34a853", A100: "#c5ffe0", A700: "#00fb19" },
        yellow: { A400: "#e7e013" },
        blue_gray: { 800: "#26513a" },
        gray: {
          100: "#f5f5f5",
          200: "#ebebeb",
          300: "#e0e0e0",
          400: "#b7b7b7",
          500: "#949494",
          900: "#1b1b1b",
          "200_01": "#f0f0f0",
          "700_3f": "#6666663f",
        },
        pink: { 800: "#9a4a4d" },
        amber: { 500: "#fbbc05" },
        white: { A700_01: "#fefefe", A700: "#ffffff" },
        indigo: { 900: "#19265c" },
      },
      fontFamily: { ubuntu: "Ubuntu", sofiasans: "Sofia Sans" },
      boxShadow: {
        bs: "1px 1px  11px 2px #0000003f",
        bs2: "1px 1px  24px -3px #0000003f",
        bs1: "inset -1px 2px  15px 10px #0000003f",
      },
      textShadow: { ts: "1px 1px  24px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};

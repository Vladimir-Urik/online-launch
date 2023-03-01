const brand = {
  600: "#e65e77",
  700: "#d53f5f",
};

const light = {
  200: "#ecead7",
  300: "#e2e0c9",
  400: "#d8d6bb",
  500: "#cfcdb0",
  600: "#c6c3a5",
  700: "#bcb99a",
};

const onlyBg = {
  primary: {
    400: "#465056",
    700: "#1f2c38",
    800: "#1e2d3d",
    900: "#192633",
  },
  light: {
    ...light,
  },
  brand: brand,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ...brand,
        },
        dark: onlyBg.primary["900"],
      },
      backgroundColor: onlyBg,
      gradientColorStops: onlyBg,
      borderColor: onlyBg,
    },
  },
  plugins: [],
};

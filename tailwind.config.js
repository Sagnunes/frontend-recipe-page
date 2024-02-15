/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    colors: {
      White: "hsl(0, 0%, 100%)",
      Nutmeg: "hsl(14, 45%, 36%)",
      DarkRaspberry: "hsl(332, 51%, 32%)",
      RoseWhite: "hsl(330, 100%, 98%)",
      Eggshell: "hsl(30, 54%, 90%)",
      LightGrey: "hsl(30, 18%, 87%)",
      WengeBrown: "hsl(30, 10%, 34%)",
      DarkCharcoal: "hsl(24, 5%, 18%)",
    },
    fontFamily: {
      outfit: ["Outfit"],
      youngSerif: ["Young Serif"],
    },
  },
  plugins: [],
};

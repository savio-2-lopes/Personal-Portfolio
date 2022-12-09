module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",

  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": " 0 0 2px #14161c",
      // "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },

    extend: {
      colors: {
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          // 200: "#16181d",
          200: "#ddd",
          300: "#16181d",
          500: "#fff",
          // 500: "#0f1115",
          600: "#354358",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};

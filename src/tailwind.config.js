/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 */
const path = require("path");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.vue"],
  darkMode: false,
  theme: {},
  variants: {},
  plugins: [],
  content: [path.resolve(__dirname, "**/*.{js,vue,liquid,scss}")],
};

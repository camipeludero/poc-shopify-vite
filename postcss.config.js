/**
 * PostCSS configuration file
 *
 * docs: https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor
 */

const path = require("path");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss")(path.resolve(__dirname, "./src/tailwind.config.js")),
    require("autoprefixer"),
  ],
};

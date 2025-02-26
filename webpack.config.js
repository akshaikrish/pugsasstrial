const path = require("path");
// const homepageJS = path.resolve(__dirname, "src/pages/homepage");
// const stickynavpageJS = path.resolve(__dirname, "src/pages/stickynavpage");
// const accordionpageJS = path.resolve(__dirname, "src/pages/accordionpage");
const capitalpageJS = path.resolve(__dirname, "src/pages/capital-group");
const architectPageJS = path.resolve(__dirname, "src/pages/architectPage");
module.exports = {
  entry: {
    capitalpage : capitalpageJS,
    architectPage : architectPageJS
    // homepage: homepageJS,
    // stickynavpage: stickynavpageJS,
    // accordionpage: accordionpageJS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};

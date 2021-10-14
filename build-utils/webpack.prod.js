const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const config = {
  mode: "production",
  plugins: [new MiniCssExtractPlugin(), new WorkboxWebpackPlugin.GenerateSW()],
};

module.exports = config;

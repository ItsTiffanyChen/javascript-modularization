const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    // static: {
    //   directory: path.resolve(__dirname, "dist"),
    // },
    port: 10000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "monsters",
      template: "./src/index.html",
    }),
    // new CleanWebpackPlugin(),
  ],
};

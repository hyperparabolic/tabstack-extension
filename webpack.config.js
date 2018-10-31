const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: "source-map",
  entry: {
    "popup/index": "./popup/index.js",
    "background/index": "./background/index.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      {from: "manifest.json"},
      {from: "icon.png"},
    ]),
    new HtmlWebPackPlugin({
      template: "./popup/index.html",
      filename: "./popup/index.html",
    }),
  ],
};

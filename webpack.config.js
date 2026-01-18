const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const pagesDir = path.resolve(__dirname, "src/pages");
const pages = fs.readdirSync(pagesDir).filter(file => {
  return fs.statSync(path.join(pagesDir, file)).isDirectory();
});

const {
  entry,
  historyApiFallback,
  htmlPluginInstances
} = pages.reduce((acc, page) => {
  const {entry} = acc;
  entry[page] = path.resolve(__dirname, "src", "pages", page, "index.js");

  const {historyApiFallback: {rewrites}} = acc;
  rewrites.push({from: page === "home" ? /^\/$/ : new RegExp(`^/${page}$`), to: `/${page}.html`});

  const {htmlPluginInstances} = acc;
  htmlPluginInstances.push(
    new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: path.resolve(__dirname, "src", "pages", page, "index.html"),
      chunks: [page]
    })
  );

  return acc;
}, {entry: {}, historyApiFallback: {rewrites: []}, htmlPluginInstances: []});

module.exports = env => ({
  mode: env.MODE ?? "development",
  entry,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback,
    static: {
      directory: path.resolve(__dirname, "public")
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    ...htmlPluginInstances,
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {from: path.resolve(__dirname, "public"), to: path.resolve(__dirname, "build")}
      ]
    })
  ]
});
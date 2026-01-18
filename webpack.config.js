const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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

module.exports = {
  mode: process.env.mode ?? "development",
  entry,
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    ...htmlPluginInstances
  ]
};
const HtmlWebPackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              esModule: false,
              extract: true,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new SpriteLoaderPlugin(),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: `index.html`,
    },
  },
  output: {
    publicPath: `/`,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      contexts: path.resolve(__dirname, "src/contexts"),
      css: path.resolve(__dirname, "src/css/"),
      img: path.resolve(__dirname, "src/img/"),
      pages: path.resolve(__dirname, "src/pages/"),
    },
  },
};

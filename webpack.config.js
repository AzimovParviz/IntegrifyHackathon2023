const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    client: path.resolve(__dirname, ".", "client", "index.tsx")
  },
  mode: isDevelopment ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  target: "",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
    hot: true,
    port: 9000,
  },
  target: "web",
  devtool: isDevelopment ? "inline-source-map" : false,
  optimization: {
    minimizer: [new TerserJSPlugin(),  new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ]
      },
      {
          test: /\.(scss|css)$/,
          use: 
          [
            isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
             'css-loader', 'sass-loader'
          ],
        },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

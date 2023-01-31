const path = require("path");
const process = require("process");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    client: path.resolve(process.cwd(), "client", "public", "index.tsx")
  },
  mode: isDevelopment ? "development" : "production",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "[name].bundle.js"
  },
  target: 'web',
  watchOptions: {
    ignored: ["node_modules", path.join(process.cwd(), "server")]
  },
  devServer: {
    static: {
      directory: path.join(process.cwd(), 'dist'),
    },
    watchFiles: ["./src/*"],
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
      template: path.resolve(process.cwd(), ".", "/client/src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

const path = require("path");
const dotenv = require("dotenv");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EsbuildPlugin } = require("esbuild-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

dotenv.config();

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json", ".css", ".scss"],
    alias: {
      images: path.resolve(__dirname, "public/images"),
      react: path.resolve("./node_modules/react"),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ModuleFederationPlugin({
      name: "menu",
      filename: "remoteEntry.js",
      exposes: {
        "./MenuComponent": "./src/components/MenuComponent",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^19.0.0" },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^19.0.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "Restaurant Demo App - Menu",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 3001,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },
};

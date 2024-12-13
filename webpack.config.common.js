const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const dotenv = require('dotenv');
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const NODE_ENV = process.env.NODE_ENV;
const currentPath = path.join(__dirname);
const basePath = currentPath + "/.env";
const envPath = basePath + "." + NODE_ENV;
const finalPath = fs.existsSync(envPath) ? envPath : basePath;
const fileEnv = dotenv.config({ path: finalPath }).parsed;
const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});


module.exports = {
  entry: ["./src/main.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.mp3$/,
        loader: "file-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset",
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
    }),
    new webpack.DefinePlugin(envKeys),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({})],
  },
};

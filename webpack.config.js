import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default {
  mode: "development",
  context: path.resolve("src"),
  entry: {
    testOne: ["./test1.js", "./test2.js"],
    testTwo: "./test3.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve("dist"), // necessary for clean-webpack-plugin
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
};

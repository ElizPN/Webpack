import path from "path";

export default {
  mode: "development",
  context: path.resolve("src"),
  entry: {
    test1: ["./test1.js", "./test2.js"],
    test2: "./test3.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve("dist"),
  },
};

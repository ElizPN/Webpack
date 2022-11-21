import path from "path";

export default {
  mode: "development",
  entry: { file1: "./src/test1.js", file2: "./src/test2.js" },
  output: {
    filename: "bundle.[contenthash].js",
  },
};

let test = path.resolve("dist", "assets");
console.log(test);

import path from "path";

export default {
  mode: "development",
  entry: {
    bund1: ["./src/test1.js", "./src/test2.js"],
    bund2: "./src/test3.js",
  },
  output: {
    filename: "bundle.[contenthash].js",
  },
};

let test = path.resolve("dist", "assets");
console.log(test);

import path from "path";

export default {
  mode: "development",
  entry: {
    testOne: ["./src/test1.js", "./src/test2.js"],
    testTwo: "./src/test3.js",
  },
  output: {
    filename: "[name].bund.[contenthash].js",
  },
};

let test = path.resolve("dist", "assets");
console.log(test);

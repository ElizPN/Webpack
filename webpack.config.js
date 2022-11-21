import path from "path";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
};

let test = path.resolve("dist", "assets");
console.log(test);

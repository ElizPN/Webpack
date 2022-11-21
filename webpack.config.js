import path from "path";

export default {
  mode: "development",
  entry: ["./src/test1.js", "./src/test2.js", "./src/test3.js"],
  output: {
    filename: "bundle.js",
  },
};

let test = path.resolve("dist", "assets");
console.log(test);


// commonjs 방식의 모듈선언

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path : __dirname + "/dist",

  },
}
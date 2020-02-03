module.exports = {
  entry: "./client/index.js",
  output: {
    filename: "bundled.js",
    path: __dirname + "/public"
  },
  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }]
  },
  watch: true
}
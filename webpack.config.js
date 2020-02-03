module.exports = {
  mode: "development",
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
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react", "@babel/preset-env"
          ]
        }
      }
    }, {
      test: /\.css$/i,
      exclude:/node-modules/,
      use: ['style-loader', 'css-loader']
    }]
  },
  watch: true
}
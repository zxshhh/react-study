var path = require("path");
module.exports = {
  entry: {
    app: ["./app/app.js"]
  },
  output: {
    filename: "main.js",
    path: path.resolve("./build")
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
                loader: "style-loader" // creates style nodes from JS strings
              }, {
                loader: "css-loader" // translates CSS into CommonJS
              }, {
                loader: "less-loader" // compiles Less to CSS
              }]
      }
      ]}
};
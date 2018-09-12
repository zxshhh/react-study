var path = require("path");
module.exports = {
  entry: {
    app: ["./src/app.js"]  //入口文件
  },
  output: {
    filename: "main.js",            //打包后输出文件的文件名
    path: path.resolve("./build")   //打包后的文件存放的地方
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
      ]},
      devServer: {
        port: 8080
      }
};
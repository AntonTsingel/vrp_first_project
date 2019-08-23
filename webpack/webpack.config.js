const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./img",
              name: "[name].[ext]"
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "style.[hash].css",
      disable: false,
      allChunks: true
    }),
    new CleanWebpackPlugin(),
    new WebpackMd5Hash(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: "./src/index.html",
      filename: "index.html",
      title: "VRP first project"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/"
  }
};

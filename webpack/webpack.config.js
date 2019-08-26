const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },

    node: {
      fs: 'empty',
    
      readline: 'empty'
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
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
           attrs: [':data-src']
          }
        }
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
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "style.css",
      disable: false,
      allChunks: true
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/"
  }
};

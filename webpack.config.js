const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMiniMizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const{ CleanWebpackPlugin }= require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath:"/" 
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias:{
      '@components':path.resolve(__dirname,'src/components/'),
      '@styles':path.resolve(__dirname,'src/styles/'),
    }
  },
  mode:'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
      {
        test:/\.s[ac]ss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackplugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new miniCssExtractPlugin({
      filename:'[name].css',
    }),
    new CleanWebpackPlugin(),

  ],
  optimization:{
    minimize:true,
    minimizer:[
      new CssMiniMizerPlugin(),
      new TerserPlugin(),
    ]
  }
};

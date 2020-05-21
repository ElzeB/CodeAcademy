const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options: {
                publicPath: './images/',
                outputPath: 'assets/images',
                name: '[name].[ext]'
            },
        },
        { test: /\.hbs$/, loader: "handlebars-loader" }
    ],
  },
  plugins: [
      new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
      new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/index.hbs'
    }),
      new HtmlWebpackPlugin({
      title: 'extras',
      filename: 'profile.html',
      template: './src/extras/profile.hbs'
    }),
        new MiniCssExtractPlugin({
        filename: 'assets/styles/app.css',
    }),
      new MiniCssExtractPlugin({
        filename: 'assets/styles/profile.css',
    }),
  ]
};
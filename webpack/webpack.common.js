const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require("dotenv-webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');
module.exports = (env = 'development') => ({
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.jsx','.js', '.ts', '.tsx', '.css', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.[hash:8].js',
    publicPath: process.env.PUBLIC_PATH || '/'
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.jsx','.js', '.ts', '.tsx', '.css', '.scss'],
  },
  devtool: 'hidden-source-map',

  module: {
    rules: [
      {
        test: /\.(jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules'],
            },
          },
        ],
      },
    ],
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'assets', 'index.html'),
      
    }),
    new DotenvWebpackPlugin({
      path: path.join(__dirname, `../env/.env.${env}`)
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH)
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].css',
    })
  ],
  
})

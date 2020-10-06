const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const RollbarSourceMapPlugin = require('rollbar-sourcemap-webpack-plugin');
const path = require('path')

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: process.env.PUBLIC_PATH || '/',
    filename: '[name].[hash:8].min.js',
    sourceMapFilename: '[name].[chunkhash].min.map',
    chunkFilename: '[name].[chunkhash].min.js',
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        cache: true,
        extractComments: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins:
  process.env.ROLLBAR_POST_CLIENT_TOKEN ?
  [
    new RollbarSourceMapPlugin({
      accessToken: process.env.ROLLBAR_ACCESS_TOKEN || null,
      version: process.env.CODEBUILD_SOURCE_VERSION || null,
      publicPath: process.env.PUBLIC_PATH
    })
  ] : []
};

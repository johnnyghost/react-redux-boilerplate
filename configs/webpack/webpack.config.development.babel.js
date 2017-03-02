const path              = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig      = require('./webpack.common.babel.js');
const PATHS             = require('./constants').PATHS;

const devClientConfig = {
  entry: [
    'babel-polyfill',
    path.resolve(PATHS.SOURCE, 'index.js'),
    path.resolve(PATHS.SOURCE, 'assets/styles/style.css')
  ],
  output: {
    path: PATHS.DIST,
    filename: '[name].js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: commonConfig.module.loaders.concat({
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: ['css-loader?modules&importLoaders=1', 'postcss-loader']
      })
    })
  },
  plugins: commonConfig.plugins.concat([
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: './statics/template/index.html'
    })
  ])
}

module.exports = Object.assign(commonConfig, devClientConfig);

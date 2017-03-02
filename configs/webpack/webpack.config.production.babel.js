const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig      = require('./webpack.common.babel.js');
const PATHS             = require('./constants').PATHS;

const prodClientConfig = {
  entry: [
    'babel-polyfill',
    path.resolve(PATHS.SOURCE, 'index.js'),
    path.resolve(PATHS.SOURCE, 'assets/styles/style.css')
  ],
  output: {
    path: PATHS.DIST,
    filename: 'src/[name].[chunkhash].js',
    chunkFilename: 'src/[name].[chunkhash].js'
  },
  devtool: 'source-map',
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
    new ExtractTextPlugin({ filename: 'styles/[name].css', allChunks: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      isProduction: true,
      template: './statics/template/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ])
}

module.exports = Object.assign(commonConfig, prodClientConfig);

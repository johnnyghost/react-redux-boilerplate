var path = require('path');
var env = process.env.NODE_ENV || 'dev';

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    root: path.resolve(__dirname),
    // create tasks to choose prod/dev env
    // need to create an issue
    alias: {
      config: 'config/config.' + env + '.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};

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

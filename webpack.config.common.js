var path = require('path');
var webpack = require('webpack');

var NODE_ENV = process.env.NODE_ENV || 'dev';

var PATHS = {
  SOURCE: path.join(__dirname, '/src/'),
  APP: path.join(__dirname, 'src/app'),
  DIST: path.join(__dirname, '/dist')
};

var env = {
  production: NODE_ENV === 'prod',
  staging: NODE_ENV === 'staging',
  test: NODE_ENV === 'test',
  development: NODE_ENV === 'dev'
};

module.exports = {
  entry: [
    PATHS.SOURCE + '/main.js'
  ],

  output: {
    path: PATHS.DIST,
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: env.development,
      __STAGING__: env.staging,
      __PRODUCTION__: env.production,
      __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
    })
  ],
  resolve: {
    root: path.resolve(__dirname),
    // create tasks to choose prod/dev env
    // need to create an issue
    alias: {
      config: 'config/config.' + NODE_ENV + '.js'
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
        loaders: ['style', 'css', 'sass', 'postcss']
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }, {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts&name=app/assets/fonts/[name]-[hash:10].[ext]'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&prefix=fonts&name=app/assets/fonts/[name]-[hash:10].[ext]'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&prefix=fonts&name=app/assets/fonts/[name]-[hash:10].[ext]'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&prefix=fonts&name=app/assets/svg/[name]-[hash:10].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=app/assets/png/[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  postcss: function () {
    return [
      require('autoprefixer')
    ];
  }
};

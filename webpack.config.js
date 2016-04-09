module.exports = process.env.NODE_ENV === 'prod' ?
  require('./webpack.config.production.js') :
  require('./webpack.config.development.js');

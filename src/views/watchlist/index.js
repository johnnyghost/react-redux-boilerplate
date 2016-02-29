module.exports = {
  path: 'watchlist',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Watchlist').default);
    });
  }
};

module.exports = {
  path: 'auth',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Authentication').default);
    });
  }
};

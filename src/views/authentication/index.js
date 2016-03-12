module.exports = {
  path: 'authentication',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Authentication').default);
    });
  }
};

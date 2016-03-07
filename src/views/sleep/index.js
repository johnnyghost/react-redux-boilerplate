module.exports = {
  path: 'sleep',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Sleep').default);
    });
  }
};

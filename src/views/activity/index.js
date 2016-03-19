module.exports = {
  path: 'activity',
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./views/Steps')
      ]);
    });
  },

  getComponents(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Activity').default);
    });
  }
};

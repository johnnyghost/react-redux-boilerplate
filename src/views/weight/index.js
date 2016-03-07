module.exports = {
  path: 'weight',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Weight').default);
    });
  }
};

module.exports = {
  path: 'weight',
  onEnter: (next, transition) => {
    transition({
      pathname: '/auth'
    });
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Weight').default);
    });
  }
};

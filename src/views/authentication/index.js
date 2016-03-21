module.exports = {
  path: 'auth',
  onEnter: (next, transition) => {
    transition({
      pathname: '/'
    });
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Authentication').default);
    });
  }
};

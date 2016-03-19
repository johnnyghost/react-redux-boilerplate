module.exports = {
  path: 'auth',
  onEnter: (a,b) => {
    console.log(a);
    console.log(b);
  },
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Authentication').default);
    });
  }
};

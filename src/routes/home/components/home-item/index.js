module.exports = {
  path: ':id',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./HomeItem').default)
    })
  }
}

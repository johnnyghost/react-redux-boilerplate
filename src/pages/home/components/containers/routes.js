module.exports = {
  path: 'child',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./HomeChild').default)
    })
  }
}

module.exports = {
  path: 'home',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./components/containers/'),
        require('./../about/')
      ])
    })
  },

  getComponents(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Home').default)
    })
  }
}

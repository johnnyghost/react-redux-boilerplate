module.exports = {
  path: 'home',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./components/containers/home-item'),
        require('./components/containers/home-list')
      ])
    })
  },

  getComponents(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Home').default)
    })
  }
}

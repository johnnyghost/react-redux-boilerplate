module.exports = {
  path: 'home',

  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./components/home-item')
      ])
    })
  },

  getComponents(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Home').default)
    })
  }
}

module.exports = {
  path: 'home',
  
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./components/containers/routes'),
        require('./../about/routes')
      ])
    })
  },

  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./Home').default)
    })
  }
}

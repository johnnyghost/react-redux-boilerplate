import Home from './home/Home';

export default [
  {
    indexRoute: true,
    component: Home
  },
  require('./home/'),
  require('./my-movies/'),
  require('./watchlist/')
];

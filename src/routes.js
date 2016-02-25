import routes from './views/';
import App from './containers/App';

const configuration = {
  path: '/',
  component: App,
  childRoutes: routes
};

export default configuration;

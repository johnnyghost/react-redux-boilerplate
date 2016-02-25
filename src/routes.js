import routes from './views/';
import App from './components/app/App';

const configuration = {
  path: '/',
  component: App,
  childRoutes: routes
};

export default configuration;

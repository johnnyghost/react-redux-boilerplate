import { App } from './components/containers/';
import routes from './routes/';

const configuration = {
  path: '/',
  component: App,
  childRoutes: routes
};

export default configuration;

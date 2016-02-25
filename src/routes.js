import React from 'react';
import { Route , IndexRoute } from 'react-router';
import { App } from './components/containers/';
import routes from './routes/';

const configuration = {
  path: '/',
  component: App,
  childRoutes: routes
};

export default configuration;

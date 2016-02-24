import React from 'react';
import { Route , IndexRoute } from 'react-router';
import { App } from './components/containers/';
import { AboutView, HomeView } from './pages';

export default(
  <Route path='/' component={ App }>
      <IndexRoute component={ HomeView }/>
      <Route path="about" component={ AboutView }/>
      <Route path="home" component={ HomeView }/>
  </Route>
);

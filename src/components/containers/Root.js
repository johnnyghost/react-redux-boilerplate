import React, { Component } from 'react';
import { Router, hashHistory } from 'react-router';

import routes from './../../routes';

class Root extends Component {
  render() {
    return (
      <Router history={ hashHistory } routes={ routes }></Router>
    )
  }
}

export default Root;

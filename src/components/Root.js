import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

import routes from './../routes';

class Root extends Component {
  render() {
    return (
      <Router
        history={ browserHistory }
        routes={ routes }>
      </Router>
    );
  }
}

export default Root;

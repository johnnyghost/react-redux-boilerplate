import React, { Component } from 'react';
import { Header } from './../';

import './assets/styles/app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <h1>App</h1>
        { this.props.children }
      </div>
    );
  }
}

export default App;

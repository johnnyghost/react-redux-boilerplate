import React, { Component } from 'react';

import routes from './../../routes';
console.log('ALLL');
class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>App</h1>
        { this.props.children }
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { Header } from './../';

import './assets/styles/app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header></Header>
        <section className="content row">
          <h1>App</h1>
        </section>
        { this.props.children }
      </div>
    );
  }
}

export default App;

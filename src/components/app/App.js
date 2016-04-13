import React, { Component, PropTypes } from 'react';
import { Header } from './../';

import './assets/styles/app.scss';

class App extends Component {
  
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className="app">
        <Header></Header>
        <section className="content">
          { this.props.children }
        </section>
      </div>
    );
  }
}

export default App;

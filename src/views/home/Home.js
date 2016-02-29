import React, { Component } from 'react';

class HomeView extends Component {
  render() {
    return (
      <div>
        <section className="home row">
          <h2>Home</h2>
        </section>
        { this.props.children }
      </div>
    );
  }
}

export default HomeView;

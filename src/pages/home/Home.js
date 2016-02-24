import React, { Component } from 'react';

class HomeView extends Component {
  render() {
    return (
      <div>
        <p>Home</p>
        { this.props.children }
      </div>
    )
  }
}

export default HomeView;

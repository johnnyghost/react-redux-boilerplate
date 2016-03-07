import React, { Component } from 'react';

class Steps extends Component {
  render() {
    return <p>{ this.props.params.id }</p>;
  }
}

export default Steps;

import React, { Component, PropTypes } from 'react';

class Steps extends Component {

  static propTypes = {
    params: PropTypes.object
  }

  render() {
    return <p>{ this.props.params.id }</p>;
  }
}

export default Steps;

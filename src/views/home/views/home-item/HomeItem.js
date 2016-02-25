import React, { Component } from 'react';

class HomeItem extends Component {
  render() {
    return <p>{ this.props.params.id }</p>;
  }
}

export default HomeItem;

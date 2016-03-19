import React, { Component } from 'react';

import { authentication } from './../../core/services';

authentication.authenticate();
class WeightView extends Component {
  render() {
    return (
      <section className="about row">
        <h2>Weight</h2>
      </section>
    );
  }
}

export default WeightView;

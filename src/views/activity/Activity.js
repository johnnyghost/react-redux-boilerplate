import React, { Component } from 'react';

class ActivityView extends Component {
  render() {

    return (
      <div>
        <section className="activity row">
          <h2>Activity</h2>
        </section>
        { this.props.children }
      </div>
    );
  }
}

export default ActivityView;

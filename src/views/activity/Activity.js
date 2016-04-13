import React, { Component, PropTypes } from 'react';

class ActivityView extends Component {

  static propTypes = {
    children: PropTypes.node
  }

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

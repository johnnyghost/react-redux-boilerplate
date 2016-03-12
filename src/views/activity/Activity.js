import React, { Component } from 'react';
class ActivityView extends Component {
  render() {

    window.location.href = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=227NS7&redirect_uri=http://localhost:3000/auth/&scope=activity nutrition heartrate location nutrition profile settings sleep social weight&expires_in=604800";

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

import React, { Component } from 'react';
import { RepositoryList } from 'containers';

/**
 * <Home />
 */
class Home extends Component {

  /**
   * Render <Home/>
   *
   * @return {JSXElement}
   */
  render():Object {

    return (
      <div>
        <section>
          <h2>Home</h2>
          <RepositoryList />
        </section>
      </div>
    );
  }
}

export default Home;

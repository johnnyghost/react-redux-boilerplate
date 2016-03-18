import config from 'config';
import url from 'url';

const authentication = {

  /**
   * Authenticate on fitbit api.
   *
   * @method
   */
  authenticate: () => {
    // window.location.href = url.format(config.CLIENTS.FITBIT);
  },

  isAuthenticated: () => {

  }
};

export default authentication;

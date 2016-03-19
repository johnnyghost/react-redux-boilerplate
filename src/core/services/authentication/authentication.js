import config from 'config';
import url from 'url';

const authentication = {

  /**
   * Authenticate on fitbit api.
   *
   * @method
   */
  authenticate: () => {
    window.location.href = url.format(config.CLIENTS.FITBIT);
  },

  /**
   * [description]
   * @method
   * @return {[type]} [description]
   */
  isAuthenticated: () => {

  }
};

export default authentication;

import 'whatwg-fetch';
import HTTPError from './../errors/HTTPError';

/**
 * Default HTTP options.
 * @type {Object}
 */
const HTTPDefaultValues = {
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json'
  }
};

/**
 * An HTTP wrapper using fetch lib.
 * The available operations are:
 *  - get
 *  - post
 *  - put
 *  - delete
 *
 * You can check more info on the axios page
 * @see
 */
const HTTPRequest = {

  /**
   * Performs a get call through http-request.
   *
   * @method HTTPRequest.get
   * @public
   *
   * @param url                The server URL that will be used for the request
   * @param [options]          Additional (non-endpoint-specific) parameters
   * @param [options.baseURL]  Will be prepended to url unless 'url' is absolute
   * @param [options.needAuth] Sets the header if the resource need auth
   * @param [options.headers]  Custom Headers to be sent
   * @param [options.timeout]  Specifies the number in milliseconds before the request times out
   * @param [options.params]   URL parameters to be sent with the request
   * @param [options.auth]     Indicate that HTTP basic should be used
   * @returns {Promise<Response|HTTP error>} A resolved promise with the service response
   *                                         or reject with an HTTP error
   */
  get: (url:string, options:?Object={}):Promise => {

    let httpOptions = Object.assign({}, HTTPDefaultValues, parseHttpOptions(options), {
      method: 'get'
    });

    return doRequest(url, httpOptions);
  },

  /**
   * Performs a post call through http-request.
   *
   * @method HTTPRequest.post
   * @public
   *
   * @param url                         The server URL that will be used for the request
   * @param {Object} [options]          Additional (non-endpoint-specific) parameters
   * @param {String} [options.baseURL]  Will be prepended to url unless 'url' is absolute
   * @param {Boolean}[options.needAuth] Sets the header if the resource need auth
   * @param {Object} [options.headers]  Custom Headers to be sent
   * @param {Number} [options.timeout]  Specifies the number in milliseconds before the request times out
   * @param {Object} [options.params]   URL parameters to be sent with the request
   * @param {Object} [options.data]     Is the data to be sent as the request body
   * @param {Object} [options.auth]     Indicate that HTTP basic should be used
   * @returns {Promise<Response|HTTP error>} A resolved promise with the service response
   *                                         or reject with an HTTP error
   */
  post: (url:string, options:?Object):Promise => {

    let httpOptions = Object.assign({}, HTTPDefaultValues, parseHttpOptions(options), {
      'method': 'post'
    });

    return doRequest(url, httpOptions);
  },

  /**
   * Performs a put call through http-request.
   *
   * @method HTTPRequest.put
   * @public
   *
   * @param url                         The server URL that will be used for the request
   * @param {Object} [options]          Additional (non-endpoint-specific) parameters
   * @param {String} [options.baseURL]  Will be prepended to url unless 'url' is absolute
   * @param {Boolean}[options.needAuth] Sets the header if the resource need auth
   * @param {Object} [options.headers]  Custom Headers to be sent
   * @param {Number} [options.timeout]  Specifies the number in milliseconds before the request times out
   * @param {Object} [options.params]   URL parameters to be sent with the request
   * @param {Object} [options.data]     Is the data to be sent as the request body
   * @param {Object} [options.auth]     Indicate that HTTP basic should be used
   * @returns {Promise<Response|HTTP error>} A resolved promise with the service response
   *                                         or reject with an HTTP error
   */
  put: (url:string, options:?Object):Promise => {

    let httpOptions = Object.assign({}, HTTPDefaultValues, parseHttpOptions(options), {
      'method': 'put'
    });

    return doRequest(url, httpOptions);
  },

  /**
   * Performs a delete call through http-request.
   *
   * @method HTTPRequest.delete
   * @public
   *
   * @param url                The server URL that will be used for the request
   * @param [options]          Additional (non-endpoint-specific) parameters
   * @param [options.baseURL]  Will be prepended to url unless 'url' is absolute
   * @param [options.needAuth] Sets the header if the resource need auth
   * @param [options.headers]  Custom Headers to be sent
   * @param [options.timeout]  Specifies the number in milliseconds before the request times out
   * @param [options.params]   URL parameters to be sent with the request
   * @param [options.auth]     Indicate that HTTP basic should be used
   * @returns {Promise<Response|HTTP error>} A resolved promise with the service response
   *                                         or reject with an HTTP error
   */
  delete: (url:string, options:?Object):Promise => {

    let httpOptions = Object.assign({}, HTTPDefaultValues, parseHttpOptions(options), {
      'method': 'delete'
    });

    return doRequest(url, httpOptions);
  }
};

/**
 * Executes the request.
 *
 * @method doRequest
 * @private
 *
 * @param url                The server URL that will be used for the request
 * @param [options]          Additional (non-endpoint-specific) parameters
 * @param [options.needAuth] Sets the header if the resource need auth
 * @param [options.baseURL]  Will be prepended to url unless 'url' is absolute
 * @param [options.headers]  Custom Headers to be sent
 * @param [options.timeout]  Specifies the number in milliseconds before the request times out
 * @param [options.params]   URL parameters to be sent with the request
 * @param [options.data]     Is the data to be sent as the request body
 * @param [options.auth]     Indicate that HTTP basic should be used
 * @returns {Promise<Response|HTTP error>} A resolved promise with the service response
 *                                         or reject with an HTTP error
 */
function doRequest(url:string, httpOptions:?Object):Promise {

  return fetch(url, httpOptions)
    .then(successResponseHandler)
    .catch(httpErrorHandler);
}

/**
 * Handles an http error.
 *
 * @method httpErrorHandler
 * @return {HTTPError}
 */
function httpErrorHandler(error:Object):HTTPError {
  throw new HTTPError(error.statusText, error.status);
}

/**
 * Return the data property from the response.
 *
 * @method successResponseHandler
 * @return {Object} the response
 */
function successResponseHandler(response:Object = {}) {

  if (response.data) {
    return response.data;
  }
}

/**
 * Maps the http options.
 *
 * @method parseHttpOptions
 * @param  {Object} options The options to be mapped
 * @return {Object} the http options mapped
 */
function parseHttpOptions(options:Object):Object {

  var optionsMapper = {
    baseURL : 'baseURL',
    mode    : 'mode',
    params  : 'params',
    data    : 'data',
    auth    : 'auth',
    timeout : 'timeout',
    headers : 'headers',
    needAuth: 'needAuth'
  };

  return Object.keys(options).reduce((previousValue, currentValue) => {
    previousValue[optionsMapper[currentValue]]= options[currentValue];

    return previousValue;
  }, {});
}

export default HTTPRequest;

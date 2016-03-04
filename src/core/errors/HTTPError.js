/**
* Error thrown if the HTTP request failed for some reason.
*
* @param {string}  message The failure message
* @param {string}  status  The status code
*
* @class
*/
class HTTPError extends Error {
  constructor(message:string, status:number) {
    super(message, status);

    this.name = this.constructor.name;
    this.message = message;
    this.status = status;

    Error.call(this);
    Error.captureStackTrace(this, this.constructor.name);
  }
}

export default HTTPError;

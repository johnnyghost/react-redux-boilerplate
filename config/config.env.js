import commonConfig from './config';

let config = {
  ENV: 'ENV', // environment: DEV,PROD
  CLIENTS: {
    FITBIT: {
      protocol: 'https',
      host: 'www.fitbit.com',
      pathname: '/oauth2/authorize',
      query: {
        response_type: 'token',
        client_id: '<CLIENT_ID>',
        redirect_uri: '<REDIRECT_URI>',
        scope: []
      }
    }
  }
};

export default Object.assign({}, commonConfig, config);

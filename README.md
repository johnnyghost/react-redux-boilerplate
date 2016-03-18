# React redux boilerplate

[wip]

`npm run start`

## Environment configuration
You should create a configuration per environment.

```js

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

```

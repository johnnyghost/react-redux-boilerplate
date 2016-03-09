import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components';

import http from './core/transport/http';
import axios from 'axios';

// window.location.href = "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=227NS7&redirect_uri=http://localhost:3000/auth/&scope=activity nutrition heartrate location nutrition profile settings sleep social weight&expires_in=604800";

// axios.get('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=227NS7&redirect_uri=http://localhost:3000/&scope=activity nutrition heartrate location nutrition profile settings sleep social weight&expires_in=604800', {
//   headers: {
//     'Accept': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//   }
// }).then((i) => {
//   console.log(i);
// }).catch((error) => {
//   console.log('error -> ', error);
// })

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

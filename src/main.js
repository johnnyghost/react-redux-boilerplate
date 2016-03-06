import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components';

import http from './core/transport/http';

http.get('https://api.themoviedb.org/3/movie/550?api_key=a40440b052edf354fe17b0fea6da9540', {
  mode: 'no-cors'
}).then((i) => {
  console.log('i', i);
})

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);

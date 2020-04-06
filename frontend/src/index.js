import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';

import App from './App';
import { initFontAwesomeLibrary } from './utils';

initFontAwesomeLibrary();

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);

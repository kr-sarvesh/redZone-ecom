import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routers from './Routes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

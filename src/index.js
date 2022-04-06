import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

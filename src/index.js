import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Route>
    <App />
    </Route> 
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import {ProductProvider} from './context'
import App from './App';

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  
  document.getElementById('root')
);
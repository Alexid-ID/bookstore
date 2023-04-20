import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
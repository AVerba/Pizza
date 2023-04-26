import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContainer } from 'modules/app';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="PizzaStyle">
      <AppContainer />
    </BrowserRouter>
  </React.StrictMode>
);

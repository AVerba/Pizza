import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContainer } from 'modules/app';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './modules/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='Pizza'>
          <AppContainer />
        </BrowserRouter>
      </PersistGate>
    </Provider>

);

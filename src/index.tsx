import React from 'react';
import ReactDOM from 'react-dom';
import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import './assets/css/resets.css';
import './assets/css/fonts.css';
import './assets/css/custom.css';

import Root from './common/routes';
import rootReducer, { RootState } from './common/reducers';
import * as serviceWorker from './serviceWorkerRegistration';
import initiateServices from './common/services/initiate';

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
}

const store: Store<RootState> = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production'
});

const services = initiateServices(store);

ReactDOM.render(
  <Root store={store} services={services} />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './utils/GlobalStyle.jsx';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

let persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

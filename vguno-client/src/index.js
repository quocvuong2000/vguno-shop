import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './components/Layout';

import {Provider} from 'react-redux';
import store from './redux/store';

import "../src/assets/boxicons-2.1.1/css/boxicons.min.css";
import "../src/sass/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Layout />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

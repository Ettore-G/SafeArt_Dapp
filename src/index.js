import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Router} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./redux/store";
import MyRoutes from './routers/routes';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { createStore, applyMiddleware} from 'redux';
import auth from './store/reducers/auth';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import expireIn from "redux-persist-transform-expire-in";

const persistConfig = {
  key: "root",
  storage,
  transforms: [expireIn(3600 * 1000, 'expirationKey', [])]
};
const persistedReducer = persistReducer(persistConfig, auth);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
ReactDOM.render(

    <React.StrictMode>
      <App store ={store}/>
    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

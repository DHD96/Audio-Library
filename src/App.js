import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';
import instance from './instance/axios';
import { Provider } from 'react-redux';
import Router from './Route/Router';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore} from "redux-persist";
import * as actions from './store/actions/auth';
const App = (props) => {
  const [albums, setAlbums] = useState([]);
  const { store } = props;

  useEffect(() => {
    instance.get('/albums.json').then((response) => {
      setAlbums(response.data);
    }).catch((error) => {
      console.log(error);
    });
    const currentTime = new Date().getTime();
    if( currentTime > store.expiresAt){
      store.dispatch(actions.auth_logout())
    }
  }, []);

  return (
    <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navigation />

            {albums ? <Router cards={albums} /> : <h1 className="Loading"> Loading ...</h1>}
          </div>
        </BrowserRouter>
    </Provider>
  );
};


export default (App);

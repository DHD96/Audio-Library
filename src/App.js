import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Redirect, BrowserRouter } from 'react-router-dom';
import instance from './instance/axios';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import Router from './hoc/Router.js';


const App = (props) => {
  const [albums, setAlbums] = useState([]);
  const { store } = props;
  useEffect(() => {
    instance.get('/albums.json').then((response) => {
      setAlbums(response.data);
    }).catch((error) => {
      console.log(error);
    });
    props.autoSignIn();
  }, [])
 
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Redirect to='/audioLibrary'></Redirect>
        <div className="App">
          <Navigation></Navigation>

          {albums?<Router cards={albums}></Router>: null}
        </div>
      </BrowserRouter>
    </Provider>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    autoSignIn: () => dispatch(actions.auth_check())
  }
}
export default connect(null, mapDispatchToProps)(App);

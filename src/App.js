import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Redirect, BrowserRouter } from 'react-router-dom';
import instance from './instance/axios';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import Router from './hoc/Router.js';


class App extends Component {

  state = {
    cards: []
  }

  componentDidMount() {
    instance.get('/albums.json').then((response) => {
      this.setState({ cards: response.data });
    }).catch((error) => {
      console.log(error);
    });
    this.props.autoSignIn();

  }

  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Redirect to='/audioLibrary'></Redirect>
          <div className="App">
            <Navigation></Navigation>

            <Router cards = {this.state.cards}></Router>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    autoSignIn: () => dispatch(actions.auth_check())
  }
}
export default connect(null, mapDispatchToProps)(App);

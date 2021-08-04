import React, { Component } from 'react';
import Cards from './containers/Cards/cards';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import instance from './instance/axios';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import FocusCard from './components/FocusCard/FocusCard';
import * as actions from './store/actions/index';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    cards: []
  }

  componentDidMount(){
    instance.get('/albums.json').then((response)=>{
      this.setState({cards: response.data});
    }).catch((error)=>{
      console.log(error);
    });
    this.props.autoSignIn();

  }

  render() {

    return (
      
        <BrowserRouter>
          <div className="App">
            <Navigation></Navigation>
      
            <Route exact path='/Audio-Library' render={() => <Cards props={this.state.cards}></Cards>} ></Route>
            <Route path='/signIn' render={() => <SignIn></SignIn>}></Route>
            <Route path='/focusCard' render={(props)=> <FocusCard {...props}></FocusCard>}></Route>
          </div>
        </BrowserRouter>
    );
  }

}

const mapDispatchToProps = (dispatch) =>{
  return {
    autoSignIn: ()=> dispatch(actions.auth_check())
  }
}
export default connect(null, mapDispatchToProps)(App);

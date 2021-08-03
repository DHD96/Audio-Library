import React, { Component } from 'react';
import Cards from './containers/Cards/cards';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import instance from './instance/axios';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import FocusCard from './components/FocusCard/FocusCard';

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

export default App;

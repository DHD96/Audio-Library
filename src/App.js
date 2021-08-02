import React, { Component } from 'react';
import Cards from './containers/Cards/cards';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import instance from './instance/axios';
import { BrowserRouter, Route} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';

class App extends Component {

  state = {
    cards: [ { name: 'Album1', description: 'Description 1', nbOfTracks: 5, createdDate: '02/07/21', updatedDate: '07/07/21', _id: 1 },
      { name: 'Album2', description: 'Description 2', nbOfTracks: 4, createdDate: '02/07/21', updatedDate: '07/07/21', _id: 2 }
    ]
  }
  
  /*
  componentDidMount(){
    instance.get("/api/albums/getAlbums").then((response) =>{
      console.log(response);
      this.setState({cards: response.data.albums});
    }).catch((error)=>{
      console.log(error);
    });
  }
  */
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navigation></Navigation>
          
            <Route exact path='/Audio-Library' render={()=> <Cards cards={this.state.cards}></Cards>} ></Route>
            <Route path='/signIn' render={()=> <SignIn></SignIn>}></Route>
          
        </div>
      </BrowserRouter>
    );
  }

}

export default App;

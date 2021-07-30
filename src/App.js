import React, { Component } from 'react';
import Cards from './containers/Cards/cards';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Button from 'react-bootstrap/Button';
import instance from './instance/axios';

class App extends Component {

  state = {
    cards: [ { name: 'Album1', description: 'Description 1', nbOfTracks: 5, createdDate: '02/07/21', updatedDate: '07/07/21', _id: 1 },
      { name: 'Album2', description: 'Description 2', nbOfTracks: 4, createdDate: '02/07/21', updatedDate: '07/07/21', _id: 2 }
    ],
    showTracks: true

  }
  toggleNumberOfTracks = () => {
    const doesShow = this.state.showTracks;
    this.setState({ showTracks: !doesShow });

  };
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
      <div className="App">
        <Button variant="flat" onClick={this.toggleNumberOfTracks}>Toggle Number Of Tracks</Button>
        <Cards cards={this.state.cards} click={this.state.showTracks} />
      </div>
    );
  }

}

export default App;

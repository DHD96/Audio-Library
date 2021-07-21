import React, { Component } from 'react';
import Cards from '../components/Cards/cards';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import image1 from '../assets/images/img1.jpg';
import image2 from '../assets/images/img2.jpg';
import image3 from '../assets/images/img3.jpg';
import image4 from '../assets/images/img4.jpg';
import image9 from '../assets/images/img9.jpg';
import image10 from '../assets/images/img10.jpg';
import image11 from '../assets/images/img11.jpg';
import image13 from '../assets/images/img13.jpg';
import Button from 'react-bootstrap/Button';

class App extends Component {
  
  state = {cards : [
            {img: image1, id: 'asdad', title: 'Title 1', band:'Band 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: 'Date 1', numberOfTracks: 3},
            {img: image2, id: '32edd', title: 'Title 2', band:'Band 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: 'Date 2', numberOfTracks: 2},
            {img: image3, id: 'htsd6', title: 'Title 3', band:'Band 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: 'Date 3', numberOfTracks: 1},
            {img: image4, id: 'htsasd6', title: 'Title 4', band:'Band 4', description: 'Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: 'Date 4', numberOfTracks: 0},
            {img: image9, id: 'ht6f', title: 'Title 5', band:'Band 5', description: 'Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: 'Date 5', numberOfTracks: 6},
            {img: image10, id: '442sd6', title: 'Title 6', band:'Band 6', description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: 'Date 6', numberOfTracks: 9},
            {img: image11, id: '2sdfd6', title: 'Title 7', band:'Band 7', description: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.', date: 'Date 7', numberOfTracks: 0},
            {img: image13, id: '426sd4', title: 'Title 8', band:'Band 8', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: 'Date 8', numberOfTracks: 28}

          ],
           showTracks: true

  }
  toggleNumberOfTracks= ()=>{
    const doesShow = this.state.showTracks;
    this.setState({showTracks : !doesShow});
    
  };

  render(){

    return (
      <div className="App"> 
        <Button variant="flat" onClick={this.toggleNumberOfTracks}>Toggle Number Of Tracks</Button>  
        <Cards props= {this.state.cards} click={this.state.showTracks}/>    
      </div>
    );
  }
  
}

export default App;

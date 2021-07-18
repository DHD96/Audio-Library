import React, { Component } from 'react';
import CardView from './Card-View/card-view';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './App.css'
class App extends Component {
  state = {
    cards: [{title: 'Title 1', band:'Band 1', description: 'Description 1', date: 'Date 1', numberOfTracks: 3},
            {title: 'Title 2', band:'Band 2', description: 'Description 2', date: 'Date 2', numberOfTracks: 2},
            {title: 'Title 3', band:'Band 3', description: 'Description 3', date: 'Date 3', numberOfTracks: 1}
           ]

  };
  render(){

    return (
      <div className="App">     
        <Carousel >
          <Carousel.Item >
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt=""></img>
            <Carousel.Caption>
              <CardView title= {this.state.cards[0].title} 
                description= {this.state.cards[0].description}
                numberOfTracks= {this.state.cards[0].numberOfTracks}>

              </CardView>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png" alt=""></img>
            <Carousel.Caption>
              <CardView title= {this.state.cards[1].title} 
                description= {this.state.cards[1].description}
                numberOfTracks= {this.state.cards[1].numberOfTracks}>

              </CardView>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt=""></img>
            <Carousel.Caption  >
              <CardView title= {this.state.cards[2].title} 
                description= {this.state.cards[2].description}
                numberOfTracks= {this.state.cards[2].numberOfTracks}>

              </CardView>
            </Carousel.Caption> 
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  
}

export default App;

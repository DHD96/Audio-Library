
import React from 'react';
import CardView from './Card-View/card-view';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
 const Cards= (props) => { console.log(props);return <Carousel interval= {null} prevLabel= {null} nextLabel= {null}> {props.props.map((cards)=>{
    return (   
    <Carousel.Item  key={cards.id}> 
        <img className = "image d-flex align-items-center justify-content-center min-vh-100" src={cards.img} alt=""></img>
        <Carousel.Caption className="carousel-caption">
            <CardView  title= {cards.title} 
                description= {cards.description}
                numberOfTracks= {cards.numberOfTracks}
                click={props.click}
                date={cards.date}>
                
            </CardView>
        </Carousel.Caption>
    </Carousel.Item>
    )})}
    </Carousel>};


export default Cards;
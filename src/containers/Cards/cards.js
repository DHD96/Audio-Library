import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './cards.css';
import Image1 from '../../assets/images/img1.jpg';
import CardView from '../../components/CardView/CardView';
import Button from 'react-bootstrap/Button';



class Cards extends Component {

    state = {

        showTracks: true
    };

    toggleNumberOfTracks = () => {
        this.setState(prev =>({ showTracks: !prev.showTracks }));

    };

    render() {

        const { cardData } = this.props;
        
        return (
            <div>
                <Button variant="flat" onClick={this.toggleNumberOfTracks}>Toggle Number Of Tracks</Button>
                <Carousel variant="dark" prevLabel={null} nextLabel={null}> {cardData.map(({ name, description, nbOfTracks, createdDate, updatedDate, _id }) => {
                    return (
                        <Carousel.Item key={_id} >
                            <img className="image align-items-center justify-content-center min-vh-100" src={Image1} alt='slide1'></img>
                            
                            <Carousel.Caption className="carousel-caption" >
                                <CardView
                                    name={name}
                                    description={description}
                                    nbOfTracks={nbOfTracks}
                                    click={this.state.showTracks}
                                    createdDate={createdDate}
                                    _id = {_id}/>
                            </Carousel.Caption>
                        </Carousel.Item>)

                })}
                </Carousel></div>)

    }
}

export default Cards;
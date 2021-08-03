import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './cards.css';
import Image1 from '../../assets/images/img1.jpg';
import CardView from '../../components/CardView/CardView';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


class Cards extends Component {

    state = {

        showTracks: true
    };

    toggleNumberOfTracks = () => {
        const doesShow = this.state.showTracks;
        this.setState({ showTracks: !doesShow });

    };

    render() {

        const { props } = this.props;
        
        return (
            <div>
                <Button variant="flat" onClick={this.toggleNumberOfTracks}>Toggle Number Of Tracks</Button>
                <Carousel variant="dark" prevLabel={null} nextLabel={null}> {props.map(({ name, description, nbOfTracks, createdDate, updatedDate, _id }) => {
                    return (
                        <Carousel.Item key={_id} >
                            <Link to={{pathname:'/focusCard', state: {id: _id}}} >
                                <img className="image align-items-center justify-content-center min-vh-100" src={Image1} alt='slide1'></img>

                            </Link>
                            <Carousel.Caption className="carousel-caption" >
                                <CardView
                                    name={name}
                                    description={description}
                                    nbOfTracks={nbOfTracks}
                                    click={this.state.showTracks}
                                    createdDate={createdDate}>

                                </CardView>
                            </Carousel.Caption>
                        </Carousel.Item>)

                })}
                </Carousel></div>)

    }
}



export default Cards;
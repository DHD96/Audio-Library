import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './cards.css';
import Image1 from '../../assets/images/img1.jpg';
import CardView from '../../components/CardView/CardView';

const Cards = ({cards,click}) => { console.log(click);
    return (<Carousel  prevLabel={null} nextLabel={null}> {cards.map(({name,description,nbOfTracks,createdDate,updatedDate,_id}) => {
        return (
            <Carousel.Item key={_id}>
                <img className="image d-flex align-items-center justify-content-center min-vh-100" src={Image1} alt='slide1'></img>
                <Carousel.Caption className="carousel-caption" >
                    <CardView
                        name={name}
                        description={description}
                        nbOfTracks={nbOfTracks}
                        click={click}
                        createdDate={createdDate}>

                    </CardView>
                </Carousel.Caption>
            </Carousel.Item>)

    })}
    </Carousel>)

}



export default Cards;
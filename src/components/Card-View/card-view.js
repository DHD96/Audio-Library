import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const CardView = (props,click)=> {
        return  <div className="CardView">
                    <h2 className= "Title"> {props.title}</h2>
                    <p className="Description">Description: {props.description}</p>
                    {props.click===true ?
                                    <span>Number of tracks: {props.numberOfTracks}</span>
                                    :
                                    <span></span>
                    }
                </div>
        ;
    

}

export default CardView;
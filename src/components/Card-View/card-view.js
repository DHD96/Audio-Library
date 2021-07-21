import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './card-view.css';
const CardView = (props,click)=> {
        return  <div className="CardView">
                    <h2 className= "Title"> {props.title}</h2>
                    <p className="Description">Description: {props.description}</p>
                    <div className="Date">{props.date}</div>
                    {props.click===true ?
                                    <span className="NumberOfTracks">Number of tracks: {props.numberOfTracks}</span>
                                    :
                                    <span></span>
                    }
                    
                </div>
        ;
    

}

export default CardView;
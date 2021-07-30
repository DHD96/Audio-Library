import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './card-view.css';
const CardView = ({title,description, date, numberOfTracks, click})=> {
        return  <div className="cardView">
                    <h2 className= "title"> {title}</h2>
                    <p className="description">Description: {description}</p>
                    <div className="date">{date}</div>
                    {props.click===true ?
                                    <span className="numberOfTracks">Number of tracks: {numberOfTracks}</span>
                                    :
                                    <span></span>
                    }
                    
                </div>
        ;
    

}

export default CardView;
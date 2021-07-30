import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cardView.css';
const CardView = ({ name, description, createdDate, updatedDate, nbOfTracks, click }) => {
        return (<div className="CardView">
                <h2 className="Title"> {name}</h2>
                <p className="Description">Description: {description}</p>
                <div className="Date">{createdDate}</div>
                {click === true ?
                        <span className="NumberOfTracks">Number of tracks: {nbOfTracks}</span>
                        :
                        <span></span>
                }

                </div>)
                ;


}

export default CardView;
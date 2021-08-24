import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cardView.css';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CardView = (cards) => {
        const { name, description, createdDate, updatedDate, nbOfTracks, click, _id } = cards;
        const token = useSelector(state => state.token);
        let isAuthenticated = token !== null && token.length> 0;
        return (<div className="CardView" >
                <h2 className="Title"> {name}</h2>
                <p className="Description">Description: {description}</p>
                <div className="Date">Date of creation: {createdDate}</div>
                {click === true ?
                        <span className="NumberOfTracks">Number of tracks: {nbOfTracks}</span>
                        :
                        null
                }
                {isAuthenticated ? <div><Link to={{ pathname: `/focusCard/${_id}`}} >
                        <Button className="details">View details</Button>
                        </Link>
                        </div>
                         : null}
        </div>
        );


};

export default CardView;
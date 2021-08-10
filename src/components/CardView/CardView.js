import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cardView.css';
import Button from 'react-bootstrap/Button';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

const CardView = (cards) => {
        const { name, description, createdDate, updatedDate, nbOfTracks, click, _id } = cards;
        return (<div className="CardView" >
                <h2 className="Title"> {name}</h2>
                <p className="Description">Description: {description}</p>
                <div className="Date">Date of creation: {createdDate}</div>
                {click === true ?
                        <span className="NumberOfTracks">Number of tracks: {nbOfTracks}</span>
                        :
                        null
                }
                {cards.isAuthenticated ? <div><Link to={{ pathname: "/focusCard", state: { id: _id } }}><Button className="details">View details</Button></Link></div> : null}
        </div>
        );


};
const mapStateToProps = state => {
        return {
                isAuthenticated: state.token !== null
        }
}

export default connect(mapStateToProps, null)(CardView);
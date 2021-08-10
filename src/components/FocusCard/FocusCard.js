import React, { useState, useEffect } from 'react';
import instance from '../../instance/axios';
import './focusCard.css';

import Image1 from '../../assets/images/img1.jpg';

const FocusCard = (cardProps) => {
    const [album, setAlbum] = useState([]);
    useEffect(() => {
        instance.get('/albums.json').then((response) => {
            const { id } = cardProps.location.state;
            const index = response.data.findIndex(element => element._id === id);
            setAlbum(response.data[index]);
        })
    },[]);
    return (
        <div className="focusPage">
            <img className="imageFocus" src={Image1} alt='slide1'></img>
            {album?
            <div >
                <h1 className="title">{album.name}</h1>
                <p className="description">Description: {album.description}</p>
                <div className="dateCreation">Date of creation: {album.createdDate}</div>
                <div className="dateModified">Last modified: {album.updatedDate}</div>
                <div className="NumberTracks">Number of Tracks: {album.nbOfTracks}</div>
            </div>: null
            }
        </div>
    )
}


export default FocusCard;
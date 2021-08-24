import React, { useState, useEffect } from 'react';
import instance from '../../instance/axios';
import './focusCard.css';
import Pagination from 'react-bootstrap/Pagination';
import Image1 from '../../assets/images/img1.jpg';
import { useParams } from "react-router-dom"
const FocusCard = (cardProps) => {
    const [album, setAlbum] = useState([]);
    const [songs, setSongs] = useState([]);
    const [active, setActive] = useState(0);
    const { id } = useParams();
    const songSelectHandler = (index)=>{
        setActive(index);
    }
    const prevHandler = ()=>{
        if(active>0){
            setActive(active - 1);
        }
    }
    const nextHandler = ()=>{
        if(active<songs.length - 1){
            setActive(active + 1);
        }
    }
    useEffect(() => {
        instance.get('/albums.json').then((response) => {
            
            const index = response.data.findIndex(element => element._id == id);
            setAlbum(response.data[index]);
            setSongs(response.data[index].Songs);
        })

    }, [id]);
    return (
        <div className="focusPage">
            <div className="column">
                <img className="imageFocus" src={Image1} alt='slide1'></img>
                <Pagination  size={'sm'}>
                    <Pagination.Prev disabled={active === 0}onClick={prevHandler} /> 
                        {songs ? songs.map((song, index) => {
                            return (
                                <Pagination.Item activeLabel={""} key={index} active={index===active} onClick={()=> songSelectHandler(index)} >{(index+1)}</Pagination.Item>)
                        }) : null}
                    <Pagination.Next disabled={active === songs.length-1} onClick={nextHandler}></Pagination.Next>
                </Pagination>

            </div>
            {album && songs?
                <div >
                    <h1 className="title">{album.name}</h1>
                    <p className="description">Description: {album.description}</p>
                    <div className="dateCreation">Date of creation: {album.createdDate}</div>
                    <div className="dateModified">Last modified: {album.updatedDate}</div>
                    <div className="NumberTracks">Number of Tracks: {album.nbOfTracks}</div>
                    <h3 className="currentSong">Now playing: {songs[active]}</h3>
                
                </div>

                : <h1>Loading...</h1>
            }


        </div>
    )
}


export default FocusCard;
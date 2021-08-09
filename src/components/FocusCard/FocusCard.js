import React, {Component } from 'react';
import instance from '../../instance/axios';
import './focusCard.css';

import Image1 from '../../assets/images/img1.jpg';

class FocusCard extends Component{

    state = {
        album: []
    }

    fetchData(){
        instance.get('/albums.json').then((response)=>{
            const  { id }= this.props.location.state;     
            const index = response.data.findIndex(element => element._id === id);
            this.setState({album: response.data[index]});
        })
    }
    componentDidMount(){
        this.fetchData();
    }
    render(){
        return (
        <div className="focusPage">
            <img className="imageFocus" src={Image1} alt='slide1'></img>
            <div >
                <h1 className = "title">{this.state.album.name}</h1>
                <p className= "description">Description: {this.state.album.description}</p>
                <div className="dateCreation">Date of creation: {this.state.album.createdDate}</div>
                <div className="dateModified">Last modified: {this.state.album.updatedDate}</div>
                <div className="NumberTracks">Number of Tracks: {this.state.album.nbOfTracks}</div>
            </div>
        </div>
        )
    }
}

export default FocusCard;
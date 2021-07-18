import React from 'react';

const CardView = (props)=> {
        return  <div className="CardView">
                    <h2 className= "Title">{props.title}</h2>
                    <p className="Description">{props.description}</p>
                    <h4 className= "NumberOfTracks">{props.numberOfTracks} Tracks</h4>
                </div>
        ;
    

}

export default CardView;
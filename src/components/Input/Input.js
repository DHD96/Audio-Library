import './input.css';
import React from 'react';

const Input = (props,changed)=>{
    let inputElement=  <input className="InputElement" {...props} ></input>
    return (
    <div className="Input">
        <label className="Label">{props.label}: </label>
        {inputElement}
    </div>)
}

export default Input;
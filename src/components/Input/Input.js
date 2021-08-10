import classes from './input.css';
import React from 'react';

const Input = (inputProps)=>{
    let classNames = ['InputElement'];
    if( inputProps.invalid){
        classNames.push('Invalid');
    }
    else{
        if(classNames.length >= 2){
            classNames.pop();
        }
    }
    
    let inputElement=  <input className={classNames.join(' ')} {...inputProps} ></input>
    return (
    <div className="Input">
        <label className="Label">{inputProps.label}: </label>
        {inputElement}
    </div>)
}

export default Input;
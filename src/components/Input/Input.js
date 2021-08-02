import classes from './input.css';
import React from 'react';

const Input = (props)=>{
    let classNames = ['InputElement'];
    if( props.invalid){
        classNames.push('Invalid');
    }
    else{
        if(classNames.length >= 2){
            classNames.pop();
        }
    }
    
    let inputElement=  <input className={classNames.join(' ')} {...props} ></input>
    return (
    <div className="Input">
        <label className="Label">{props.label}: </label>
        {inputElement}
    </div>)
}

export default Input;
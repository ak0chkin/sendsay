import React from 'react';
import './index.css';

const Input = (props) => {
    return (
        <>
            {props.type === 'input' ?
                <input type="text" name={props.name} placeholder={props.placeholder} value={props.value}
                       className={`field ${props.position ? props.position : ''}`}
                       onChange={props.onChange}/> :
                <textarea name={props.name} placeholder={props.placeholder} value={props.value} className={`field`}
                          onChange={props.onChange}/>}
        </>
    );
}

export default Input;
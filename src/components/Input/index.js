import React from 'react';
import './index.css';

const Input = (props) => {
    return (
        <>
            {props.type === 'input' ? <input type="text" className={`field ${props.position}`}/> : <textarea className={`field`}/>}
        </>
    );
}

export default Input;
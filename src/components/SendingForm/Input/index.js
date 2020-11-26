import React from 'react';
import './index.css';

function Input(props) {
    return (
        <div className="input-group">
            <label htmlFor={props.id} className="input-group__label">{props.label}</label>
            {props.type === 'input' ?
                <input type="text" id={props.id} placeholder={props.placeholder}
                       value={props.value}
                       className={`input-group__field input-group__field_input ${props.position ? props.position : ''}`}
                       onChange={props.onChange}/> :
                <textarea rows="3" id={props.id} placeholder={props.placeholder} value={props.value}
                          className={`input-group__field input-group__field_textarea`}
                          onChange={props.onChange}/>}
        </div>
    );
}

export default Input;
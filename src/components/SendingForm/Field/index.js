import React from 'react';
import './index.css';

export const renderField = (
    {input, tag, label, placeholder, position, meta: {asyncValidating, touched, error}}
) => (
    <div className="input-group">
        <label className="input-group__label">{label}</label>
        <div className={asyncValidating ? 'async-validating' : ''}>
            {tag === 'input'
                ? <input {...input} placeholder={placeholder}
                         className={`input-group__field input-group__field_input ${position ? position : ''}`}/>
                : <textarea {...input} placeholder={placeholder}
                            className={`input-group__field input-group__field_textarea ${position ? position : ''}`}
                            rows="3"/>
            }
            {touched && error && <span className="input-group__error">{error}</span>}
        </div>
    </div>
)
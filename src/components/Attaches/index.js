import React from 'react';
import './index.css';

const Attaches = (props) => {
    const attaches = props.attaches.map(item => (<li key={item.name} className="attach">{item.name}</li>))
    console.log(props.attaches);
    return (
        <>
            {attaches.length !== 0 && <ul className="attaches">{attaches}</ul>}
            <label htmlFor="file-input" className="file-label">Прикрепить файл
                <input id="file-input" type="file" onChange={props.onChange}/>
            </label>
        </>
    );
}

export default Attaches;
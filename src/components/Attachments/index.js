import React from 'react';
import './index.css';

const Attachments = (props) => {
    const attachments = props.attachments.map(item => (<li key={item.name} className="attachment">{item.name}</li>))
    console.log(props.attachments);
    return (
        <>
            {attachments.length !== 0 && <ul className="attachments">{attachments}</ul>}
            <label htmlFor="file-input" className="file-label">Прикрепить файл
                <input id="file-input" type="file" onChange={props.onChange} />
            </label>
        </>
    );
}

export default Attachments;
import React from 'react';
import './index.css';
import {connect} from "react-redux";
import {addAttachment, deleteAttachment, updateAttachmentError} from "../../../action_creators/attachment";
import validateFile from "../../../utils/validateFile";


function Attachments(props) {
    const handleAttach = (e) => {
        const attachment = e.target.files[0];
        const validate = validateFile(attachment);
        if (validate.value) {
            const reader = new FileReader();
            reader.readAsDataURL(attachment);
            reader.onload = () => {
                props.addAttachmentAction({
                    'name': attachment.name,
                    'content': reader.result,
                    'encoding': 'base64'
                });
            }
        }
        props.attachmentErrorAction(validate.error);
    }

    const handleDelete = (attachment) => {
        props.deleteAttachmentAction(attachment);
    }

    const attachments = props.attaches.map(item => (
        <li key={item.name} className="attachment">
            <div className="attachment__name">
                {item.name}
            </div>
            <button type="button" className="btn-delete" onClick={() => handleDelete(item)}>Удалить</button>
        </li>));
    return (
        <>
            {attachments.length !== 0 && <ul className="attachments">{attachments}</ul>}
            <div className="file">
                <label htmlFor="file__input" className="file__label">Прикрепить файл
                    <input id="file__input" type="file" onChange={handleAttach}/>
                </label>
                {props.error && <span className="file__error">{props.error}</span>}
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {...state.attachment}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAttachmentAction: attachment => dispatch(addAttachment(attachment)),
        deleteAttachmentAction: attachment => dispatch(deleteAttachment(attachment)),
        attachmentErrorAction: error => dispatch(updateAttachmentError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Attachments);
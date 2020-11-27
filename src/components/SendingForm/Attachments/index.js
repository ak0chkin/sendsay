import React from 'react';
import './index.css';
import {ADD_ATTACHMENT} from "../../../constants/actionTypes";
import {connect} from "react-redux";
import validateFile from "../../../utils/validateFile";

const addAttachment = (attachment) => ({type: ADD_ATTACHMENT, payload: attachment});

class Attachments extends React.Component {
    constructor(props) {
        super(props);
        this.handleAttach = this.handleAttach.bind(this);
    }

    handleAttach(e) {
        const attachment = e.target.files[0];
        if (validateFile(attachment)) {
            const reader = new FileReader();
            reader.readAsDataURL(attachment);
            reader.onload = () => {
                this.props.addAttachmentAction({
                    'name': attachment.name,
                    'content': reader.result,
                    'encoding': 'base64'
                });
            }
        }
    }

    render() {
        const attachments = this.props.attachments.map(item => (
            <li key={item.name} className="attachment">
                <div className="attachment__name">
                    {item.name}
                </div>
                <button type="button" className="btn-delete">Удалить</button>
            </li>));
        return (
            <>
                {attachments.length !== 0 && <ul className="attachments">{attachments}</ul>}
                <label htmlFor="file-input" className="file-label">Прикрепить файл
                    <input id="file-input" type="file" onChange={this.handleAttach}/>
                </label>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {attachments: [...state.form.attaches]}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAttachmentAction: attachment => dispatch(addAttachment(attachment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Attachments);
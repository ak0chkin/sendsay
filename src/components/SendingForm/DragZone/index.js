import React from 'react';
import './index.css';
import {ADD_ATTACHMENT} from "../../../constants/actionTypes";
import {connect} from "react-redux";
import validateFile from "../../../utils/validateFile";

const addAttachment = (attachment) => ({type: ADD_ATTACHMENT, payload: attachment});

class DragZone extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    render() {
        const dragOver = (e) => {
            e.preventDefault();
        }

        const dragEnter = (e) => {
            e.preventDefault();
        }

        const dragLeave = (e) => {
            e.preventDefault();
        }

        const fileDrop = (e) => {
            e.preventDefault();
            const attachment = e.dataTransfer.files[0];
            if (attachment && validateFile(attachment)) {
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

        return (
            <>
                <div className="drop-container" onDragOver={dragOver} onDragEnter={dragEnter}
                     onDragLeave={dragLeave} onDrop={fileDrop}>
                    <div className="drop-message">
                        Бросайте файлы сюда
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DragZone);
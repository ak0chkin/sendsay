import React from 'react';
import './index.css';
import {connect} from "react-redux";
import validateFile from "../../../utils/validateFile";
import {addAttachment, updateAttachmentError} from "../../../action_creators/attachment";

class DragZone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
        this.dragEnter = this.dragEnter.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragLeave = this.dragLeave.bind(this);
        this.fileDrop = this.fileDrop.bind(this);
    }

    componentDidMount() {
        const parent = document.getElementById('drop-container').parentElement;
        parent.addEventListener('dragenter', this.dragEnter);
    }

    componentWillUnmount() {
        const parent = document.getElementById('drop-container').parentElement;
        parent.removeEventListener('dragenter', this.dragEnter);
    }

    dragEnter(e) {
        e.preventDefault();
        this.setState({
            hidden: false
        });
    }

    dragOver(e) {
        e.preventDefault();
    }

    dragLeave(e) {
        e.preventDefault();
        this.setState({
            hidden: true
        });
    }

    fileDrop(e) {
        e.preventDefault();
        const attachment = e.dataTransfer.files[0];
        const validate = validateFile(attachment);
        if (attachment && validate.value) {
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
        this.props.updateAttachmentErrorAction(validate.error);
        this.setState({
            hidden: true
        });
    }

    render() {
        return (
            <>
                <div id="drop-container" className={`drop-container ${this.state.hidden ? 'hidden' : ''}`}
                     onDragOver={this.dragOver} onDragLeave={this.dragLeave} onDrop={this.fileDrop}>
                    <div className="drop-message">
                        <p>Бросайте файлы сюда, я ловлю</p>
                        <p>Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры
                            файла до 5 МБ</p>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state.attachment}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAttachmentAction: attachment => dispatch(addAttachment(attachment)),
        updateAttachmentErrorAction: error => dispatch(updateAttachmentError(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragZone);
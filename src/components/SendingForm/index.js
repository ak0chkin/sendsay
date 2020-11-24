import React from 'react';
import './index.css';
import Input from "../Input";
import Attachments from "../Attachments";

class SendingForm extends React.PureComponent{
    constructor(props) {
        super(props);
        this.handleUpload = this.handleUpload.bind(this);
        this.state = {
            attachments: []
        }
    }

    handleUpload(e) {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            this.setState(state => ({
                attachments: [...state.attachments, file]
            }));
        }
        reader.readAsDataURL(file);
    }

    handleInput(e) {

    }

    render() {
        return (
            <div className="sending-form">
                <div className="input-field">
                    <label className="label">От кого</label>
                    <Input type="input" position="left" onChange={this.handleInput} />
                    <Input type="input" position="right" onChange={this.handleInput} />
                </div>
                <div className="input-field">
                    <label className="label">Кому</label>
                    <Input type="input" position="left" />
                    <Input type="input" position="right" onChange={this.handleInput} />
                </div>
                <div className="input-field">
                    <label className="label">Тема письма</label>
                    <Input type="input" onChange={this.handleInput} />
                </div>
                <div className="input-field">
                    <label className="label">Сообщение</label>
                    <Input type="textarea" onChange={this.handleInput} />
                </div>
                <div className="input-field">
                    <Attachments label="Сообщение" onChange={this.handleUpload} attachments={this.state.attachments} />
                </div>
            </div>
        );
    }
}

export default SendingForm;
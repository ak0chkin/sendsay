import React from 'react';
import './index.css';
import Input from "../Input";
import Attaches from "../Attaches";
import DragZone from "../DragZone";

class SendingForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleInput = this.handleInput.bind(this);

        this.state = {
            'letter': {
                'subject': '',
                'from.name': '',
                'from.email': '',
                'message': {'text': ''},
                'attaches': []
            },
            'mca': ''
        }
    }

    handleUpload(e) {
        const file = e.target.files[0];
        this.handleFile(file);
    }
    handleFile(file) {
        if (this.validateFile(file)) {
            const reader = new FileReader();
            reader.onload = () => {
                this.setState(state => ({
                    'letter': {...state.letter, 'attaches': [...state.letter.attaches, {'name': file.name, 'content': reader.result, 'encoding': 'base64'}]}
                }));
            }
            reader.readAsDataURL(file);
        }
    }
    validateFile (file) {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        return validTypes.indexOf(file.type) !== -1;
    }

    handleInput(e) {
        switch (e.target.getAttribute('name')) {
            case 'mca':
                this.setState({
                    'mca': e.target.value
                });
                break;
            case 'message':
                this.setState(state => ({
                    'letter': {...state.letter, 'message': {'text': e.target.value}}
                }));
                break;
            default:
                this.setState(state => ({
                    'letter': {...state.letter, [e.target.getAttribute('name')]: e.target.value}
                }));
                break;
        }
    }

    render() {
        return (
            <div className="sending-form">
                <div className="input-field">
                    <label className="label">От кого</label>
                    <Input type="input" name="from.name" placeholder="Имя" value={this.state.letter['from.name']}
                           position="left" onChange={this.handleInput}/>
                    <Input type="input" name="from.email" placeholder="Email" value={this.state.letter['from.email']}
                           position="right" onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <label className="label">Кому</label>
                    <Input type="input" name="to.name" placeholder="Имя" value={this.state.letter['to.name']}
                           position="left"/>
                    <Input type="input" name="mca" placeholder="Email" value={this.state['mca']} position="right"
                           onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <label className="label">Тема письма</label>
                    <Input type="input" name="subject" placeholder="Тема" value={this.state.letter['subject']}
                           onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <label className="label">Сообщение</label>
                    <Input type="textarea" name="message" placeholder="Сообщение" value={this.state.letter['message']['text']}
                           onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <Attaches onChange={this.handleUpload} attaches={this.state.letter.attaches}/>
                </div>
                <DragZone handleFile={this.handleFile} />
            </div>
        );
    }
}

export default SendingForm;
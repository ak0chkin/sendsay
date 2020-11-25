import React from 'react';
import './index.css';
import Input from "../Input";
import Attaches from "../Attaches";

class SendingForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleUpload = this.handleUpload.bind(this);
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
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            this.setState(state => ({
                'letter': {...state.letter, 'attaches': [...state.letter.attaches, file]}
            }));
        }
        reader.readAsDataURL(file);
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
            </div>
        );
    }
}

export default SendingForm;
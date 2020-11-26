import React from 'react';
import './index.css';
import Input from "./Input";
import Attachments from "./Attachments";
import DragZone from "./DragZone";
import {ADD_MESSAGE, UPDATE_FIELD, UPDATE_STATUS} from "../../constants/actionTypes";
import {connect} from "react-redux";
import {issueSendTest, trackGet} from "../../services/sendsayAPI";

const updateField = (field) => ({type: UPDATE_FIELD, payload: field});
const addMessage = (message) => ({type: ADD_MESSAGE, payload: message});
const updateStatus = (status) => ({type: UPDATE_STATUS, payload: status});

class SendingForm extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        this.props.updateFieldAction({name: e.target.id, value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        issueSendTest(this.props).then(data => {
            const trackId =  data['track.id'];
            this.props.addMessageAction({'date': new Date(), 'subject': this.props['subject'], 'status': 'В очереди', 'trackId': trackId});
            trackGet(trackId).then(data => {
                console.log(data);
                this.props.updateStatusAction({'trackId': trackId, 'status': data.obj['status'] === '-1' ? 'Отправлено' : 'Ошибка'})
            });
        });
    }

    render() {
        return (
            <form className="sending-form" onSubmit={this.handleSubmit}>
                <DragZone/>
                <h1>Отправлялка сообщений</h1>
                <div className="input-field">
                    <Input type="input" id="from.name" value={this.props['from.name']} placeholder="Имя" label="От кого"
                           onChange={this.handleInput} position="input-group__field_left"/>
                    <Input type="input" id="from.email" value={this.props['from.email']} placeholder="Email"
                           onChange={this.handleInput} position="input-group__field_right"/>
                </div>
                <div className="input-field">
                    <Input type="input" id="to.name" value={this.props['to.name']} placeholder="Имя" label="Кому"
                           onChange={this.handleInput} position="input-group__field_left"/>
                    <Input type="input" id="mca" value={this.props['mca']} placeholder="Email"
                           onChange={this.handleInput} position="input-group__field_right"/>
                </div>
                <div className="input-field">
                    <Input type="input" id="subject" value={this.props['subject']}
                           label="Тема письма" onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <Input type="textarea" id="message" value={this.props['message']}
                           label="Сообщение" onChange={this.handleInput}/>
                </div>
                <div className="input-field input-field_column">
                    <Attachments/>
                </div>
                <div className="input-field">
                    <button type="submit" className="btn-send">Отправить</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state.form}
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFieldAction: field => dispatch(updateField(field)),
        addMessageAction: message => dispatch(addMessage(message)),
        updateStatusAction: status => dispatch(updateStatus(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendingForm);
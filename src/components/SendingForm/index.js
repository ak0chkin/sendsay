import React from 'react';
import './index.css';
import Input from "./Input";
import Attachments from "./Attachments";
import DragZone from "./DragZone";
import {UPDATE_FIELD} from "../../constants/actionTypes";
import {connect} from "react-redux";

const updateField = (field) => ({type: UPDATE_FIELD, payload: field});
const updateDisplay = (hidden) => ({type: UPDATE_FIELD, payload: hidden});

class SendingForm extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.props.updateFieldAction({name: e.target.id, value: e.target.value});
    }

    render() {
        return (
            <form className="sending-form">
                <DragZone/>
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
                    <Input type="input" is="subject" value={this.props['subject']} placeholder="Тема"
                           label="Тема письма" onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <Input type="textarea" id="message" value={this.props['message']} placeholder="Сообщение"
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
        updateDisplay: hidden => dispatch(updateDisplay(hidden))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SendingForm);
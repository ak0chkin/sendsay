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
        this.props.updateFieldAction({name: e.target.getAttribute('name'), value: e.target.value});
    }

    render() {
        return (
            <div className="sending-form">
                <DragZone/>
                <div className="input-field">
                    <label className="label">От кого</label>
                    <Input type="input" name="from.name" value={this.props['from.name']} placeholder="Имя"
                           onChange={this.handleInput} position="left"/>
                    <Input type="input" name="from.email" value={this.props['from.email']} placeholder="Email"
                           position="right" onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <label className="label">Кому</label>
                    <Input type="input" name="to.name" value={this.props['to.name']} placeholder="Имя"
                           onChange={this.handleInput} position="left"/>
                    <Input type="input" name="mca" value={this.props['mca']} placeholder="Email"
                           onChange={this.handleInput} position="right"/>
                </div>
                <div className="input-field">
                    <label className="label">Тема письма</label>
                    <Input type="input" name="subject" value={this.props['subject']} onChange={this.handleInput}
                           placeholder="Тема"/>
                </div>
                <div className="input-field">
                    <label className="label">Сообщение</label>
                    <Input type="textarea" name="message" value={this.props['message']}
                           onChange={this.handleInput} placeholder="Сообщение"/>
                </div>
                <div className="input-field">
                    <Attachments/>
                </div>
            </div>
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
import React from 'react';
import './index.css';
import {renderField} from "./Field";
import Attachments from "./Attachments";
import DragZone from "./DragZone";
import {Field, reduxForm} from "redux-form";
import validate from "./validate";

function SendingForm(props) {
    const {handleSubmit, reset} = props;
    return (
        <form className="sending-form" onSubmit={handleSubmit}>
            <h1>Отправлялка сообщений</h1>
            <div className="input-field">
                <Field name="fromName" tag="input" component={renderField} label="От кого" placeholder="Имя"
                       position="input-group__field_left"/>
                <Field name="fromEmail" tag="input" component={renderField} placeholder="Email"
                       position="input-group__field_right"/>
            </div>
            <div className="input-field">
                <Field name="toName" tag="input" component={renderField} label="Кому" placeholder="Имя"
                       position="input-group__field_left"/>
                <Field name="mca" tag="input" component={renderField} placeholder="Email"
                       position="input-group__field_right"/>
            </div>
            <div className="input-field">
                <Field name="subject" tag="input" component={renderField} label="Тема письма"/>
            </div>
            <div className="input-field">
                <Field name="message" tag="textarea" component={renderField} label="Сообщение"/>
            </div>
            <div className="input-field input-field_column">
                <Attachments/>
            </div>
            <div className="input-field">
                <button type="submit" className="btn-send">Отправить</button>
            </div>
            <DragZone/>
        </form>
    );
}

export default reduxForm({
    form: 'send',
    validate
})(SendingForm);
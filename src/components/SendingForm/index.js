import React from 'react';
import './index.css';
import {renderField} from "./Field";
import Attachments from "./Attachments";
import DragZone from "./DragZone";
import {Field, reduxForm} from "redux-form";

function SendingForm(props) {
    const {handleSubmit, reset} = props;
    return (
        <form className="sending-form" onSubmit={handleSubmit}>
            <h1>Отправлялка сообщений</h1>
            <div className="input-field">
                <Field name="from.name" tag="input" component={renderField} label="От кого"
                       position="input-group__field_left"/>
                <Field name="from.email" tag="input" component={renderField} position="input-group__field_right"/>
            </div>
            <div className="input-field">
                <Field name="to.name" tag="input" component={renderField} label="Кому"
                       position="input-group__field_left"/>
                <Field name="mca" tag="input" component={renderField} position="input-group__field_right"/>
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
    form: 'send'
})(SendingForm);
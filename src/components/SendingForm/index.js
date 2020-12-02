import React from 'react';
import './index.css';
import {renderField} from "./Field";
import Attachments from "./Attachments";
import DragZone from "./DragZone";
import {Field, Form} from 'react-final-form'
import validate from "./validate";
import {WIPE_ATTACHMENTS} from "../../constants/actionTypes";
import {connect} from "react-redux";

const wipeAttachments = () => ({type: WIPE_ATTACHMENTS, payload: {}});

function SendingForm(props) {
    const {handleSubmit} = props;
    return (
        <Form onSubmit={handleSubmit} validate={validate}
              render={({handleSubmit, form, submitting, pristine, values}) => (
                  <form className="sending-form" onSubmit={event => {handleSubmit(event).then(() => {form.restart(); props.wipeAttachmentsAction();})}}>
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
              )}/>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        wipeAttachmentsAction: () => dispatch(wipeAttachments())
    }
}

export default connect(null, mapDispatchToProps)(SendingForm);
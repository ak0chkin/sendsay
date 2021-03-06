import React from 'react';
import './index.css';
import SendingForm from "../SendingForm";
import Messages from "../Messages";
import logo from "./logo.svg"
import {issueSendTest, trackGet} from "../../services/sendsayAPI";
import {connect} from "react-redux";
import {addMessage, updateStatus} from "../../action_creators/message";

class App extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async (fields) => {
        const {attaches} = this.props;
        issueSendTest(fields, attaches).then(data => {
            const trackId = data['track.id'];
            this.props.addMessageAction({
                'date': new Date(),
                'subject': fields['subject'],
                'status': 'В очереди',
                'trackId': trackId
            });
            trackGet(trackId).then(data => {
                this.props.updateStatusAction({
                    'trackId': trackId,
                    'status': data.obj['status'] === '-1' ? 'Отправлено' : 'Ошибка'
                })
            });
        });
    }

    render() {
        return (
            <div className="App">
                <img className="logo" src={logo} alt="logo"/>
                <SendingForm handleSubmit={this.handleSubmit}/>
                <Messages/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state.attachment}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessageAction: message => dispatch(addMessage(message)),
        updateStatusAction: status => dispatch(updateStatus(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

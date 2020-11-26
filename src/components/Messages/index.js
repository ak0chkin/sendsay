import React from 'react';
import './index.css';
import {connect} from "react-redux";
import {trackGet} from "../../services/sendsayAPI";

class Messages extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const messages = this.props.messages.map(item => (
            <tr className="messages-table__tr" key={item.trackId}>
                <td className="messages-table__td">{item.date.toDateString()}</td>
                <td className="messages-table__td">{item.subject}</td>
                <td className="messages-table__td">{item.trackId}</td>
            </tr>
        ));
        const table = (
            <table className="messages-table">
                <thead className="messages-table__head">
                <tr className="messages-table__tr">
                    <th className="messages-table__th">Дата</th>
                    <th className="messages-table__th">Тема</th>
                    <th className="messages-table__th">Статус</th>
                </tr>
                </thead>
                <tbody>
                {messages}
                </tbody>
            </table>
        );
        return (
            <div className="messages">
                <h2>Отправленные сообщения</h2>

                {messages.length === 0 ? <div>Сообщения ещё не отправлялись</div> : table}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {...state.message}
}

export default connect(mapStateToProps)(Messages);
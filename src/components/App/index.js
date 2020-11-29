import React from 'react';
import './index.css';
import SendingForm from "../SendingForm";
import Messages from "../Messages";
import logo from "./logo.svg"

function App() {
    return (
        <div className="App">
            <img className="logo" src={logo} alt="logo"/>
            <SendingForm/>
            <Messages/>
        </div>
    );
}

export default App;

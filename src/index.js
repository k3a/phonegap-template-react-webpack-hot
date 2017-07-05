import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    navigator.vibrate(300);
}

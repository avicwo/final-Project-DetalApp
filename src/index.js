import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import Parse from 'parse'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import emailjs from 'emailjs-com'

import App from './App';
import * as serviceWorker from './serviceWorker';

// Initializing emailjs
emailjs.init("user_1XuVSYter6s3E4VBpb2Io");

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'AOzlBPM4TpEAy7tA7vPOG4Tx2beGWJQCrZzgEdwz', // This is your Application ID
  'LDpuki1MCYBfG8bR2wOFPo0tFpLdnAzzgszjVKuU', // This is your Javascript key
);

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

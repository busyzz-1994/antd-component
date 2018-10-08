import 'react-app-polyfill/ie9';
import 'core-js/es6/weak-map'; // mobx

import React from 'react';
import ReactDOM from 'react-dom';
import consolev from 'consolev';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

consolev(process.env.REACT_APP_NAME);

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

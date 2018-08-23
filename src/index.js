import React from 'react';
import ReactDOM from 'react-dom';
import consolev from 'consolev';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

consolev(process.env.REACT_APP_NAME, process.env.REACT_APP_PROXY);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

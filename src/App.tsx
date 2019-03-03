import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Demo from './pages/Demo';
import UserStore from './stores/UserStore';

const user = new UserStore();

class App extends Component {
  render() {
    return (
      <Provider user={user}>
        <Fragment>
          <div className="App">
            {process.env.NODE_ENV === 'development' ? (
              <DevTools noPanel />
            ) : null}
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <Router>
            <Switch>
              <Route exact path="/" component={Demo} />
            </Switch>
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

export default App;

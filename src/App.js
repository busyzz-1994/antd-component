import React, {Component, Fragment} from 'react';
import {observable} from 'mobx';
import {Provider} from 'mobx-react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DevTools from 'mobx-react-devtools';
import logo from './logo.svg';
import Demo from './modules/Demo';
import './App.css';

const user = observable({
  name: "刘峰"
})

class App extends Component {
  render() {
    return (
      <Provider user={user}>
        <Fragment>
          <div className="App">
            <DevTools/>
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
              <Route exact path="/demo" component={Demo}/>
            </Switch>
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

export default App;

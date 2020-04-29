import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Settings from 'pages/Settings';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { config } from 'utils/request';
import './App.css';
// import Demo from './pages/Demo';
import SettingsStore from './stores/Settings';
import UserStore from './stores/User';
import Index from './pages';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import List from 'pages/list';
const user = new UserStore();
const settings = new SettingsStore();

config.url((url) => `${settings.apiServer}${url}`);

class App extends Component {
  componentDidMount() {
    window.addEventListener('pushstate', (e) => {
      console.log('pushstate');
    });
    window.addEventListener('popstate', (e) => {
      console.log('popstate');
      console.log(e);
    });
  }
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Provider user={user} settings={settings}>
          <Fragment>
            {process.env.NODE_ENV === 'development' ? (
              <DevTools noPanel />
            ) : null}
            <Router>
              <CacheSwitch>
                <CacheRoute exact path="/" component={Index} />
                <Route exact path="/list" component={List} />
                <Route exact path="//settings" component={Settings} />
              </CacheSwitch>
            </Router>
          </Fragment>
        </Provider>
      </LocaleProvider>
    );
  }
}

export default App;

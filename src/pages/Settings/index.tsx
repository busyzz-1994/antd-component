/**
 * 前端设置页面
 * Created by Vincent on 2019/3/7.
 */
import { inject, observer } from 'mobx-react';
import Header from 'modules/Header';
import React, { Component, Fragment } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Settings from 'stores/Settings';

interface SettingsProps extends RouteComponentProps {
  settings?: Settings; // injected
}

// @ts-ignore
@withRouter
@inject('settings')
@observer
export default class extends Component<SettingsProps> {
  flush = () => {
    const { location, settings } = this.props;

    const params = new URLSearchParams(location.search);
    // @ts-ignore
    for (let [k, v] of params) {
      if (settings.hasOwnProperty(k) && settings[k] !== v) {
        settings[k] = v;
      }
    }
    alert('更新成功');
  };
  clear = () => {
    const { settings } = this.props;
    settings.clear();
    alert('重置成功');
  };
  render() {
    const { location, settings } = this.props;

    const params = new URLSearchParams(location.search);
    const list = [];
    let hasChanged = false;

    for (let k in settings) {
      let v = settings[k];
      if (typeof v !== 'function') {
        let newValue = params.get(k);
        if (params.has(k) && newValue !== v) {
          hasChanged = true;
          list.push(
            <li key={k}>
              <span>{k} = </span>
              <del>{settings[k]}</del>
              <span style={{ color: 'green', paddingLeft: 4 }}>{newValue}</span>
            </li>
          );
        } else {
          list.push(
            <li key={k}>
              <span>{k} = </span>
              <span>{settings[k]}</span>
            </li>
          );
        }
      }
    }
    return (
      <Fragment>
        <Header />
        <div style={{ padding: 16 }}>
          <a href="/">返回首页</a>
          <h1>设置</h1>
          <div>
            <button onClick={this.clear}>重置设置</button>
            {hasChanged && <button onClick={this.flush}>更新设置</button>}
          </div>
          {
            <Fragment>
              <ul>{list}</ul>
            </Fragment>
          }
        </div>
      </Fragment>
    );
  }
}

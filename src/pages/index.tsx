import React, { Component, SFC } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Radio, Tooltip, Button, Progress, notification } from 'antd';
import MRadio from '../components/Radio';
import Trigger from 'rc-trigger';
import Test from './test';
import MTooltip from 'components/Tooltip';
// import { findDOMNode } from 'react-dom';
import Portal from 'components/Portal';
// import getScrollBarSize from 'utils/dom/getScrollBarSize';
import keyBoard from 'utils/event/keyboard';
import Notification from 'rc-notification';
import _notification from 'components/Notification';
interface IState {
  loading: boolean;
  value: number;
  checked: boolean;
  defaultCheckedList?: Array<any>;
  popupVisible: boolean;
  Mvisible: boolean;
}

export default class extends Component<any, IState> {
  state = {
    loading: false,
    value: 1,
    checked: false,
    popupVisible: true,
    Mvisible: false
  };
  test = React.createRef<Test>();
  div = React.createRef<HTMLDivElement>();
  align = align => {
    // console.log(align);
  };
  componentDidMount() {
    _notification.open({
      description: 'description设置'
    });
  }
  onPopupVisibleChange = value => {
    this.setState({
      popupVisible: value
    });
  };
  onForceUpdate = () => {
    let res = window.getComputedStyle(this.div.current, null);
    console.log(res);
    // this.setState(prevState => ({ popupVisible: !prevState.popupVisible }));
  };
  componentDidUpdate() {}
  onKeyBorad = e => {
    let keyCode = e.keyCode;
    // console.log(keyCode);
  };
  getAlign = val => {
    console.log(val);
  };
  onVisibleChange = v => {
    this.setState({ Mvisible: v });
  };
  noti = () => {
    Notification.newInstance({}, notification => {
      notification.notice({
        content: 'content',
        duration: 1000,
        closable: true,
        closeIcon: <span>X</span>
      });
      notification.notice({
        content: '少时诵诗书、',
        duration: 1000,
        closable: true,
        closeIcon: <span>X</span>
      });
    });
  };
  openNotification = () => {
    notification.warn({
      message: 'Notification Title',
      duration: null,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      }
    });
  };
  destroyNotification = () => {
    notification.destroy();
  };
  destroyNotificationLeft = () => {
    notification.destroy();
  };
  openNotificationLeft = () => {
    notification.open({
      message: 'Notification Left',
      duration: null,
      placement: 'topLeft',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      }
    });
  };
  createInstance = () => {
    _notification.open({
      description: 'description设置'
    });
  };
  render() {
    let { value, popupVisible, Mvisible } = this.state;
    let ele = <div style={{ height: 100 }}>sdjiajsdi</div>;

    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <div ref={this.div} style={{ position: 'relative', marginTop: 100 }}>
            <Button onClick={this.onForceUpdate}>click</Button>
            <Tooltip
              visible={true}
              autoAdjustOverflow={true}
              trigger="click"
              title={'fadas'}
              placement="topRight"
            >
              <div style={{ width: 600 }}>sdsdsd</div>
            </Tooltip>
          </div>
          <div style={{ position: 'relative', margin: 10 }}></div>
          <div className="test-box"></div>
          <Button onClick={this.noti}>打开</Button>
          <Button onClick={this.openNotification}>打开antd</Button>
          <Button onClick={this.openNotificationLeft}>打开antdLeft</Button>
          <Button onClick={this.destroyNotification}>销毁antd</Button>
          <Button onClick={this.destroyNotificationLeft}>销毁antdLeft</Button>
          <Button onClick={this.createInstance}>创建实例</Button>
        </div>
      </div>
    );
  }
}

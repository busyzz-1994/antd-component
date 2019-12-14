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
import { CSSTransition } from 'react-transition-group';
import Animate from 'rc-animate';
import _message from 'components/message';
import 'components/style/motion';
interface IState {
  loading: boolean;
  value: number;
  checked: boolean;
  defaultCheckedList?: Array<any>;
  popupVisible: boolean;
  Mvisible: boolean;
  visible: boolean;
}

export default class extends Component<any, IState> {
  state = {
    loading: false,
    value: 1,
    checked: false,
    popupVisible: true,
    Mvisible: false,
    visible: false
  };
  test = React.createRef<Test>();
  div = React.createRef<HTMLDivElement>();
  align = align => {
    // console.log(align);
  };
  componentDidMount() {
    // _notification.open({
    //   description: 'description设置',
    //   message: '这个是具体的内容哦哦'
    // });
  }
  onPopupVisibleChange = value => {
    this.setState({
      popupVisible: value
    });
  };
  onForceUpdate = () => {
    let res = window.getComputedStyle(this.div.current, null);
    console.log(res);
  };
  componentDidUpdate() {}
  onKeyBorad = e => {
    let keyCode = e.keyCode;
    // console.log(keyCode);
  };
  getAlign = val => {
    console.log(val);
  };
  visibleChange = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };
  noticeAdd = () => {
    _message.open('具体内容');
    // _notification.open({
    //   description: 'description设置',
    //   message: '这个是具体的内容哦哦'
    // });
  };
  render() {
    let { value, popupVisible, Mvisible, visible } = this.state;
    let ele = <div style={{ height: 100 }}>sdjiajsdi</div>;
    console.log(visible);
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
          {/* <CSSTransition
            unmountOnExit
            classNames="alert"
            in={visible}
            timeout={300}
            onEnter={() => {
              console.log('onEnter');
            }}
            onEntering={() => {
              console.log('onEntering');
            }}
            onEntered={() => {
              console.log('onEntered');
            }}
          >
            <div className="test-box">888</div>
          </CSSTransition> */}
          {/* <Animate transitionName="alert">
            {visible ? <div className="test-box">888</div> : null}
          </Animate> */}
          <Button onClick={this.visibleChange}>visible</Button>
          <Button onClick={this.noticeAdd}>add</Button>
        </div>
      </div>
    );
  }
}

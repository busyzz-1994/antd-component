import React, { Component, SFC } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Radio, Tooltip, Button, Progress, notification, Modal } from 'antd';
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
import DiaLog from 'rc-dialog';
import MModal from 'components/Modal';
interface IState {
  loading: boolean;
  value: number;
  checked: boolean;
  defaultCheckedList?: Array<any>;
  popupVisible: boolean;
  Mvisible: boolean;
  visible: boolean;
  modalVisible: boolean;
  antdModalVisible: boolean;
}
export default class extends Component<any, IState> {
  state = {
    loading: false,
    value: 1,
    checked: false,
    popupVisible: true,
    Mvisible: true,
    visible: false,
    modalVisible: false,
    antdModalVisible: false
  };
  test = React.createRef<Test>();
  div = React.createRef<HTMLDivElement>();
  canfont = React.createRef<HTMLDivElement>();
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
  };
  componentDidUpdate() {
    console.log(this.canfont.current);
  }
  onKeyBorad = e => {
    let keyCode = e.keyCode;
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
  close = () => {
    this.setState({
      modalVisible: false
    });
  };
  onOK = () => {
    this.setState({
      modalVisible: false
    });
  };
  confirm = () => {
    MModal.confirm({
      title: 'modal confirm',
      content: <div>modal content</div>,
      onCancel: () => {
        console.log('okkkk');
      },
      onOk: () => {
        console.log('onOk');
      }
    });
  };
  antdConfirm = () => {
    Modal.confirm({
      onCancel: () => {
        console.log('okkk');
      }
    });
  };
  render() {
    let {
      value,
      popupVisible,
      Mvisible,
      visible,
      modalVisible,
      antdModalVisible
    } = this.state;
    let ele = <div style={{ height: 100 }}>sdjiajsdi</div>;
    let style = {} as React.CSSProperties;
    style.display = null;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <div ref={this.div} style={{ position: 'relative', marginTop: 100 }}>
            <Button onClick={this.onForceUpdate}>click</Button>
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
          <Button onClick={() => this.setState({ modalVisible: true })}>
            显示modal
          </Button>
          <Button onClick={() => this.setState({ antdModalVisible: true })}>
            显示antd-modal
          </Button>
          <Button onClick={this.confirm}>confirm 的显示</Button>
          <Button onClick={this.antdConfirm}>antdConfirm 的显示</Button>
          <Button onClick={this.visibleChange}>visible</Button>
          <Button onClick={this.noticeAdd}>add</Button>
          <MModal
            title={'titile'}
            visible={modalVisible}
            onClose={this.close}
            onOk={this.onOK}
          >
            <div>das8da87</div>
          </MModal>
          <Modal
            onCancel={() => this.setState({ antdModalVisible: false })}
            visible={antdModalVisible}
            destroyOnClose={true}
          >
            <div>okkk</div>
          </Modal>
          {/* <Test visible={modalVisible} /> */}
        </div>
      </div>
    );
  }
}

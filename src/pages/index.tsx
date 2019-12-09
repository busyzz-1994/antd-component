import React, { Component, SFC } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Radio, Tooltip, Button, Progress } from 'antd';
import MRadio from '../components/Radio';
import Trigger from 'rc-trigger';
import Test from './test';
import MTooltip from 'components/Tooltip';
// import { findDOMNode } from 'react-dom';
import Portal from 'components/Portal';
// import getScrollBarSize from 'utils/dom/getScrollBarSize';
import keyBoard from 'utils/event/keyboard';
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
    let div = document.createElement('div');
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
  render() {
    let { value, popupVisible, Mvisible } = this.state;
    let ele = <div style={{ height: 100 }}>sdjiajsdi</div>;

    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <div>
            <Progress
              format={percent => percent + '%'}
              percent={50}
              status="active"
            />
            <div className="progress">
              <div className="progress-outer">
                <div className="progress-inner">
                  <div className="progress-bg"></div>
                </div>
              </div>
              <div className="progress-text">50%</div>
            </div>
          </div>
          <div ref={this.div} style={{ position: 'relative', marginTop: 100 }}>
            <Button onClick={this.onForceUpdate}>click</Button>
            {popupVisible ? (
              <Portal wrapperClassName="csl">
                <div>54545</div>
              </Portal>
            ) : null}

            {/* <Tooltip
              visible={true}
              autoAdjustOverflow={true}
              trigger="click"
              title={'ss'}
            >
              <div>thishh</div>
            </Tooltip> */}
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
          <div style={{ position: 'relative', margin: 10 }}>
            <MTooltip
              title="随便显示随"
              trigger={['click']}
              visible={Mvisible}
              onVisibleChange={this.onVisibleChange}
            >
              <div
                style={{
                  color: '#f00',
                  background: '#f5f5f5',
                  width: 500
                }}
              >
                wwwww
              </div>
            </MTooltip>
          </div>
          <div className="test-box">
            <Trigger
              destroyPopupOnHide={false}
              action={['click']}
              popupStyle={{ position: 'absolute', background: '#f00' }}
              overlayClassName="bg"
              getPopupClassNameFromAlign={this.getAlign}
              // prefixCls="busyzz-trigger-popup"
              popup={<span>popup</span>}
              // getPopupClassNameFromAlign={this.align}
              popupAlign={{
                points: ['tl', 'bl']
              }}
              onPopupVisibleChange={this.onPopupVisibleChange}
              mask={true}
              popupVisible={popupVisible}
            >
              <div>trigger change</div>
            </Trigger>
          </div>
        </div>
      </div>
    );
  }
}

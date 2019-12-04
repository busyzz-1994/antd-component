import React, { Component, SFC } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Radio, Tooltip, Button } from 'antd';
import MRadio from '../components/Radio';
// import Trigger from 'rc-trigger';
import Test from './test';
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
}

export default class extends Component<any, IState> {
  state = {
    loading: false,
    value: 1,
    checked: false,
    popupVisible: true
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
    console.log(value);
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
  render() {
    let { value, popupVisible } = this.state;
    let ele = <div style={{ height: 100 }}>sdjiajsdi</div>;

    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          {/* <div ref={this.div} className={'outer'}>
            <div className="inner"></div>
          </div> */}
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
            {/* <Tooltip autoAdjustOverflow={true} trigger="click" title={'ddd'}>
              <div style={{ width: 600 }}>sdsdsd</div>
            </Tooltip> */}
          </div>
          <div style={{ position: 'relative', margin: 10 }}>
            <div></div>
          </div>
          <div className="test-box">
            {/* <Trigger
              action={['hover']}
              popupStyle={{ position: 'absolute' }}
              // prefixCls="busyzz-trigger-popup"
              popup={<span style={{ background: '#f0f' }}>popup</span>}
              // getPopupClassNameFromAlign={this.align}
              popupAlign={{
                points: ['tl', 'bl'],
                offset: [0, 3]
              }}
              onPopupVisibleChange={this.onPopupVisibleChange}
              // mask={true}
              // popupVisible={popupVisible}
              popupVisible={popupVisible}
            >
              <div>trigger change</div>
            </Trigger> */}
          </div>
        </div>
      </div>
    );
  }
}

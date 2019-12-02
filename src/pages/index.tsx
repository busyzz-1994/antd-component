import React, { Component, SFC } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Radio, Tooltip, Button } from 'antd';
import MRadio from '../components/Radio';
import Trigger from 'rc-trigger';
import Test from './test';
import { findDOMNode } from 'react-dom';
import Portal from 'components/Portal';
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
    let { current } = this.div;
    // let dom = findDOMNode(current);
    // console.log(dom);
  }
  onPopupVisibleChange = value => {
    console.log(value);
    this.setState({
      popupVisible: value
    });
  };
  onForceUpdate = () => {
    this.forceUpdate();
  };
  componentDidUpdate() {
    console.log('update');
  }
  render() {
    let { value, popupVisible } = this.state;
    console.log('render');
    let ele = <div style={{ height: 100 }}>sdjiajsdi</div>;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <div style={{ position: 'relative', marginTop: 100 }}>
            <Button onClick={this.onForceUpdate}>click</Button>
            <Portal>
              <div>this is ok </div>
            </Portal>
            <Tooltip
              visible={true}
              autoAdjustOverflow={true}
              trigger="click"
              title={'ss'}
            >
              <div>thishh</div>
            </Tooltip>
            <Tooltip autoAdjustOverflow={true} trigger="click" title={'ddd'}>
              <div style={{ width: 600 }}>sdsdsd</div>
            </Tooltip>
          </div>
          <div style={{ position: 'relative', margin: 10 }}>
            <Test ref={this.test} />
            <div ref={this.div}></div>
          </div>
          <div className="test-box">
            <Trigger
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
            </Trigger>
          </div>
        </div>
      </div>
    );
  }
}

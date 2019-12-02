import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Radio, Tooltip } from 'antd';
import MRadio from '../components/Radio';
import Trigger from 'rc-trigger';
import { areRangesOverlapping } from 'date-fns';
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
  align = align => {
    // console.log(align);
  };
  onPopupVisibleChange = value => {
    this.setState({
      popupVisible: value
    });
    console.log(value);
  };
  render() {
    let { value, popupVisible } = this.state;
    console.log(popupVisible);
    let ele = <div style={{ height: 100 }}>sdjiajsdi</div>;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <div style={{ position: 'relative', marginTop: 100 }}>
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
            <Radio>ccc</Radio>
          </div>
          <div className="test-box">
            <Trigger
              action={['hover']}
              popupStyle={{ position: 'absolute' }}
              prefixCls="busyzz-trigger-popup"
              popup={<span style={{ background: '#f0f' }}>popup</span>}
              getPopupClassNameFromAlign={this.align}
              popupAlign={{
                points: ['tl', 'bl'],
                offset: [0, 3]
              }}
              onPopupVisibleChange={this.onPopupVisibleChange}
              mask={true}
              // popupVisible={popupVisible}
              popupVisible={popupVisible}
            >
              <a href="#">hover</a>
            </Trigger>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Radio, Tooltip } from 'antd';
import MRadio from '../components/Radio';

interface IState {
  loading: boolean;
  value: number;
  checked: boolean;
  defaultCheckedList?: Array<any>;
}
// let a: any = 'string';
// let a: unknown = function () {
//   console.log('enter')
// }
// if (typeof a === 'function') {
//   a()
// }
// let a: unknown = 'string';
// if (typeof a === 'string') {
//   a.split('-')
// }
// function isBoolean(value: unknown): value is number[]{
//   return Array.isArray(value) && value.every(item => typeof item === 'number');
// }

export default class extends Component<any, IState> {
  state = {
    loading: false,
    value: 1,
    checked: false
  };
  render() {
    let { value } = this.state;
    let ele = <div style={{ height: 100 }}>sdjiajsdi</div>;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <div style={{ position: 'relative', marginTop: 100 }}>
            <Tooltip autoAdjustOverflow={true} trigger="click" title={'ss'}>
              <div>thishh</div>
            </Tooltip>
            <Tooltip autoAdjustOverflow={true} trigger="click" title={'ddd'}>
              <div style={{ width: 600 }}>sdsdsd</div>
            </Tooltip>
          </div>
          <div style={{ position: 'relative', margin: 10 }}>
            <Radio>ccc</Radio>
          </div>
          <div className="test-box"></div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import MInput from '../components/Input';
interface IState {
  loading: boolean;
}
export default class extends Component<any, IState> {
  state = {
    loading: false
  };

  render() {
    return (
      <div>
        <div style={{ overflowX: 'hidden', marginBottom: 10 }}>
          <div style={{ position: 'relative', margin: 10 }}>
            <MInput />
          </div>
          <div style={{ position: 'relative', margin: 10 }}>
            <Input />
          </div>
        </div>
      </div>
    );
  }
}

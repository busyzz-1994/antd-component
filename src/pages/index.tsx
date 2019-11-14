import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Input, Icon } from 'antd';
import MInput from '../components/Input';
interface IState {
  loading: boolean;
  value: string;
}
export default class extends Component<any, IState> {
  state = {
    loading: false,
    value: ''
  };
  inputHandler = e => {
    let value = e.target.value;
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <div style={{ overflowX: 'hidden', marginBottom: 10 }}>
          <div style={{ position: 'relative', margin: 10 }}>
            <MInput
              onChange={this.inputHandler}
              size={'large'}
              value={this.state.value}
            />
          </div>
          <div style={{ position: 'relative', margin: 10 }}>
            <Input
              suffix={
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

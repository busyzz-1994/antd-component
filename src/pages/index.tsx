import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Affix from 'components/affix';
import './index.scss';
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
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
        <div style={{ overflowX: 'hidden', marginTop: 200 }}>
          <div style={{ position: 'relative' }}>222</div>
        </div>
      </div>
    );
  }
}

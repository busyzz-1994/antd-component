import React, { Component } from 'react';
import Affix from 'components/affix';
import './index.scss';
import 'antd/dist/antd.css';
// import { Row, Col } from 'antd';
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
          <div style={{ position: 'relative' }}>
            <Affix offsetTop={50} onChange={s => console.log(s)}>
              <div className="div">okk</div>
            </Affix>
          </div>

          <div style={{ height: 2000 }}>oooo</div>
        </div>
      </div>
    );
  }
}

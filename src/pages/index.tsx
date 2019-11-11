import React, { Component } from 'react';
import { MRow, MCol } from 'components/Grid';
import './index.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
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
        <div style={{ overflowX: 'hidden' }}>
          <MRow gutter={{ md: 30 }}>
            <MCol span={6}>88888</MCol>
            <MCol span={6}>9999</MCol>
          </MRow>
          <Row gutter={{ md: 50 }}>
            <Col span={6}>
              <div>ddd</div>
            </Col>
            <Col span={6}>
              <div>ddd</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

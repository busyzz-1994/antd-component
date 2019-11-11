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
            <MCol md={{ span: 6, offset: 6 }} xl={{ span: 4, offset: 4 }}>
              88888
            </MCol>
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

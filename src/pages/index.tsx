import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import MTabs from 'components/Tabs';
import { Tabs, Button, Timeline, Icon, Empty, Descriptions, Badge } from 'antd';
// const { TabPane } = Tabs;
import MDesc from 'components/Descriptions';
export default class extends Component<any, any> {
  state = {
    tagVisible: true,
    index: 0,
    activePage: 0
  };
  render() {
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <Descriptions
            title="Responsive Descriptions"
            bordered
            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="Product">
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
            <Descriptions.Item label="time">18:00:00</Descriptions.Item>
            <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
            <Descriptions.Item label="Official">$60.00</Descriptions.Item>
            <Descriptions.Item label="Config Info">
              Data disk type: MongoDB
              <br />
              Database version: 3.4
              <br />
              Package: dds.mongo.mid
              <br />
              Storage space: 10 GB
              <br />
              Replication factor: 3
              <br />
              Region: East China 1
            </Descriptions.Item>
          </Descriptions>
          <MDesc
            column={{
              md: 3,
              sm: 2
            }}
            title="my descriptions"
            bordered={true}
          >
            <MDesc.Item label="Product">Cloud Database</MDesc.Item>
            <MDesc.Item label="Product">Cloud Database</MDesc.Item>
            <MDesc.Item label="Product">Cloud Database</MDesc.Item>
            <MDesc.Item span={3} label="Product">
              Cloud Database
            </MDesc.Item>
            <MDesc.Item label="Product">Cloud Database</MDesc.Item>
            <MDesc.Item label="Product">Cloud Database</MDesc.Item>
            <MDesc.Item label="Product">Cloud Database</MDesc.Item>
          </MDesc>
        </div>
      </div>
    );
  }
}

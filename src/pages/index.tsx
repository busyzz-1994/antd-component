import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Tabs, Button, Timeline } from 'antd';
import MCollapse from 'components/Collapse';
const { Panel } = MCollapse;
export default class extends Component<any, any> {
  state = {
    tagVisible: true,
    index: 0,
    activePage: 0,
    activeKey: ['1']
  };
  collapseChange = activeKey => {
    this.setState({
      activeKey
    });
  };
  render() {
    const { activeKey } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <MCollapse activeKey={activeKey}>
            <Panel onChange={this.collapseChange} key="1" />
            <Panel onChange={this.collapseChange} key="2" />
          </MCollapse>
        </div>
      </div>
    );
  }
}

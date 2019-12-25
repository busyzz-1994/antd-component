import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Tabs, Button, Timeline } from 'antd';
import MCollapse from 'components/Collapse';
import Animate from 'rc-animate';
import 'components/style/motion/index';
const { Panel } = MCollapse;
export default class extends Component<any, any> {
  state = {
    tagVisible: true,
    visible: true,
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
    const { activeKey, visible } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <MCollapse activeKey={activeKey}>
            <Panel header="tab_1" onChange={this.collapseChange} key="1">
              <div>dusudu</div>
              <div style={{ marginTop: '100px' }}>dusudu</div>
            </Panel>
            <Panel header="tab_1" onChange={this.collapseChange} key="2">
              <div>xixi</div>
              <div style={{ marginTop: '100px' }}>dusudu</div>
            </Panel>
          </MCollapse>
        </div>

        <Button
          onClick={() => this.setState(prev => ({ visible: !prev.visible }))}
        >
          onclick
        </Button>
      </div>
    );
  }
}

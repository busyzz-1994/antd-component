import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Tabs, Button, Timeline } from 'antd';
import MCollapse from 'components/Collapse';
import Animate from 'rc-animate';
import 'components/style/motion/index';
import MCarousel from 'components/Carousel';
const { Panel } = MCollapse;
export default class extends Component<any, any> {
  state = {
    tagVisible: true,
    visible: true,
    index: 0,
    activePage: 0,
    activeKey: ['1', '2'],
    marginTop: 100
  };
  collapseChange = activeKey => {
    this.setState({
      activeKey
    });
  };
  render() {
    const { activeKey, visible, marginTop } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          {/* <MCollapse activeKey={activeKey}>
            <Panel header="tab_1" onChange={this.collapseChange} key="1">
              <div>dusudu</div>
              <div style={{ marginTop }}>dusudu</div>
            </Panel>
            <Panel header="tab_1" onChange={this.collapseChange} key="2">
              <div>xixi</div>
              <div style={{ marginTop: '100px' }}>dusudu</div>
            </Panel>
          </MCollapse> */}
        </div>
        <MCarousel>
          <div style={{ height: 100 }}>111</div>
          <div>222</div>
          <div>333</div>
        </MCarousel>
        <Button onClick={() => this.setState({ marginTop: 200 })}>
          onclick
        </Button>
      </div>
    );
  }
}

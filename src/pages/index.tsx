import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import MTabs from 'components/Tabs';
import { Tabs, Button } from 'antd';
// const { TabPane } = Tabs;
const { TabPane } = MTabs;
export default class extends Component<any, any> {
  state = {
    tagVisible: true,
    index: 0,
    activePage: 0
  };
  tagClose = () => {
    this.setState({ tagVisible: false });
  };
  addIndex = () => {
    this.setState(prev => ({ index: prev.index + 1 }));
  };
  tabChange = index => {
    this.setState({ index });
  };
  render() {
    let { index, activePage } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          {/* <Tabs></Tabs> */}
          <MTabs
            activePage={activePage}
            activeIndex={index}
            onChange={this.tabChange}
            showContent={false}
          >
            <TabPane tab="tab_1" />
            <TabPane tab="tab_2" />
            <TabPane tab="tab_3" />
          </MTabs>
          <Button onClick={this.addIndex}>+++</Button>
        </div>
      </div>
    );
  }
}

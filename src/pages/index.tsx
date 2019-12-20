import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import MTabs from 'components/Tabs';
import { Tabs, Button } from 'antd';
const { TabPane } = Tabs;
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
  render() {
    let { index, activePage } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <Tabs>
            <TabPane tab="tab1" key="1">
              content tabpane
            </TabPane>
            <TabPane tab="tab2" key="2">
              content tabpane222222
            </TabPane>
          </Tabs>
          <MTabs activePage={activePage} activeIndex={index} />
          <Button onClick={this.addIndex}>+++</Button>
        </div>
      </div>
    );
  }
}

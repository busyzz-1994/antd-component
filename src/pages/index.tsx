import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import MTabs from 'components/Tabs';
import { Tabs, Button, Timeline, Icon, Empty, Descriptions, Badge } from 'antd';
// const { TabPane } = Tabs;
import Avatar from 'components/Avatar';
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
          <Avatar />
        </div>
      </div>
    );
  }
}

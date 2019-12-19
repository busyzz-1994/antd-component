import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import Tag from 'components/Tag';
export default class extends Component<any, any> {
  state = {
    tagVisible: true
  };
  tagClose = () => {
    this.setState({ tagVisible: false });
  };
  render() {
    const { tagVisible } = this.state;
    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <Tag color="#f00">dsdsds</Tag>
        </div>
      </div>
    );
  }
}

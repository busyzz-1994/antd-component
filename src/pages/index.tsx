import React, { Component } from 'react';
import Mbutton from 'components/Button';
import 'antd/dist/antd.css';
import { Button } from 'antd';
export default class extends Component {
  render() {
    return (
      <div style={{ margin: 10 }}>
        <Mbutton type="danger"></Mbutton>
        <div style={{ marginTop: 10 }}>
          <Button type="primary">yuans</Button>
        </div>
      </div>
    );
  }
}

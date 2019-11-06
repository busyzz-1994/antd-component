import React, { Component } from 'react';
import Mbutton from 'components/Button';
import 'antd/dist/antd.css';
import { Button } from 'antd';
interface IState {
  loading: boolean;
}
export default class extends Component<any, IState> {
  state = {
    loading: false
  };
  render() {
    return (
      <div style={{ margin: 10 }}>
        <Mbutton type="primary" loading={this.state.loading} delay={1000}>
          thisssss
        </Mbutton>
        <div style={{ marginTop: 10 }}>
          <Button
            type="primary"
            onClick={() => {
              this.setState(prevState => ({
                loading: !prevState.loading
              }));
            }}
          >
            yuans
          </Button>
        </div>
      </div>
    );
  }
}

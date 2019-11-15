import React, { Component } from 'react';
import './index.scss';
import 'antd/dist/antd.css';
import { Input, Icon } from 'antd';
import MInput from '../components/Input';
interface IState {
  loading: boolean;
  value: string;
}
// class Text extends Component<any> {
//   render() {
//     let { children } = this.props;
//     //@ts-ignore
//     children = React.cloneElement(children, {
//       className: 'div p',
//       style: null
//     });
//     return <div>{children}</div>;
//   }
// }
export default class extends Component<any, IState> {
  state = {
    loading: false,
    value: ''
  };
  inputHandler = e => {
    let value = e.target.value;
    this.setState({ value });
  };
  render() {
    return (
      <div>
        <div style={{ overflowX: 'hidden', marginBottom: 10 }}>
          <div style={{ position: 'relative', margin: 10 }}>
            <MInput
              onChange={this.inputHandler}
              size={'large'}
              value={this.state.value}
              suffix={'he'}
              prefix={'oo'}
            />
          </div>
          <div style={{ position: 'relative', margin: 10 }}>
            <Input
              prefix={'xxxxxx'}
              suffix={
                <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
              }
            />
          </div>
          {/* <Text>
            <div style={{ width: 500 }} className="p">
              okkkk
            </div>
          </Text> */}
        </div>
      </div>
    );
  }
}

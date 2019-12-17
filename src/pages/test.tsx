import React, { Component } from 'react';
import Animate from 'rc-animate';
interface Type {
  name?: string;
  visible?: boolean;
}
interface IProps extends React.HTMLAttributes<HTMLDivElement>, Type {}
export default class extends Component<IProps> {
  say = () => {
    console.log('say hello');
  };
  componentWillUnmount() {
    console.log('destory');
  }
  render() {
    let { visible } = this.props;
    return (
      <div id="test">
        <Animate transitionName="fade">
          {visible ? <div>this is test</div> : null}
        </Animate>
      </div>
    );
  }
}

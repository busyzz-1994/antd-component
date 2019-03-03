/**
 * Created by Vincent on 2018/8/6.
 */
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import UserStore from '../../stores/UserStore';

type DemoProps = {
  user?: UserStore; // injected
  title: string; // passed as <App title="my title">
};

@inject('user')
@observer
class Demo extends Component<DemoProps> {
  render() {
    let { user } = this.props;
    if (!user.loggedIn) {
      return (
        <button onClick={() => user.login('admin', '123456')}>login</button>
      );
    }
    return (
      <div>
        {user.info.name}-{user.info.age}
      </div>
    );
  }
}

export default Demo;

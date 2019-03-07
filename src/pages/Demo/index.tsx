/**
 * Created by Vincent on 2018/8/6.
 */
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import UserStore from 'stores/User';

interface DemoProps extends RouteComponentProps {
  user?: UserStore; // injected
}

@inject('user')
@withRouter
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

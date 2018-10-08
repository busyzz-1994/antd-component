/**
 * Created by Vincent on 2018/8/6.
 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('user')
@observer
class Demo extends Component {
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

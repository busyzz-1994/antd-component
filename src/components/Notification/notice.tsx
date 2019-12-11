import React, { Component } from 'react';
import { getPrefix } from '../_util';
interface NoticeProps {
  children: React.ReactNode;
}
export default class extends Component<NoticeProps> {
  render() {
    const { children } = this.props;
    let prefixCls = getPrefix('notification-notice');
    return <div className={prefixCls}>{children}</div>;
  }
}

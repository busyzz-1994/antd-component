import React, { Component } from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import Notice from './notice';
import './style/index.scss';
let count = 0;
let now = Date.now();
function getUuid() {
  return `notification_notice_${now}_${count++}`;
}
interface InstanceProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  getContainer?: () => HTMLElement;
}
export interface NoticeProps {
  content: React.ReactNode | string;
  key?: string;
  title?: React.ReactNode | string;
  duration?: number;
  style?: React.CSSProperties;
  onClose?: () => void;
}
class Notification extends Component<InstanceProps> {
  static defaultProps = {
    prefixCls: 'busyzz-notification'
  };
  state = {
    notices: []
  };
  add = (notice: NoticeProps) => {
    const { notices } = this.state;
    notice.key = getUuid();
    notices.push(notice);
    this.setState({ notices });
  };
  render() {
    const { prefixCls } = this.props;
    const { notices } = this.state;
    let className = classNames({
      [prefixCls]: true
    });
    return (
      <div className={className}>
        {notices.map(notice => {
          return <Notice key={notice.key}>{notice.content}</Notice>;
        })}
      </div>
    );
  }
}
const newInstance = function(properties: InstanceProps, callback) {
  let div = document.createElement('div');
  document.body.appendChild(div);
  function ref(notificationInstance) {
    callback({
      notice(noticeProps: NoticeProps) {
        notificationInstance.add(noticeProps);
      }
    });
  }
  ReactDom.render(<Notification ref={ref} {...properties} />, div);
};
export default newInstance;

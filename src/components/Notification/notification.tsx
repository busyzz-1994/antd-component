import React, { Component } from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import Notice from './notice';
import { NotificationPlacement } from './index';
import './style/index.scss';
import Animate from 'rc-animate';
let count = 0;
let now = Date.now();
function getUuid() {
  return `notification_notice_${now}_${count++}`;
}
interface InstanceProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  getContainer?: () => HTMLElement;
  duration?: number;
  placement?: NotificationPlacement;
  onClose?: (key: string) => void;
  closeIcon?: React.ReactNode;
}
export interface NoticeProps {
  content: React.ReactNode | string;
  key?: string;
  title?: React.ReactNode | string;
  duration?: number;
  style?: React.CSSProperties;
  onClose?: () => void;
  closeIcon?: React.ReactNode;
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
  closeNotice = (key: string) => {
    let { notices } = this.state;
    let { onClose } = this.props;
    let newNotices = notices.filter(item => item.key !== key);
    this.setState(
      {
        notices: newNotices
      },
      () => {
        onClose && onClose(key);
      }
    );
  };
  render() {
    const { prefixCls, duration, placement, closeIcon } = this.props;
    const { notices } = this.state;
    let className = classNames({
      [prefixCls]: true,
      [`${prefixCls}-${placement}`]: !!placement
    });
    return (
      <div className={className}>
        <Animate transitionName="alert">
          {notices.map(notice => {
            return (
              <Notice
                duration={duration}
                key={notice.key}
                onClose={() => this.closeNotice(notice.key)}
                closeIcon={closeIcon}
              >
                {notice.content}
              </Notice>
            );
          })}
        </Animate>
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
      },
      destory() {
        div.parentNode.removeChild(div);
      }
    });
  }
  ReactDom.render(<Notification ref={ref} {...properties} />, div);
};
export default newInstance;

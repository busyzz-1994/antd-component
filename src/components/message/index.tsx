import React from 'react';
import notification from '../Notification/notification';
import { NotificationPlacement } from '../Notification';
import { getPrefix } from '../_util';
import './style/index.scss';
//----------------  默认参数  ------------------
let defaultDuration = 3;
let defaultPlacement = 'topCenter' as NotificationPlacement;
let defaultTransitionName = 'message';
let notificationInstance = null;
type Config = {
  content?: React.ReactNode;
  duration?: number;
  onClose?: () => void;
  icon?: React.ReactNode;
  key?: number | string;
};
type Content = string | React.ReactNode | Config;
function getNotification(
  {
    duration = defaultDuration,
    placement = defaultPlacement,
    transitionName = defaultTransitionName,
    onClose,
    prefixCls = getPrefix('message')
  },
  callback
) {
  if (!notificationInstance) {
    notification(
      {
        duration,
        onClose,
        placement,
        transitionName,
        prefixCls,
        closable: false
      },
      instance => {
        notificationInstance = instance;
        callback(notificationInstance);
      }
    );
  } else {
    callback(notificationInstance);
  }
}
function open(content?: Content, duration?: number, onClose?: () => void) {
  getNotification({ duration, onClose }, instance => {
    let prefixCls = getPrefix('message');
    instance.notice({
      content: (
        <div className={`${prefixCls}-box`}>
          <div>icon</div>
          <div>{content}</div>
        </div>
      )
    });
  });
}
const api = {
  open
};
export default api;

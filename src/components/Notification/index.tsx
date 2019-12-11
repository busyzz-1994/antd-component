import React from 'react';
import Notification from './notification';
//-------------------------- 默认的配置参数 --------------------------
let defaultPlacement = 'topRight' as NotificationPlacement;
let notificationInstances = {};
type NotificationPlacement = 'topLeft' | 'topRight';
interface ArgsProps {
  description?: React.ReactNode;
  message?: React.ReactNode;
  placement?: NotificationPlacement;
  prefixCls?: string;
}
function getNotificationInstance(
  { placement = defaultPlacement }: ArgsProps,
  callback: (n: any) => void
) {
  let cacheKey = placement;
  if (notificationInstances[cacheKey]) {
    callback(notificationInstances[cacheKey]);
    return;
  }
  Notification({}, notification => {
    notificationInstances[cacheKey] = notification;
    callback(notification);
  });
}
function open(notice: ArgsProps) {
  let { prefixCls = 'busyzz-notification' } = notice;
  getNotificationInstance(notice, notification => {
    notification.notice({
      content: (
        <div className={`${prefixCls}-notice-content`}>
          <div className={`${prefixCls}-notice-info`}>
            <div className={`${prefixCls}-notice-info-title`}>这个是title</div>
            <div className={`${prefixCls}-notice-info-desc`}>
              这个是具体的内容这个是具体的内容这个是具体的内容这个是具体的内容这个是具体的内容这个是具体的内容
            </div>
          </div>
          <div className={`${prefixCls}-notice-close`}>X</div>
        </div>
      )
    });
  });
}
const api = {
  open
};

export default api;

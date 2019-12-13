import React from 'react';
import Notification from './notification';
//-------------------------- 默认的配置参数 --------------------------
type ConfigProps = {
  duration?: number | null;
  placement?: NotificationPlacement;
  closeIcon?: React.ReactNode;
};
// 位置
let defaultPlacement = 'topRight' as NotificationPlacement;
// 延迟关闭时间
let defaultDuration = 4.5;
//关闭按钮的图形
let defaultCloseIcon = <div>X</div> as React.ReactNode;
function setConfig(config: ConfigProps) {
  let { duration, placement, closeIcon } = config;
  if (placement) defaultPlacement = placement;
  if (duration) defaultDuration = duration;
  if (closeIcon) defaultCloseIcon = closeIcon;
}
//-------------------------- 默认的配置参数 --------------------------
let notificationInstances = {};
export type NotificationPlacement =
  | 'topLeft'
  | 'topRight'
  | 'bottomRight'
  | 'bottomLeft';
interface ArgsProps {
  description?: React.ReactNode;
  message?: React.ReactNode;
  placement?: NotificationPlacement;
  prefixCls?: string;
  duration?: number;
  onClose?: (key?: string) => void;
  closeIcon?: React.ReactNode;
}
function destory() {
  Object.keys(notificationInstances).forEach(key => {
    notificationInstances[key].destory();
    delete notificationInstances[key];
  });
}
function getNotificationInstance(
  {
    placement = defaultPlacement,
    duration = defaultDuration,
    prefixCls,
    onClose,
    closeIcon = defaultCloseIcon
  }: ArgsProps,
  callback: (n: any) => void
) {
  let cacheKey = placement;
  if (notificationInstances[cacheKey]) {
    callback(notificationInstances[cacheKey]);
    return;
  }
  Notification(
    { duration, prefixCls, placement, onClose, closeIcon },
    notification => {
      notificationInstances[cacheKey] = notification;
      callback(notification);
    }
  );
}
function open(notice: ArgsProps) {
  let { prefixCls = 'busyzz-notification', description, message } = notice;
  getNotificationInstance(notice, notification => {
    notification.notice({
      content: (
        <div className={`${prefixCls}-notice-info`}>
          <div className={`${prefixCls}-notice-info-title`}>{description}</div>
          <div className={`${prefixCls}-notice-info-desc`}>{message}</div>
        </div>
      )
    });
  });
}
const api = {
  open,
  destory,
  setConfig
};

export default api;

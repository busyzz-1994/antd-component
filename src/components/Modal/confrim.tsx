import React, { Component } from 'react';
import Dialog from '../Dialog';
import { getPrefix } from '../_util';
import ReactDOM from 'react-dom';
import './style/index.scss';
import { Button } from 'antd';
export interface ModalFunc {
  cancelText?: string;
  content?: React.ReactNode;
  mask?: boolean;
  maskClosable?: boolean;
  okText?: string;
  title?: React.ReactNode;
  width?: number;
  onCancel?: () => void;
  onOk?: () => void;
}
interface DialogFunc extends ModalFunc {
  visible: boolean;
}
const noop = () => {};
const ConfirmDialog = (props: DialogFunc) => {
  let { title, content, onCancel, onOk = noop, visible } = props;
  const prefixCls = getPrefix('modal-confirm');
  return (
    <Dialog
      prefixCls={prefixCls}
      footer={null}
      visible={visible}
      onClose={onCancel}
    >
      <div className={`${prefixCls}-children`}>
        <div className={`${prefixCls}-children-info`}>
          <div className={`${prefixCls}-children-icon`}>?</div>
          <div className={`${prefixCls}-children-tip`}>
            <div className={`${prefixCls}-children-tip-title`}>{title}</div>
            <div className={`${prefixCls}-children-tip-desc`}>{content}</div>
          </div>
        </div>
        <div className={`${prefixCls}-children-handler`}>
          <Button onClick={onOk} type="primary">
            确认
          </Button>
          <Button onClick={onCancel}>取消</Button>
        </div>
      </div>
    </Dialog>
  );
};
export default (props: ModalFunc) => {
  let visible = true;
  const { onCancel = noop, onOk = noop } = props;
  const div = document.createElement('div');
  document.body.append(div);
  function close() {
    visible = false;
    render();
    destory();
  }
  function cancel() {
    close();
    onCancel();
  }
  function ok() {
    close();
    onOk();
  }
  function destory() {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div);
      div.parentNode.removeChild(div);
    }, 500);
  }
  function render() {
    ReactDOM.render(
      <ConfirmDialog
        {...props}
        visible={visible}
        onCancel={cancel}
        onOk={ok}
      />,
      div
    );
  }
  render();
};

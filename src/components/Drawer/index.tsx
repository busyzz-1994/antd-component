import React, { Component } from 'react';
import Dialog from '../Dialog';
import { getPrefix } from '../_util';
import './style/index.scss';
let prefixCls = getPrefix('drawer');
interface IDrawer {
  closable?: boolean;
  maskClosable?: boolean;
  mask?: boolean;
  title?: React.ReactNode;
  visible?: boolean;
  width?: number | string;
  height?: number | string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
  onClose?: () => void;
  keyboard?: boolean;
  children?: React.ReactElement;
  cancelText?: string;
  okText?: string;
}
const transitionNameMap = {
  top: 'slideFromTop',
  bottom: 'slideFromBottom',
  left: 'slideFromLeft',
  right: 'sildeFromRight'
};
export default class extends Component<IDrawer> {
  static defaultProps = {
    closable: false,
    maskClosable: true,
    mask: true,
    title: '',
    width: 256,
    height: 256,
    placement: 'left',
    onClose: () => {},
    keyboard: true,
    cancelText: '取消',
    okText: '确认'
  };
  render() {
    let {
      title,
      mask,
      onClose,
      keyboard,
      visible,
      width,
      closable,
      maskClosable,
      height,
      placement,
      children,
      cancelText,
      okText
    } = this.props;
    let transitionName = transitionNameMap[placement];
    let composePrefixCls = prefixCls + '-' + transitionName;
    let dialogStyle = {} as React.CSSProperties;
    if (placement === 'bottom' || placement === 'top') {
      dialogStyle.height = height;
    }
    if (placement === 'right' || placement === 'left') {
      dialogStyle.width = width;
    }
    return (
      <Dialog
        visible={visible}
        closable={closable}
        maskClosable={maskClosable}
        title={title}
        mask={mask}
        onClose={onClose}
        keyboard={keyboard}
        prefixCls={prefixCls}
        okText={okText}
        cancelText={cancelText}
        transitionName={transitionName}
        dialogClassName={composePrefixCls}
        dialogStyle={dialogStyle}
      >
        {children}
      </Dialog>
    );
  }
}

import React, { Component } from 'react';
import Dialog from '../Dialog';
import { getPrefix } from '../_util';
import './style/index.scss';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import { ModalFunc } from './confrim';
interface IModal {
  visible: boolean;
  children?: React.ReactElement;
  prefixCls?: string;
  onClose?: () => void;
  closable?: boolean;
  footer?: React.ReactNode | null;
  title?: React.ReactNode;
  afterClose?: () => void;
  bodyStyle?: React.CSSProperties;
  cancelText?: string;
  okText?: string;
  confirmLoading?: boolean;
  keyboard?: boolean;
  onOk?: () => void;
  destroyOnClose?: boolean;
}
type MousePosition = { x: number; y: number } | null;
let mousePosition: MousePosition = null;
function getClickPosition(e: MouseEvent) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  };
  //150ms后将位置重置
  setTimeout(() => {
    mousePosition = null;
  }, 150);
}
addEventListener(document.documentElement, 'click', getClickPosition);
export default class extends Component<IModal> {
  static confirm: (props: ModalFunc) => void;
  static defaultProps = {
    prefixCls: getPrefix('modal'),
    onClose: () => {},
    closable: true,
    afterClose: () => {},
    onOk: () => {},
    cancelText: '取消',
    okText: '确认',
    confirmLoading: false,
    keyboard: true
  };
  close = () => {
    const { onClose } = this.props;
    onClose();
  };
  render() {
    const { children, ...rest } = this.props;
    return (
      <Dialog {...rest} mousePosition={mousePosition} onClose={this.close}>
        {children}
      </Dialog>
    );
  }
}

import React, { Component } from 'react';
import Dialog from '../Dialog';
import { getPrefix } from '../_util';
import './style/index.scss';
interface IModal {
  visible: boolean;
  children?: React.ReactElement;
  prefixCls?: string;
  onClose?: () => void;
}
export default class extends Component<IModal> {
  static defaultProps = {
    prefixCls: getPrefix('modal'),
    onClose: () => {}
  };
  close = () => {
    const { onClose } = this.props;
    onClose();
  };
  render() {
    const { children, visible, prefixCls } = this.props;
    return (
      <Dialog visible={visible} prefixCls={prefixCls} onClose={this.close}>
        {children}
      </Dialog>
    );
  }
}

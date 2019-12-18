import React, { Component } from 'react';
import Dialog from '../Dialog';
import { getPrefix } from '../_util';
import ReactDOM from 'react-dom';
import './style/index.scss';
import { Button } from 'antd';
interface IModal {
  visible?: boolean;
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
}

// class Modal extends Component<IModal> {
//   static defaultProps = {
//     prefixCls: getPrefix('modal-confirm'),
//     onClose: () => {},
//     closable: true,
//     afterClose: () => {},
//     onOk: () => {},
//     cancelText: '取消',
//     okText: '确认',
//     confirmLoading: false,
//     keyboard: true
//   };
//   close = () => {
//     const { onClose } = this.props;
//     onClose();
//   };
//   render() {
//     const { children, ...rest } = this.props;
//     return (
//       <Dialog {...rest} onClose={this.close}>
//         {children}
//       </Dialog>
//     );
//   }
// }
const ConfirmDialog = IModal => {
  const prefixCls = getPrefix('modal-confirm');
  return (
    <Dialog prefixCls={prefixCls} footer={null} visible={true}>
      <div className={`${prefixCls}-children`}>
        <div className={`${prefixCls}-children-info`}>
          <div className={`${prefixCls}-children-icon`}>?</div>
          <div className={`${prefixCls}-children-tip`}>
            <div className={`${prefixCls}-children-tip-title`}>title</div>
            <div className={`${prefixCls}-children-tip-desc`}>desc</div>
          </div>
        </div>
        <div className={`${prefixCls}-children-handler`}>
          <Button>csss</Button>
        </div>
      </div>
    </Dialog>
  );
};
export default () => {
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(<ConfirmDialog />, div);
};

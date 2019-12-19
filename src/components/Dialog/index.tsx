import React, { Component } from 'react';
import Portal from '../Portal/PortalWrapper';
import { Button } from 'antd';
import Animate from 'rc-animate';
import { getOffset, setTransform } from '../_util';
interface IDialogProps {
  visible: boolean;
  children?: React.ReactElement;
  prefixCls?: string;
  onClose?: () => void;
  mousePosition?: { x: number; y: number };
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
  mask?: boolean;
  maskClosable?: boolean;
  transitionName?: string;
  dialogClassName?: string;
  dialogStyle?: React.CSSProperties;
}
interface IState {
  destroyOnClose: boolean;
}
export default class extends Component<IDialogProps, IState> {
  static defaultProps = {
    prefixCls: 'busyzz-dialog',
    transitionName: 'buzz',
    dialogStyle: {},
    mask: true,
    maskClosable: true,
    onClose: () => {},
    afterClose: () => {}
  };
  private wrapper = React.createRef<HTMLDivElement>();
  private dialog = React.createRef<HTMLDivElement>();
  componentDidUpdate() {
    const { mousePosition, visible } = this.props;
    let dialog = this.dialog.current;
    //设置动画的源
    if (visible && dialog) {
      if (mousePosition) {
        let offset = getOffset(dialog);
        let x = mousePosition.x - offset.left;
        let y = mousePosition.y - offset.top;
        setTransform(dialog, `${x}px ${y}px`, 'Origin');
      } else {
        setTransform(dialog, ``, 'Origin');
      }
    }
    //wrapper聚焦
    if (visible) {
      this.wrapperFocus();
    }
  }
  renderMask = () => {
    const { prefixCls, visible, mask } = this.props;
    const wrapperStyle = {} as React.CSSProperties;
    if (!mask) return null;
    return (
      <Animate transitionAppear transitionName="fade">
        {visible ? (
          <div style={wrapperStyle} className={prefixCls + '-mask'}></div>
        ) : null}
      </Animate>
    );
  };
  animateLeave = () => {
    this.wrapper.current.style.display = 'none';
  };
  //生成关闭按钮
  renderCloser = () => {
    const { closable, prefixCls } = this.props;
    return (
      closable && (
        <div className={prefixCls + '-close'}>
          <span onClick={this.close} className={prefixCls + '-close-icon'}>
            X
          </span>
        </div>
      )
    );
  };
  //生成footer
  renderFooter = () => {
    const {
      footer,
      prefixCls,
      cancelText,
      okText,
      confirmLoading,
      onOk
    } = this.props;
    const defaultFooter = (
      <div className={prefixCls + '-footer-default'}>
        <Button onClick={this.close}>{cancelText}</Button>
        <Button onClick={onOk} loading={confirmLoading} type="primary">
          {okText}
        </Button>
      </div>
    );
    //取消footer
    if (footer === null) {
      return null;
    } else if (footer === undefined) {
      return <div className={prefixCls + '-footer'}>{defaultFooter}</div>;
    } else {
      return <div className={prefixCls + '-footer'}>{footer}</div>;
    }
  };
  //生成header
  renderHeader = () => {
    const { title, prefixCls } = this.props;
    return title && <div className={prefixCls + '-header'}>header</div>;
  };
  renderDialogEle = () => {
    const {
      prefixCls,
      visible,
      dialogClassName,
      dialogStyle,
      children,
      transitionName
    } = this.props;
    return (
      <Animate
        transitionAppear
        onLeave={this.animateLeave}
        transitionName={transitionName}
      >
        {visible ? (
          <div
            style={dialogStyle}
            className={prefixCls + ' ' + dialogClassName}
            ref={this.dialog}
          >
            <div className={prefixCls + '-content'}>
              {this.renderCloser()}
              {this.renderHeader()}
              <div className={prefixCls + '-body'}>{children}</div>
              {this.renderFooter()}
            </div>
          </div>
        ) : null}
      </Animate>
    );
  };
  //点击wrapper
  wrapperClick = e => {
    let { maskClosable } = this.props;
    if (!maskClosable) return;
    if (
      e.target === e.currentTarget ||
      //Animate 组件加了一层span标签
      e.target.parentNode === e.currentTarget
    ) {
      this.close();
    }
  };
  wrapperFocus = () => {
    try {
      this.wrapper.current.focus();
    } catch (e) {}
  };
  //关闭dialog
  close = () => {
    const { onClose } = this.props;
    onClose();
  };
  //按esc退出
  onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { keyboard } = this.props;
    if (keyboard && e.keyCode === 27) {
      this.close();
    }
  };
  render() {
    const { visible, prefixCls } = this.props;
    const wrapperStyle = {} as React.CSSProperties;
    if (visible) {
      wrapperStyle.display = 'block';
    }
    return (
      <Portal visible={visible}>
        <div className={prefixCls + '-root'}>
          {this.renderMask()}
          <div
            onClick={this.wrapperClick}
            className={prefixCls + '-wrapper'}
            ref={this.wrapper}
            style={wrapperStyle}
            onKeyDown={this.onKeyDown}
            tabIndex={-1}
          >
            {this.renderDialogEle()}
          </div>
        </div>
      </Portal>
    );
  }
}

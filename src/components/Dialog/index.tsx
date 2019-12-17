import React, { Component } from 'react';
import Portal from '../Portal/PortalWrapper';
import Animate from 'rc-animate';
interface IDialogProps {
  visible: boolean;
  children?: React.ReactElement;
  prefixCls?: string;
  onClose?: () => void;
}
export default class extends Component<IDialogProps> {
  static defaultProps = {
    prefixCls: 'busyzz-dialog',
    onClose: () => {}
  };
  private wrapper = React.createRef<HTMLDivElement>();
  renderMask = () => {
    const { prefixCls, visible } = this.props;
    const wrapperStyle = {} as React.CSSProperties;
    return (
      <Animate transitionName="fade">
        {visible ? (
          <div style={wrapperStyle} className={prefixCls + '-mask'}></div>
        ) : null}
      </Animate>
    );
  };
  animateLeave = () => {
    console.log('leve');
    this.wrapper.current.style.display = 'none';
  };
  renderDialogEle = () => {
    const { prefixCls, visible } = this.props;
    return (
      <Animate onLeave={this.animateLeave} transitionName="zoom">
        {visible ? (
          <div className={prefixCls}>
            <div className={prefixCls + '-content'}>
              <div className={prefixCls + '-close'}>
                <span
                  onClick={this.close}
                  className={prefixCls + '-close-icon'}
                >
                  X
                </span>
              </div>
              <div className={prefixCls + '-header'}>header</div>
              <div className={prefixCls + '-body'}>body</div>
              <div className={prefixCls + '-footer'}>footer</div>
            </div>
          </div>
        ) : null}
      </Animate>
    );
  };
  //点击wrapper
  wrapperClick = e => {
    if (e.target === e.currentTarget) {
      this.close();
    }
  };
  //关闭dialog
  close = () => {
    const { onClose } = this.props;
    onClose();
  };
  render() {
    const { visible, prefixCls } = this.props;
    const wrapperStyle = {} as React.CSSProperties;
    console.log(visible);
    if (!visible) {
      wrapperStyle.display = 'none';
    }
    return (
      <Portal>
        <div className={prefixCls + '-root'}>
          {this.renderMask()}
          <div
            onClick={this.wrapperClick}
            className={prefixCls + '-wrapper'}
            ref={this.wrapper}
            style={wrapperStyle}
          >
            {this.renderDialogEle()}
          </div>
        </div>
      </Portal>
    );
  }
}

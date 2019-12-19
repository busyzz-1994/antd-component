import React, { Component } from 'react';
import Animate from 'rc-animate';
import { getPrefix, tuple } from '../_util';
import classNames from 'classnames';
import './style/index.scss';
const presetColor = tuple('#F4BD00', '#06D200', '#096dd9');
type presetColorType = (typeof presetColor)[number];
interface ITagProps {
  closable?: boolean;
  color?: string | presetColorType;
  onClose?: () => void;
  visible?: boolean;
}
export default class extends Component<ITagProps> {
  state = {
    visible: true
  };
  static getDerivedStateFromProps = nextProps => {
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible
      };
    }
    return null;
  };
  static defaultProps = {
    closable: false
  };
  close = () => {
    let { onClose } = this.props;
    if (onClose) {
      onClose();
    } else {
      this.setState({ visible: false });
    }
  };
  render() {
    const { visible } = this.state;
    const { children, closable, color } = this.props;
    const prefixCls = getPrefix('tag');
    const classnames = classNames(prefixCls, {
      [`${prefixCls}-color`]: !!color
    });
    const style = {
      backgroundColor: color,
      borderColor: color
    } as React.CSSProperties;
    const tag = (
      <div className={classnames} style={style}>
        <span>{children}</span>
        {closable && (
          <span onClick={this.close} className={prefixCls + '-closer'}>
            X
          </span>
        )}
      </div>
    );
    return <Animate transitionName="zoom">{visible ? tag : null}</Animate>;
  }
}

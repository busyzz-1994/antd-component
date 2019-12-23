import React, { Component } from 'react';
import './style/index.scss';
import { getPrefix } from '../_util';
import classNames from 'classnames';
import { node } from 'prop-types';
interface IProps {
  size?: number;
  shape?: 'circle' | 'square';
  style?: React.CSSProperties;
  className?: string;
}
export default class extends Component<IProps> {
  static defaultProps: Partial<IProps> = {
    size: 32,
    shape: 'square'
  };
  state = {
    scale: 1
  };
  avatarNode = React.createRef<HTMLDivElement>();
  childrenNode = React.createRef<HTMLDivElement>();
  componentDidMount() {
    this.setScale();
  }
  setScale = () => {
    let avatarWidth = this.avatarNode.current.offsetWidth;
    let childrenNodeWidth = this.childrenNode.current.offsetWidth;
    this.setState({
      scale:
        avatarWidth - 8 > childrenNodeWidth
          ? 1
          : (avatarWidth - 8) / childrenNodeWidth
    });
  };
  renderAvatar = () => {
    let prefixCls = getPrefix('avatar');
    let { size, shape, style, className } = this.props;
    let { scale } = this.state;
    let s = `translateX(-50%) scale(${scale})`;
    let avatarStyle = {
      width: size,
      height: size,
      lineHeight: `${size + 2}px`,
      ...style
    } as React.CSSProperties;
    let childStyle: React.CSSProperties = {
      transform: s,
      WebkitTransform: s,
      msTransform: s
    };
    let avatarCls = classNames(
      prefixCls,
      {
        [`${prefixCls}-${shape}`]: !!shape
      },
      className
    );
    return (
      <div style={avatarStyle} ref={this.avatarNode} className={avatarCls}>
        <span
          style={childStyle}
          ref={this.childrenNode}
          className={prefixCls + '-string'}
        >
          busyzz
        </span>
      </div>
    );
  };
  render() {
    let prefixCls = getPrefix('avatar');
    return <div className={prefixCls + '-wrapper'}>{this.renderAvatar()}</div>;
  }
}

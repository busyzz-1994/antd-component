import React, { Component } from 'react';
import { getPrefix } from '../_util';
import './style/index.scss';
import classNames from 'classnames';
let prefixCls = getPrefix('badge');
interface IProps {
  dot?: boolean;
  count?: number;
  overflowCount?: number;
  showZero?: boolean;
  offset?: [number, number];
  color?: string;
  title?: any;
  text?: React.ReactNode;
  dotActived?: boolean;
}
export default class extends Component<IProps> {
  static defaultProps: Partial<IProps> = {
    showZero: false,
    overflowCount: 99,
    offset: [0, 0]
  };
  renderCount = () => {
    let { count, showZero, overflowCount, color } = this.props;
    let countStyle = {
      backgroundColor: color
    };
    if (count !== undefined) {
      if (!showZero && count === 0) return null;
      let str = count > overflowCount ? overflowCount + '+' : count;
      return (
        <div style={countStyle} className={prefixCls + '-count'}>
          {str}
        </div>
      );
    }
    return null;
  };
  render() {
    let {
      children,
      dot,
      offset,
      color,
      title,
      count,
      text,
      dotActived
    } = this.props;
    let badgeStyle: React.CSSProperties = {
      right: offset[0],
      top: offset[1],
      ...(!children && { position: 'static', transform: 'translate(0,0)' })
    };
    title = title || count;
    return (
      <div title={title} className={prefixCls + '-wrapper'}>
        <div style={badgeStyle} className={prefixCls}>
          {dot && (
            <div
              style={{ background: color, borderColor: color }}
              className={classNames(prefixCls + '-dot', { active: dotActived })}
            ></div>
          )}
          {!dot && this.renderCount()}
        </div>
        {/* 显示文字text */}
        {!children && text ? (
          <span className={prefixCls + '-text'}>{text}</span>
        ) : null}
        <div>{children}</div>
      </div>
    );
  }
}

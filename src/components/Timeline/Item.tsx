import React, { Component } from 'react';
import { getPrefix } from '../_util';
import classNames from 'classnames';
interface IProps {
  children?: React.ReactNode;
  lastItem?: boolean;
  color?: string;
  dot?: React.ReactNode;
  contentPosi?: 'left' | 'right';
  position?: 'left' | 'right';
}
export default class extends Component<IProps> {
  static defaultProps = {
    color: '#1890FF'
  };
  renderDot = itemCls => {
    const { dot, color } = this.props;
    if (dot) return dot;
    return (
      <div
        style={{ borderColor: color }}
        className={itemCls + '-dot-default'}
      ></div>
    );
  };
  render() {
    const { contentPosi } = this.props;
    let prefixCls = getPrefix('timeline');
    let itemCls = classNames(prefixCls + '-item');
    let contentCls = classNames(itemCls + '-content', {
      [`${itemCls}-content-${contentPosi}`]: !!contentPosi
    });
    const { children, lastItem } = this.props;
    return (
      <div className={classNames(itemCls, { [`${itemCls}-last`]: lastItem })}>
        <div className={itemCls + '-dot'}>{this.renderDot(itemCls)}</div>
        <div className={itemCls + '-line'}></div>
        <div className={contentCls}>{children}</div>
      </div>
    );
  }
}

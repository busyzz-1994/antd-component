import React, { Component } from 'react';
import { getPrefix } from '../_util';
import classNames from 'classnames';
import './style/index.scss';
interface IProps {
  character?: React.ReactNode;
  index?: number;
  value?: number;
  onHover?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  color?: string;
  backgroundColor?: string;
  allowHalf?: boolean;
}
export default class extends Component<IProps> {
  getClass = () => {
    const { index, value, allowHalf } = this.props;
    const isEmpty = value <= index;
    const isHalf = value - index === 0.5 && allowHalf;
    const prefixCls = getPrefix('rate-start');
    const classes = classNames(prefixCls, {
      [`${prefixCls}-empty`]: isEmpty,
      [`${prefixCls}-half`]: isHalf
    });
    return classes;
  };
  render() {
    const { character, onHover, onClick, color, backgroundColor } = this.props;
    const prefixCls = getPrefix('rate-start');
    const classes = this.getClass();
    return (
      <div onClick={onClick} onMouseMove={onHover} className={classes}>
        <div
          style={{ color: backgroundColor }}
          className={`${prefixCls}-first`}
        >
          {character}
        </div>
        <div style={{ color }} className={`${prefixCls}-second`}>
          {character}
        </div>
      </div>
    );
  }
}

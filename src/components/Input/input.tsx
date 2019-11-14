import React, { Component } from 'react';
import classNames from 'classnames';
import { getPrefix, Omit, tuple } from '../_util';
import omit from 'omit.js';
export const inputSize = tuple('small', 'default', 'large');
export type InputSize = (typeof inputSize)[number];
interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  addonAfter?: React.ReactNode | string;
  addonBefore?: React.ReactNode | string;
}
export default class extends Component<InputProps> {
  renderInput() {
    const { className, size, ...rest } = this.props;
    const prefixCls = getPrefix('input');
    const classes = classNames(
      prefixCls,
      {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${size}`]: size
      },
      className
    );
    const otherProps = omit(rest, []);
    return <input {...otherProps} className={classes} />;
  }
  render() {
    return this.renderInput();
  }
}

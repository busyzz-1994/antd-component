import React, { Component } from 'react';
import classNames from 'classnames';
import { getPrefix, Omit, tuple } from '../_util';
import omit from 'omit.js';
export const inputSize = tuple('small', 'default', 'large');
export type InputSize = (typeof inputSize)[number];
interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: InputSize;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}
export default class extends Component<InputProps> {
  hasPreFixOrSuffix = () => {
    let { suffix, prefix } = this.props;
    if (suffix || prefix) {
      return true;
    } else {
      return false;
    }
  };
  getInputCls = () => {
    const { className, size } = this.props;
    const prefixCls = getPrefix('input');
    const classes = classNames(
      prefixCls,
      {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${size}`]: size
      },
      className
    );
    return classes;
  };
  renderInputWithSuffix = children => {
    let suffixAndPrefix = this.hasPreFixOrSuffix();
    if (!suffixAndPrefix) return children;
    const prefixCls = getPrefix('input');
    let { suffix, prefix } = this.props;
    const classes = classNames(this.getInputCls(), {
      [`${prefixCls}-suffix`]: suffix,
      [`${prefixCls}-prefix`]: prefix
    });
    children = React.cloneElement(children, {
      className: classes
    });
    return (
      <span
        className={classNames({
          [`${prefixCls}-affix-wrapper`]: true
        })}
      >
        <span
          className={classNames({
            [`busyzz-prefix`]: prefix
          })}
        >
          {prefix}
        </span>
        {children}
        <span
          className={classNames({
            [`busyzz-suffix`]: suffix
          })}
        >
          {suffix}
        </span>
      </span>
    );
    // return children;
  };
  renderInput() {
    const { className, size, ...rest } = this.props;
    const classes = this.getInputCls();
    const otherProps = omit(rest, []);
    return this.renderInputWithSuffix(
      <input {...otherProps} className={classes} />
    );
  }
  render() {
    return this.renderInput();
  }
}

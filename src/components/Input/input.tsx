import React, { Component, Children } from 'react';
import classNames from 'classnames';
import { getPrefix, Omit, tuple } from '../_util';
import omit from 'omit.js';
import { Icon } from 'antd';
export const inputSize = tuple('small', 'default', 'large');
export type InputSize = (typeof inputSize)[number];
interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: InputSize;
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  disabled?: boolean;
  allowClear?: boolean;
}
interface IState {
  value: any;
}
function fixValue(val) {
  if (val === null || val === undefined) {
    return '';
  }
  return val;
}
export default class extends Component<InputProps, IState> {
  static getDerivedStateFromProps(nextProps: InputProps) {
    if ('value' in nextProps) {
      return { value: nextProps.value };
    }
    return null;
  }
  constructor(props) {
    super(props);
    let { value, defaultValue } = this.props;
    value = typeof value === 'undefined' ? defaultValue : value;
    this.state = {
      value
    };
  }
  input: HTMLInputElement;
  saveInput = (node: HTMLInputElement) => {
    this.input = node;
  };
  hasPreFixOrSuffix = () => {
    let { suffix, prefix, allowClear } = this.props;
    return suffix || prefix || allowClear;
  };

  hasAddon = () => {
    let { addonAfter, addonBefore } = this.props;
    return addonAfter || addonBefore;
  };
  setValue = (val, ev, callback?: () => void) => {
    if ('value' in this.props) {
      const { onChange } = this.props;
      if (ev.type === 'click') {
        let event = Object.create(ev);
        event.target = this.input;
        event.currentTarget = this.input;
        this.input.value = '';
        onChange && onChange(event);
        callback();
        return;
      }
      onChange && onChange(ev as React.ChangeEvent<HTMLInputElement>);
    } else {
      this.setState({ value: val }, callback);
    }
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setValue(e.target.value, e);
  };
  handleReset = (e: React.MouseEvent<HTMLElement>) => {
    this.setValue('', e, () => {
      this.onFocus();
    });
  };
  onFocus = () => {
    this.input.focus();
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
  renderClearFix = () => {
    let { value } = this.state;
    let { allowClear } = this.props;
    const prefixCls = getPrefix('input');
    if (!allowClear || value === undefined || value === null || value === '') {
      return null;
    }
    return (
      <Icon
        type="close-circle"
        theme="filled"
        onClick={this.handleReset}
        className={`${prefixCls}-clear-icon`}
        role="button"
      />
    );
  };
  renderInputWithAddon = children => {
    let addon = this.hasAddon();
    if (!addon) return children;
    const prefixCls = getPrefix('input');
    let { addonAfter, addonBefore } = this.props;
    return (
      <span className={`${prefixCls}-addon-wrapper`}>
        <span
          className={classNames({
            [`${prefixCls}-addon-before`]: addonBefore
          })}
        >
          {addonBefore}
        </span>
        {children}
        <span
          className={classNames({
            [`${prefixCls}-addon-after`]: addonAfter
          })}
        >
          {addonAfter}
        </span>
      </span>
    );
  };
  renderInputWithSuffix = children => {
    let suffixAndPrefix = this.hasPreFixOrSuffix();
    if (!suffixAndPrefix) return children;
    const prefixCls = getPrefix('input');
    let { suffix, prefix, allowClear } = this.props;
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
            [`busyzz-suffix`]: suffix || allowClear
          })}
        >
          {this.renderClearFix()}
          {suffix}
        </span>
      </span>
    );
    // return children;
  };
  renderInput() {
    const { className, size, disabled, ...rest } = this.props;
    const { value } = this.state;
    const classes = this.getInputCls();
    const otherProps = omit(this.props, [
      'addonBefore',
      'addonAfter',
      'suffix',
      'prefix',
      'size',
      'defaultValue',
      'value',
      'onChange',
      'allowClear'
    ]);
    return this.renderInputWithSuffix(
      <input
        {...otherProps}
        className={classes}
        value={fixValue(value)}
        onChange={this.handleChange}
        ref={this.saveInput}
      />
    );
  }
  renderComponent() {
    return this.renderInputWithAddon(this.renderInput());
  }
  render() {
    return this.renderComponent();
  }
}

import React, { Component } from 'react';
import classNames from 'classnames';
import { getPrefix } from '../_util';
import omit from 'omit.js';
import CheckboxGroup from './checkboxGroup';
export interface IProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler;
  disabled?: boolean;
}
interface IState {
  checked: boolean;
}
export default class extends Component<IProps, IState> {
  static CheckboxGroup = CheckboxGroup;
  static defaultProps = {
    disabled: false
  };
  static getDerivedStateFromProps = nextProps => {
    if ('checked' in nextProps) {
      return { checked: nextProps.checked };
    }
    return null;
  };
  constructor(props) {
    super(props);
    let { checked, defaultChecked } = props;
    this.state = {
      checked: 'checked' in props ? checked : !!defaultChecked
    };
  }
  changehandler = e => {
    let { onChange } = this.props;
    if (onChange) {
      onChange(e);
    } else {
      this.setState({ checked: e.target.checked });
    }
  };
  renderCheckbox = () => {
    const { disabled, children, ...rest } = this.props;
    const { checked } = this.state;
    const prefixCls = getPrefix('checkbox');
    const classes = classNames(prefixCls, {
      [`${prefixCls}-checked`]: checked
    });
    const labelClasses = classNames({
      [`${prefixCls}-wrapper`]: true,
      [`${prefixCls}-wrapper-disabled`]: disabled
    });
    const otherProps = omit(rest, ['defaultChecked', 'checked']);

    return (
      <label className={labelClasses}>
        <span className={classes}>
          <input
            {...otherProps}
            disabled={disabled}
            onChange={this.changehandler}
            checked={checked}
            type="checkbox"
          />
          <span className={`${prefixCls}-inner`}></span>
        </span>
        {children !== undefined && (
          <span className={`${prefixCls}-text`}>{children}</span>
        )}
      </label>
    );
  };
  render() {
    return this.renderCheckbox();
  }
}

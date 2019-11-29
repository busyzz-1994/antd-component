import React, { Component } from 'react';
import { getPrefix } from '../utils';
import classNames from 'classnames';
import Group, { RadioContext } from './group';
interface IProps {
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  disabled?: boolean;
}
interface IState {
  checked: boolean;
  value: any;
}
export default class extends Component<IProps, IState> {
  static contextType = RadioContext;
  static Group = Group;
  constructor(props) {
    super(props);
    let { checked, defaultChecked, value } = this.props;
    this.state = {
      checked: checked !== undefined ? checked : defaultChecked,
      value
    };
  }
  onChange = e => {
    let { onChange } = this.context;
    let { value } = this.state;
    let val = typeof value === 'number' ? +e.target.value : e.target.value;
    onChange && onChange(val);
  };
  renderRadio = () => {
    let { value } = this.state;
    let { value: contextValue, disabled: contextDisabled } = this.context;
    let { children, disabled } = this.props;
    let prefixCls = getPrefix('radio');
    disabled = disabled !== undefined ? disabled : !!contextDisabled;
    let wrapperCls = classNames(prefixCls + '-wrapper', {
      [`${prefixCls}-wrapper-disabled`]: disabled
    });
    let radioCls = classNames(prefixCls, {
      [`${prefixCls}-checked`]: contextValue === value
    });
    return (
      <RadioContext.Consumer>
        {() => (
          <label className={wrapperCls}>
            <span className={radioCls}>
              <input
                disabled={disabled}
                checked={contextValue === value}
                className={prefixCls + '-input'}
                type="radio"
                value={value}
                onChange={this.onChange}
              />
              <span className={prefixCls + '-inner'}></span>
            </span>
            {children ? (
              <span className={prefixCls + '-text'}>{children}</span>
            ) : null}
          </label>
        )}
      </RadioContext.Consumer>
    );
  };
  render() {
    return this.renderRadio();
  }
}

import React, { Component } from 'react';
import Trigger from 'rc-trigger';
import { getPrefix } from '../_util';
import './style/index.scss';
import { Icon } from 'antd';
import classNames from 'classnames';
interface IProps {
  key?: string | number;
  value: string | number;
  className?: string;
  onChange?: (value: string | number) => void;
  selectedValue?: string | number;
}
export default class extends Component<IProps> {
  render() {
    const { children, value, onChange, selectedValue } = this.props;
    const prefixCls = getPrefix('select-popup-item');
    const classes = classNames(prefixCls, {
      active: value === selectedValue
    });
    return (
      <div onClick={() => onChange(value)} className={classes}>
        {children}
      </div>
    );
  }
}

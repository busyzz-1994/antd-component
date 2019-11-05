import React, { Component } from 'react';
import { tuple } from '../utils';
// import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { getPrefix } from '../utils';
import './style/index.scss';
const ButtonTypes = tuple('default', 'primary', 'danger');
type ButtonType = (typeof ButtonTypes)[number];
interface BaseButtonProps {
  type?: ButtonType;
}
export default class extends Component<BaseButtonProps> {
  static defaultProps = {
    type: 'default'
  };
  render() {
    let { type } = this.props;
    const prefixCls = getPrefix('btn');
    console.log(prefixCls);
    const classes = classNames(prefixCls, {
      [`${prefixCls}-${type}`]: type
    });
    return <button className={classes}>{type}</button>;
  }
}

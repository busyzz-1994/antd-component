import React, { Component } from 'react';
import classNames from 'classnames';
import { getPrefix } from '../_util';
export default class extends Component {
  render() {
    const prefixCls = getPrefix('input');
    const classes = classNames(prefixCls, {
      [`${prefixCls}-input`]: true
    });
    return <input className={classes} />;
  }
}

import React, { Component } from 'react';
import { getPrefix } from '../utils';
import { ButtonSize, ButtonType, ButtonShape } from './button';
import classNames from 'classnames';
interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  style?: React.CSSProperties;
  className?: string;
  shape?: ButtonShape;
}
export default class extends Component<ButtonGroupProps> {
  static defaultProps = {
    type: 'default'
  };
  render() {
    let { children, size, type, style, shape } = this.props;
    let childLen = React.Children.count(children);
    const prefixCls = getPrefix('btn-group');
    let classes = classNames(prefixCls, {
      [`${prefixCls}-multi`]: childLen > 1,
      [`${prefixCls}-multi-default`]: childLen > 1 && type === 'default'
    });
    return (
      <div className={classes} style={style}>
        {React.Children.map(children, item => {
          return React.cloneElement(item as React.ReactElement, {
            size,
            type,
            shape
          });
        })}
      </div>
    );
  }
}

import React, { Component } from 'react';
import { RowContext } from './Row';
import classNames from 'classnames';
import { getPrefix } from '../utils';
type ColSpanProps = number;
export interface ColSize {
  span?: ColSpanProps;
  order?: ColSpanProps;
  offset?: ColSpanProps;
  push?: ColSpanProps;
  pull?: ColSpanProps;
}
export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: ColSpanProps;
  offset?: ColSpanProps;
  pull?: ColSpanProps;
  push?: ColSpanProps;
  order?: ColSpanProps;
  xs?: ColSpanProps | ColSize;
  sm?: ColSpanProps | ColSize;
  md?: ColSpanProps | ColSize;
  lg?: ColSpanProps | ColSize;
  xl?: ColSpanProps | ColSize;
  xxl?: ColSpanProps | ColSize;
}
export default class extends Component<ColProps> {
  static defaultProps = {
    span: 24,
    style: {}
  };
  render() {
    let {
      children,
      style,
      className,
      span,
      offset,
      pull,
      push,
      order,
      ...rest
    } = this.props;
    let prefix = getPrefix('col');
    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
      let spanProps: ColSize = {};
      if (typeof this.props[size] === 'number') {
        spanProps.span = this.props[size];
      } else {
        spanProps = this.props[size] || {};
      }
      delete rest[size];
      sizeClassObj = {
        ...sizeClassObj,
        [`${prefix}-${size}-${spanProps.span}`]: spanProps.span !== undefined,
        [`${prefix}-${size}-offset-${spanProps.offset}`]:
          spanProps.offset !== undefined,
        [`${prefix}-${size}-push-${spanProps.push}`]:
          spanProps.push !== undefined,
        [`${prefix}-${size}-pull-${spanProps.pull}`]:
          spanProps.pull !== undefined,
        [`${prefix}-${size}-order-${spanProps.order}`]:
          spanProps.order !== undefined
      };
    });
    let classes = classNames(
      prefix,
      {
        [`${prefix}-${span}`]: true,
        [`${prefix}-offset-${offset}`]: offset !== undefined,
        [`${prefix}-push-${push}`]: push !== undefined,
        [`${prefix}-pull-${pull}`]: pull !== undefined,
        [`${prefix}-order-${order}`]: order !== undefined
      },
      sizeClassObj,
      className
    );
    return (
      <RowContext.Consumer>
        {({ gutter }) => {
          style = {
            ...style,
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2
          };
          return (
            <div className={classes} style={style} {...rest}>
              {children}
            </div>
          );
        }}
      </RowContext.Consumer>
    );
  }
}

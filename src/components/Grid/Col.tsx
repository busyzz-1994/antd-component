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
}
export default class extends Component<ColProps> {
  static defaultProps = {
    span: 24,
    style: {}
  };
  render() {
    let { children, style, className, span } = this.props;
    let prefix = getPrefix('col');
    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
      let spanProps: ColSize = {};
      if (typeof this.props[size] === 'number') {
        spanProps.span = this.props[size];
      } else {
        spanProps = this.props[size] || {};
      }
      sizeClassObj = {
        ...sizeClassObj
      };
    });
    let classes = classNames(
      prefix,
      {
        [`${prefix}-${span}`]: true
      },
      className
    );
    return (
      <RowContext.Consumer>
        {({ gutter }) => {
          console.log(gutter);
          style = {
            ...style,
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2
          };
          return (
            <div className={classes} style={style}>
              {children}
            </div>
          );
        }}
      </RowContext.Consumer>
    );
  }
}

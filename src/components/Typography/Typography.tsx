import React, { Component } from 'react';
import { getPrefix } from '../utils';
import classNames from 'classnames';
interface TypographyProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
const Typography: React.SFC<TypographyProps> = ({
  children,
  className,
  ...rest
}) => {
  const prefixCls = getPrefix('typography');
  const classes = classNames(prefixCls, className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
export default Typography;

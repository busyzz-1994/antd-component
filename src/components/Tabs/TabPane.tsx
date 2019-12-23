import React, { Component } from 'react';
interface IProps {
  tab?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ref?: () => void;
}
export default class extends Component<IProps> {
  render() {
    const { children, ...rest } = this.props;
    return <div {...rest}>{children}</div>;
  }
}

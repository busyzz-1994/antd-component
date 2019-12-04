import React, { Component } from 'react';
import Portal from './Portal';

interface IProps {
  children: React.ReactElement;
  getContainer?: any;
  wrapperClassName?: string;
}
export default class extends Component<IProps> {
  getParent = () => {
    let { getContainer } = this.props;
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    } else if (typeof getContainer === 'function') {
      return getContainer();
    } else if (
      typeof getContainer === 'object' &&
      getContainer instanceof HTMLElement
    ) {
      return getContainer;
    }
    return document.body;
  };
  getContainer = () => {
    const { wrapperClassName } = this.props;
    const div = document.createElement('div');
    const parent = this.getParent() as HTMLElement;
    if (wrapperClassName) div.className = wrapperClassName;
    if (parent) parent.appendChild(div);
    return div;
  };
  render() {
    const { children } = this.props;
    return <Portal getContainer={this.getContainer}>{children}</Portal>;
  }
}

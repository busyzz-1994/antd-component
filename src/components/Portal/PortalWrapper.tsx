import React, { Component } from 'react';
import Portal from './Portal';

interface IProps {
  visible?: boolean;
  children: React.ReactElement;
  getContainer?: any;
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
}
export default class extends Component<IProps> {
  static defaultProps = {
    wrapperStyle: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%'
    },
    visible: true
  };
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
    const { wrapperClassName, wrapperStyle } = this.props;
    const div = document.createElement('div');
    const parent = this.getParent() as HTMLElement;
    if (wrapperClassName) div.className = wrapperClassName;
    if (wrapperStyle) {
      for (let key in wrapperStyle) {
        div.style[key] = wrapperStyle[key];
      }
    }
    if (parent) parent.appendChild(div);
    return div;
  };
  render() {
    const { children, visible } = this.props;
    return (
      visible && <Portal getContainer={this.getContainer}>{children}</Portal>
    );
  }
}

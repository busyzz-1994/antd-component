import React, { Component } from 'react';
import { createPortal } from 'react-dom';
interface IProps {
  children: React.ReactNode;
  getContainer?: () => HTMLElement;
}
export default class extends Component<IProps> {
  container = null as HTMLElement;
  componentDidMount() {
    this.createContainer();
  }
  createContainer = () => {
    let { getContainer } = this.props;
    this.container = getContainer ? getContainer() : document.body;
    this.forceUpdate();
  };
  componentWillUnmount() {
    if (this.container) {
      this.container.parentNode.removeChild(this.container);
    }
  }
  render() {
    if (this.container) {
      return createPortal(this.props.children, this.container);
    }
    return null;
  }
}

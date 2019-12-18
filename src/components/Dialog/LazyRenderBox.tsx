import React, { Component } from 'react';
export default class LazyRenderBox extends Component<any> {
  render() {
    return <div {...this.props} />;
  }
}

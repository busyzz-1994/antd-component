import React, { Component } from 'react';
interface Type {
  name?: string;
}
interface IProps extends React.HTMLAttributes<HTMLDivElement>, Type {}
export default class extends Component<IProps> {
  render() {
    return (
      <div>
        <a href="javascript:;">dddd</a>
      </div>
    );
  }
}

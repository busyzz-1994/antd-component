import React, { Component } from 'react';

interface Type {
  name?: string;
}
interface IProps extends React.HTMLAttributes<HTMLDivElement>, Type {}
export default class extends Component<IProps> {
  say = () => {
    console.log('say hello');
  };
  render() {
    return (
      <div id="test">
        <div>this is test</div>
      </div>
    );
  }
}

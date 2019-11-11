import React, { Component } from 'react';
import Base, { BaseProps } from './Base';
import { tuple_num } from '../utils';
const levelProps = tuple_num(1, 2, 3, 4);
type LevelProp = (typeof levelProps)[number];
interface TilteProps extends BaseProps {
  level?: LevelProp;
}
export default class extends Component<TilteProps> {
  render() {
    const { level, children, ...rest } = this.props;
    let component = level ? `h${level}` : 'h4';
    return (
      <Base {...rest} component={component}>
        {children}
      </Base>
    );
  }
}

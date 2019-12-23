import React, { Component } from 'react';
import { getPrefix } from '../_util';
import classNames from 'classnames';
import './style/index.scss';
import Item from './Item';
interface IProps {
  mode?: 'left' | 'mid' | 'right';
  reverse?: boolean;
}
export default class extends Component<IProps> {
  static Item = Item;
  static defaultProps = {
    mode: 'left',
    reverse: false
  };
  getItem = (): Array<any> => {
    let { children, reverse } = this.props;
    let childLen = React.Children.count(children);
    return React.Children.map(children, (child, index) => {
      //@ts-ignore
      let position = child.props.position;
      let odd = index % 2 === 0 ? 'left' : 'right';
      let contentPosi = position ? position : odd;
      return React.cloneElement(child as React.ReactElement, {
        lastItem: reverse ? index === 0 : index === childLen - 1,
        contentPosi
      });
    }) as Array<any>;
  };
  render() {
    let { mode, reverse } = this.props;
    let prefixCls = getPrefix('timeline');
    let classes = classNames(prefixCls, { [`${prefixCls}-${mode}`]: !!mode });
    return (
      <div className={classes}>
        {reverse ? this.getItem().reverse() : this.getItem()}
      </div>
    );
  }
}

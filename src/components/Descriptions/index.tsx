import React, { Component } from 'react';
import classNames from 'classnames';
import { getPrefix } from '../_util';
import './style/index.scss';
import Item from './Item';
import ResponsiveObserver, {
  BreakpointMapBase,
  responsiveList
} from '../_util/responsiveObserve';
interface IProps {
  title?: string;
  bordered?: boolean;
  column?: number | BreakpointMapBase<number>;
  size?: 'default' | 'small' | 'large';
}
interface IState {
  screen: BreakpointMapBase<boolean>;
}
export default class extends Component<IProps, IState> {
  static Item = Item;
  static defaultProps: Partial<IProps> = {
    column: 3,
    size: 'default'
  };
  constructor(props) {
    super(props);
    this.state = {
      screen: {}
    };
  }
  renderChildren = () => {
    let { children } = this.props;
    let column = this.getColumn();
    let childrenArr = React.Children.toArray(children);
    let resArr = [];
    for (let i = 0; i < childrenArr.length; i += column) {
      //@ts-ignore
      let span = childrenArr[i].props.span;
      resArr.push(childrenArr.slice(i, i + (column - span + 1)));
    }
    return resArr.map((item, idx) => {
      return (
        <tr key={idx}>
          {item.map(child => {
            return React.cloneElement(child as React.ReactElement);
          })}
        </tr>
      );
    });
  };
  token = null;
  componentDidMount() {
    this.token = ResponsiveObserver.subscribe(screen => {
      this.setState({ screen });
    });
  }
  componentWillUnmount() {
    ResponsiveObserver.unsubscribe(this.token);
  }
  getColumn = () => {
    let { column } = this.props;
    let { screen } = this.state;
    if (typeof column === 'object') {
      for (let i = 0; i < responsiveList.length; i++) {
        let point = responsiveList[i];
        if (column[point] && screen[point]) {
          return column[point];
        }
      }
    }
    return column as number;
  };
  render() {
    let { title, bordered, size } = this.props;
    let perfixCls = getPrefix('descriptions');
    return (
      <div
        className={classNames(perfixCls, {
          [`${perfixCls}-bordered`]: bordered,
          [`${perfixCls}-${size}`]: !!size
        })}
      >
        <div className={perfixCls + '-title'}>{title}</div>
        <div className={perfixCls + '-view'}>
          <table>
            <tbody>{this.renderChildren()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import responsiveObserve, {
  BreakpointMap,
  BreakpointMapString,
  responsiveList
} from '../_util/responsiveObserve';
import { getPrefix } from '../_util';
import classNames from 'classnames';
export const RowContext = React.createContext({
  gutter: 0
});
type Gutter = number | BreakpointMap;

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: Gutter;
  type?: 'flex';
}
interface IState {
  screen?: BreakpointMapString;
}
export default class extends Component<RowProps, IState> {
  static defaultProps = {
    gutter: 0
  };
  state = {
    screen: {}
  };
  token: number = -1;
  componentDidMount() {
    this.token = responsiveObserve.subscribe(screen => {
      if (typeof this.props.gutter === 'object') {
        this.setState({ screen });
      }
    });
  }
  componentWillUnmount() {
    responsiveObserve.unsubscribe(this.token);
  }
  getGutter() {
    let { gutter } = this.props;
    if (typeof gutter === 'object') {
      for (let i = 0; i < responsiveList.length; i++) {
        let point = responsiveList[i];
        if (gutter[point] !== undefined && this.state.screen[point]) {
          return gutter[point];
        }
      }
      return 0;
    }
    return gutter as number;
  }
  render() {
    let { children, type, style, className, ...rest } = this.props;
    let gutter = this.getGutter();
    let prefix = getPrefix('row');
    let classes = classNames(
      {
        [prefix]: !type
      },
      className
    );
    style = {
      ...style,
      ...(gutter > 0 && {
        marginLeft: gutter / -2,
        marginRight: gutter / -2
      })
    };
    return (
      <RowContext.Provider value={{ gutter }}>
        <div className={classes} style={style} {...rest}>
          {children}
        </div>
      </RowContext.Provider>
    );
  }
}

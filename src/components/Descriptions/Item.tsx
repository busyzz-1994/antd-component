import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { getPrefix } from '../_util';
interface IProps {
  label?: React.ReactNode;
  span?: number;
}
export default class extends Component<IProps> {
  static defaultProps = {
    span: 1
  };
  render() {
    let perfixCls = getPrefix('descriptions');
    let { label, children, span } = this.props;
    span = (span - 1) * 2 + 1;
    return (
      <Fragment>
        <td className={perfixCls + '-item-label'}>{label}</td>
        <td colSpan={span}>{children}</td>
      </Fragment>
    );
  }
}

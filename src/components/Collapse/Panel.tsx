import React, { Component } from 'react';
import { getPrefix } from '../_util';
import { Icon } from 'antd';
import './style/index.scss';
import classNames from 'classnames';
const prefixCls = getPrefix('collapse');
type eventFn = (key) => void;
export interface IPanel {
  key?: string | number;
  active?: boolean;
  onClick?: (key, onChange: eventFn) => void;
  onChange?: eventFn;
  activeKey?: string | number;
  showArrow?: boolean;
  header?: React.ReactNode;
  children?: React.ReactNode;
}
export default class extends Component<IPanel> {
  static defaultProps = {
    showArrow: true
  };
  renderBody = () => {
    const { active, children } = this.props;
    let hideBodyStyle: React.CSSProperties = {
      padding: 0,
      height: 0,
      border: 'none'
    };
    let showBodyStyle: React.CSSProperties = {};
    let bodyStyle = active ? showBodyStyle : hideBodyStyle;
    return (
      <div style={bodyStyle} className={prefixCls + '-item-body'}>
        {children}
      </div>
    );
  };
  render() {
    let {
      onClick,
      activeKey,
      onChange,
      showArrow,
      active,
      header
    } = this.props;
    let showArrowHeaderStyle: React.CSSProperties = {
      padding: '12px 16px'
    };
    let headerStyle = !showArrow ? showArrowHeaderStyle : {};
    return (
      <div className={prefixCls + '-item'}>
        <div
          style={headerStyle}
          onClick={() => onClick(activeKey, onChange)}
          className={prefixCls + '-item-header'}
        >
          {showArrow && (
            <div
              className={classNames(prefixCls + '-item-header-icon', {
                active
              })}
            >
              <Icon type="right" />
            </div>
          )}
          <div>{header}</div>
        </div>
        {this.renderBody()}
      </div>
    );
  }
}

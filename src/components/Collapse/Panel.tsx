import React, { Component } from 'react';
import { getPrefix } from '../_util';
import './style/index.scss';
const prefixCls = getPrefix('collapse');
type eventFn = (key) => void;
export interface IPanel {
  key?: string | number;
  active?: boolean;
  onClick?: (key, onChange: eventFn) => void;
  onChange?: eventFn;
  activeKey?: string | number;
}
export default class extends Component<IPanel> {
  renderBody = () => {
    const { active } = this.props;
    let hideBodyStyle: React.CSSProperties = {
      padding: 0,
      height: 0,
      border: 'none'
    };
    let showBodyStyle: React.CSSProperties = {};
    let bodyStyle = active ? showBodyStyle : hideBodyStyle;
    return (
      <div style={bodyStyle} className={prefixCls + '-item-body'}>
        <div>zheijioj</div>
        <div style={{ marginTop: 100 }}></div>
        <div>dasdad</div>
      </div>
    );
  };
  render() {
    let { onClick, activeKey, onChange } = this.props;
    return (
      <div className={prefixCls + '-item'}>
        <div
          onClick={() => onClick(activeKey, onChange)}
          className={prefixCls + '-item-header'}
        >
          <div>dsdas</div>
        </div>
        {this.renderBody()}
      </div>
    );
  }
}

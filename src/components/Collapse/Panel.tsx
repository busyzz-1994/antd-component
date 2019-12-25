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
interface IState {
  maxHeight?: number;
}
export default class extends Component<IPanel, IState> {
  static defaultProps = {
    showArrow: true
  };
  state = {
    maxHeight: 0
  };
  box = React.createRef<HTMLDivElement>();
  componentDidMount() {
    this.setMaxHeight();
  }
  componentDidUpdate(prevProps, prevState) {
    let height = this.getBoxHeight();
    let { maxHeight } = prevState;
    if (height !== maxHeight) {
      this.setMaxHeight();
    }
  }
  setMaxHeight = () => {
    let maxHeight = this.getBoxHeight();
    this.setState({ maxHeight });
  };
  getBoxHeight = () => {
    try {
      let height = this.box.current.offsetHeight;
      return height;
    } catch (e) {}
  };
  renderBody = () => {
    const { maxHeight } = this.state;
    const { active, children } = this.props;
    const bodyHeight = active ? maxHeight : 0;
    let bodyStyle: React.CSSProperties = {
      height: bodyHeight,
      borderWidth: active ? '1px' : 0
    };
    return (
      <div style={bodyStyle} className={prefixCls + '-item-body'}>
        <div ref={this.box} className={prefixCls + '-item-body-box'}>
          {children}
        </div>
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

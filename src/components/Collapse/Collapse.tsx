import React, { Component } from 'react';
import { getPrefix, toggleArray } from '../_util';
import './style/index.scss';
import Panel from './Panel';
const prefixCls = getPrefix('collapse');
interface IProps {
  defaultActiveKey?: Array<string | number>;
  activeKey?: Array<string | number>;
}
interface IState {
  activeKey?: Array<string | number>;
}
export default class extends Component<IProps, IState> {
  static Panel = Panel;
  static getDerivedStateFromProps = nextProps => {
    if ('activeKey' in nextProps) {
      return {
        activeKey: nextProps.activeKey
      };
    }
    return null;
  };
  constructor(props) {
    super(props);
    let activeKey = props.activeKey ? props.activeKey : props.defaultActiveKey;
    this.state = {
      activeKey: activeKey || []
    };
  }
  panelChange = (key, onChange) => {
    let { activeKey } = this.state;
    activeKey = toggleArray(activeKey, key);
    if (onChange && 'activeKey' in this.props) {
      onChange(activeKey);
    } else {
      this.setState({ activeKey });
    }
  };
  render() {
    const { activeKey } = this.state;
    const { children } = this.props;
    return (
      <div className={prefixCls}>
        {React.Children.map(children, (child, index) => {
          //@ts-ignore
          let { key } = child;
          return React.cloneElement(child as React.ReactElement, {
            active: activeKey.indexOf(key) !== -1,
            onClick: this.panelChange,
            activeKey: key
          });
        })}
      </div>
    );
  }
}

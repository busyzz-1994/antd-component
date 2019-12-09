import React, { Component } from 'react';
import Trigger from 'rc-trigger';
import { getPrefix } from '../_util';
import './style/index.scss';
type actionType = 'hover' | 'click' | 'focus' | 'contextMenu';
type placementType = 'top' | 'left' | 'right' | 'bottom' | 'topLeft';
const placementMap = {
  top: {
    points: ['bc', 'tc'],
    offset: [0, -10],
    overflow: { adjustX: true, adjustY: true }
  },
  left: {
    points: ['cr', 'cl'],
    overflow: { adjustX: true, adjustY: true }
  },
  right: {
    points: ['cl', 'cr'],
    overflow: { adjustX: true, adjustY: true }
  }
};
interface TooltipProps {
  children: React.ReactNode;
  title: string | React.ReactNode;
  trigger: actionType[];
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  popupClassName?: string;
  popupStyle?: React.CSSProperties;
  placement?: placementType;
}
interface IState {
  visible: boolean;
}
export default class extends Component<TooltipProps, IState> {
  static defaultProps = {
    trigger: ['hover'],
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    placement: 'top'
  };
  static getDerivedStateFromProps = nextProps => {
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible
      };
    }
    return null;
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: !!props.visible
    };
  }
  getWrapper = title => {
    let prefixCls = getPrefix('tooltip');
    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-arrow`}></div>
        <div className={`${prefixCls}-inner`}>{title}</div>
      </div>
    );
  };
  getPopup = () => {
    let { title } = this.props;
    if (typeof title === 'string') {
      title = <span>{title}</span>;
      return this.getWrapper(title);
    } else {
      return this.getWrapper(title);
    }
  };
  onPopupVisibleChange = val => {
    let { onVisibleChange } = this.props;
    if (onVisibleChange) {
      onVisibleChange(val);
    } else {
      this.setState({
        visible: val
      });
    }
  };
  onPopupAlign = (node, align) => {
    let rect = node.getBoundingClientRect();
    node.style.transformOrigin = `${rect.width / 2}px ${rect.height}px`;
  };
  renderTooltip = () => {
    let { children, trigger, placement, popupStyle, ...rest } = this.props;
    let { visible } = this.state;
    let popup = this.getPopup();
    let popupAlign = placementMap[placement];
    return (
      <Trigger
        {...rest}
        popupAlign={popupAlign}
        action={trigger}
        popupStyle={{ position: 'absolute', ...popupStyle }}
        popup={popup}
        popupVisible={visible}
        onPopupVisibleChange={this.onPopupVisibleChange}
        prefixCls="busyzz-trigger-popup"
        popupTransitionName={'zoom-big-fast'}
        onPopupAlign={this.onPopupAlign}
      >
        {children}
      </Trigger>
    );
  };
  render() {
    return this.renderTooltip();
  }
}

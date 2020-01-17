import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Start from './start';
import { getPrefix } from '../_util';
import classNames from 'classnames';
import './style/index.scss';
interface IProps {
  count?: number;
  character?: React.ReactNode;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  backgroundColor: string;
  allowHalf?: boolean;
  disabled?: boolean;
}
interface IState {
  value: number;
  hoverValue: number;
}
export default class extends Component<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    count: 5,
    character: `★`,
    defaultValue: 0,
    color: '#fadb14',
    backgroundColor: '#e8e8e8',
    allowHalf: false,
    disabled: false
  };
  static getDerivedStateFromProps = nextProps => {
    if ('value' in nextProps) {
      return { value: nextProps.value };
    }
    return null;
  };
  constructor(props) {
    super(props);
    this.state = {
      value: props.value ? props.value : props.defaultValue,
      hoverValue: undefined
    };
  }
  starts = {};
  saveStart = index => node => {
    this.starts[index] = node;
  };
  getValue = (index, e) => {
    let dom = findDOMNode(this.starts[index]) as HTMLElement;
    let domRect = dom.getBoundingClientRect(),
      domLeft = domRect.left,
      domWidth = domRect.width,
      clientX = e.clientX,
      halfWidth = domWidth / 2,
      diffWidth = clientX - domLeft;
    let { value } = this.state;
    if (diffWidth > halfWidth) {
      value = index + 1;
    } else {
      value = index + 0.5;
    }
    return value;
  };
  onHover = index => (e: React.MouseEvent) => {
    let value = this.getValue(index, e);
    this.setState({ hoverValue: value });
  };
  onMouseLeave = () => {
    this.setState({
      hoverValue: undefined
    });
  };
  onClick = index => (e: React.MouseEvent) => {
    let { value: prevValue } = this.state;
    let value = this.getValue(index, e);
    if (value === prevValue) value = 0;
    let { onChange } = this.props;
    if (onChange) {
      onChange(value);
    } else {
      this.setState({ value });
    }
  };
  render() {
    const {
      count,
      character,
      style,
      className,
      color,
      backgroundColor,
      allowHalf,
      disabled
    } = this.props;
    const { value, hoverValue } = this.state;
    const prefixCls = getPrefix('rate');
    const classes = classNames(prefixCls, className);
    let starts = [];
    for (let i = 0; i < count; i++) {
      starts.push(
        <Start
          key={i}
          index={i}
          value={hoverValue !== undefined ? hoverValue : value}
          character={character}
          ref={this.saveStart(i)}
          onHover={this.onHover(i)}
          onClick={this.onClick(i)}
          color={color}
          backgroundColor={backgroundColor}
          allowHalf={allowHalf}
        />
      );
    }
    return (
      <div className={classes + '-wrapper'}>
        <div style={style} onMouseLeave={this.onMouseLeave} className={classes}>
          {starts}
        </div>
        {disabled && <div className={classes + '-disabled'}></div>}
      </div>
    );
  }
}

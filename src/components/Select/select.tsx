import React, { Component } from 'react';
import Trigger from 'rc-trigger';
import { getPrefix } from '../_util';
import './style/index.scss';
import { Icon } from 'antd';
import classNames from 'classnames';
import Option from './options';
interface IProps {
  width?: number;
  defaultValue?: string | number;
  value?: string | number;
  onChange?: (value) => void;
}
interface IState {
  selected: boolean;
  value?: string | number;
}
export default class extends Component<IProps, IState> {
  static defaultProps = {
    width: 120,
    defaultValue: ''
  };
  static getDerivedStateFromProps = nextProps => {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      };
    }
    return null;
  };
  static Option = Option;
  constructor(props) {
    super(props);
    this.state = {
      selected: true,
      value: props.value !== undefined ? props.value : props.defaultValue
    };
  }
  popupDom = null;
  selectDom = React.createRef<HTMLDivElement>();
  valueMap = null;
  onBodyClickHandler = e => {
    let selectDom = this.selectDom.current;
    let target = e.target;
    let doms = [selectDom, this.popupDom];
    for (let i = 0; i < doms.length; i++) {
      if (doms[i].contains(target) || doms[i] === target) return;
    }
    this.closeSelect();
  };
  componentDidMount() {
    document.body.addEventListener('click', this.onBodyClickHandler);
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.onBodyClickHandler);
  }
  toggleSelect = () => {
    this.setState(prevState => ({ selected: !prevState.selected }));
  };
  closeSelect = () => {
    this.setState({ selected: false });
  };
  onChange = value => {
    let { onChange } = this.props;
    if (onChange) {
      onChange(value);
    } else {
      this.setState({ value }, this.closeSelect);
    }
  };
  renderPopup = () => {
    const { children } = this.props;
    const { value } = this.state;
    const prefixCls = getPrefix('select');
    return (
      <div className={prefixCls + '-popup'}>
        {React.Children.map(children, (item, index) => {
          return React.cloneElement(item as React.ReactElement, {
            onChange: this.onChange,
            selectedValue: value
          });
        })}
      </div>
    );
  };
  onPopupAlign = popupDom => {
    this.popupDom = popupDom;
  };

  getLableByValue = value => {
    const { children } = this.props;
    if (!this.valueMap) {
      this.valueMap = {};
      React.Children.map(children, (item, index) => {
        //@ts-ignore
        let key = item.props.value,
          //@ts-ignore
          label = item.props.children;
        this.valueMap[key] = label;
      });
    }
    return this.valueMap[value];
  };
  render() {
    const { selected, value } = this.state;
    const { width } = this.props;
    const prefixCls = getPrefix('select');
    const classes = classNames(prefixCls, {
      [`${prefixCls}-selected`]: selected
    });
    const label = this.getLableByValue(value);
    return (
      <Trigger
        action={['click']}
        popupVisible={selected}
        popup={this.renderPopup()}
        popupAlign={{
          points: ['tl', 'bl'],
          offset: [0, 3]
        }}
        popupStyle={{ width }}
        popupTransitionName="fade"
        onPopupAlign={this.onPopupAlign}
      >
        <div
          onClick={this.toggleSelect}
          className={classes}
          ref={this.selectDom}
        >
          <div title={label} className={prefixCls + '-text'}>
            {label}
          </div>
          <div className={prefixCls + '-icon'}>
            <Icon type="down" />
          </div>
        </div>
      </Trigger>
    );
  }
}

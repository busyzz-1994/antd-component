import React, { Component } from 'react';
import './style/index.scss';
import { getPrefix } from '../_util';
import classNames from 'classnames';
interface IProps {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (status: boolean) => void;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  disabled?: boolean;
}
interface IState {
  checked: boolean;
  clicked: boolean;
}
export default class extends Component<IProps, IState> {
  static defaultProps: Partial<IProps> = {
    defaultChecked: false,
    unCheckedChildren: '',
    checkedChildren: '',
    disabled: false
  };
  static getDerivedStateFromProps = nextProps => {
    if ('checked' in nextProps) {
      return {
        checked: nextProps.checked
      };
    }
    return null;
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked ? props.checked : props.defaultChecked,
      clicked: false
    };
  }
  onChange = () => {
    let { onChange } = this.props;
    let { checked, clicked } = this.state;
    if (onChange) {
      onChange(!checked);
    } else {
      this.setState({ checked: !checked });
    }
    this.setState({ clicked: true });
    setTimeout(() => {
      this.setState({ clicked: false });
    }, 300);
  };
  render() {
    const { checked, clicked } = this.state;
    const { unCheckedChildren, checkedChildren, disabled } = this.props;
    let prefixCls = getPrefix('switch');
    let classes = classNames(prefixCls, {
      [`${prefixCls}-checked`]: checked,
      clicked: clicked
    });
    let text = checked ? checkedChildren : unCheckedChildren;
    return (
      <div className={prefixCls + '-wrapper'}>
        <div onClick={this.onChange} className={classes}>
          <span className={prefixCls + '-text'}>{text}</span>
        </div>
        {disabled && <div className={prefixCls + '-mask'}></div>}
      </div>
    );
  }
}

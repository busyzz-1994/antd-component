import React, { Component } from 'react';
import Checkbox, { IProps } from './checkbox';
import omit from 'omit.js';
import { Omit } from '../_util';
interface OwnIProps extends Omit<IProps, 'onChange'> {
  options?: Array<string>;
  value?: Array<string>;
  onChange?: (value: Array<any>) => void;
}
export default class extends Component<OwnIProps> {
  static getDerivedStateFromProps = (nextProps, preState) => {
    return {
      value: nextProps.value
    };
  };
  state = {
    value: []
  };
  onChange = (e, item) => {
    let { value } = this.state;
    let { onChange } = this.props;
    let checked = e.target.checked;
    if (checked) {
      value.push(item);
    } else {
      value = value.filter(name => name !== item);
    }
    onChange && onChange(value);
    console.log(value);
  };
  renderGroup = () => {
    let { options, ...rest } = this.props;
    let { value } = this.state;
    console.log(value);
    let isChecked = item => {
      return value.indexOf(item) !== -1;
    };
    return (
      <div>
        {options.map((item, index) => {
          return (
            <Checkbox
              {...rest}
              checked={isChecked(item)}
              onChange={e => this.onChange(e, item)}
              key={index}
            >
              {item}
            </Checkbox>
          );
        })}
      </div>
    );
  };
  render() {
    return this.renderGroup();
  }
}

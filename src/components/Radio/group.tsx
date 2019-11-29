import React, { Component, createContext } from 'react';
import { getPrefix } from '../utils';
import classNames from 'classnames';
export const RadioContext = createContext({
  disabled: false,
  defaultValue: null,
  value: undefined,
  size: 'default',
  onchange: val => val
});
interface IProps {
  value?: any;
  defaultValue?: any;
  disabled?: boolean;
  size?: 'large' | 'default' | 'small';
  onChange?: (e: any) => any;
}

export default class extends Component<IProps> {
  render() {
    let { onChange, disabled, defaultValue, value, size } = this.props;
    return (
      <RadioContext.Provider
        //@ts-ignore
        value={{ disabled, defaultValue, value, size, onChange }}
      >
        <div>{this.props.children}</div>
      </RadioContext.Provider>
    );
  }
}

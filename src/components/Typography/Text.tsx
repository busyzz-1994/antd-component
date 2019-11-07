import React, { Component } from 'react';
import Base, { BaseProps } from './Base';
interface TextProps extends BaseProps {}
const Text: React.SFC<TextProps> = ({ children, ...rest }) => {
  return <Base {...rest}>{children}</Base>;
};
export default Text;

import React, { Component } from 'react';
import Base, { BaseProps } from './Base';
interface ParagraphProps extends BaseProps {}
const Paragraph: React.SFC<ParagraphProps> = ({ children, ...rest }) => {
  return (
    <Base {...rest} component="div">
      {children}
    </Base>
  );
};
export default Paragraph;

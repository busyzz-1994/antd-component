import { Box, BoxProps } from 'box-react';
import React, { Component } from 'react';

const mediaQueries = {
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1312px)'
};

interface ContainerProps extends BoxProps {}
/**
 * 带 MediaQuery 功能的容器
 *
 * <Container width={200} height={200} backgroundColor="red" smBackgroundColor="green" mdBackgroundColor="blue" lgBackgroundColor="purple"/>
 *
 */
export default class Container extends Component<ContainerProps> {
  render() {
    return <Box mediaQueries={mediaQueries} {...this.props} />;
  }
}

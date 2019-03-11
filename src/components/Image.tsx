import { Box, BoxProps } from 'box-react';
import React, { Component } from 'react';

const webpSupported = (function() {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp', 1).substring(5, 15) === 'image/webp';
})();

interface ImageProps extends BoxProps {
  src: string;
  webp?: string;
  contain?: any;
  cover?: boolean;
  fit?: boolean;
  repeat?: boolean;
}
/**
 * 图片组件 可选支持 webp
 */
export default class Image extends Component<ImageProps> {
  static webpSupported = webpSupported;
  render() {
    let {
      src,
      webp,
      contain = false,
      cover = false,
      fit = false,
      repeat = false,
      ...others
    } = this.props;
    return (
      <Box
        role="img"
        width="100%"
        height="100%"
        backgroundPosition="center"
        {...others}
        backgroundRepeat={repeat ? 'repeat' : 'no-repeat'}
        backgroundSize={
          contain ? 'contain' : cover ? 'cover' : fit ? '100% 100%' : 'unset'
        }
        backgroundImage={`url('${webpSupported ? webp || src : src}')`}
      />
    );
  }
}

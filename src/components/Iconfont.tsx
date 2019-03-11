import { Box, BoxProps } from 'box-react';
import React from 'react';

/**
 * 图标组件 图标来自 (https://www.iconfont.cn/)
 */
interface IconfontProps extends BoxProps {
  size?: number;
  path?: string;
  sourceWidth?: number;
  sourceHeight?: number;
  sourceSize?: number;
}
const Iconfont: React.SFC<IconfontProps> = ({
  width,
  height,
  size = 16,
  path,
  sourceWidth,
  sourceHeight,
  sourceSize = 1024,
  ...props
}) => {
  const iconWidth = width || height || size;
  const iconHeight = height || width || size;

  const iconSourceWidth = sourceWidth || sourceHeight || sourceSize;
  const iconSourceHeight = sourceHeight || sourceWidth || sourceSize;

  return (
    <Box
      is="svg"
      role="img"
      width={iconWidth}
      height={iconHeight}
      viewBox={`0 0 ${iconSourceWidth} ${iconSourceHeight}`}
      fill="currentColor"
      strokeWidth={0}
      verticalAlign="middle"
      {...props}
    >
      <path d={path} />
    </Box>
  );
};
Iconfont.defaultProps = {
  path: 'M0 0L1024 0L1024 1024L0 1024z'
};

export default Iconfont;

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
// import { useKey } from 'react-use';
import {
  useRafState,
  useInterval,
  useTimeout,
  useForceUpdate,
  useRaf,
  useScrollToTop
} from 'hooks';
import { debounce } from 'hooks/_utils';
interface IProps {
  id?: string;
}
export default () => {
  let scrollToTop = useScrollToTop();
  return (
    <div>
      {/* {progress} */}
      <div style={{ height: 2000 }}>00</div>
      <Button onClick={scrollToTop}>pppp</Button>
    </div>
  );
};

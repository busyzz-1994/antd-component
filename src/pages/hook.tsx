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
  // let progress = useRaf(2000);
  let start = useScrollToTop();
  console.log('iii');
  return (
    <div>
      {/* {progress} */}
      <div style={{ height: 2000 }}>00</div>
      <Button onClick={start}>pppp</Button>
    </div>
  );
};

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
// import { useKey } from 'react-use';
import {
  useRafState,
  useInterval,
  useTimeout,
  useForceUpdate,
  useRaf,
  useScrollToTop,
  useToggle
} from 'hooks';
import { debounce } from 'hooks/_utils';
interface IProps {
  id?: string;
}
export default () => {
  let [status, toggle] = useToggle('no', 'ok');
  return (
    <div>
      {/* {progress} */}
      <div>{status + ''}</div>
      <Button onClick={() => toggle()}>pppp</Button>
    </div>
  );
};

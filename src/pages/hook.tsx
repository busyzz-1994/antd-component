import React, { useCallback, useRef, useState } from 'react';
import { Button } from 'antd';
// import { useKey } from 'react-use';
import { useHover, useKey } from 'hooks';
interface IProps {
  id?: string;
}
export default () => {
  const [count, setCount] = useState(0);
  const add = e => {
    setCount(count => ++count);
  };
  const reduce = e => {
    setCount(count => --count);
  };
  useKey('arrowdown', reduce);
  useKey('arrowup', add);
  useKey('arrowleft', add);
  useKey('arrowright', add);
  return (
    <div>
      <div>{count}</div>
    </div>
  );
};

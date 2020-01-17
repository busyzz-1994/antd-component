import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
// import { useKey } from 'react-use';
import { useRafState, useInterval, useTimeout, useForceUpdate } from 'hooks';
import { debounce } from 'hooks/_utils';
interface IProps {
  id?: string;
}
export default () => {
  const [count, setCount] = useState(0);
  const update = useForceUpdate();
  console.log(count);
  return (
    <div>
      <div>count:{count}</div>
      <Button onClick={update}>toggle</Button>
    </div>
  );
};

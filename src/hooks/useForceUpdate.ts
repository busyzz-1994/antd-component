/*
 * @Author: busyzz
 * @Date: 2020-01-17 18:01:51
 * @Description:
 */
import { useState } from 'react';
const useForceUpdate = () => {
  const [, setState] = useState(0);
  const update = () => {
    setState(count => ++count);
  };
  return update;
};
export default useForceUpdate;

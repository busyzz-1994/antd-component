/*
 * @Author: busyzz
 * @Date: 2020-01-17 14:16:14
 * @Description:
 */
import useEvent from './useEvent';
import { useCallback } from 'react';
type KeyType = 'keydown' | 'keyup' | 'keypress';
const noop = () => {};
const useKey = (
  key: string,
  fn: (e: KeyboardEvent) => void = noop,
  keyType: KeyType = 'keydown'
) => {
  const filterFn = useCallback(
    e => {
      let currentKey = e.key;
      if (key.toLocaleLowerCase() === currentKey.toLocaleLowerCase()) {
        fn(e);
      }
    },
    [key, keyType]
  );
  useEvent(keyType, filterFn);
};
export default useKey;

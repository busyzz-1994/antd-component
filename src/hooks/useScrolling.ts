/*
 * @Author: busyzz
 * @Date: 2020-01-17 15:08:17
 * @Description:
 */
import { useEffect, useState, RefObject } from 'react';
import { isRef } from './_utils';
const useScrolling = (
  target: Window | RefObject<HTMLElement> = window
): boolean => {
  const [status, setStatus] = useState<boolean>(false);
  useEffect(() => {
    let dom = target as HTMLElement | Window;
    if (isRef(target)) dom = target.current;
    let timer = null;
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const fn = () => {
      setStatus(true);
      clearTimer();
      timer = setTimeout(() => {
        setStatus(false);
      }, 150);
    };
    dom.addEventListener('scroll', fn);
    return () => {
      clearTimer();
      dom.removeEventListener('scroll', fn);
    };
  }, []);
  return status;
};
export default useScrolling;

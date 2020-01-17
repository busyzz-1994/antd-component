/*
 * @Author: busyzz
 * @Date: 2020-01-17 17:45:10
 * @Description:
 */
import { useEffect, useRef } from 'react';
const useTimeout = (func: () => void, delay: null | number) => {
  let timeRef = useRef(null);
  const clearTimer = () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
  };
  useEffect(() => {
    clearTimer();
    if (delay !== null) {
      timeRef.current = setTimeout(() => {
        func();
      }, delay);
    }
    return () => {
      clearTimer();
    };
  }, [delay]);
};
export default useTimeout;

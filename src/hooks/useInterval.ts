/*
 * @Author: busyzz
 * @Date: 2020-01-17 17:20:37
 * @Description:
 */
import { useRef, useEffect } from 'react';
const useInterval = (func: () => void, isRun: number | null) => {
  let timeRef = useRef(null);
  const clearTimer = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }
  };
  useEffect(() => {
    clearTimer();
    if (isRun !== null) {
      timeRef.current = setInterval(() => {
        func();
      }, isRun);
    }
    return () => {
      clearTimer();
    };
  }, [isRun]);
};
export default useInterval;

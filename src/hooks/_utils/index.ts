/*
 * @Author: busyzz
 * @Date: 2020-01-17 15:09:50
 * @Description:
 */
import { RefObject } from 'react';
export const isRef = (target): target is RefObject<HTMLElement> => {
  return !!target.current;
};
export const debounce = (func, delay: number = 500) => {
  let prevTime = null;
  let timer = null;
  return (...args) => {
    let currentTime = Date.now();
    if (!prevTime) prevTime = currentTime;
    let diffTime = currentTime - prevTime;
    prevTime = currentTime;
    if (diffTime < delay) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

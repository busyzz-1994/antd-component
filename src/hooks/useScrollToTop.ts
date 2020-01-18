/*
 * @Author: busyzz
 * @Date: 2020-01-17 15:39:25
 * @Description:
 * @return 返回一个开始执行的函数
 */
import { useState, RefObject, useEffect } from 'react';
import useRaf from './useRaf';
import { isRef } from './_utils';
const useScrollToTop = (
  target: Window | RefObject<HTMLElement> = window,
  duration: number = 300
) => {
  //开启raf, false->关闭 ， 0->开始
  const [rafStatus, setRafStatus] = useState<boolean | number>(false);
  //滚动距离
  const [distance, setDistance] = useState<number>(0);
  const progress = useRaf(duration, rafStatus);
  const dispatch = () => {
    setRafStatus(0);
  };
  const getDistance = () => {
    if (isRef(target)) {
      setDistance(target.current.scrollTop);
    } else {
      let _distance =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      setDistance(_distance);
    }
  };
  //计算scrollTop
  useEffect(() => {
    getDistance();
    let dom = null as HTMLElement | Window;
    if (isRef(target)) {
      dom = target.current;
    } else {
      dom = window;
    }
    const _setDistance = () => {
      getDistance();
    };
    dom.addEventListener('scroll', _setDistance);
    return () => {
      if (dom) {
        dom.removeEventListener('scroll', _setDistance);
      }
    };
  }, []);
  //修改scrollTop
  useEffect(() => {
    let currentDistance = distance * (1 - progress);
    if (isRef(target)) {
      target.current.scrollTop = currentDistance;
    } else {
      if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = currentDistance;
      } else if (document.body.scrollTop) {
        document.body.scrollTop = currentDistance;
      }
    }
    if (progress === 1) {
      setRafStatus(false);
    }
  }, [progress]);
  return dispatch;
};
export default useScrollToTop;

/*
 * @Author: busyzz
 * @Date: 2020-01-16 15:53:08
 * @Description:
 */
import { useState, useEffect, RefObject } from 'react';
export default (node: RefObject<HTMLElement>) => {
  const [rect, setRect] = useState<ClientRect>({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  useEffect(() => {
    function getRect() {
      if (node.current) {
        let rect = node.current.getBoundingClientRect();
        setRect(rect);
      }
    }
    getRect();
    window.addEventListener('scroll', getRect);
    window.addEventListener('resize', getRect);
    return () => {
      window.removeEventListener('scroll', getRect);
      window.removeEventListener('resize', getRect);
    };
  }, []);
  return rect;
};

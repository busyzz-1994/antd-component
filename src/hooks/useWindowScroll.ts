/*
 * @Author: busyzz
 * @Date: 2020-01-16 15:53:08
 * @Description:
 */
import { useState, useEffect } from 'react';
export default () => {
  const [posi, setPosi] = useState<{ x: number; y: number }>({
    x: Infinity,
    y: Infinity
  });
  useEffect(() => {
    function getScroll() {
      let x = window.pageXOffset,
        y = window.pageYOffset;
      setPosi({ x, y });
    }
    getScroll();
    window.addEventListener('scroll', getScroll);
    return () => {
      window.removeEventListener('scroll', getScroll);
    };
  }, []);
  return [posi.x, posi.y];
};

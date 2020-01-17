/*
 * @Author: busyzz
 * @Date: 2020-01-16 15:53:08
 * @Description:
 */
import { useState, useEffect } from 'react';
export default () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: Infinity,
    height: Infinity
  });
  useEffect(() => {
    function getSize() {
      let height = window.innerHeight,
        width = window.innerWidth;
      setSize({ height, width });
    }
    getSize();
    window.addEventListener('resize', getSize);
    return () => {
      window.removeEventListener('resize', getSize);
    };
  }, []);
  return [size.width, size.height];
};

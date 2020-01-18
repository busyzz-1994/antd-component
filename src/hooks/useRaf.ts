/*
 * @Author: busyzz
 * @Date: 2020-01-17 15:39:25
 * @Description:
 * @return 执行的进度
 */
import { useEffect, useState } from 'react';
const useRaf = (
  duration: number = 1000,
  delay: number | boolean = 0
): number => {
  let [progress, setProgress] = useState(0);
  useEffect(() => {
    if (delay === false) return;
    let startTime = Date.now();
    let raf = null,
      delayTimer = null,
      cleanTimer = null;
    const loop = () => {
      let currentTime = Date.now();
      let _progress = Math.min(1, (currentTime - startTime) / duration);
      setProgress(_progress);
      raf = requestAnimationFrame(loop);
    };
    //延迟delay 开始
    delayTimer = setTimeout(() => {
      cleanTimer = setTimeout(() => {
        cancelAnimationFrame(raf);
        setProgress(1);
      }, duration);
      startTime = Date.now();
      raf = requestAnimationFrame(loop);
    }, delay as number);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(delayTimer);
      clearTimeout(cleanTimer);
    };
  }, [duration, delay]);
  return progress;
};
export default useRaf;
